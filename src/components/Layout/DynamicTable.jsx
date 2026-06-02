const DynamicTable = ({ sheetUrl }) => {
  const { data, loading, error } = useGoogleSheetData(sheetUrl);

  if (loading)
    return <div className="p-4 text-center">កំពុងផ្ទុកទិន្នន័យសិស្ស...</div>;
  if (error)
    return <div className="p-4 text-center text-red-500">មានបញ្ហា៖ {error.message}</div>;
  if (!data || data.length === 0)
    return <div className="p-4 text-center">មិនមានទិន្នន័យសិស្ស</div>;

  const columns = Object.keys(data[0]);

  return (
    <div
      style={{
        overflowX: 'auto',
        overflowY: 'auto',
        maxHeight: '600px',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      <table
        style={{
          borderCollapse: 'collapse',
          tableLayout: 'auto',
          width: 'max-content',
          minWidth: '100%',
        }}
        className="text-xs text-left text-gray-600 dark:text-gray-300"
      >
        <thead
          style={{ position: 'sticky', top: 0, zIndex: 10 }}
          className="text-xs font-semibold text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
        >
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                style={{
                  whiteSpace: 'nowrap',
                  padding: '10px 12px',
                  borderRight: '1px solid #d1d5db',
                  borderBottom: '2px solid #d1d5db',
                }}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              style={{
                backgroundColor: idx % 2 === 0 ? '#fff' : '#f9fafb',
                borderBottom: '1px solid #f3f4f6',
              }}
            >
              {columns.map((col) => (
                <td
                  key={`${idx}-${col}`}
                  style={{
                    whiteSpace: 'nowrap',
                    padding: '8px 12px',
                    borderRight: '1px solid #f3f4f6',
                  }}
                >
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};