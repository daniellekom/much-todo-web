//if u type open . it opens folders from terminal. like code . but for folders
//cd into  much-todo-web
//use library ant.design
//npm i antd in terminal
//in index.js  import 'antd/dist/antd.css'
//index.html change title to Much Todo 
//create a file called components/Main.js which creates a folder for components
//in main.js export default function main w return of much to do 
//app.js remove imports and add import Main from "./components/Main"
//app.js delete everyting in function app besides the return and add <Main/>
//npm start to see 
//go to ant.desgin type list in ctrl f go to large size click on code <>
//open a new file in componenets called TaskList.js
//import in tasklist.js  import {list} from antd
//in tasklist.js export function tasklist with return <List/>
//tasklist.js create const tasks with array of tasks made up rn "making our own fake data"
//in our list we want to start passing in props in tasklist.js so bordered is a prop
//add dataSource and pass in {tasks} for taskList.js add renderItem(item=>)
//in render item we want to return a list of items for taskList.js its gonna go in like a map to list all our items
//we want to display the item task to item.task in list.item
//we want to import TaskList in Main.js 
//and manually call TaskList in return on main.js so it will run on localhost
//in tasklist.js create 5 cursers next to tasks of id:1,2,3,4,5 by option click on { for all and 1, 2,
// pull list.item out of tasklist.js and create a new file in components folder called task.js  add it there 
//also import {list} from antd and export default function task into Task.js with return of <list.item
//import Task from './Task' into TaskList.js
//in TaskList.js add <Task item={item} in item =>
// in tasklist.js import use state and use effect and create a state variable const tasks,setTasks = usestate
//tasklist.js change const tasks to fake tasks and add it to usestate
//we changed name bc u cant have two tasks
//import use state use effect in task.js and create a state variable itemStyle
//add style= {itemstyle} in list.item in task.js check in localhost that nothing is broken
//add useEffect(() => {}, []) in task.js and add a dependency called item inside
//inside useEffect add  => if(item.done) with else statement 
//in tasklist.js change id 2 and 4 to true and go to localhost see if its crossed out
//in tasklist.js we want to get tasks from api by using useEffect(()=>{},[])
//use fetch .then .catch to call our api in tasklist.js
//get url by opening terminal and cd .. then cd much-todo-api into much-todo-api/
//if i dont know my url in termanal type gcloud app browse 
//if dont work go to ur api folder in package.json  "start": "node./index.js",
//do gcloud app deploy
// in fetch on tasklist.js add url ('https://much-todo-dk)
//do a catch alert and in then response =>response.json(() tasklist.js
//wtvr data comes back add in .then (data=>setTasks(data)) tasklist.js
//go to postman copy url link and create in collection todo-app-api
//open it up w arrow  and add a request type create new Task and make it a post
//past link w /task next to post click on body/raw go to dropdown text and make it json
//make {} in body u look in muchtodoAPI folder in tasks.js u will see its requesting body.task thats what u pass in
//add "task":"happy hour with friends" and press send check localhost
//create a file in componenents called newTask.js to add new data to the system 
//export default NewTask with return
// import NewTask from './newTask' to main.js
//import {Input} from "antd" from Ant.design 
//in Main.js add <Newtask />
//and <input/> into function of NewTask.js w fragments 
//add placeholder="enter task name" in input on newtask.js
//in newtask.js do const[task,setTask]= useState() make sure its imported on top
//delete app.test and logo from bar
//add an onChange={event =>console.log(event.target.value)} in newtask.js to test 
//were gonna create a new tas in newtask.js const taskObject ={task:this is my new task}
//create button to send new task to API on newtask.js with an onclick () => console.log('pressing here')
//create a handlebuttonsubmit function in newtask.js for the button
//in onclick replace console.log w {handlebuttonsubmit}
//create a fetch() in newtask.js with the address of API our url from tasklist.js
//include .then and .catch and include method and headers in newtask.js
//fill in the .then and body.json.strigify in newtask.js
//newtask.js add taskObject in body JSON.strigify
//newtask.js create const handleinputtext = (event ) and pass it in onchange
//create a console.log newTask in newtask.js
//add newTask to task: on newTask.js
//in newtask.js remove the extra .then and the 1 .then just leave it blank
//in taskList cut usestate  and paste it in main.js and add import {useState} in react
//keep useeffect import in tasklist.js
//also add in main.js in the return the tasks = {tasks} setTasks = {setTasks}
//in main add set task in <NewTask becasue it is also ca child component and we are passing it in
//in newtask.js pull in setTasks from main into the function bc we are destructoring
//when we have curly braces and we are pulling out of the props its called destructoring
//now we need to use our set tasks in newtask.js in then. get back a (()"result" => we r going to refetch our entire list of tasks
//add value ={newTask} to newTask.js in input placeholder in .then put setNewTask('') to make the website clear once u post task
//in newtask.js add if statement in handlbuttonsumbit with a return so when u click submit it doesnt send empty fields
// in Newtask.js add ant.design input search replace return elements on bottom w onsearch =handlebuttonsubmit etc
//edit list element in return field in tasklist.js go to ant.design get the size border, render item = from input 
//command P to switch folders and import from antd import menu,layout
//create a higherorder component <layout> to app.js its a higher order component bc its wrapping the whole thing
//inside header of layout on APP.js write Much to Do and add color white so we can see text
//Add layout.content in app.js create a const styles above app to make it neater and styles.header for each line in return
