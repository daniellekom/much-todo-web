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