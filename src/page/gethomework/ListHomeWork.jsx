// import React, { useEffect, useMemo, useState } from "react";

// export default function ListHomeWork() {

//   const WEB_APP_URL =
//     "https://script.google.com/macros/s/AKfycbxpfLd-waq63udUdloVTOMxWanaqRSgvzSONStm_LjGnS7bkDgNDL60myrT-95AE1r-AA/exec";

//   const CLASSES = ["10A", "10B", "10C", "10D", "10E", "10F", "11B", "11E"];

//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [filterClass, setFilterClass] = useState("");

//   // ============================
//   // ទាញទិន្នន័យអ្នកដែលបាន Submit
//   // ============================

//   const loadSubmissions = async () => {
//     setLoading(true);
//     setError("");

//     try {
//       const res = await fetch(`${WEB_APP_URL}?action=getSubmissions`);
//       const data = await res.json();

//       const normalized = (Array.isArray(data) ? data : []).map((item, idx) => ({
//         no: item.no ?? item.studentNo ?? idx + 1,
//         name: item.name ?? item.studentName ?? "",
//         className: item.className ?? item.class ?? "",
//       }));

//       setRows(normalized);
//     } catch (err) {
//       console.log(err);
//       setError("មិនអាចទាញទិន្នន័យបាន សូមព្យាយាមម្តងទៀត");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadSubmissions();
//   }, []);

//   const filteredRows = useMemo(() => {
//     if (!filterClass) return rows;
//     return rows.filter((r) => r.className === filterClass);
//   }, [rows, filterClass]);

//   return (
//     <div className="lh-root min-h-screen flex justify-center px-4 py-10">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Battambang:wght@700;900&family=Kantumruy+Pro:wght@400;500;600;700&display=swap');

//         .lh-root {
//           --ink: #1b2a4a;
//           --paper: #fbf9f4;
//           --chalkboard: #1e3d36;
//           --chalkboard-2: #163029;
//           --rule: #b9cbe6;
//           --margin: #c1443d;
//           --gold: #b8863b;
//           --gold-dark: #93692b;
//           font-family: 'Kantumruy Pro', sans-serif;
//           background:
//             radial-gradient(circle at 15% 10%, rgba(255,255,255,0.05), transparent 40%),
//             linear-gradient(180deg, var(--chalkboard) 0%, var(--chalkboard-2) 100%);
//         }
//         .lh-display { font-family: 'Battambang', 'Kantumruy Pro', sans-serif; }

//         .lh-card {
//           position: relative;
//           background: var(--paper);
//           box-shadow: 0 30px 60px -20px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,0,0,0.03);
//           border-radius: 14px;
//           overflow: hidden;
//         }
//         .lh-margin {
//           position: absolute;
//           top: 0;
//           bottom: 0;
//           left: 52px;
//           width: 2px;
//           background: var(--margin);
//           opacity: 0.55;
//           z-index: 1;
//         }
//         .lh-punch {
//           position: absolute;
//           left: 20px;
//           width: 14px;
//           height: 14px;
//           border-radius: 50%;
//           background: var(--chalkboard-2);
//           box-shadow: inset 0 2px 3px rgba(0,0,0,0.5);
//           z-index: 2;
//         }

//         .lh-select {
//           appearance: none;
//           -webkit-appearance: none;
//           font-family: 'Kantumruy Pro', sans-serif;
//           background: rgba(255,255,255,0.7);
//           border: 1.5px solid #d8ccb0;
//           color: var(--ink);
//           transition: border-color .15s ease, box-shadow .15s ease, background .15s ease;
//         }
//         .lh-select:focus {
//           outline: none;
//           border-color: var(--gold);
//           box-shadow: 0 0 0 3px rgba(184,134,59,0.18);
//           background: #ffffff;
//         }

//         .lh-table thead th {
//           font-family: 'Kantumruy Pro', sans-serif;
//           color: var(--paper);
//           background: var(--ink);
//           font-weight: 600;
//         }
//         .lh-table tbody tr:nth-child(even) {
//           background: rgba(185, 203, 230, 0.18);
//         }
//         .lh-table tbody tr {
//           border-bottom: 1px solid #e7ddc4;
//           transition: background .12s ease;
//         }
//         .lh-table tbody tr:hover {
//           background: rgba(184,134,59,0.10);
//         }

//         .lh-badge {
//           background: rgba(184,134,59,0.14);
//           color: var(--gold-dark);
//           font-weight: 600;
//         }

//         .lh-spin {
//           animation: lh-spin 0.8s linear infinite;
//         }
//         @keyframes lh-spin {
//           to { transform: rotate(360deg); }
//         }

//         .lh-fade {
//           animation: lh-fade .25s ease-out;
//         }
//         @keyframes lh-fade {
//           from { opacity: 0; transform: translateY(4px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>

//       <div className="w-full max-w-3xl">
//         <div className="text-center mb-5">
//           <span className="lh-display inline-block text-xs tracking-[0.3em] uppercase text-white/50 mb-2">
//             ប្រព័ន្ធសាលារៀន
//           </span>
//           <h1 className="lh-display text-3xl md:text-4xl font-extrabold text-white">
//             បញ្ជីអ្នកបានប្រគល់កិច្ចការ
//           </h1>
//         </div>

//         <div className="lh-card relative pt-8 pb-8 px-6 md:px-9">
//           <div className="lh-margin" />
//           <div className="lh-punch" style={{ top: 24 }} />
//           <div className="lh-punch" style={{ top: "50%" }} />
//           <div className="lh-punch" style={{ bottom: 24 }} />

//           <div className="relative pl-6">
//             {/* Header row: filter + count + refresh */}
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
//               <div className="flex items-center gap-2">
//                 <label className="text-sm font-semibold shrink-0" style={{ color: "var(--ink)" }}>
//                   ត្រងតាមថ្នាក់
//                 </label>
//                 <div className="relative">
//                   <select
//                     className="lh-select rounded-lg pl-3 pr-8 py-2 text-[15px]"
//                     value={filterClass}
//                     onChange={(e) => setFilterClass(e.target.value)}
//                   >
//                     <option value="">គ្រប់ថ្នាក់</option>
//                     {CLASSES.map((c) => (
//                       <option key={c} value={c}>
//                         {c}
//                       </option>
//                     ))}
//                   </select>
//                   <ChevronIcon className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" />
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <span className="lh-badge text-xs px-2.5 py-1 rounded-full">
//                   {filteredRows.length} នាក់
//                 </span>
//                 <button
//                   onClick={loadSubmissions}
//                   disabled={loading}
//                   className="text-sm flex items-center gap-1.5 font-medium disabled:opacity-50"
//                   style={{ color: "var(--gold-dark)" }}
//                 >
//                   <RefreshIcon className={loading ? "lh-spin" : ""} />
//                   ផ្ទុកឡើងវិញ
//                 </button>
//               </div>
//             </div>

//             {/* Content */}
//             {error && (
//               <div
//                 className="text-sm rounded-lg px-4 py-3 mb-4"
//                 style={{ background: "#fbeceb", color: "var(--margin)" }}
//               >
//                 {error}
//               </div>
//             )}

//             {loading ? (
//               <div className="space-y-2">
//                 {[...Array(5)].map((_, i) => (
//                   <div
//                     key={i}
//                     className="h-10 rounded-md animate-pulse"
//                     style={{ background: "rgba(185,203,230,0.35)" }}
//                   />
//                 ))}
//               </div>
//             ) : filteredRows.length === 0 ? (
//               <div className="lh-fade text-center py-12">
//                 <EmptyIcon />
//                 <p className="text-sm text-gray-500 mt-3">
//                   {filterClass ? `មិនទាន់មានសិស្សថ្នាក់ ${filterClass} ប្រគល់កិច្ចការទេ` : "មិនទាន់មានទិន្នន័យប្រគល់កិច្ចការទេ"}
//                 </p>
//               </div>
//             ) : (
//               <div className="lh-fade overflow-x-auto rounded-lg" style={{ border: "1px solid #e7ddc4" }}>
//                 <table className="lh-table w-full text-sm text-left border-collapse">
//                   <thead>
//                     <tr>
//                       <th className="px-4 py-3 w-20">ល.រ</th>
//                       <th className="px-4 py-3">ឈ្មោះ</th>
//                       <th className="px-4 py-3 w-28">ថ្នាក់</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filteredRows.map((row, idx) => (
//                       <tr key={`${row.no}-${row.name}-${idx}`}>
//                         <td className="px-4 py-2.5" style={{ color: "var(--ink)" }}>
//                           {row.no}
//                         </td>
//                         <td className="px-4 py-2.5 font-medium" style={{ color: "var(--ink)" }}>
//                           {row.name}
//                         </td>
//                         <td className="px-4 py-2.5">
//                           <span className="lh-badge text-xs px-2 py-0.5 rounded-md">
//                             {row.className}
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ============================
// // Icons (inline SVG, no extra deps)
// // ============================

// function ChevronIcon({ className = "" }) {
//   return (
//     <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }

// function RefreshIcon({ className = "" }) {
//   return (
//     <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M21 12a9 9 0 1 1-2.64-6.36M21 3v6h-6" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }

// function EmptyIcon() {
//   return (
//     <svg className="mx-auto" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c9bb99" strokeWidth="1.5">
//       <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round" />
//       <path d="M14 2v6h6" strokeLinecap="round" strokeLinejoin="round" />
//       <path d="M9 15h6M9 11h2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }

import React, { useEffect, useMemo, useState } from "react";
// Import useLocation ដើម្បីចាប់យកតម្លៃ State ផ្ទេរមកពីទំព័រ Form
import { useLocation } from "react-router-dom";

export default function ListHomeWork() {
  const location = useLocation();

  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbxpfLd-waq63udUdloVTOMxWanaqRSgvzSONStm_LjGnS7bkDgNDL60myrT-95AE1r-AA/exec";

  const CLASSES = ["10A", "10B", "10C", "10D", "10E", "10F", "11B", "11E"];

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  // បើមានតម្លៃថ្នាក់ផ្ទេរមកពីទំព័រ Form ឱ្យយកធ្វើជា filterClass ដំបូង បើគ្មានទេ ដាក់ទទេ (គ្រប់ថ្នាក់)
  const [filterClass, setFilterClass] = useState(location.state?.selectedClass || "");

  // ============================
  // ទាញទិន្នន័យអ្នកដែលបាន Submit
  // ============================

  const loadSubmissions = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${WEB_APP_URL}?action=getSubmissions`);
      const data = await res.json();

      const normalized = (Array.isArray(data) ? data : []).map((item, idx) => ({
        no: item.no ?? item.studentNo ?? idx + 1,
        name: item.name ?? item.studentName ?? "",
        className: item.className ?? item.class ?? "",
      }));

      setRows(normalized);
    } catch (err) {
      console.log(err);
      setError("មិនអាចទាញទិន្នន័យបាន សូមព្យាយាមម្តងទៀត");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubmissions();
  }, []);

  const filteredRows = useMemo(() => {
    if (!filterClass) return rows;
    return rows.filter((r) => r.className === filterClass);
  }, [rows, filterClass]);

  return (
    <div className="lh-root min-h-screen flex justify-center px-4 py-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Battambang:wght@700;900&family=Kantumruy+Pro:wght@400;500;600;700&display=swap');

        .lh-root {
          --ink: #1b2a4a;
          --paper: #fbf9f4;
          --chalkboard: #1e3d36;
          --chalkboard-2: #163029;
          --rule: #b9cbe6;
          --margin: #c1443d;
          --gold: #b8863b;
          --gold-dark: #93692b;
          font-family: 'Kantumruy Pro', sans-serif;
          background:
            radial-gradient(circle at 15% 10%, rgba(255,255,255,0.05), transparent 40%),
            linear-gradient(180deg, var(--chalkboard) 0%, var(--chalkboard-2) 100%);
        }
        .lh-display { font-family: 'Battambang', 'Kantumruy Pro', sans-serif; }

        .lh-card {
          position: relative;
          background: var(--paper);
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,0,0,0.03);
          border-radius: 14px;
          overflow: hidden;
        }
        .lh-margin {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 52px;
          width: 2px;
          background: var(--margin);
          opacity: 0.55;
          z-index: 1;
        }
        .lh-punch {
          position: absolute;
          left: 20px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--chalkboard-2);
          box-shadow: inset 0 2px 3px rgba(0,0,0,0.5);
          z-index: 2;
        }

        .lh-select {
          appearance: none;
          -webkit-appearance: none;
          font-family: 'Kantumruy Pro', sans-serif;
          background: rgba(255,255,255,0.7);
          border: 1.5px solid #d8ccb0;
          color: var(--ink);
          transition: border-color .15s ease, box-shadow .15s ease, background .15s ease;
        }
        .lh-select:focus {
          outline: none;
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(184,134,59,0.18);
          background: #ffffff;
        }

        .lh-table thead th {
          font-family: 'Kantumruy Pro', sans-serif;
          color: var(--paper);
          background: var(--ink);
          font-weight: 600;
        }
        .lh-table tbody tr:nth-child(even) {
          background: rgba(185, 203, 230, 0.18);
        }
        .lh-table tbody tr {
          border-bottom: 1px solid #e7ddc4;
          transition: background .12s ease;
        }
        .lh-table tbody tr:hover {
          background: rgba(184,134,59,0.10);
        }

        .lh-badge {
          background: rgba(184,134,59,0.14);
          color: var(--gold-dark);
          font-weight: 600;
        }

        .lh-spin {
          animation: lh-spin 0.8s linear infinite;
        }
        @keyframes lh-spin {
          to { transform: rotate(360deg); }
        }

        .lh-fade {
          animation: lh-fade .25s ease-out;
        }
        @keyframes lh-fade {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="w-full max-w-3xl">
        <div className="text-center mb-5">
          <span className="lh-display inline-block text-xs tracking-[0.3em] uppercase text-white/50 mb-2">
            ប្រព័ន្ធសាលារៀន
          </span>
          <h1 className="lh-display text-3xl md:text-4xl font-extrabold text-white">
            បញ្ជីអ្នកបានប្រគល់កិច្ចការ
          </h1>
        </div>

        <div className="lh-card relative pt-8 pb-8 px-6 md:px-9">
          <div className="lh-margin" />
          <div className="lh-punch" style={{ top: 24 }} />
          <div className="lh-punch" style={{ top: "50%" }} />
          <div className="lh-punch" style={{ bottom: 24 }} />

          <div className="relative pl-6">
            {/* Header row: filter + count + refresh */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
              <div className="flex items-center gap-2">
                <label className="text-sm font-semibold shrink-0" style={{ color: "var(--ink)" }}>
                  ត្រងតាមថ្នាក់
                </label>
                <div className="relative">
                  <select
                    className="lh-select rounded-lg pl-3 pr-8 py-2 text-[15px]"
                    value={filterClass}
                    onChange={(e) => setFilterClass(e.target.value)}
                  >
                    <option value="">គ្រប់ថ្នាក់</option>
                    {CLASSES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <ChevronIcon className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="lh-badge text-xs px-2.5 py-1 rounded-full">
                  {filteredRows.length} នាក់
                </span>
                <button
                  onClick={loadSubmissions}
                  disabled={loading}
                  className="text-sm flex items-center gap-1.5 font-medium disabled:opacity-50"
                  style={{ color: "var(--gold-dark)" }}
                >
                  <RefreshIcon className={loading ? "lh-spin" : ""} />
                  ផ្ទុកឡើងវិញ
                </button>
              </div>
            </div>

            {/* Content */}
            {error && (
              <div
                className="text-sm rounded-lg px-4 py-3 mb-4"
                style={{ background: "#fbeceb", color: "var(--margin)" }}
              >
                {error}
              </div>
            )}

            {loading ? (
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-10 rounded-md animate-pulse"
                    style={{ background: "rgba(185,203,230,0.35)" }}
                  />
                ))}
              </div>
            ) : filteredRows.length === 0 ? (
              <div className="lh-fade text-center py-12">
                <EmptyIcon />
                <p className="text-sm text-gray-500 mt-3">
                  {filterClass ? `មិនទាន់មានសិស្សថ្នាក់ ${filterClass} ប្រគល់កិច្ចការទេ` : "មិនទាន់មានទិន្នន័យប្រគល់កិច្ចការទេ"}
                </p>
              </div>
            ) : (
              <div className="lh-fade overflow-x-auto rounded-lg" style={{ border: "1px solid #e7ddc4" }}>
                <table className="lh-table w-full text-sm text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 w-20">ល.រ</th>
                      <th className="px-4 py-3">ឈ្មោះ</th>
                      <th className="px-4 py-3 w-28">ថ្នាក់</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRows.map((row, idx) => (
                      <tr key={`${row.no}-${row.name}-${idx}`}>
                        <td className="px-4 py-2.5" style={{ color: "var(--ink)" }}>
                          {row.no}
                        </td>
                        <td className="px-4 py-2.5 font-medium" style={{ color: "var(--ink)" }}>
                          {row.name}
                        </td>
                        <td className="px-4 py-2.5">
                          <span className="lh-badge text-xs px-2 py-0.5 rounded-md">
                            {row.className}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================
// Icons
// ============================
function ChevronIcon({ className = "" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RefreshIcon({ className = "" }) {
  return (
    <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12a9 9 0 1 1-2.64-6.36M21 3v6h-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EmptyIcon() {
  return (
    <svg className="mx-auto" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c9bb99" strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 2v6h6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 15h6M9 11h2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}