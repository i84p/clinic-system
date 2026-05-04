import Card from './Card.jsx'
import Input from './Input.jsx'
import Button from './Button.jsx'
import { UserPlus } from 'lucide-react'

export const PatientForm = () => {
  return (
    <Card title="إضافة مريض جديد" icon={<UserPlus size={20} />} subtitle="أدخل بيانات المريض الأساسية (نموذج عرض فقط)">
      <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input label="الاسم الكامل" placeholder="مثال: محمد علي" />
        <Input label="رقم الجوال" placeholder="05XXXXXXXX" />
        <Input label="العمر" type="number" min={1} max={130} placeholder="مثال: 30" className="no-spinner" />
        <div className="md:col-span-3 flex items-center justify-between gap-3">
          <span className="text-xs text-slate-500">هذا نموذج واجهة — لن يتم حفظ البيانات.</span>
          <Button type="submit">إضافة المريض</Button>
        </div>
      </form>
    </Card>
  )
}

export default PatientForm
