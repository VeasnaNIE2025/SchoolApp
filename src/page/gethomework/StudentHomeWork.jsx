import React, { useState, useEffect } from "react";

export default function AssignmentForm() {
  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbxpfLd-waq63udUdloVTOMxWanaqRSgvzSONStm_LjGnS7bkDgNDL60myrT-95AE1r-AA/exec";

  const classList = ["10A", "10B", "10C", "10D", "10E", "10F", "11B", "11E"];

  // ==== Submit form states ====
  const [className, setClassName] = useState("");
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [studentNo, setStudentNo] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ==== Modal state ====
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  // ==== Overview (table + filter) states ====
  const [viewClass, setViewClass] = useState("");
  const [overview, setOverview] = useState([]);
  const [overviewLoading, setOverviewLoading] = useState(false);

  // ============================
  // ទាញទិន្នន័យតារាង Overview
  // ============================
  const loadOverview = async (cls) => {
    setOverviewLoading(true);
    try {
      const url = cls
        ? `${WEB_APP_URL}?action=getOverview&sheet=${cls}`
        : `${WEB_APP_URL}?action=getOverview`;

      const res = await fetch(url);
      const data = await res.json();
      setOverview(Array.isArray(data) ? data : []);
    } catch (err) {
      console.log(err);
      setOverview([]);
    }
    setOverviewLoading(false);
  };

  useEffect(() => {
    loadOverview(viewClass);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewClass]);

  // ============================
  // ជ្រើសថ្នាក់ (សម្រាប់ Form)
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

    const student = students.find((item) => item.name === name);
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

    const ext = selected.name.split(".").pop().toLowerCase();
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

    if (!className || !studentName || !studentNo || !file) {
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
        fileName: `${studentNo}_${studentName}_${className}_${file.name}`,
        file: reader.result,
      };

      try {
        const res = await fetch(WEB_APP_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
        });

        const result = await res.json();

        if (result.status === "success") {
          setModalData({
            className,
            studentName,
            studentNo,
            url: result.url,
          });
          setShowModal(true);

          setClassName("");
          setStudents([]);
          setStudentName("");
          setStudentNo("");
          setFile(null);
          document.getElementById("file").value = "";

          loadOverview(viewClass);
        } else {
          alert(result.message);
        }
      } catch (err) {
        alert(err);
      }
      setLoading(false);
    };
  };

  const closeModal = () => {
    setShowModal(false);
    setModalData(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* ============ VIEW / OVERVIEW SECTION ============ */}
        <div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg border border-slate-100">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span className="text-2xl">📋</span>
              តាមដានការបញ្ជូនកិច្ចការ
            </h2>
            <span className="text-xs text-slate-400">
              {overview.length} កំណត់ត្រា
            </span>
          </div>

          <label className="text-sm font-semibold text-slate-600">ត្រងតាមថ្នាក់</label>
          <select
            className="w-full border border-slate-200 bg-slate-50 p-2.5 rounded-lg mt-2 mb-5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={viewClass}
            onChange={(e) => setViewClass(e.target.value)}
          >
            <option value="">-- ថ្នាក់ទាំងអស់ --</option>
            {classList.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <div className="overflow-x-auto rounded-xl border border-slate-100">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 text-left text-slate-600">
                  {!viewClass && <th className="p-3 font-semibold">ថ្នាក់</th>}
                  <th className="p-3 font-semibold">លេខរៀង</th>
                  <th className="p-3 font-semibold">ឈ្មោះ</th>
                  <th className="p-3 font-semibold">សកម្មភាព</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {overviewLoading ? (
                  <tr>
                    <td colSpan={4} className="text-center p-8">
                      <div className="flex items-center justify-center gap-2 text-slate-400">
                        <span className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></span>
                        កំពុងផ្ទុក...
                      </div>
                    </td>
                  </tr>
                ) : overview.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center p-8 text-slate-400">
                      មិនមានទិន្នន័យ
                    </td>
                  </tr>
                ) : (
                  overview.map((st, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition">
                      {!viewClass && (
                        <td className="p-3 text-slate-500">{st.className}</td>
                      )}
                      <td className="p-3 text-slate-700">{st.no}</td>
                      <td className="p-3 text-slate-700 font-medium">{st.name}</td>
                      <td className="p-3">
                        {st.submitted ? (
                          <a
                            href={st.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-green-100 transition"
                          >
                            ✅ បានបញ្ជូន
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1 bg-red-50 text-red-500 text-xs font-semibold px-3 py-1.5 rounded-full">
                            ❌ មិនទាន់បញ្ជូន
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ============ SUBMIT FORM SECTION ============ */}
        <div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg border border-slate-100">
          <h2 className="text-2xl font-bold text-center text-slate-800 mb-1">
            📥 ប្រព័ន្ធប្រគល់កិច្ចការ
          </h2>
          <p className="text-center text-slate-400 text-sm mb-6">
            សូមបំពេញព័ត៌មាន និងភ្ជាប់ឯកសារ Word របស់អ្នក
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* ថ្នាក់ */}
            <div>
              <label className="text-sm font-semibold text-slate-600">ថ្នាក់</label>
              <select
                className="w-full border border-slate-200 bg-slate-50 p-2.5 rounded-lg mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                value={className}
                onChange={handleClassChange}
              >
                <option value="">-- ជ្រើសថ្នាក់ --</option>
                {classList.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* សិស្ស */}
            <div>
              <label className="text-sm font-semibold text-slate-600">ឈ្មោះសិស្ស</label>
              <select
                className="w-full border border-slate-200 bg-slate-50 p-2.5 rounded-lg mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition disabled:opacity-50"
                value={studentName}
                onChange={handleStudentChange}
                disabled={!className}
              >
                <option value="">-- ជ្រើសសិស្ស --</option>
                {students.map((st) => (
                  <option key={st.no} value={st.name}>{st.name}</option>
                ))}
              </select>
            </div>

            {/* លេខរៀង */}
            <div>
              <label className="text-sm font-semibold text-slate-600">លេខរៀង</label>
              <input
                className="w-full border border-slate-200 bg-slate-100 text-slate-500 p-2.5 rounded-lg mt-2 text-sm"
                value={studentNo}
                readOnly
                placeholder="ស្វ័យប្រវត្តិកម្ម"
              />
            </div>

            {/* Upload */}
            <div>
              <label className="text-sm font-semibold text-slate-600">ឯកសារ Word</label>
              <label
                htmlFor="file"
                className="mt-2 flex items-center justify-center gap-2 w-full border-2 border-dashed border-slate-200 rounded-lg p-4 text-sm text-slate-500 cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition"
              >
                📎 {file ? file.name : "ចុចដើម្បីជ្រើសរើសឯកសារ (.doc / .docx)"}
              </label>
              <input
                id="file"
                type="file"
                accept=".doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              {loading ? "កំពុងបញ្ជូន..." : "បញ្ជូនកិច្ចការ"}
            </button>
          </form>

          {message && (
            <p className="text-center text-red-500 text-sm mt-4">{message}</p>
          )}
        </div>

      </div>

      {/* ============ SUCCESS MODAL ============ */}
      {showModal && modalData && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-7 w-80 text-center animate-[fadeIn_0.2s_ease-out]">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-50 flex items-center justify-center text-3xl">
              ✅
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-3">បញ្ជូនកិច្ចការជោគជ័យ!</h3>
            <div className="bg-slate-50 rounded-lg p-3 text-left space-y-1 mb-5">
              <p className="text-sm text-slate-600">
                <span className="text-slate-400">ថ្នាក់:</span> {modalData.className}
              </p>
              <p className="text-sm text-slate-600">
                <span className="text-slate-400">ឈ្មោះ:</span> {modalData.studentName}
              </p>
              <p className="text-sm text-slate-600">
                <span className="text-slate-400">លេខរៀង:</span> {modalData.studentNo}
              </p>
            </div>
            <button
              onClick={closeModal}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition"
            >
              បិទ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}