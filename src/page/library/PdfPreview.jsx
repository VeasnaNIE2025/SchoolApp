
import { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { saveAs } from 'file-saver';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function PdfPreview({ fileUrl, fileName = 'document.pdf' }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(600);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

  const handleDownload = () => {
    saveAs(fileUrl, fileName);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <style>{`
        .react-pdf__Page__canvas {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain;
        }
        .react-pdf__Page {
          display: flex !important;
          justify-content: center;
          align-items: center;
        }
        .pdf-doc-wrapper {
          display: flex !important;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
      `}</style>

      {/* ប៊ូតុងគ្រប់គ្រងទំព័រ */}
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

      {/* 👇👇👇 នេះជាកន្លែងបន្ថែម/ជំនួស — A4 aspect-ratio container 👇👇👇 */}
      <div
        ref={containerRef}
        className="border border-[#D4CBBF] dark:border-slate-700 rounded-3xl bg-[#FCFAF4] dark:bg-slate-900/60 p-2 md:p-4 w-full mx-auto"
        style={{
          aspectRatio: '1 / 1.4142',
          maxWidth: '700px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className="pdf-doc-wrapper"
        >
          <Page
            pageNumber={pageNumber}
            width={containerWidth ? containerWidth - 32 : 600}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
      {/* 👆👆👆 ចប់ត្រង់នេះ 👆👆👆 */}
    </div>
  );
}

