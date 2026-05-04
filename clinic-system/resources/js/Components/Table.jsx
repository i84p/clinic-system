export const Table = ({ columns = [], rows = [], emptyText = 'لا توجد بيانات' }) => {
  if (!rows.length) {
    return (
      <div className="text-center py-10 text-slate-500 bg-slate-50 rounded-lg border border-dashed border-slate-200">
        {emptyText}
      </div>
    )
  }
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className="w-full text-sm">
        <thead className="bg-slate-50">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className="text-right px-4 py-3 font-semibold text-slate-600 whitespace-nowrap">
                {c.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={row.id || idx} className="border-t border-slate-100 hover:bg-slate-50/60">
              {columns.map((c) => (
                <td key={c.key} className="px-4 py-3 text-slate-700 whitespace-nowrap">
                  {c.render ? c.render(row) : row[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const Badge = ({ children, color = 'slate' }) => {
  const map = {
    slate:   'bg-slate-100 text-slate-700',
    primary: 'bg-primary-50 text-primary-700',
    amber:   'bg-amber-50 text-amber-700',
    blue:    'bg-blue-50 text-blue-700',
    emerald: 'bg-emerald-50 text-emerald-700',
    rose:    'bg-rose-50 text-rose-700'
  }
  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${map[color]}`}>
      {children}
    </span>
  )
}

export default Table
