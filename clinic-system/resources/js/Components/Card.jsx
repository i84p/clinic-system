export const Card = ({ title, subtitle, icon, action, children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-card border border-slate-100 p-5 ${className}`}>
    {(title || action) && (
      <div className="flex items-start justify-between mb-4 gap-3">
        <div className="flex items-center gap-3">
          {icon && <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center">{icon}</div>}
          <div>
            {title && <h3 className="text-lg font-bold text-slate-800">{title}</h3>}
            {subtitle && <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>}
          </div>
        </div>
        {action}
      </div>
    )}
    {children}
  </div>
)

export const StatCard = ({ icon, label, value, color = 'primary' }) => {
  const colors = {
    primary: 'bg-primary-50 text-primary-700',
    blue:    'bg-blue-50 text-blue-700',
    amber:   'bg-amber-50 text-amber-700',
    rose:    'bg-rose-50 text-rose-700',
    emerald: 'bg-emerald-50 text-emerald-700'
  }
  return (
    <div className="bg-white rounded-xl shadow-card border border-slate-100 p-5 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colors[color]}`}>{icon}</div>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="text-2xl font-bold text-slate-800">{value}</p>
      </div>
    </div>
  )
}

export default Card
