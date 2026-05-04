import Card from './Card.jsx'
import Table, { Badge } from './Table.jsx'
import Button from './Button.jsx'
import { Clock } from 'lucide-react'
import { WAITING, APPOINTMENTS, PATIENTS, DOCTORS } from '../mockData.js'

export const WaitingList = ({ doctorId, showActionButton = false }) => {
  let entries = WAITING
    .map((w) => {
      const app = APPOINTMENTS.find((a) => a.id === w.appointmentId)
      if (!app) return null
      const patient = PATIENTS.find((p) => p.id === app.patientId)
      const doctor  = DOCTORS.find((d)  => d.id === app.doctorId)
      return { id: w.id, wait: w, app, patient, doctor }
    })
    .filter(Boolean)

  if (doctorId) entries = entries.filter((e) => e.app.doctorId === doctorId)

  const columns = [
    { key: 'patient',    title: 'المريض',  render: (r) => r.patient?.name || '-' },
    { key: 'doctor',     title: 'الطبيب',  render: (r) => r.doctor?.name || '-' },
    { key: 'department', title: 'القسم',   render: (r) => r.app.department },
    { key: 'time',       title: 'الموعد',  render: (r) => `${r.app.date} - ${r.app.time}` },
    { key: 'arrived',    title: 'الحالة',  render: () => <Badge color="amber">في الانتظار</Badge> },
    ...(showActionButton ? [{
      key: 'action', title: 'إجراء',
      render: () => <Button size="sm" variant="primary">بدء الجلسة</Button>
    }] : [])
  ]

  return (
    <Card title="غرفة الانتظار" icon={<Clock size={20} />} subtitle="المرضى الذين تم تأكيد حضورهم">
      <Table columns={columns} rows={entries} emptyText="لا يوجد مرضى في غرفة الانتظار حالياً" />
    </Card>
  )
}

export default WaitingList
