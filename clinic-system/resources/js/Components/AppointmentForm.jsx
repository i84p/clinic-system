import Card from './Card.jsx'
import { Select, Input } from './Input.jsx'
import Button from './Button.jsx'
import { Calendar } from 'lucide-react'
import { PATIENTS, DEPARTMENTS, DOCTORS } from '../mockData.js'

export const AppointmentForm = () => {
  return (
    <Card title="حجز موعد جديد" icon={<Calendar size={20} />} subtitle="اختر القسم ثم الطبيب ثم وقت الموعد (نموذج عرض فقط)">
      <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Select label="المريض">
          <option value="">-- اختر المريض --</option>
          {PATIENTS.map((p) => (
            <option key={p.id} value={p.id}>{p.name} - {p.phone}</option>
          ))}
        </Select>

        <Select label="القسم">
          <option value="">-- اختر القسم --</option>
          {DEPARTMENTS.map((d) => <option key={d} value={d}>{d}</option>)}
        </Select>

        <Select label="الطبيب">
          <option value="">-- اختر الطبيب --</option>
          {DOCTORS.map((d) => <option key={d.id} value={d.id}>{d.name} ({d.department})</option>)}
        </Select>

        <Input label="التاريخ" type="date" />
        <Input label="الوقت" type="time" />

        <div className="lg:col-span-3 flex items-center justify-between gap-3 pt-2">
          <span className="text-xs text-slate-500">هذا نموذج واجهة — لن يتم حفظ الموعد.</span>
          <Button type="submit">حجز الموعد</Button>
        </div>
      </form>
    </Card>
  )
}

export default AppointmentForm
