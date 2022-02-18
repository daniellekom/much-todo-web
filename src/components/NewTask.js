import {Input} from "antd"
import { useState } from "react"


export default function NewTask(){
    const [newTask, setNewTask] =useState('')

 const taskObject={
     task:newTask,
 }

 const handlebuttonsubmit = () =>{
     console.log('sending to API')

     fetch('https://much-todo-dk.uc.r.appspot.com/tasks',{
         method:'POST',
         headers:{
            'Content-Type':'application/json',
         },
         body: JSON.stringify(taskObject),
     })
     .then(response => response.json())
     .then(data =>console.log('data was added'))
     .catch(err =>alert(err))
 }

 const handleInputText = (event) => {
setNewTask(event.target.value)
 }

 console.log('newTask state here ->', newTask)

return (
    <>
    <h1> Add new task</h1>
    <Input placeholder="Enter task name" 
    onChange={event=>handleInputText(event)}/>
    <button 
    onClick={handlebuttonsubmit}
     >
    send new task to api 
    </button>

    </>
)

}
