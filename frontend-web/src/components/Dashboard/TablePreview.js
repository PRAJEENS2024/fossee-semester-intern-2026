import React from 'react';

const TablePreview = ({ data }) => {
  // If no data is uploaded yet, hide the table
  if (!data || data.length === 0) return null;

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md mt-6 border border-slate-200 dark:border-slate-700">
      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
        Data Preview
      </h3>
      
      <div className="overflow-x-auto">
        <div className="max-h-96 overflow-y-auto border border-slate-200 dark:border-slate-700 rounded-lg">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
            <thead className="bg-slate-50 dark:bg-slate-700 sticky top-0">
              <tr>
                {/* Dynamic Headers */}
                {Object.keys(data[0]).map((key) => (
                  <th
                    key={key}
                    className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider"
                  >
                    {key.replace(/_/g, ' ')}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
              {data.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  {Object.values(row).map((val, i) => (
                    <td
                      key={i}
                      className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 dark:text-slate-300"
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="text-xs text-slate-400 mt-2 text-right">
        Showing {data.length} records
      </div>
    </div>
  );
};

export default TablePreview;