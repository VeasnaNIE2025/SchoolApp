import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { saveAs } from 'file-saver';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function LibraryPdfViewer({ pdfUrl, fileName = 'document.pdf' }) {
  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page <= 1}>Prev</button>
        <span>Page {page} of {numPages || '—'}</span>
        <button onClick={() => setPage((p) => p + 1)} disabled={!numPages || page >= numPages}>Next</button>
        <button
          onClick={() => saveAs(pdfUrl, fileName)}
          style={{ marginLeft: 'auto', background: '#2563eb', color: 'white', border: 'none', padding: '8px 12px', borderRadius: 6, cursor: 'pointer' }}
        >
          Download
        </button>
      </div>

      <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12, background: '#fff' }}>
        <Document file={pdfUrl} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
          <Page pageNumber={page} width={700} />
        </Document>
      </div>
    </div>
  );
}
