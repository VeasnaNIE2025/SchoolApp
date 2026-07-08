// import React, { useState } from "react";

// export default function AssignmentForm() {

//   const WEB_APP_URL =
//     "https://script.google.com/macros/s/AKfycbxpfLd-waq63udUdloVTOMxWanaqRSgvzSONStm_LjGnS7bkDgNDL60myrT-95AE1r-AA/exec";

//   const [className, setClassName] = useState("");
//   const [students, setStudents] = useState([]);
//   const [studentName, setStudentName] = useState("");
//   const [studentNo, setStudentNo] = useState("");

//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   // ============================
//   // ជ្រើសថ្នាក់
//   // ============================

//   const handleClassChange = async (e) => {

//     const cls = e.target.value;

//     setClassName(cls);
//     setStudentName("");
//     setStudentNo("");
//     setStudents([]);

//     if (!cls) return;

//     try {

//       const res = await fetch(
//         `${WEB_APP_URL}?action=getStudents&sheet=${cls}`
//       );

//       const data = await res.json();

//       setStudents(data);

//     } catch (err) {

//       console.log(err);

//       setMessage("មិនអាចទាញបញ្ជីសិស្សបាន");

//     }

//   };

//   // ============================
//   // ជ្រើសឈ្មោះសិស្ស
//   // ============================

//   const handleStudentChange = (e) => {

//     const name = e.target.value;

//     setStudentName(name);

//     const student = students.find(
//       (item) => item.name === name
//     );

//     if (student) {

//       setStudentNo(student.no);

//     } else {

//       setStudentNo("");

//     }

//   };

//   // ============================
//   // File
//   // ============================

//   const handleFileChange = (e) => {

//     const selected = e.target.files[0];

//     if (!selected) return;

//     const ext = selected.name
//       .split(".")
//       .pop()
//       .toLowerCase();

//     if (ext !== "doc" && ext !== "docx") {

//       alert("សូមជ្រើស Word File");

//       e.target.value = "";

//       return;

//     }

//     setFile(selected);

//   };

//   // ============================
//   // Submit
//   // ============================

//   const handleSubmit = (e) => {

//     e.preventDefault();

//     if (
//       !className ||
//       !studentName ||
//       !studentNo ||
//       !file
//     ) {

//       alert("សូមបំពេញព័ត៌មានឱ្យគ្រប់");

//       return;

//     }

//     setLoading(true);

//     const reader = new FileReader();

//     reader.readAsDataURL(file);

//     reader.onloadend = async () => {

//       const payload = {

//         className,

//         studentName,

//         studentNo,

//         fileName:
//           `${studentNo}_${studentName}_${className}_${file.name}`,

//         file: reader.result,

//       };

//       try {

//         const res = await fetch(WEB_APP_URL, {

//           method: "POST",

//           headers: {

//             "Content-Type":
//               "text/plain;charset=utf-8",

//           },

//           body: JSON.stringify(payload),

//         });

//         const result = await res.json();

//         if (result.status === "success") {

//           alert("Upload Success");

//           setClassName("");
//           setStudents([]);
//           setStudentName("");
//           setStudentNo("");
//           setFile(null);

//           document.getElementById("file").value = "";

//         } else {

//           alert(result.message);

//         }

//       } catch (err) {

//         alert(err);

//       }

//       setLoading(false);

//     };

//   };

//   return (

//     <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">

//       <h2 className="text-2xl font-bold text-center mb-6">

//         ប្រព័ន្ធប្រគល់កិច្ចការ

//       </h2>

//       <form onSubmit={handleSubmit}>

//         {/* ថ្នាក់ */}

//         <label className="font-semibold">

//           ថ្នាក់

//         </label>

//         <select
//           className="w-full border p-2 rounded mt-2 mb-4"
//           value={className}
//           onChange={handleClassChange}
//         >

//           <option value="">-- ជ្រើសថ្នាក់ --</option>

//           <option value="10A">10A</option>
//           <option value="10B">10B</option>
//           <option value="10C">10C</option>
//           <option value="10D">10D</option>
//           <option value="10E">10E</option>
//           <option value="10F">10F</option>
//           <option value="11B">11B</option>
//           <option value="11E">11E</option>

//         </select>

//         {/* សិស្ស */}

//         <label className="font-semibold">

//           ឈ្មោះសិស្ស

//         </label>

//         <select
//           className="w-full border p-2 rounded mt-2 mb-4"
//           value={studentName}
//           onChange={handleStudentChange}
//         >

//           <option value="">

//             -- ជ្រើសសិស្ស --

//           </option>

//           {students.map((st) => (

//             <option
//               key={st.no}
//               value={st.name}
//             >

//               {st.name}

//             </option>

//           ))}

//         </select>

//         {/* លេខរៀង */}

//         <label className="font-semibold">

//           លេខរៀង

//         </label>

//         <input
//           className="w-full border p-2 rounded mt-2 mb-4 bg-gray-100"
//           value={studentNo}
//           readOnly
//         />

//         {/* Upload */}

//         <label className="font-semibold">

//           Word File

//         </label>

//         <input
//           id="file"
//           type="file"
//           accept=".doc,.docx"
//           className="w-full border p-2 rounded mt-2 mb-4"
//           onChange={handleFileChange}
//         />

//         <button
//           className="w-full bg-blue-600 text-white py-3 rounded-lg"
//           disabled={loading}
//         >

//           {loading
//             ? "កំពុងបញ្ជូន..."
//             : "បញ្ជូនកិច្ចការ"}

//         </button>

//       </form>

//       <p className="text-center text-red-500 mt-4">

//         {message}

//       </p>

//     </div>

//   );

// }
import React, { useState } from "react";
import "../../index.css";
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

  // State សម្រាប់គ្រប់គ្រង Modal ជោគជ័យ
  const [showModal, setShowModal] = useState(false);

  // ============================
  // ជ្រើសថ្នាក់
  // ============================
  const handleClassChange = async (e) => {
    const cls = e.target.value;
    setClassName(cls);
    setStudentName("");
    setStudentNo("");
    setStudents([]);
    setMessage("");

    if (!cls) return;

    try {
      const res = await fetch(`${WEB_APP_URL}?action=getStudents&sheet=${cls}`);
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.log(err);
      setMessage("❌ មិនអាចទាញបញ្ជីសិស្សបានទេ");
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
  // File Change
  // ============================
  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    const ext = selected.name.split(".").pop().toLowerCase();
    if (ext !== "doc" && ext !== "docx") {
      alert("សូមជ្រើសរើសឯកសារ Word (.doc, .docx)");
      e.target.value = "";
      return;
    }
    setFile(selected);
  };

  // ============================
  // Submit Form
  // ============================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!className || !studentName || !studentNo || !file) {
      alert("សូមបំពេញព័ត៌មានឱ្យបានគ្រប់ជ្រុងជ្រោយ");
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
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(payload),
        });

        const result = await res.json();

        if (result.status === "success") {
          // បង្ហាញ Modal ជោគជ័យ
          setShowModal(true);

          // Reset Form States
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
        alert("មានបញ្ហាពេលផ្ញើ៖ " + err.message);
      }
      setLoading(false);
    };
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 antialiased font-sans">
      {/* FORM CARD */}
      <div className="w-full max-w-lg bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 transform transition-all">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800 tracking-wide mb-2">
            ប្រព័ន្ធប្រគល់កិច្ចការ
          </h2>
          <p class="text-slate-500 text-sm">សូមបំពេញព័ត៌មាន និងផ្ទុកឡើងកិច្ចការរបស់អ្នក</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* ថ្នាក់ */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">ថ្នាក់</label>
            <select
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 cursor-pointer"
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
          </div>

          {/* សិស្ស */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">ឈ្មោះសិស្ស</label>
            <select
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 cursor-pointer"
              value={studentName}
              onChange={handleStudentChange}
              disabled={students.length === 0}
            >
              <option value="">-- ជ្រើសសិស្ស --</option>
              {students.map((st) => (
                <option key={st.no} value={st.name}>
                  {st.name}
                </option>
              ))}
            </select>
          </div>

          {/* លេខរៀង */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">លេខរៀង</label>
            <input
              className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-2xl text-slate-500 focus:outline-none cursor-not-allowed font-medium"
              value={studentNo}
              readOnly
              placeholder="បង្ហាញស្វ័យប្រវត្ត"
            />
          </div>

          {/* Upload */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">ឯកសារកិច្ចការ (Word File)</label>
            <input
              id="file"
              type="file"
              accept=".doc,.docx"
              className="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 border border-slate-200 bg-slate-50 p-2 rounded-2xl cursor-pointer"
              onChange={handleFileChange}
            />
          </div>

          {/* ប៊ូតុង ផ្ញើ */}
          <button
            className={`w-full py-3.5 mt-4 text-white font-semibold rounded-2xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2
              ${loading 
                ? "bg-indigo-400 cursor-not-allowed" 
                : "bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-indigo-500/20 hover:shadow-indigo-500/30 transform hover:-translate-y-0.5"
              }`}
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>កំពុងបញ្ជូន...</span>
              </>
            ) : (
              <span>បញ្ជូនកិច្ចការ</span>
            )}
          </button>
        </form>

        {message && (
          <p className="text-center text-sm font-medium text-rose-500 mt-4 animate-pulse">
            {message}
          </p>
        )}
      </div>

      {/* MODERN SUCCESS MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300">
          {/* Backdrop ខ្មៅស្រអាប់ស្អាត */}
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>
          
          {/* ប្រអប់ Modal */}
          <div className="bg-white w-full max-w-sm p-6 rounded-3xl shadow-2xl relative z-10 transform scale-100 transition-all text-center animate-in fade-in zoom-in-95 duration-200">
            {/* Success Icon */}
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-2">បញ្ជូនជោគជ័យ!</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              កិច្ចការរបស់អ្នកត្រូវបានផ្ញើទៅកាន់ Google Sheet រួចរាល់ហើយ។
            </p>
            
            {/* ប៊ូតុងបិទ */}
            <button 
              onClick={() => setShowModal(false)} 
              className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors duration-200"
            >
              យល់ព្រម
            </button>
          </div>
        </div>
      )}
    </div>
  );
}