import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { saveAs } from 'file-saver';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function PdfPreview({ fileUrl, fileName = 'document.pdf' }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

  const handleDownload = () => {
    saveAs(fileUrl, fileName);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <style>{`
        .react-pdf__Page__canvas {
          width: 100% !important;
          height: auto !important;
        }
      `}</style>

      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="flex items-center gap-2 text-sm text-[#2B2620] dark:text-slate-200">
          <button
            onClick={() => setPageNumber((prev) => Math.max(1, prev - 1))}
            disabled={pageNumber <= 1}
            className="px-3.5 py-2 rounded-lg border border-[#D4CBBF] dark:border-slate-700 bg-[#F7F2E8] dark:bg-slate-800 text-[#2B2620] dark:text-slate-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-50 dark:hover:bg-slate-700 transition-colors"
          >
            ស្វែងមុន
          </button>
          <span className="font-medium">ទំព័រ {pageNumber} នៃ {numPages || '—'}</span>
          <button
            onClick={() => setPageNumber((prev) => Math.min(numPages || prev + 1, prev + 1))}
            disabled={!numPages || pageNumber >= numPages}
            className="px-3.5 py-2 rounded-lg border border-[#D4CBBF] dark:border-slate-700 bg-[#F7F2E8] dark:bg-slate-800 text-[#2B2620] dark:text-slate-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-50 dark:hover:bg-slate-700 transition-colors"
          >
            បន្ទាប់
          </button>
        </div>

      </div>

      <div className="border border-[#D4CBBF] dark:border-slate-700 rounded-3xl overflow-hidden bg-[#FCFAF4] dark:bg-slate-900/60 p-2 md:p-4 flex justify-center w-full">
        <div className="w-full max-w-full overflow-hidden flex justify-center">
          <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess} className="w-full flex justify-center">
            <Page pageNumber={pageNumber} width={800} />
          </Document>
        </div>
      </div>
    </div>
  );
}
