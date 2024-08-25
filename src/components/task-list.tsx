import { useTasks } from '../hooks'
import Loading from './loading'
import Task from './task'

const TastList = () => {
	const [tasks, loading] = useTasks()
	return (
		<section>
			<Loading loading={loading} />
			{tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
		</section>
	)
}

export default TastList