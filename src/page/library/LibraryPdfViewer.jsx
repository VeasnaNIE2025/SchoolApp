

import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { saveAs } from 'file-saver';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function LibraryPdfViewer({ pdfUrl, fileName = 'document.pdf' }) {
  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(1);
  const [loadError, setLoadError] = useState(null);
  const [containerWidth, setContainerWidth] = useState(600);
  const containerRef = useRef(null);

  // តាមដានទទឹងប្រអប់ ដើម្បីឱ្យ PDF responsive តាមអេក្រង់
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // នៅពេលបើកឯកសារថ្មី ត្រូវ reset ត្រឡប់ទៅទំព័រ 1 វិញ
  useEffect(() => {
    setPage(1);
    setNumPages(null);
    setLoadError(null);
  }, [pdfUrl]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page <= 1}>
          Prev
        </button>
        <span>Page {page} of {numPages || '—'}</span>
        <button onClick={() => setPage((p) => Math.min(numPages || p + 1, p + 1))} disabled={!numPages || page >= numPages}>
          Next
        </button>
        <button
          onClick={() => saveAs(pdfUrl, fileName)}
          style={{
            marginLeft: 'auto',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: 6,
            cursor: 'pointer',
          }}
        >
          Download
        </button>
      </div>

      <div
        ref={containerRef}
        style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12, background: '#fff' }}
      >
        {loadError ? (
          <div style={{ padding: 24, textAlign: 'center', color: '#b91c1c' }}>
            មិនអាចបើកឯកសារ PDF បានទេ។ សូមព្យាយាមម្ដងទៀត។
          </div>
        ) : (
          <Document
            file={pdfUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            onLoadError={(err) => setLoadError(err)}
            loading={<div style={{ padding: 24, textAlign: 'center' }}>កំពុងផ្ទុក PDF...</div>}
          >
            <Page
              pageNumber={page}
              width={containerWidth ? containerWidth - 32 : 600}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        )}
      </div>
    </div>
  );
}