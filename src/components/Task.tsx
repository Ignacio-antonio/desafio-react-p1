import styles from './Task.module.css'
import { Trash } from 'phosphor-react';

interface TodosProps {
    id: string;
    title: string;
    isCompleted: Boolean;
    onChangeIsComplete: (id: string) => void;
    isDeleted: (id: string) => void;
}


export function Task({ id, title, isCompleted, onChangeIsComplete, isDeleted }: TodosProps) {

    function handleChangeIsComplete() {
        onChangeIsComplete(id)
    }
    
    function handleChangeIsDeleted() {
        isDeleted(id)
    }

    return (
        <div>
            <ul>
                <li className={styles.listAll}>
                    <div className={styles.tasks}>

                        <input 
                            title="checkbox"    
                            type="checkbox"
                            onClick={handleChangeIsComplete}
                            id={id}
                        />

                        <label>
                            <p>{title}</p>
                        </label>
                        <button
                            type="button"
                            id={id}
                            onClick={handleChangeIsDeleted}
                            title="delete">
                            <Trash size={24}/>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}