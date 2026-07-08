import React, { useState, useRef } from "react";
// Import useNavigate ដើម្បីធ្វើការផ្លាស់ប្តូរទំព័រ
import { useNavigate } from "react-router-dom";

export default function AssignmentForm() {
  const navigate = useNavigate();

  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbxpfLd-waq63udUdloVTOMxWanaqRSgvzSONStm_LjGnS7bkDgNDL60myrT-95AE1r-AA/exec";

  const CLASSES = ["10A", "10B", "10C", "10D", "10E", "10F", "11B", "11E"];

  const [className, setClassName] = useState("");
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [studentNo, setStudentNo] = useState("");
  const [studentsLoading, setStudentsLoading] = useState(false);

  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [listError, setListError] = useState("");

  // modal: { open, status: 'success' | 'error', title, text, url }
  const [modal, setModal] = useState({ open: false });

  const fileInputRef = useRef(null);

  const handleClassChange = async (e) => {
    const cls = e.target.value;

    setClassName(cls);
    setStudentName("");
    setStudentNo("");
    setStudents([]);
    setListError("");

    if (!cls) return;

    setStudentsLoading(true);

    try {
      const res = await fetch(`${WEB_APP_URL}?action=getStudents&sheet=${cls}`);
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.log(err);
      setListError("មិនអាចទាញបញ្ជីសិស្សបាន សូមព្យាយាមម្តងទៀត");
    } finally {
      setStudentsLoading(false);
    }
  };

  const handleStudentChange = (e) => {
    const name = e.target.value;
    setStudentName(name);

    const student = students.find((item) => item.name === name);
    setStudentNo(student ? student.no : "");
  };

  const applyFile = (selected) => {
    if (!selected) return;

    const ext = selected.name.split(".").pop().toLowerCase();

    if (ext !== "doc" && ext !== "docx") {
      setModal({
        open: true,
        status: "error",
        title: "ប្រភេទឯកសារមិនត្រឹមត្រូវ",
        text: "សូមជ្រើសរើសឯកសារ Word (.doc ឬ .docx) ប៉ុណ្ណោះ។",
      });
      return;
    }

    setFile(selected);
  };

  const handleFileChange = (e) => {
    applyFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    applyFile(e.dataTransfer.files[0]);
  };

  const formatSize = (bytes) => {
    if (!bytes && bytes !== 0) return "";
    const kb = bytes / 1024;
    return kb > 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${kb.toFixed(0)} KB`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!className || !studentName || !studentNo || !file) {
      setModal({
        open: true,
        status: "error",
        title: "ព័ត៌មានមិនគ្រប់គ្រាន់",
        text: "សូមបំពេញថ្នាក់ ឈ្មោះសិស្ស និងភ្ជាប់ឯកសារឱ្យបានគ្រប់ជាមុនសិន។",
      });
      return;
    }

    setLoading(true);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const submittedClass = className;

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
          setModal({
            open: true,
            status: "success",
            title: "ទទួលបានកិច្ចការហើយ!",
            text: `${studentName} (លេខ ${studentNo}) ថ្នាក់ ${className}`,
            submittedClass: submittedClass,
          });

          setClassName("");
          setStudents([]);
          setStudentName("");
          setStudentNo("");
          setFile(null);
          if (fileInputRef.current) fileInputRef.current.value = "";
        } else {
          setModal({
            open: true,
            status: "error",
            title: "បញ្ជូនមិនបានសម្រេច",
            text: result.message || "មានបញ្ហាបច្ចេកទេសកើតឡើង។",
          });
        }
      } catch (err) {
        setModal({
          open: true,
          status: "error",
          title: "បញ្ជូនមិនបានសម្រេច",
          text: String(err),
        });
      }

      setLoading(false);
    };
  };

  const closeModal = () => setModal({ open: false });

  return (
    <div className="af-root min-h-screen flex items-center justify-center px-4 py-10">
      <style>{`
        .af-root {
          --ink: #1b2a4a;
          --paper: #fbf9f4;
          --chalkboard: #eef1f5;
          --chalkboard-2: #e2e6ee;
          --rule: #b9cbe6;
          --margin: #c1443d;
          --gold: #b8863b;
          --gold-dark: #93692b;
          --green: #2f7a4f;
          --surface: rgba(255,255,255,0.7);
          --surface-strong: #ffffff;
          --border: #d8ccb0;
          --muted: #6b7280;
          font-family: 'Kantumruy Pro', sans-serif;
          background:
            radial-gradient(circle at 15% 10%, rgba(255,255,255,0.4), transparent 40%),
            linear-gradient(180deg, var(--chalkboard) 0%, var(--chalkboard-2) 100%);
          transition: background .25s ease;
        }
        .dark .af-root {
          --ink: #eef1f8;
          --paper: #1a2133;
          --chalkboard: #0b0f1a;
          --chalkboard-2: #05070c;
          --rule: #2b3550;
          --margin: #ef6f68;
          --gold: #e0ac5c;
          --gold-dark: #f0c27c;
          --green: #57c98a;
          --surface: rgba(255,255,255,0.06);
          --surface-strong: #202840;
          --border: #313b57;
          --muted: #9aa3b8;
        }

        .af-card {
          position: relative;
          background: var(--paper);
          background-image: repeating-linear-gradient(
            to bottom,
            transparent 0,
            transparent 38px,
            var(--rule) 39px
          );
          background-position: 0 92px;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,0,0,0.03);
          border-radius: 14px;
          overflow: hidden;
          transition: background .25s ease;
        }
        .af-margin {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 52px;
          width: 2px;
          background: var(--margin);
          opacity: 0.55;
        }
        .af-punch {
          position: absolute;
          left: 20px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--chalkboard-2);
          box-shadow: inset 0 2px 3px rgba(0,0,0,0.5);
        }

        .af-field label {
          color: var(--ink);
        }
        .af-eyebrow { color: var(--muted); }
        .af-heading { color: var(--ink); }
        .af-input, .af-select {
          font-family: 'Kantumruy Pro', sans-serif;
          background: var(--surface);
          border: 1.5px solid var(--border);
          color: var(--ink);
          transition: border-color .15s ease, box-shadow .15s ease, background .15s ease;
        }
        .af-input:focus, .af-select:focus {
          outline: none;
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(184,134,59,0.18);
          background: var(--surface-strong);
        }
        .af-select {
          appearance: none;
          -webkit-appearance: none;
        }
        .af-select option {
          background: var(--surface-strong);
          color: var(--ink);
        }

        .af-drop {
          border: 2px dashed var(--border);
          background: var(--surface);
          transition: border-color .15s ease, background .15s ease;
        }
        .af-drop.active {
          border-color: var(--gold);
          background: rgba(184,134,59,0.08);
        }
        .af-drop-text { color: var(--ink); }
        .af-drop-sub { color: var(--muted); }

        .af-btn {
          background: linear-gradient(180deg, var(--ink) 0%, #101a30 100%);
          color: var(--paper);
          transition: transform .12s ease, box-shadow .12s ease, filter .12s ease;
          box-shadow: 0 10px 20px -8px rgba(27,42,74,0.55);
        }
        .dark .af-btn {
          background: linear-gradient(180deg, var(--gold) 0%, var(--gold-dark) 100%);
          color: #1a2133;
        }
        .af-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          filter: brightness(1.08);
        }
        .af-btn:active:not(:disabled) {
          transform: translateY(0px);
        }
        .af-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .af-spin {
          animation: af-spin 0.7s linear infinite;
        }
        @keyframes af-spin {
          to { transform: rotate(360deg); }
        }

        .af-overlay {
          background: rgba(10,15,25,0.55);
          backdrop-filter: blur(3px);
          animation: af-fade .18s ease-out;
        }
        @keyframes af-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .af-modal {
          background: var(--surface-strong);
          animation: af-pop .22s cubic-bezier(.2,.9,.3,1.3);
        }
        @keyframes af-pop {
          from { opacity: 0; transform: scale(0.9) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .af-modal-title { color: var(--ink); }
        .af-modal-text { color: var(--muted); }
        .af-modal-close { color: var(--muted); }
        .af-modal-close:hover { color: var(--ink); }

        .af-stamp {
          border: 4px double currentColor;
          transform: rotate(-8deg) scale(1.5);
          opacity: 0;
          animation: af-stamp .5s cubic-bezier(.2,.7,.3,1.4) .1s forwards;
        }
        @keyframes af-stamp {
          0% { opacity: 0; transform: rotate(-8deg) scale(1.8); }
          60% { opacity: 1; transform: rotate(-8deg) scale(0.95); }
          100% { opacity: 1; transform: rotate(-8deg) scale(1); }
        }

        .af-shake {
          animation: af-shake .4s ease;
        }
        @keyframes af-shake {
          10%, 90% { transform: translateX(-1px); }
          20%, 80% { transform: translateX(2px); }
          30%, 50%, 70% { transform: translateX(-4px); }
          40%, 60% { transform: translateX(4px); }
        }
      `}</style>

      <div className="w-full max-w-xl">
        <div className="text-center mb-5">
          <span className="font-khmer af-eyebrow inline-block text-xs tracking-[0.3em] uppercase mb-2">
            ប្រព័ន្ធសាលារៀន
          </span>
          <h1 className="font-khmer af-heading text-3xl md:text-4xl font-extrabold">
            ប្រគល់កិច្ចការ
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="af-card relative pt-8 pb-8 px-8 md:px-10">
          <div className="af-margin" />
          <div className="af-punch" style={{ top: 24 }} />
          <div className="af-punch" style={{ top: "50%" }} />
          <div className="af-punch" style={{ bottom: 24 }} />

          <div className="relative pl-6 space-y-5">
            {/* ថ្នាក់ */}
            <div className="af-field">
              <label className="text-sm font-semibold flex items-center gap-1">
                ថ្នាក់ <span style={{ color: "var(--margin)" }}>*</span>
              </label>
              <div className="relative mt-1.5">
                <select
                  className="af-select w-full rounded-lg px-3 py-2.5 text-[15px]"
                  value={className}
                  onChange={handleClassChange}
                >
                  <option value="">-- ជ្រើសរើសថ្នាក់ --</option>
                  {CLASSES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <ChevronIcon className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" />
              </div>
            </div>

            {/* សិស្ស */}
            <div className="af-field">
              <label className="text-sm font-semibold flex items-center gap-1">
                ឈ្មោះសិស្ស <span style={{ color: "var(--margin)" }}>*</span>
              </label>
              <div className="relative mt-1.5">
                <select
                  className="af-select w-full rounded-lg px-3 py-2.5 text-[15px] disabled:opacity-60"
                  value={studentName}
                  onChange={handleStudentChange}
                  disabled={!className || studentsLoading}
                >
                  <option value="">
                    {studentsLoading ? "កំពុងទាញបញ្ជីសិស្ស..." : "-- ជ្រើសរើសសិស្ស --"}
                  </option>
                  {students.map((st) => (
                    <option key={st.no} value={st.name}>
                      {st.name}
                    </option>
                  ))}
                </select>
                <ChevronIcon className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" />
              </div>
              {listError && (
                <p className="text-xs mt-1.5" style={{ color: "var(--margin)" }}>
                  {listError}
                </p>
              )}
            </div>

            {/* លេខរៀង */}
            <div className="af-field">
              <label className="text-sm font-semibold">លេខរៀង</label>
              <input
                className="af-input w-full rounded-lg px-3 py-2.5 mt-1.5 text-[15px]"
                value={studentNo}
                readOnly
                placeholder="នឹងបំពេញដោយស្វ័យប្រវត្តិ"
              />
            </div>

            {/* Upload */}
            <div className="af-field">
              <label className="text-sm font-semibold flex items-center gap-1">
                ឯកសារ Word <span style={{ color: "var(--margin)" }}>*</span>
              </label>

              <label
                htmlFor="af-file"
                className={`af-drop mt-1.5 flex flex-col items-center justify-center gap-1.5 rounded-lg px-4 py-6 text-center cursor-pointer ${
                  dragActive ? "active" : ""
                }`}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragActive(true);
                }}
                onDragLeave={() => setDragActive(false)}
                onDrop={handleDrop}
              >
                <FileIcon />
                {file ? (
                  <>
                    <span className="af-drop-text text-sm font-medium">{file.name}</span>
                    <span className="af-drop-sub text-xs">{formatSize(file.size)} — ចុចដើម្បីប្តូរ</span>
                  </>
                ) : (
                  <>
                    <span className="af-drop-text text-sm font-medium">
                      អូសឯកសារមកទីនេះ ឬចុចដើម្បីជ្រើសរើស
                    </span>
                    <span className="af-drop-sub text-xs">គាំទ្រតែ .doc និង .docx</span>
                  </>
                )}
              </label>
              <input
                id="af-file"
                ref={fileInputRef}
                type="file"
                accept=".doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="af-btn w-full rounded-lg py-3 font-semibold text-[15px] flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <>
                  <SpinnerIcon className="af-spin" />
                  កំពុងបញ្ជូន...
                </>
              ) : (
                <>
                  <SendIcon />
                  បញ្ជូនកិច្ចការ
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {modal.open && (
        <div
          className="af-overlay fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <div
            className="af-modal rounded-2xl max-w-sm w-full p-7 relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="af-modal-close absolute top-3 right-3 transition-colors"
              aria-label="បិទ"
            >
              <CloseIcon />
            </button>

            {modal.status === "success" ? (
              <>
                <div className="flex justify-center mb-4">
                  <div
                    className="af-stamp w-24 h-24 rounded-full flex items-center justify-center"
                    style={{ color: "var(--green)" }}
                  >
                    <CheckIcon />
                  </div>
                </div>
                <h3 className="font-khmer af-modal-title text-xl font-bold mb-1.5">{modal.title}</h3>
                <p className="af-modal-text text-sm mb-5">{modal.text}</p>

                <button
                  onClick={() => {
                    closeModal();
                    navigate("/gethomework/ListHomeWork", {
                      state: { selectedClass: modal.submittedClass },
                    });
                  }}
                  className="af-btn inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold mb-2 w-full"
                >
                  មើលបញ្ជីអ្នកប្រគល់កិច្ចការ
                </button>

                <button
                  onClick={closeModal}
                  className="af-modal-close block w-full text-sm mt-1"
                >
                  បិទ
                </button>
              </>
            ) : (
              <>
                <div className="flex justify-center mb-4">
                  <div className="af-shake w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "#fbeceb", color: "var(--margin)" }}>
                    <AlertIcon />
                  </div>
                </div>
                <h3 className="font-khmer af-modal-title text-xl font-bold mb-1.5">{modal.title}</h3>
                <p className="af-modal-text text-sm mb-5">{modal.text}</p>
                <button
                  onClick={closeModal}
                  className="af-btn w-full rounded-lg py-2.5 text-sm font-semibold"
                >
                  យល់ព្រម
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ChevronIcon({ className = "" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#93692b" strokeWidth="1.6">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 2v6h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 2 11 13" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 2 15 22l-4-9-9-4 20-7Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SpinnerIcon({ className = "" }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M21 12a9 9 0 1 1-9-9" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M12 9v4M12 17h.01" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}