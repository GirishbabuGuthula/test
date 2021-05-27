import React, { useState } from 'react';

import './todoapp.css';

function TodoApp(){ 
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const addTask = () => {
        if(task !== ""){
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                value: task,
                isCompleted: false
            }
            setTaskList([...taskList, taskDetails]);
        }
    };

    const deleteTask = (e, id) => {
        e.preventDefault();
        setTaskList(taskList.filter((t) => t.id !== id))
    };

    const completedTask = (e, id) => {
        e.preventDefault();
        const element = taskList.findIndex(el => el.id === id);
        const newTaskList = [...taskList];
        newTaskList[element] = {
            ...newTaskList[element],
            isCompleted: true
        }
        setTaskList(newTaskList);
    }

    return(
        <div className="todo">
            <input 
                type='text' 
                name='text' 
                id='text' 
                onChange={(e) => handleChange(e)} 
                placeholder='Add your text here...' />
            <button className="add-btn" onClick={addTask}>Add Task</button>
            <br/> 
            {
                taskList !== [] ? 
                <ul>
                    {taskList.map(t => 
                        <li key={t.id} className={t.isCompleted ? "crossText" : null}>
                            {t.value}
                            <button className="completed" onClick={(e) => completedTask(e, t.id)}>Completed</button>
                            <button className="delete" onClick={(e) => deleteTask(e, t.id)}>Delete</button>
                        </li>
                    )}
                </ul>
                :null
            }
        </div>
    );
}

export default TodoApp;