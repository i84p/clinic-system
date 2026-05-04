export const Input = ({ label, error, className = '', ...rest }) => {
  return (
    <label className="block">
      {label && <span className="block mb-1.5 text-sm font-semibold text-slate-700">{label}</span>}
      <input
        {...rest}
        className={`w-full px-3 py-2.5 rounded-lg border ${error ? 'border-red-400' : 'border-slate-300'} bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition ${className}`}
      />
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}

export const Select = ({ label, children, className = '', ...rest }) => {
  return (
    <label className="block">
      {label && <span className="block mb-1.5 text-sm font-semibold text-slate-700">{label}</span>}
      <select
        {...rest}
        className={`w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition ${className}`}
      >
        {children}
      </select>
    </label>
  )
}

export const Textarea = ({ label, className = '', ...rest }) => {
  return (
    <label className="block">
      {label && <span className="block mb-1.5 text-sm font-semibold text-slate-700">{label}</span>}
      <textarea
        {...rest}
        className={`w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition ${className}`}
      />
    </label>
  )
}

export default Input
