import { Header } from "./components/Header"
import { TaskList } from "./components/TaskList"
import { v4 as uuidv4 } from 'uuid';


import './global.css'

const newTasks = [
    {
        id: uuidv4(),
        title: 'Estudar ReactJS',
        isCompleted: true
    },
    {
        id: uuidv4(),
        title: 'Estudar typeScript',
        isCompleted: false
    },
    {
        id: uuidv4(),
        title: 'Aprender cada vez mais',
        isCompleted: true
    }
]

function App() {
    return (
        <>
            <Header />
            <TaskList/>
        </>
    )
}

export default App
