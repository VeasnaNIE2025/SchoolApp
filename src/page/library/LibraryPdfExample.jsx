import LibraryPdfViewer from './LibraryPdfViewer';

export default function LibraryPdfExample() {
  return (
    <div style={{ padding: 24 }}>
      <h2>Library PDF Preview</h2>
      <LibraryPdfViewer pdfUrl="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" fileName="sample.pdf" />
    </div>
  );
}
  