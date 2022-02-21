import {Input} from "antd"
import { useState } from "react"


export default function NewTask({setTasks}){
    const [newTask, setNewTask] = useState('')

    const handlebuttonsubmit = () =>{
        if(newTask.trim()===''){ //if the new task is empty
            return  //dont do anything
        }
       
 const taskObject={
     task:newTask,
 }

     fetch('https://much-todo-dk.uc.r.appspot.com/tasks',{
         method:'POST',
         headers:{
            'Content-Type':'application/json',
         },
         body: JSON.stringify(taskObject),// this will turn into {'task':'whatever'}
     })
     .then(() => {
         setNewTask('') //clears the submit in the website once put in to do 
     //cool, we added a new task lets update the list
     fetch('https://much-todo-dk.uc.r.appspot.com/tasks')
     .then(response =>response.json())
     .then(data =>setTasks(data))
     .catch(err =>alert(err))
     
    })
 }

 const handleInputText = (event) => {
setNewTask(event.target.value)
 }
return (

    <Input.Search
    value ={newTask}
    placeholder="Enter task name"
    enterButton = 'Add Task'
    size = 'large'
    onSearch={handlebuttonsubmit}
    onChange={event=>handleInputText(event)}/>
  
)

}
