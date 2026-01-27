import React from 'react';

const SideStats = ({ data }) => {
  // If no data, don't show anything
  if (!data) return null;

  // Handle both possible data structures
  const distribution = data.type_distribution || data.type_counts || {};

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
      <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
        Equipment Types
      </h3>
      
      <div className="space-y-3">
        {Object.entries(distribution).map(([type, count]) => (
          <div key={type} className="flex justify-between items-center group">
            <span className="text-sm text-slate-700 dark:text-slate-300 capitalize group-hover:text-blue-500 transition-colors">
              {type}
            </span>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200">
              {count}
            </span>
          </div>
        ))}
        
        {Object.keys(distribution).length === 0 && (
          <p className="text-xs text-slate-400 italic">No type data found</p>
        )}
      </div>
    </div>
  );
};

export default SideStats;