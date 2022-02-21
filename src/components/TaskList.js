import { useEffect } from 'react';
import { List } from 'antd';
import Task from './Task';

// const fakeTasks = [
//     {id:1,task:'Buy Milk', done: false},
//     {id:2,task:'Buy Beer', done: true},
//     {id:3,task:'Buy Trulys', done: false},
//     {id:4,task:'Drink Wine', done: true},
//     {id:5,task:'Buy Paper Towels', done: false}
// ]

export default function TaskList({tasks,setTasks}){
    useEffect(() => {
            fetch('https://much-todo-dk.uc.r.appspot.com/tasks')
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(alert)
    },[])

    //we need to pass this TASKS => data to the List component
    return(
        <List
        dataSource={tasks}
        size ='large'
        bordered
        renderItem={item => <Task item = {item} />}
        />
    )
}



