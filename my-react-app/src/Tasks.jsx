import TaskManager from '../components/TaskManager'
import Card from '../components/Card'

export default function Tasks() {
  return (
    <div className="space-y-6">
      <Card title="Task Manager">
        <TaskManager />
      </Card>
    </div>
  )
}
