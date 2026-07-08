// import { useState, useMemo } from "react";
// import {
//   AiOutlineFilePdf,
//   AiOutlineEye,
//   AiOutlineDownload,
//   AiOutlineBook,
//   AiOutlineSearch,
// } from "react-icons/ai";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// const subjects = [
//   {
//     id: 1,
//     title: "Microsoft Excel",
//     description: "សិក្សាអំពី Microsoft Excel",
//     color: "green",
//     icon: "📗",
//     lessons: [
//       {
//         id: 1,
//         title: "មេរៀនទី៥ សិក្សាអំពីរូបមន្ដនានាក្នុងកម្មវិធី Microsoft office 2026",
//         description: "6-Formular : Logical Function",
//         subTopics: ["6.1-IF", "6.2-AND & IF + AND", "6.3-OR & IF + OR", "6.4-NOT & IF + NOT", "6.5-IF + AND + OR"],
//         pdf: "/Videos/Excel/6-Function/6-Formular  Logical Function.pdf",
//       },
//       {
//         id: 2,
//         title: "មេរៀនទី៥ សិក្សាអំពីរូបមន្ដនានាក្នុងកម្មវិធី Microsoft office 2026",
//         description: "លំហាត់អនុវត្តលើការប្រើប្រាស់ 6-Formular : Logical Function",
//         subTopics: ["6.1-IF", "6.2-AND & IF + AND", "6.3-OR & IF + OR", "6.4-NOT & IF + NOT", "6.5-IF-AND-OR.mp4"],
//         pdf: "Videos/Excel/Excercise/6-Excercise.xlsx",
//       },
//       {
//         id: 3,
//         title: "មេរៀនទី៥ សិក្សាអំពីរូបមន្ដនានាក្នុងកម្មវិធី Microsoft office 2026",
//         description: "7-Formular: Statistical Function",
//         subTopics: ["7.1-MAX, MIN", "7.2-AVERAGE", "7.3-COUNT,COUNTA", "7.4-COUNTIF", "7.5-COUNTIFS"],
//         pdf: "/Videos/Excel/7-Statistical/7-Formular-Statistical-Function.pdf",
//       },
//        {
//         id: 4,
//         title: "មេរៀនទី៥ សិក្សាអំពីរូបមន្ដនានាក្នុងកម្មវិធី Microsoft office 2026",
//         description: "លំហាត់អនុវត្តលើការប្រើប្រាស់ 7-Formular: Statistical Function",
//         subTopics: ["7.1-MAX, MIN", "7.2-AVERAGE", "7.3-COUNT,COUNTA", "7.4-COUNTIF", "7.5-COUNTIFS"],
//         pdf: "Videos/Excel/Excercise/7-Statistical.xlsx",
//       },
//       {
//         id: 5,
//         title: "ប្រឡងប្រចាំខែមិថុនា ឆ្នាំ២០២៦",
//         description: "ប្រឡងប្រចាំខែមិថុនា ឆ្នាំ២០២៦ សម្រាប់ថ្ន​ាក់ទី១១",
//         subTopics: ["7.1-MAX, MIN", "7.2-AVERAGE", "7.3-COUNT", "7.4-COUNTIF", "7.5-COUNTIFS"],
//         pdf: "Videos/Excel/Excercise/8-exam.xlsb",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Microsoft Word",
//     description: "រៀនប្រើ Word",
//     color: "blue",
//     icon: "📘",
//     lessons: [
//       {
//         id: 1,
//         title: "មេរៀនទី ៤  ការណែនាំអំពីកម្មវិធី Microsoft Word",
//         description: "សិក្សាអំពីការគ្រប់គ្រង Object ",
//         subTopics: ["១៨.៥ ការរៀបចំលំដាប់ស្រទាប់ (Layer)", "១៨.៦ សិក្សាអំពី Select Pane", "១៨.៧ សិក្សាអំពី Aligment Object", "១៨.៨ សិក្សាអំពី Group Object"],
//         pdf: "/Videos/Word/18-Picture1/១៨.ការណែនាំអំពី Microsoft Word.pdf",
//       },
//       {
//         id: 2,
//         title: "មេរៀនទី ៤  ការណែនាំអំពីកម្មវិធី Microsoft Word",
//         description: "សិក្សាអំពីការគផ្លាស់ប្ដូរទ្រង់ទ្រាយ​ Object ",
//         subTopics: ["១៨.៩ ការកំណត់ទិសដៅរូបភាព Picture Rotate", "១៨.១០ ការកាត់រូបភាព Picture Crop", "១៨.១១ សិក្សាអំពី ​ការប្រើអត្ថបទជំនួស Alt Text"],
//         pdf: "/Videos/Word/18-Picture2/១៩.ការណែនាំអំពីកម្មវិធី _Microsoft Word.pdf",
//       },
//       {
//         id: 3,
//         title: "មេរៀនទី ៤  ការណែនាំអំពីកម្មវិធី Microsoft Word",
//         description: "សិក្សាអំពី Shape និងការកែសម្រូលការប្រើប្រាស់ ",
//         subTopics: ["1៩-សិក្សាអំពី​ Shape", "១៩.១-ការ Edit Shape", "១៩.២-Shape Style", "១៩.៣-Align Text in Shape","១៩.៤-Text Direction in Shape"," ១៩.៥-Shape Create Link"],
//         pdf: "/Videos/Word/19-Shape/19-Shape.pdf",
//       },
//       {
//         id: 4,
//         title: "មេរៀនទី ៤  ការណែនាំអំពីកម្មវិធី Microsoft Word",
//         description: "សិក្សាអំពី Smart Art និងការកែសម្រូលការប្រើប្រាស់ ",
//         subTopics: ["២០-សិក្សាអំពី​ Smart Art", "២០.១-សិក្សាអំពីរបៀប Add Shape", "២០.២-សិក្សាអំពីរបៀប Add Bullets", "២០.៣-សិក្សាអំពីរបៀប Add Text Pane","២០.៤-សិក្សាអំពី Layout និង Color"],
//         pdf: "/Videos/Word/20-SmartArt/20-SmartArt.pdf",
//       },
//       {
//       id: 5,
//       title: "មេរៀនទី ៤  ការណែនាំអំពីកម្មវិធី Microsoft Word",
//       description: "សិក្សាអំពី ការរចនាទំព័រ និងការតុបតែងទំព័រ ",
//       subTopics: ["២១.សិក្សាអំពី​ការរចនា និងរៀបចំសន្លឹកកិច្ចការ", " ២១.១ សិក្សា Header និង Footer", "២១.២ សិក្សាអំពី Page Number", "២១.៣ សិក្សាអំពី Word Art","  ២១.៤ សិក្សាអំពី Drop Cap"],
//       pdf: "/Videos/Word/21-DesigePage/21-DesingPage.pdf",
//      },
//      {
//       id: 6,
//       title: "មេរៀនទី ៤  ការណែនាំអំពីកម្មវិធី Microsoft Word",
//       description: "សិក្សាអំពី ការរចនាទំព័រ និងការតុបតែងទំព័រ ",
//       subTopics: ["២១.៥-សិក្សាអំពីការសរសេររូបមន្ដគណិតវិទ្យា(Equation)", "២១.៦-សិក្សាអំពីការប្រើប្រាស់និមិត្តសញ្ញា (Symbol)", "២១.៧-សិក្សាអំពី Watermark", "២១.៨-សិក្សាអំពីការដាក់ស៊ុំជុំវិញអត្ថបទ(PageBorder)"],
//       pdf: "/Videos/Word/21.1-DesingePage1/21.1-DesignPage2.pdf",
//      },
//      {
//       id: 7,
//       title: "មេរៀនទី ៥  ការណែនាំអំពី Internet",
//       description: "ការណែនាំអំពី Internet ",
//       subTopics: ["១-តើអ្វីទៅជា Internet?", " 2-សេវាកម្ម Internet", "៣-តម្រូវការក្នុងការប្រើប្រាស់ Internet", "៤-កម្មវិធីរុករក Internet Browser","៥-របៀបបើក និងចូលប្រើប្រាស់ Internet Browser","ការណែនាំ interface របស់ Internet Browser"],
//       pdf: "/Videos/Word/22-Internet/22-Internet.pdf",
//      },
//     ],
//   },
//     {
//       id: 3,
//       title: "គំរូឯកសារនានា",
//       description: "ឯកសារគំរូសម្រាប់គ្រូ និងសិស្ស",
//       color: "yellow",
//       icon: "📂",
//       lessons: [
//         {
//           id: 1,
//           title: "គំរូក្របសៀវភៅក្រដាស A4",
//           description: "Soft Microsoft Word Template for A4 Paper Size",
//           type: "document", 
//           subTopics: [
//             "សន្លឹកកិច្ចការ A4",
//             "​ប្រើប្រាស់ Shape",
//             "ប្រើប្រាស់រូបភាព",
//             "ប្រើប្រាស់ Picture Style",
//           ],
//           url: "/Videos/Other/Document/coverbook/Coverbook0.docx",
//         },
//            {
//           id: 2,
//           title: "គំរូក្របសៀវភៅក្រដាស A4",
//           description: "Soft Microsoft Word Template for A4 Paper Size",
//           type: "document", 
//           subTopics: [
//             "សន្លឹកកិច្ចការ A4",
//             "​ប្រើប្រាស់ Shape",
//             "ប្រើប្រាស់រូបភាព",
//             "ប្រើប្រាស់ Picture Style",
//           ],
//           url: "/Videos/Other/Document/coverbook/Coverbook1.docx",
//         },
//            {
//           id: 3,
//           title: "គំរូក្របសៀវភៅក្រដាស A4",
//           description: "Soft Microsoft Word Template for A4 Paper Size",
//           type: "document", 
//           subTopics: [
//             "សន្លឹកកិច្ចការ A4",
//             "​ប្រើប្រាស់ Shape",
//             "ប្រើប្រាស់រូបភាព",
//             "ប្រើប្រាស់ Picture Style",
//           ],
//           url: "/Videos/Other/Document/coverbook/Coverbook2.docx",
//         },
//            {
//           id: 4,
//           title: "គំរូក្របសៀវភៅក្រដាស A4",
//           description: "Soft Microsoft Word Template for A4 Paper Size",
//           type: "document", 
//           subTopics: [
//             "សន្លឹកកិច្ចការ A4",
//             "​ប្រើប្រាស់ Shape",
//             "ប្រើប្រាស់រូបភាព",
//             "ប្រើប្រាស់ Picture Style",
//           ],
//           url: "/Videos/Other/Document/coverbook/Coverbook3.docx",
//         },
        
//          {
//           id: 5,
//           title: "គំរូកាតសិស្សសម្រាប់ពាក់ក",
//           description: "Soft Microsoft Word Template for w:5.7 h:7.7 Paper Size",
//           type: "document", 
//           subTopics: [
//             "សន្លឹកកិច្ចការ A4/4",
//             "​ប្រើប្រាស់ Shape",
//             "ប្រើប្រាស់រូបភាព",
//             "ប្រើប្រាស់ Picture Style",
//           ],
//           url: "/Videos/Other/Document/card/Card.docx",
//         },
//         {
//           id: 7,
//           title: "គំរូលិខិតសរសើរ",
//           description: "Soft Microsoft Word Template  Paper Size A4",
//           type: "document", 
//           subTopics: [
//             "សន្លឹកកិច្ចការ A4",
//             "​ប្រើប្រាស់ Shape",
//             "ប្រើប្រាស់រូបភាព",
//             "ប្រើប្រាស់ Mail Merge",
//           ],
//           url: "/Videos/Other/Document/fam/Fam.docx",
//         },
//         {
//           id: 8,
//           title: "គំរូ CV ជាភាសាខ្មែរ",
//           description: "Soft Microsoft Word Template  Paper Size A4",
//           type: "document", 
//           subTopics: [
//             "សន្លឹកកិច្ចការ A4",
//             "​ប្រើប្រាស់ Shape",
//             "ប្រើប្រាស់រូបភាព",
//             "ប្រើប្រាស់ Links",
//           ],
//           url: "/Videos/Other/Document/cv/CV.docx",
//         },
//         {
//           id: 9,
//           title: "គំរូ វិញ្ញាបនបត្ររដ្ឋបាលសម្រា​ប់គ្រូបង្រៀន",
//           description: "Soft Microsoft Word Template  Paper Size A4",
//           type: "document", 
//           subTopics: [
//             "សន្លឹកកិច្ចការ A4",
//             "​ប្រើប្រាស់ Shape",
//             "បញ្ជាក់ស្ថានភាពការងារ និងការអប់រំ",
//             "ប្រើប្រាស់ រូបភាព",
//           ],
//           url: "/Videos/Other/Document/publicAdministration.dotx",
//         },
//         {
//           id: 10,
//           title: "គំរូ មេរៀន Header & Footer",
//           description: "Soft Microsoft Word Template  Paper Size A4",
//           type: "document", 
//           subTopics: [
//             "សន្លឹកកិច្ចការ A4",
//             "​ប្រើប្រាស់ Shape",
//             "Drop Cap",
//             "Word Art",
//           ],
//           url: "/Videos/Other/Document/Computer.docx",
//         },
//         {
//           id: 11,
//             title: "គំរូ វិក័យបត្រ Invoice ទី១",
//             description: "Soft Microsoft Word Template  Paper Size A4",
//             type: "document", 
//             subTopics: [
//               "សន្លឹកកិច្ចការ A4",
//               "​ប្រើប្រាស់ Table",
//               "Table Formating",
//               "ប្រភព៖ https://t.me/camtechfreeresource",
//             ],
//           url: "/Videos/Other/Document/invoice/invoice1.docx",
//         },
//         {
//           id: 12,
//            title: "គំរូ វិក័យបត្រ Invoice ទី២",
//           description: "Soft Microsoft Word Template  Paper Size A4",
//           type: "document", 
//           subTopics: [
//             "សន្លឹកកិច្ចការ A4",
//             "​ប្រើប្រាស់ Table",
//             "Table Formating",
//             "ប្រភព៖ https://t.me/camtechfreeresource",
//           ],
//           url: "/Videos/Other/Document/invoice/invoice2.docx",
//         },
//         {
//           id: 13,
//           title: "គំរូ វិក័យបត្រ Invoice ទី៣",
//           description: "Soft Microsoft Word Template  Paper Size A4",
//           type: "document", 
//           subTopics: [
//             "សន្លឹកកិច្ចការ A4",
//             "​ប្រើប្រាស់ Table",
//             "Table Formating",
//             "ប្រភព៖ https://t.me/camtechfreeresource",
//           ],
//           url: "/Videos/Other/Document/invoice/invoice3.docx"
//         },
//         {
//           id: 14,
//           title: "គំរូ វិក័យបត្រ Invoice ទី៤",
//           description: "Soft Microsoft Word Template  Paper Size A4",
//           type: "document", 
//           subTopics: [
//             "សន្លឹកកិច្ចការ A4",
//             "​ប្រើប្រាស់ Table",
//             "Table Formating",
//             "ប្រភព៖ https://t.me/camtechfreeresource",
//           ],
//           url: "/Videos/Other/Document/invoice/invoice4.docx",
//         },
//         {
//           id: 15,
//           title: "គំរូ វិក័យបត្រ Invoice ទី៥",
//           description: "Soft Microsoft Word Template  Paper Size A4",
//           type: "document", 
//           subTopics: [
//             "សន្លឹកកិច្ចការ A4",
//             "​ប្រើប្រាស់ Table",
//             "Table Formating",
//             "ប្រភព៖ https://t.me/camtechfreeresource",
//           ],
//           url: "/Videos/Other/Document/invoice/invoice5.docx",
//         },
//          {
//           id: 16,
//           title: "គំរូ CV ជាភាសាខ្មែរ គំរូទី១",
//           description: "Soft Microsoft Word Template  Paper Size A4",
//           type: "document", 
//           subTopics: [
//             "សន្លឹកកិច្ចការ A4",
//             "​ប្រើប្រាស់ Table",
//             "Table Formating",
//             "ប្រភព៖ https://t.me/camtechfreeresource",
//           ],
//           url: "/Videos/Other/Document/cv/khmer/KhmerCV1.doc",
//         },
//         {
//           id: 17,
//           title: "គំរូ CV ជាភាសាខ្មែរ គំរូទី២",
//           description: "Soft Microsoft Word Template  Paper Size A4",
//           type: "document", 
//           subTopics: [
//             "សន្លឹកកិច្ចការ A4",
//             "​ប្រើប្រាស់ Table",
//             "Table Formating",
//             "ប្រភព៖ https://t.me/camtechfreeresource",
//           ],
//           url: "/Videos/Other/Document/cv/khmer/KhmerCV2.docx",
//         },
//         {
//           id: 18,
//           title: "គំរូ CV ជាភាសាខ្មែរ គំរូទី៣",
//           description: "Soft Microsoft Word Template  Paper Size A4",
//           type: "document", 
//           subTopics: [
//             "សន្លឹកកិច្ចការ A4",
//             "​ប្រើប្រាស់ Table",
//             "Table Formating",
//             "ប្រភព៖ https://t.me/camtechfreeresource",
//           ],
//           url: "/Videos/Other/Document/cv/khmer/KhmerCV3.docx",
//         },
//       ],
//     },
//     {
//       id: 4,
//       title: "​ប្រឡង​ប្រចាំខែ",
//       description: "ប្រព័ន្ធប្រឡងប្រចាំខែសម្រាប់ថ្នាក់ទី១០ និងទី១១",
//       color: "red",
//       icon: "📕",
//       lessons: [
//         {
//           id: 1,
//           title: "QCM Examination System",
//           description: "ប្រព័ន្ធប្រឡង QCM សម្រាប់ថ្នាក់ទី១០ និងទី១១",
//           type: "exam",
//           buttonLabel: "ចូលប្រឡង",
//           subTopics: ["​ប្រព័ន្ធប្រឡងប្រចាំខែសម្រាប់ថ្នាក់ទី១០ និងទី១១","ត្រូវមាន ឈ្មោះ និងលេខសម្ងាត់","ចូលប្រឡងតាមម៉ោងកំណត់"],
//           url: "https://qcm.salacode.site/student/dashboard",
//         },
//         {
//           id: 2,
//           title: "ប្រព័ន្ធចុះឈ្មោះសិស្ស Google Sheets",
//           description: "ផ្ទុ្កកទិន្នន័យសិស្សថ្នាក់ទី១០ ឆ្នាំ២០២៦-២០២៧",
//           type: "exam",
//           buttonLabel: "ចូលទៅចុះឈ្មោះ",
//           subTopics: ["​ប័ណ្ណព័ត៌មានសិស្សថ្នាក់ទី១០ ឆ្នាំ២០២៦-២០២៧","Android App:https://bit.ly/4vUDk6F","រាល់ការកែទិនន្នន័យវានិងបញ្ជូនទៅ bot Telegram ដើម្បីត្រួតពិនិត្យ"],
//           url: "https://script.google.com/macros/s/AKfycbwTIWbiUeLZmiHe7Wtb4taCtlFKotb-2EKWZW38W8biyRU7ztcQX1bStnDWSoTCFtsr/exec",
//         },
//         {
//           id: 3,
//           title: "ប្រគល់កិច្ចការប្រឡងឆមាសលើកទី2 ឆ្នាំ 2025-2026",
//           description: "សម្រាប់ថ្នាក់ទី10ABCDEF11BE",
//           type: "exam",
//           buttonLabel: "ចូលទៅប្រគល់",
//           subTopics: ["ការប្រឡងឆមាសលើកទី២","ប្រគល់កិច្ចការប្រឡង","មើលលទ្ធផលកិច្ចការប្រឡង:https://www.salacode.site/gethomework/ListHomeWork"],
//           url: "./gethomework/StudentHomeWork",
//         },
//       ],
//     },
// ];

// const colorMap = {
//   green: {
//     badge: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300",
//     iconBg: "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
//     border: "border-green-200 dark:border-green-800",
//     dot: "bg-green-500",
//   },
//   blue: {
//     badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
//     iconBg: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
//     border: "border-blue-200 dark:border-blue-800",
//     dot: "bg-blue-500",
//   },
//   red: {
//     badge: "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300",
//     iconBg: "bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400",
//     border: "border-red-200 dark:border-red-800",
//     dot: "bg-red-500",
//   },
//    yellow: {
//     badge: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300",
//     iconBg: "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
//     border: "border-yellow-200 dark:border-yellow-800",
//     dot: "bg-yellow-500",
//   },
// };

// const ITEMS_PER_PAGE = 6;

// export default function IctPage() {
//   const [viewPdf, setViewPdf] = useState(null);
//   const [viewTitle, setViewTitle] = useState("");
//   const [activeSubject, setActiveSubject] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPages, setCurrentPages] = useState({});

//   const openPdf = (file, title) => {
//     setViewPdf(encodeURI(file));
//     setViewTitle(title);
//   };

//   const closePdf = () => {
//     setViewPdf(null);
//     setViewTitle("");
//   };

//   const filteredSubjects = useMemo(() => {
//     return subjects
//       .filter((s) => activeSubject === null || s.id === activeSubject)
//       .map((subject) => ({
//         ...subject,
//         lessons: subject.lessons.filter((lesson) => {
//           const searchLower = searchQuery.toLowerCase();
//           return (
//             lesson.title.toLowerCase().includes(searchLower) ||
//             lesson.description.toLowerCase().includes(searchLower)
//           );
//         }),
//       }))
//       .filter((subject) => subject.lessons.length > 0);
//   }, [activeSubject, searchQuery]);

//   const handleSearchChange = (value) => {
//     setSearchQuery(value);
//     setCurrentPages({});
//   };

//   const handleSubjectChange = (subjectId) => {
//     setActiveSubject(subjectId);
//     setCurrentPages({});
//   };

//   const handlePageChange = (subjectId, page) => {
//     setCurrentPages((prev) => ({
//       ...prev,
//       [subjectId]: page,
//     }));
//   };

//   return (
//     <div className="min-h-screen pt-16 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
//       <div className="max-w-6xl p-6 mx-auto">

//         {/* HEADER */}
//         <div className="mb-10">
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
//             ICT Lessons
//           </h1>
//           <p className="mt-2 text-gray-600 dark:text-gray-400">
//             ជ្រើសរើសមេរៀន
//           </p>
//         </div>

//         {/* SEARCH BAR */}
//         <div className="mb-8">
//           <div className="relative">
//             <AiOutlineSearch className="absolute text-xl text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
//             <input
//               type="text"
//               placeholder="ស្វាគមន៍មកខ្ញុំ..."
//               value={searchQuery}
//               onChange={(e) => handleSearchChange(e.target.value)}
//               className="w-full py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-2xl dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         {/* FILTER */}
//         <div className="flex flex-wrap gap-3 mb-10">
//           <button
//             onClick={() => handleSubjectChange(null)}
//             className={`px-5 py-2 rounded-full text-sm transition ${
//               activeSubject === null
//                 ? "bg-black text-white dark:bg-white dark:text-black"
//                 : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
//             }`}
//           >
//             ទាំងអស់
//           </button>

//           {subjects.map((s) => (
//             <button
//               key={s.id}
//               onClick={() => handleSubjectChange(s.id)}
//               className={`px-5 py-2 rounded-full text-sm flex items-center gap-2 transition ${
//                 activeSubject === s.id
//                   ? "bg-black text-white dark:bg-white dark:text-black"
//                   : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
//               }`}
//             >
//               {s.icon} {s.title}
//             </button>
//           ))}
//         </div>

//         {/* CONTENT */}
//         {filteredSubjects.length > 0 ? (
//           <>
//             {filteredSubjects.map((subject) => {
//               const c = colorMap[subject.color];
//               const currentPage = currentPages[subject.id] || 1;
//               const totalPages = Math.ceil(subject.lessons.length / ITEMS_PER_PAGE);
//               const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//               const endIndex = startIndex + ITEMS_PER_PAGE;
//               const paginatedLessons = subject.lessons.slice(startIndex, endIndex);

//               return (
//                 <div key={subject.id} className="mb-14">
//                   <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
//                     {subject.title}
//                   </h2>

//                   <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
//                     {paginatedLessons.map((lesson) => (
//                       <div
//                         key={`${subject.id}-${lesson.id}`}
//                         className={`group bg-white dark:bg-gray-800 rounded-3xl border ${c.border} shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col`}
//                       >
//                         {/* TOP */}
//                         <div className={`px-6 py-5 flex justify-between ${c.iconBg}`}>
//                           <AiOutlineFilePdf className="text-4xl transition group-hover:scale-110" />
//                           <span className={`text-xs px-3 py-1 rounded-full ${c.badge}`}>
//                             FREE
//                           </span>
//                         </div>

//                         {/* BODY */}
//                         <div className="flex flex-col flex-1 p-6">
//                           <h3 className="mb-2 text-lg font-semibold text-gray-900 transition dark:text-white group-hover:text-blue-600">
//                             {lesson.title}
//                           </h3>

//                           <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
//                             {lesson.description}
//                           </p>

//                           {/* SUB */}
//                           <div className="flex-1 mb-6">
//                             <p className="flex items-center gap-2 mb-2 text-xs text-gray-500 dark:text-gray-400">
//                               <AiOutlineBook /> ខ្លឹមសារ
//                             </p>

//                             <ul className="space-y-2">
//                               {lesson.subTopics.map((t, i) => (
//                                 <li
//                                   key={i}
//                                   className="flex gap-2 text-sm text-gray-700 dark:text-gray-300"
//                                 >
//                                   <span className={`w-2 h-2 mt-2 rounded-full ${c.dot}`} />
//                                   {t}
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
                          
//                           {/* BUTTON */}
//                           <div className="mt-auto">
//                             {lesson.type === "document" ? (
//                               <a
//                                 href={lesson.url}
//                                 target="_blank"
//                                 rel="noreferrer"
//                                 className="flex items-center justify-center w-full gap-2 py-3 text-white transition bg-yellow-500 hover:bg-yellow-600 rounded-xl active:scale-95"
//                               >
//                                 <AiOutlineDownload /> ទាញយកឯកសារ
//                               </a>
//                             ) : lesson.type === "exam" ? (
//                               <button
//                                 onClick={() => window.open(lesson.url, "_blank")}
//                                 className="flex items-center justify-center w-full gap-2 py-3 text-white transition bg-red-600 hover:bg-red-700 rounded-xl active:scale-95"
//                               >
//                                 <AiOutlineEye /> {lesson.buttonLabel || "ចូលប្រឡង"}
//                               </button>
//                             ) : (
//                               <div className="flex gap-3">
//                                 <button
//                                   onClick={() => openPdf(lesson.pdf, lesson.title)}
//                                   className="flex items-center justify-center flex-1 gap-2 py-2 text-white transition bg-blue-600 hover:bg-blue-700 rounded-xl active:scale-95"
//                                 >
//                                   <AiOutlineEye /> មើល
//                                 </button>

//                                 <a
//                                   href={lesson.pdf}
//                                   target="_blank"
//                                   rel="noreferrer"
//                                   className="flex items-center justify-center flex-1 gap-2 py-2 text-gray-800 transition bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white rounded-xl active:scale-95"
//                                 >
//                                   <AiOutlineDownload /> Download
//                                 </a>
//                               </div>
//                             )}
//                           </div>                    

//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* PAGINATION PER SUBJECT */}
//                   {totalPages > 1 && (
//                     <div className="flex items-center justify-center gap-4 mb-12">
//                       <button
//                         onClick={() => handlePageChange(subject.id, Math.max(1, currentPage - 1))}
//                         disabled={currentPage === 1}
//                         className="flex items-center gap-2 px-4 py-2 text-gray-900 transition bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700"
//                       >
//                         <AiOutlineLeft /> មុន
//                       </button>

//                       <div className="flex gap-2">
//                         {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                           <button
//                             key={page}
//                             onClick={() => handlePageChange(subject.id, page)}
//                             className={`px-3 py-2 rounded-lg transition ${
//                               currentPage === page
//                                 ? "bg-blue-600 text-white"
//                                 : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
//                             }`}
//                           >
//                             {page}
//                           </button>
//                         ))}
//                       </div>

//                       <button
//                         onClick={() => handlePageChange(subject.id, Math.min(totalPages, currentPage + 1))}
//                         disabled={currentPage === totalPages}
//                         className="flex items-center gap-2 px-4 py-2 text-gray-900 transition bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700"
//                       >
//                         បន្ទាប់ <AiOutlineRight />
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </>
//         ) : (
//           <div className="py-16 text-center">
//             <p className="text-lg text-gray-600 dark:text-gray-400">
//               មិនមានលទ្ធផលដែលត្រូវគ្នា
//             </p>
//           </div>
//         )}
//       </div>

//       {/* MODAL */}
//       {viewPdf && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
//           <div className="bg-white dark:bg-gray-900 w-full max-w-5xl h-[90vh] rounded-2xl overflow-hidden">
//             <div className="flex justify-between p-4 border-b dark:border-gray-700">
//               <h3 className="text-gray-900 dark:text-white">{viewTitle}</h3>
//               <button onClick={closePdf} className="text-gray-600 dark:text-white">
//                 ✕
//               </button>
//             </div>
//             <iframe src={viewPdf} className="w-full h-full" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState, useMemo } from "react";
import {
  AiOutlineFilePdf,
  AiOutlineEye,
  AiOutlineDownload,
  AiOutlineBook,
  AiOutlineSearch,
} from "react-icons/ai";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const subjects = [
  {
    id: 1,
    title: "Microsoft Excel",
    description: "សិក្សាអំពី Microsoft Excel",
    color: "green",
    icon: "📗",
    lessons: [
      {
        id: 1,
        title: "មេរៀនទី៥ សិក្សាអំពីរូបមន្ដនានាក្នុងកម្មវិធី Microsoft office 2026",
        description: "6-Formular : Logical Function",
        subTopics: ["6.1-IF", "6.2-AND & IF + AND", "6.3-OR & IF + OR", "6.4-NOT & IF + NOT", "6.5-IF + AND + OR"],
        pdf: "/Videos/Excel/6-Function/6-Formular  Logical Function.pdf",
      },
      {
        id: 2,
        title: "មេរៀនទី៥ សិក្សាអំពីរូបមន្ដនានាក្នុងកម្មវិធី Microsoft office 2026",
        description: "លំហាត់អនុវត្តលើការប្រើប្រាស់ 6-Formular : Logical Function",
        subTopics: ["6.1-IF", "6.2-AND & IF + AND", "6.3-OR & IF + OR", "6.4-NOT & IF + NOT", "6.5-IF-AND-OR.mp4"],
        pdf: "Videos/Excel/Excercise/6-Excercise.xlsx",
      },
      {
        id: 3,
        title: "មេរៀនទី៥ សិក្សាអំពីរូបមន្ដនានាក្នុងកម្មវិធី Microsoft office 2026",
        description: "7-Formular: Statistical Function",
        subTopics: ["7.1-MAX, MIN", "7.2-AVERAGE", "7.3-COUNT,COUNTA", "7.4-COUNTIF", "7.5-COUNTIFS"],
        pdf: "/Videos/Excel/7-Statistical/7-Formular-Statistical-Function.pdf",
      },
       {
        id: 4,
        title: "មេរៀនទី៥ សិក្សាអំពីរូបមន្ដនានាក្នុងកម្មវិធី Microsoft office 2026",
        description: "លំហាត់អនុវត្តលើការប្រើប្រាស់ 7-Formular: Statistical Function",
        subTopics: ["7.1-MAX, MIN", "7.2-AVERAGE", "7.3-COUNT,COUNTA", "7.4-COUNTIF", "7.5-COUNTIFS"],
        pdf: "Videos/Excel/Excercise/7-Statistical.xlsx",
      },
      {
        id: 5,
        title: "ប្រឡងប្រចាំខែមិថុនា ឆ្នាំ២០២៦",
        description: "ប្រឡងប្រចាំខែមិថុនា ឆ្នាំ២០២៦ សម្រាប់ថ្ន​ាក់ទី១១",
        subTopics: ["7.1-MAX, MIN", "7.2-AVERAGE", "7.3-COUNT", "7.4-COUNTIF", "7.5-COUNTIFS"],
        pdf: "Videos/Excel/Excercise/8-exam.xlsb",
      },
    ],
  },
  {
    id: 2,
    title: "Microsoft Word",
    description: "រៀនប្រើ Word",
    color: "blue",
    icon: "📘",
    lessons: [
      {
        id: 1,
        title: "មេរៀនទី ៤  ការណែនាំអំពីកម្មវិធី Microsoft Word",
        description: "សិក្សាអំពីការគ្រប់គ្រង Object ",
        subTopics: ["១៨.៥ ការរៀបចំលំដាប់ស្រទាប់ (Layer)", "១៨.៦ សិក្សាអំពី Select Pane", "១៨.៧ សិក្សាអំពី Aligment Object", "១៨.៨ សិក្សាអំពី Group Object"],
        pdf: "/Videos/Word/18-Picture1/១៨.ការណែនាំអំពី Microsoft Word.pdf",
      },
      {
        id: 2,
        title: "មេរៀនទី ៤  ការណែនាំអំពីកម្មវិធី Microsoft Word",
        description: "សិក្សាអំពីការគផ្លាស់ប្ដូរទ្រង់ទ្រាយ​ Object ",
        subTopics: ["១៨.៩ ការកំណត់ទិសដៅរូបភាព Picture Rotate", "១៨.១០ ការកាត់រូបភាព Picture Crop", "១៨.១១ សិក្សាអំពី ​ការប្រើអត្ថបទជំនួស Alt Text"],
        pdf: "/Videos/Word/18-Picture2/១៩.ការណែនាំអំពីកម្មវិធី _Microsoft Word.pdf",
      },
      {
        id: 3,
        title: "មេរៀនទី ៤  ការណែនាំអំពីកម្មវិធី Microsoft Word",
        description: "សិក្សាអំពី Shape និងការកែសម្រូលការប្រើប្រាស់ ",
        subTopics: ["1៩-សិក្សាអំពី​ Shape", "១៩.១-ការ Edit Shape", "១៩.២-Shape Style", "១៩.៣-Align Text in Shape","១៩.៤-Text Direction in Shape"," ១៩.៥-Shape Create Link"],
        pdf: "/Videos/Word/19-Shape/19-Shape.pdf",
      },
      {
        id: 4,
        title: "មេរៀនទី ៤  ការណែនាំអំពីកម្មវិធី Microsoft Word",
        description: "សិក្សាអំពី Smart Art និងការកែសម្រូលការប្រើប្រាស់ ",
        subTopics: ["២០-សិក្សាអំពី​ Smart Art", "២០.១-សិក្សាអំពីរបៀប Add Shape", "២០.២-សិក្សាអំពីរបៀប Add Bullets", "២០.៣-សិក្សាអំពីរបៀប Add Text Pane","២០.៤-សិក្សាអំពី Layout និង Color"],
        pdf: "/Videos/Word/20-SmartArt/20-SmartArt.pdf",
      },
      {
      id: 5,
      title: "មេរៀនទី ៤  ការណែនាំអំពីកម្មវិធី Microsoft Word",
      description: "សិក្សាអំពី ការរចនាទំព័រ និងការតុបតែងទំព័រ ",
      subTopics: ["២១.សិក្សាអំពី​ការរចនា និងរៀបចំសន្លឹកកិច្ចការ", " ២១.១ សិក្សា Header និង Footer", "២១.២ សិក្សាអំពី Page Number", "២១.៣ សិក្សាអំពី Word Art","  ២១.៤ សិក្សាអំពី Drop Cap"],
      pdf: "/Videos/Word/21-DesigePage/21-DesingPage.pdf",
     },
     {
      id: 6,
      title: "មេរៀនទី ៤  ការណែនាំអំពីកម្មវិធី Microsoft Word",
      description: "សិក្សាអំពី ការរចនាទំព័រ និងការតុបតែងទំព័រ ",
      subTopics: ["២១.៥-សិក្សាអំពីការសរសេររូបមន្ដគណិតវិទ្យា(Equation)", "២១.៦-សិក្សាអំពីការប្រើប្រាស់និមិត្តសញ្ញា (Symbol)", "២១.៧-សិក្សាអំពី Watermark", "២១.៨-សិក្សាអំពីការដាក់ស៊ុំជុំវិញអត្ថបទ(PageBorder)"],
      pdf: "/Videos/Word/21.1-DesingePage1/21.1-DesignPage2.pdf",
     },
     {
      id: 7,
      title: "មេរៀនទី ៥  ការណែនាំអំពី Internet",
      description: "ការណែនាំអំពី Internet ",
      subTopics: ["១-តើអ្វីទៅជា Internet?", " 2-សេវាកម្ម Internet", "៣-តម្រូវការក្នុងការប្រើប្រាស់ Internet", "៤-កម្មវិធីរុករក Internet Browser","៥-របៀបបើក និងចូលប្រើប្រាស់ Internet Browser","ការណែនាំ interface របស់ Internet Browser"],
      pdf: "/Videos/Word/22-Internet/22-Internet.pdf",
     },
    ],
  },
    {
      id: 3,
      title: "គំរូឯកសារនានា",
      description: "ឯកសារគំរូសម្រាប់គ្រូ និងសិស្ស",
      color: "yellow",
      icon: "📂",
      lessons: [
        {
          id: 1,
          title: "គំរូក្របសៀវភៅក្រដាស A4",
          description: "Soft Microsoft Word Template for A4 Paper Size",
          type: "document", 
          subTopics: [
            "សន្លឹកកិច្ចការ A4",
            "​ប្រើប្រាស់ Shape",
            "ប្រើប្រាស់រូបភាព",
            "ប្រើប្រាស់ Picture Style",
          ],
          url: "/Videos/Other/Document/coverbook/Coverbook0.docx",
        },
           {
          id: 2,
          title: "គំរូក្របសៀវភៅក្រដាស A4",
          description: "Soft Microsoft Word Template for A4 Paper Size",
          type: "document", 
          subTopics: [
            "សន្លឹកកិច្ចការ A4",
            "​ប្រើប្រាស់ Shape",
            "ប្រើប្រាស់រូបភាព",
            "ប្រើប្រាស់ Picture Style",
          ],
          url: "/Videos/Other/Document/coverbook/Coverbook1.docx",
        },
           {
          id: 3,
          title: "គំរូក្របសៀវភៅក្រដាស A4",
          description: "Soft Microsoft Word Template for A4 Paper Size",
          type: "document", 
          subTopics: [
            "សន្លឹកកិច្ចការ A4",
            "​ប្រើប្រាស់ Shape",
            "ប្រើប្រាស់រូបភាព",
            "ប្រើប្រាស់ Picture Style",
          ],
          url: "/Videos/Other/Document/coverbook/Coverbook2.docx",
        },
           {
          id: 4,
          title: "គំរូក្របសៀវភៅក្រដាស A4",
          description: "Soft Microsoft Word Template for A4 Paper Size",
          type: "document", 
          subTopics: [
            "សន្លឹកកិច្ចការ A4",
            "​ប្រើប្រាស់ Shape",
            "ប្រើប្រាស់រូបភាព",
            "ប្រើប្រាស់ Picture Style",
          ],
          url: "/Videos/Other/Document/coverbook/Coverbook3.docx",
        },
        
         {
          id: 5,
          title: "គំរូកាតសិស្សសម្រាប់ពាក់ក",
          description: "Soft Microsoft Word Template for w:5.7 h:7.7 Paper Size",
          type: "document", 
          subTopics: [
            "សន្លឹកកិច្ចការ A4/4",
            "​ប្រើប្រាស់ Shape",
            "ប្រើប្រាស់រូបភាព",
            "ប្រើប្រាស់ Picture Style",
          ],
          url: "/Videos/Other/Document/card/Card.docx",
        },
        {
          id: 7,
          title: "គំរូលិខិតសរសើរ",
          description: "Soft Microsoft Word Template  Paper Size A4",
          type: "document", 
          subTopics: [
            "សន្លឹកកិច្ចការ A4",
            "​ប្រើប្រាស់ Shape",
            "ប្រើប្រាស់រូបភាព",
            "ប្រើប្រាស់ Mail Merge",
          ],
          url: "/Videos/Other/Document/fam/Fam.docx",
        },
        {
          id: 8,
          title: "គំរូ CV ជាភាសាខ្មែរ",
          description: "Soft Microsoft Word Template  Paper Size A4",
          type: "document", 
          subTopics: [
            "សន្លឹកកិច្ចការ A4",
            "​ប្រើប្រាស់ Shape",
            "ប្រើប្រាស់រូបភាព",
            "ប្រើប្រាស់ Links",
          ],
          url: "/Videos/Other/Document/cv/CV.docx",
        },
        {
          id: 9,
          title: "គំរូ វិញ្ញាបនបត្ររដ្ឋបាលសម្រា​ប់គ្រូបង្រៀន",
          description: "Soft Microsoft Word Template  Paper Size A4",
          type: "document", 
          subTopics: [
            "សន្លឹកកិច្ចការ A4",
            "​ប្រើប្រាស់ Shape",
            "បញ្ជាក់ស្ថានភាពការងារ និងការអប់រំ",
            "ប្រើប្រាស់ រូបភាព",
          ],
          url: "/Videos/Other/Document/publicAdministration.dotx",
        },
        {
          id: 10,
          title: "គំរូ មេរៀន Header & Footer",
          description: "Soft Microsoft Word Template  Paper Size A4",
          type: "document", 
          subTopics: [
            "សន្លឹកកិច្ចការ A4",
            "​ប្រើប្រាស់ Shape",
            "Drop Cap",
            "Word Art",
          ],
          url: "/Videos/Other/Document/Computer.docx",
        },
        {
          id: 11,
            title: "គំរូ វិក័យបត្រ Invoice ទី១",
            description: "Soft Microsoft Word Template  Paper Size A4",
            type: "document", 
            subTopics: [
              "សន្លឹកកិច្ចការ A4",
              "​ប្រើប្រាស់ Table",
              "Table Formating",
              "ប្រភព៖ https://t.me/camtechfreeresource",
            ],
          url: "/Videos/Other/Document/invoice/invoice1.docx",
        },
        {
          id: 12,
           title: "គំរូ វិក័យបត្រ Invoice ទី២",
          description: "Soft Microsoft Word Template  Paper Size A4",
          type: "document", 
          subTopics: [
            "សន្លឹកកិច្ចការ A4",
            "​ប្រើប្រាស់ Table",
            "Table Formating",
            "ប្រភព៖ https://t.me/camtechfreeresource",
          ],
          url: "/Videos/Other/Document/invoice/invoice2.docx",
        },
        {
          id: 13,
          title: "គំរូ វិក័យបត្រ Invoice ទី៣",
          description: "Soft Microsoft Word Template  Paper Size A4",
          type: "document", 
          subTopics: [
            "សន្លឹកកិច្ចការ A4",
            "​ប្រើប្រាស់ Table",
            "Table Formating",
            "ប្រភព៖ https://t.me/camtechfreeresource",
          ],
          url: "/Videos/Other/Document/invoice/invoice3.docx"
        },
        {
          id: 14,
          title: "គំរូ វិក័យបត្រ Invoice ទី៤",
          description: "Soft Microsoft Word Template  Paper Size A4",
          type: "document", 
          subTopics: [
            "សន្លឹកកិច្ចការ A4",
            "​ប្រើប្រាស់ Table",
            "Table Formating",
            "ប្រភព៖ https://t.me/camtechfreeresource",
          ],
          url: "/Videos/Other/Document/invoice/invoice4.docx",
        },
        {
          id: 15,
          title: "គំរូ វិក័យបត្រ Invoice ទី៥",
          description: "Soft Microsoft Word Template  Paper Size A4",
          type: "document", 
          subTopics: [
            "សន្លឹកកិច្ចការ A4",
            "​ប្រើប្រាស់ Table",
            "Table Formating",
            "ប្រភព៖ https://t.me/camtechfreeresource",
          ],
          url: "/Videos/Other/Document/invoice/invoice5.docx",
        },
         {
          id: 16,
          title: "គំរូ CV ជាភាសាខ្មែរ គំរូទី១",
          description: "Soft Microsoft Word Template  Paper Size A4",
          type: "document", 
          subTopics: [
            "សន្លឹកកិច្ចការ A4",
            "​ប្រើប្រាស់ Table",
            "Table Formating",
            "ប្រភព៖ https://t.me/camtechfreeresource",
          ],
          url: "/Videos/Other/Document/cv/khmer/KhmerCV1.doc",
        },
        {
          id: 17,
          title: "គំរូ CV ជាភាសាខ្មែរ គំរូទី២",
          description: "Soft Microsoft Word Template  Paper Size A4",
          type: "document", 
          subTopics: [
            "សន្លឹកកិច្ចការ A4",
            "​ប្រើប្រាស់ Table",
            "Table Formating",
            "ប្រភព៖ https://t.me/camtechfreeresource",
          ],
          url: "/Videos/Other/Document/cv/khmer/KhmerCV2.docx",
        },
        {
          id: 18,
          title: "គំរូ CV ជាភាសាខ្មែរ គំរូទី៣",
          description: "Soft Microsoft Word Template  Paper Size A4",
          type: "document", 
          subTopics: [
            "សន្លឹកកិច្ចការ A4",
            "​ប្រើប្រាស់ Table",
            "Table Formating",
            "ប្រភព៖ https://t.me/camtechfreeresource",
          ],
          url: "/Videos/Other/Document/cv/khmer/KhmerCV3.docx",
        },
      ],
    },
    {
      id: 4,
      title: "​ប្រឡង​ប្រចាំខែ",
      description: "ប្រព័ន្ធប្រឡងប្រចាំខែសម្រាប់ថ្នាក់ទី១០ និងទី១១",
      color: "red",
      icon: "📕",
      lessons: [
        {
          id: 1,
          title: "QCM Examination System",
          description: "ប្រព័ន្ធប្រឡង QCM សម្រាប់ថ្នាក់ទី១០ និងទី១១",
          type: "exam",
          buttonLabel: "ចូលប្រឡង",
          subTopics: ["​ប្រព័ន្ធប្រឡងប្រចាំខែសម្រាប់ថ្នាក់ទី១០ និងទី១១","ត្រូវមាន ឈ្មោះ និងលេខសម្ងាត់","ចូលប្រឡងតាមម៉ោងកំណត់"],
          url: "https://qcm.salacode.site/student/dashboard",
        },
        {
          id: 2,
          title: "ប្រព័ន្ធចុះឈ្មោះសិស្ស Google Sheets",
          description: "ផ្ទុ្កកទិន្នន័យសិស្សថ្នាក់ទី១០ ឆ្នាំ២០២៦-២០២៧",
          type: "exam",
          buttonLabel: "ចូលទៅចុះឈ្មោះ",
          subTopics: ["​ប័ណ្ណព័ត៌មានសិស្សថ្នាក់ទី១០ ឆ្នាំ២០២៦-២០២៧","Android App:https://bit.ly/4vUDk6F","រាល់ការកែទិនន្នន័យវានិងបញ្ជូនទៅ bot Telegram ដើម្បីត្រួតពិនិត្យ"],
          url: "https://script.google.com/macros/s/AKfycbwTIWbiUeLZmiHe7Wtb4taCtlFKotb-2EKWZW38W8biyRU7ztcQX1bStnDWSoTCFtsr/exec",
        },
        {
          id: 3,
          title: "ប្រគល់កិច្ចការប្រឡងឆមាសលើកទី2 ឆ្នាំ 2025-2026",
          description: "សម្រាប់ថ្នាក់ទី10ABCDEF11BE",
          type: "exam",
          buttonLabel: "ចូលទៅប្រគល់",
          subTopics: ["ការប្រឡងឆមាសលើកទី២","ប្រគល់កិច្ចការប្រឡង","មើលលទ្ធផលកិច្ចការប្រឡង:https://www.salacode.site/gethomework/ListHomeWork"],
          url: "./gethomework/StudentHomeWork",
        },
      ],
    },
];

const colorMap = {
  green: {
    badge: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300",
    iconBg: "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    border: "border-green-200 dark:border-green-800",
    dot: "bg-green-500",
  },
  blue: {
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
    iconBg: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800",
    dot: "bg-blue-500",
  },
  red: {
    badge: "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300",
    iconBg: "bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    border: "border-red-200 dark:border-red-800",
    dot: "bg-red-500",
  },
   yellow: {
    badge: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300",
    iconBg: "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
    border: "border-yellow-200 dark:border-yellow-800",
    dot: "bg-yellow-500",
  },
};

const ITEMS_PER_PAGE = 6;

// ចាប់យក URL (http/https) ដែលបងក្កប់នៅចុងអត្ថបទ subTopic
// ឧទាហរណ៍៖ "មើលលទ្ធផល:https://..." ឬ "ប្រភព៖ https://..."
const URL_IN_TEXT_REGEX = /^(.*?)[:៖]?\s*(https?:\/\/\S+)$/;

function SubTopicItem({ text, dotClass }) {
  const match = text.match(URL_IN_TEXT_REGEX);

  if (match) {
    const label = match[1].trim();
    const url = match[2];
    return (
      <li className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
        <span className={`w-2 h-2 mt-2 rounded-full ${dotClass} shrink-0`} />
        <span>
          {label && <span>{label}: </span>}
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-blue-600 underline break-all hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            {url}
          </a>
        </span>
      </li>
    );
  }

  return (
    <li className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
      <span className={`w-2 h-2 mt-2 rounded-full ${dotClass} shrink-0`} />
      {text}
    </li>
  );
}

export default function IctPage() {
  const [viewPdf, setViewPdf] = useState(null);
  const [viewTitle, setViewTitle] = useState("");
  const [activeSubject, setActiveSubject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPages, setCurrentPages] = useState({});

  const openPdf = (file, title) => {
    setViewPdf(encodeURI(file));
    setViewTitle(title);
  };

  const closePdf = () => {
    setViewPdf(null);
    setViewTitle("");
  };

  const filteredSubjects = useMemo(() => {
    return subjects
      .filter((s) => activeSubject === null || s.id === activeSubject)
      .map((subject) => ({
        ...subject,
        lessons: subject.lessons.filter((lesson) => {
          const searchLower = searchQuery.toLowerCase();
          return (
            lesson.title.toLowerCase().includes(searchLower) ||
            lesson.description.toLowerCase().includes(searchLower)
          );
        }),
      }))
      .filter((subject) => subject.lessons.length > 0);
  }, [activeSubject, searchQuery]);

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setCurrentPages({});
  };

  const handleSubjectChange = (subjectId) => {
    setActiveSubject(subjectId);
    setCurrentPages({});
  };

  const handlePageChange = (subjectId, page) => {
    setCurrentPages((prev) => ({
      ...prev,
      [subjectId]: page,
    }));
  };

  return (
    <div className="min-h-screen pt-16 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl p-6 mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            ICT Lessons
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            ជ្រើសរើសមេរៀន
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="mb-8">
          <div className="relative">
            <AiOutlineSearch className="absolute text-xl text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
            <input
              type="text"
              placeholder="ស្វាគមន៍មកខ្ញុំ..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-2xl dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* FILTER */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => handleSubjectChange(null)}
            className={`px-5 py-2 rounded-full text-sm transition ${
              activeSubject === null
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            }`}
          >
            ទាំងអស់
          </button>

          {subjects.map((s) => (
            <button
              key={s.id}
              onClick={() => handleSubjectChange(s.id)}
              className={`px-5 py-2 rounded-full text-sm flex items-center gap-2 transition ${
                activeSubject === s.id
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              {s.icon} {s.title}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        {filteredSubjects.length > 0 ? (
          <>
            {filteredSubjects.map((subject) => {
              const c = colorMap[subject.color];
              const currentPage = currentPages[subject.id] || 1;
              const totalPages = Math.ceil(subject.lessons.length / ITEMS_PER_PAGE);
              const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
              const endIndex = startIndex + ITEMS_PER_PAGE;
              const paginatedLessons = subject.lessons.slice(startIndex, endIndex);

              return (
                <div key={subject.id} className="mb-14">
                  <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
                    {subject.title}
                  </h2>

                  <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
                    {paginatedLessons.map((lesson) => (
                      <div
                        key={`${subject.id}-${lesson.id}`}
                        className={`group bg-white dark:bg-gray-800 rounded-3xl border ${c.border} shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col`}
                      >
                        {/* TOP */}
                        <div className={`px-6 py-5 flex justify-between ${c.iconBg}`}>
                          <AiOutlineFilePdf className="text-4xl transition group-hover:scale-110" />
                          <span className={`text-xs px-3 py-1 rounded-full ${c.badge}`}>
                            FREE
                          </span>
                        </div>

                        {/* BODY */}
                        <div className="flex flex-col flex-1 p-6">
                          <h3 className="mb-2 text-lg font-semibold text-gray-900 transition dark:text-white group-hover:text-blue-600">
                            {lesson.title}
                          </h3>

                          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                            {lesson.description}
                          </p>

                          {/* SUB */}
                          <div className="flex-1 mb-6">
                            <p className="flex items-center gap-2 mb-2 text-xs text-gray-500 dark:text-gray-400">
                              <AiOutlineBook /> ខ្លឹមសារ
                            </p>

                            <ul className="space-y-2">
                              {lesson.subTopics.map((t, i) => (
                                <SubTopicItem key={i} text={t} dotClass={c.dot} />
                              ))}
                            </ul>
                          </div>
                          
                          {/* BUTTON */}
                          <div className="mt-auto">
                            {lesson.type === "document" ? (
                              <a
                                href={lesson.url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center w-full gap-2 py-3 text-white transition bg-yellow-500 hover:bg-yellow-600 rounded-xl active:scale-95"
                              >
                                <AiOutlineDownload /> ទាញយកឯកសារ
                              </a>
                            ) : lesson.type === "exam" ? (
                              <button
                                onClick={() => window.open(lesson.url, "_blank")}
                                className="flex items-center justify-center w-full gap-2 py-3 text-white transition bg-red-600 hover:bg-red-700 rounded-xl active:scale-95"
                              >
                                <AiOutlineEye /> {lesson.buttonLabel || "ចូលប្រឡង"}
                              </button>
                            ) : (
                              <div className="flex gap-3">
                                <button
                                  onClick={() => openPdf(lesson.pdf, lesson.title)}
                                  className="flex items-center justify-center flex-1 gap-2 py-2 text-white transition bg-blue-600 hover:bg-blue-700 rounded-xl active:scale-95"
                                >
                                  <AiOutlineEye /> មើល
                                </button>

                                <a
                                  href={lesson.pdf}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="flex items-center justify-center flex-1 gap-2 py-2 text-gray-800 transition bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white rounded-xl active:scale-95"
                                >
                                  <AiOutlineDownload /> Download
                                </a>
                              </div>
                            )}
                          </div>                    

                        </div>
                      </div>
                    ))}
                  </div>

                  {/* PAGINATION PER SUBJECT */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-4 mb-12">
                      <button
                        onClick={() => handlePageChange(subject.id, Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="flex items-center gap-2 px-4 py-2 text-gray-900 transition bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <AiOutlineLeft /> មុន
                      </button>

                      <div className="flex gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <button
                            key={page}
                            onClick={() => handlePageChange(subject.id, page)}
                            className={`px-3 py-2 rounded-lg transition ${
                              currentPage === page
                                ? "bg-blue-600 text-white"
                                : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => handlePageChange(subject.id, Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-2 px-4 py-2 text-gray-900 transition bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        បន្ទាប់ <AiOutlineRight />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </>
        ) : (
          <div className="py-16 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              មិនមានលទ្ធផលដែលត្រូវគ្នា
            </p>
          </div>
        )}
      </div>

      {/* MODAL */}
      {viewPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="bg-white dark:bg-gray-900 w-full max-w-5xl h-[90vh] rounded-2xl overflow-hidden">
            <div className="flex justify-between p-4 border-b dark:border-gray-700">
              <h3 className="text-gray-900 dark:text-white">{viewTitle}</h3>
              <button onClick={closePdf} className="text-gray-600 dark:text-white">
                ✕
              </button>
            </div>
            <iframe src={viewPdf} className="w-full h-full" />
          </div>
        </div>
      )}
    </div>
  );
}