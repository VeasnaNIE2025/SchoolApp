import React, { useState } from "react";

export default function AssignmentForm() {

  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbxpfLd-waq63udUdloVTOMxWanaqRSgvzSONStm_LjGnS7bkDgNDL60myrT-95AE1r-AA/exec";

  const [className, setClassName] = useState("");
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [studentNo, setStudentNo] = useState("");

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ============================
  // ជ្រើសថ្នាក់
  // ============================

  const handleClassChange = async (e) => {

    const cls = e.target.value;

    setClassName(cls);
    setStudentName("");
    setStudentNo("");
    setStudents([]);

    if (!cls) return;

    try {

      const res = await fetch(
        `${WEB_APP_URL}?action=getStudents&sheet=${cls}`
      );

      const data = await res.json();

      setStudents(data);

    } catch (err) {

      console.log(err);

      setMessage("មិនអាចទាញបញ្ជីសិស្សបាន");

    }

  };

  // ============================
  // ជ្រើសឈ្មោះសិស្ស
  // ============================

  const handleStudentChange = (e) => {

    const name = e.target.value;

    setStudentName(name);

    const student = students.find(
      (item) => item.name === name
    );

    if (student) {

      setStudentNo(student.no);

    } else {

      setStudentNo("");

    }

  };

  // ============================
  // File
  // ============================

  const handleFileChange = (e) => {

    const selected = e.target.files[0];

    if (!selected) return;

    const ext = selected.name
      .split(".")
      .pop()
      .toLowerCase();

    if (ext !== "doc" && ext !== "docx") {

      alert("សូមជ្រើស Word File");

      e.target.value = "";

      return;

    }

    setFile(selected);

  };

  // ============================
  // Submit
  // ============================

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !className ||
      !studentName ||
      !studentNo ||
      !file
    ) {

      alert("សូមបំពេញព័ត៌មានឱ្យគ្រប់");

      return;

    }

    setLoading(true);

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = async () => {

      const payload = {

        className,

        studentName,

        studentNo,

        fileName:
          `${studentNo}_${studentName}_${className}_${file.name}`,

        file: reader.result,

      };

      try {

        const res = await fetch(WEB_APP_URL, {

          method: "POST",

          headers: {

            "Content-Type":
              "text/plain;charset=utf-8",

          },

          body: JSON.stringify(payload),

        });

        const result = await res.json();

        if (result.status === "success") {

          alert("Upload Success");

          setClassName("");
          setStudents([]);
          setStudentName("");
          setStudentNo("");
          setFile(null);

          document.getElementById("file").value = "";

        } else {

          alert(result.message);

        }

      } catch (err) {

        alert(err);

      }

      setLoading(false);

    };

  };

  return (

    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold text-center mb-6">

        ប្រព័ន្ធប្រគល់កិច្ចការ

      </h2>

      <form onSubmit={handleSubmit}>

        {/* ថ្នាក់ */}

        <label className="font-semibold">

          ថ្នាក់

        </label>

        <select
          className="w-full border p-2 rounded mt-2 mb-4"
          value={className}
          onChange={handleClassChange}
        >

          <option value="">-- ជ្រើសថ្នាក់ --</option>

          <option value="10A">10A</option>
          <option value="10B">10B</option>
          <option value="10C">10C</option>
          <option value="10D">10D</option>
          <option value="10E">10E</option>
          <option value="10F">10F</option>
          <option value="11B">11B</option>
          <option value="11E">11E</option>

        </select>

        {/* សិស្ស */}

        <label className="font-semibold">

          ឈ្មោះសិស្ស

        </label>

        <select
          className="w-full border p-2 rounded mt-2 mb-4"
          value={studentName}
          onChange={handleStudentChange}
        >

          <option value="">

            -- ជ្រើសសិស្ស --

          </option>

          {students.map((st) => (

            <option
              key={st.no}
              value={st.name}
            >

              {st.name}

            </option>

          ))}

        </select>

        {/* លេខរៀង */}

        <label className="font-semibold">

          លេខរៀង

        </label>

        <input
          className="w-full border p-2 rounded mt-2 mb-4 bg-gray-100"
          value={studentNo}
          readOnly
        />

        {/* Upload */}

        <label className="font-semibold">

          Word File

        </label>

        <input
          id="file"
          type="file"
          accept=".doc,.docx"
          className="w-full border p-2 rounded mt-2 mb-4"
          onChange={handleFileChange}
        />

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
          disabled={loading}
        >

          {loading
            ? "កំពុងបញ្ជូន..."
            : "បញ្ជូនកិច្ចការ"}

        </button>

      </form>

      <p className="text-center text-red-500 mt-4">

        {message}

      </p>

    </div>

  );

}