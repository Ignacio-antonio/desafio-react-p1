import { v4 as uuidv4 } from 'uuid';
import styles from "./TaskList.module.css"

import clipboard from '../assets/clipboard.svg'
import { ChangeEvent, FormEvent, useState } from 'react';
import { Task } from './Task';

interface TaskProps {
    id: string;
    title: string;
    isCompleted: boolean;
}


export function TaskList(){
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [completedTasks, setCompletedTasks] = useState(Number);
    const [textTask, setTextTask] = useState('');

    const createNewTask = (event: FormEvent) => {
        event.preventDefault();

        if(!textTask) {
            alert('Preencha o campo!');
            return
        }

        const newTask = 
        {
        id: uuidv4(),
        title: textTask,
        isCompleted: false,
        }
        setTasks([...tasks, newTask])

        setTextTask('')
    }

    function handleTextChange(event: ChangeEvent<HTMLInputElement>){
        setTextTask(event.target.value)
    }

    function handleCompletedTasks() {
        let count = 0;
        tasks.filter(task => {
            if(task.isCompleted === true) {
                count ++;
            }
        })
        setCompletedTasks(count)
    };

    function changeIsComplete(id: string) {
        tasks.map(task => {
            if (task.id === id ) {
                task.isCompleted = !task.isCompleted
            }
        })
        handleCompletedTasks()
    }

    function changeIsDeleted(id: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id !== id
        });
        tasks.map(task => {
            if(task.id === id && task.isCompleted === true) {
                changeIsComplete(id)
            }
        })

        setTasks(tasksWithoutDeletedOne)
    }


    return (
        <>
            <main>
                <form onSubmit={createNewTask} className={styles.container}>
                    <input
                        name="task"
                        type="text" 
                        placeholder="Adicione uma nova tarefa"
                        value={textTask} 
                        onChange={handleTextChange}
                    />
                    
                    <button type='submit'>Criar</button>
                </form>

                <div className={styles.infoContent}>
                    <section className={styles.contentView}>
                        <div className={styles.counter}>
                            <p>Tarefas criadas</p>
                            <span>{tasks.length}</span>
                        </div>
                        
                        <div className={styles.counterTwo}>
                            <p>Concluídas</p>
                            <span>{completedTasks} de {tasks.length}</span>
                        </div>
                    </section>
                </div>
            </main>

            {tasks.length > 0 ? (
                tasks.map(task => {
                    return (
                        <Task 
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            onChangeIsComplete={changeIsComplete}
                            isCompleted={task.isCompleted}
                            isDeleted={changeIsDeleted}
                        />
                    )
                })
            ) : (
                <article className={styles.tasksEmpty}>
                <div className={styles.tasksContainer}>
                    <img src={clipboard} alt="clipboard" />
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
            </article> 
            ) };

           
        </>
    )
}


            