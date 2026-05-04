import { NavLink, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, UserPlus, Users, Stethoscope,
  Calendar, ClipboardList, Receipt, ClipboardPlus, FileText,
  HeartPulse
} from 'lucide-react'
import { getRoleFromPath } from '../utils/role.js'

const ITEMS = {
  admin: [
    { to: '/admin',                    label: 'لوحة التحكم',         icon: LayoutDashboard, end: true },
    { to: '/admin/create-doctor',       label: 'إضافة طبيب',           icon: Stethoscope },
    { to: '/admin/create-receptionist', label: 'إضافة موظف استقبال', icon: UserPlus },
    { to: '/admin/users',               label: 'قائمة المستخدمين',    icon: Users }
  ],
  receptionist: [
    { to: '/reception',              label: 'لوحة التحكم',   icon: LayoutDashboard, end: true },
    { to: '/reception/patients',     label: 'المرضى',         icon: Users },
    { to: '/reception/appointments', label: 'المواعيد',        icon: Calendar },
    { to: '/reception/waiting',      label: 'غرفة الانتظار',  icon: ClipboardList },
    { to: '/reception/billing',      label: 'الفواتير',        icon: Receipt }
  ],
  doctor: [
    { to: '/doctor',         label: 'لوحة التحكم',     icon: LayoutDashboard, end: true },
    { to: '/doctor/cases',   label: 'حالات اليوم',     icon: ClipboardPlus },
    { to: '/doctor/records', label: 'السجلات الطبية', icon: FileText }
  ]
}

export const Sidebar = () => {
  const { pathname } = useLocation()
  const role = getRoleFromPath(pathname)
  const items = ITEMS[role] || []

  return (
    <aside className="hidden md:flex md:flex-col h-screen sticky top-0 w-64 bg-white border-l border-slate-200">
      <div className="h-16 px-5 flex items-center gap-2 border-b border-slate-100">
        <div className="w-9 h-9 rounded-lg bg-primary-600 text-white flex items-center justify-center">
          <HeartPulse size={20} />
        </div>
        <div>
          <div className="font-bold text-slate-800 leading-tight">عيادتي</div>
          <div className="text-xs text-slate-500 leading-tight">نظام الإدارة</div>
        </div>
      </div>

      <nav className="p-3 space-y-1 flex-1 overflow-y-auto">
        {items.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition ${
                isActive
                  ? 'bg-primary-50 text-primary-700 border border-primary-100'
                  : 'text-slate-600 hover:bg-slate-100'
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

    </aside>
  )
}

export default Sidebar
