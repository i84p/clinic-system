import { LogOut, UserCircle2 } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { getRoleFromPath, ROLE_LABEL, ROLE_DISPLAY_USER } from '../utils/role.js'

export const Navbar = () => {
  const { pathname } = useLocation()
  const role = getRoleFromPath(pathname)
  const display = role ? ROLE_DISPLAY_USER[role] : null

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-4 md:px-6 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <div>
          <h1 className="text-lg font-bold text-slate-800">نظام إدارة العيادة</h1>
          <p className="text-xs text-slate-500 hidden sm:block">نموذج واجهة — UI Prototype</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {display && (
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
            <UserCircle2 size={20} className="text-primary-600" />
            <div className="text-right">
              <div className="text-sm font-semibold text-slate-800 leading-tight">{display.name}</div>
              <div className="text-xs text-slate-500 leading-tight">{ROLE_LABEL[role]}</div>
            </div>
          </div>
        )}
        <Link
          to="/login"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 transition text-sm font-semibold"
        >
          <LogOut size={16} />
          خروج
        </Link>
      </div>
    </header>
  )
}

export default Navbar
