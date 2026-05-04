import Card from './Card.jsx'
import Table, { Badge } from './Table.jsx'
import Button from './Button.jsx'
import Input from './Input.jsx'
import { Receipt } from 'lucide-react'
import { APPOINTMENTS, INVOICES, PATIENTS, DOCTORS } from '../mockData.js'

export const InvoicePanel = () => {
  const completedAppointments = APPOINTMENTS
    .filter((a) => a.status === 'completed' && !INVOICES.find((i) => i.appointmentId === a.id))

  const enriched = INVOICES.map((i) => {
    const app     = APPOINTMENTS.find((a) => a.id === i.appointmentId)
    const patient = app ? PATIENTS.find((p) => p.id === app.patientId) : null
    const doctor  = app ? DOCTORS.find((d) => d.id === app.doctorId) : null
    return { ...i, app, patient, doctor }
  })

  const pendingCols = [
    { key: 'patient', title: 'المريض', render: (r) => {
      const p = PATIENTS.find((x) => x.id === r.patientId)
      return p?.name || '-'
    }},
    { key: 'doctor', title: 'الطبيب', render: (r) => {
      const d = DOCTORS.find((x) => x.id === r.doctorId)
      return d?.name || '-'
    }},
    { key: 'date',   title: 'التاريخ', render: (r) => `${r.date} ${r.time}` },
    { key: 'amount', title: 'المبلغ',  render: () => <Input type="number" placeholder="0.00" className="w-28 no-spinner" /> },
    { key: 'action', title: 'إجراء',  render: () => <Button size="sm">إنشاء فاتورة</Button> }
  ]

  const invoiceCols = [
    { key: 'patient', title: 'المريض', render: (r) => r.patient?.name || '-' },
    { key: 'doctor',  title: 'الطبيب',  render: (r) => r.doctor?.name  || '-' },
    { key: 'amount',  title: 'المبلغ',  render: (r) => `${r.amount.toFixed(2)} ر.س` },
    { key: 'status',  title: 'الحالة',  render: (r) => (
      <Badge color={r.status === 'paid' ? 'emerald' : 'amber'}>
        {r.status === 'paid' ? 'مدفوعة' : 'معلقة'}
      </Badge>
    )},
    { key: 'action', title: 'إجراء', render: (r) => (
      r.status === 'pending'
        ? <Button size="sm" variant="success">تأشير كمدفوعة</Button>
        : <span className="text-emerald-600 text-sm">تم الدفع</span>
    )}
  ]

  return (
    <div className="space-y-6">
      <Card
        title="جلسات بحاجة لإصدار فاتورة"
        icon={<Receipt size={20} />}
        subtitle="إنشاء الفاتورة بعد انتهاء الجلسة الطبية (عرض فقط)"
      >
        <Table columns={pendingCols} rows={completedAppointments} emptyText="لا توجد جلسات منتهية بدون فاتورة" />
      </Card>

      <Card title="جميع الفواتير" subtitle="إدارة حالة الدفع">
        <Table columns={invoiceCols} rows={enriched} emptyText="لم يتم إنشاء أي فاتورة بعد" />
      </Card>
    </div>
  )
}

export default InvoicePanel
