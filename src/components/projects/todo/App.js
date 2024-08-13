import './App.css';
import { useState, useEffect } from 'react';
import Switch from "react-switch";
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import TaskContainer from './Components/TaskContainer';

function App() {
  const [tasks, setTasks] = useState([]);
  const [dark, setDark] = useState(true);
  
  useEffect(() => {
    let myTodo = localStorage.getItem('myTodoTasks');
    if (myTodo) {
      setTasks(JSON.parse(myTodo));
    }
  }, []);

  return (
    <div className={`${dark ? 'bg-gray-900 text-white' : 'bg-amber-100'} w-full min-h-screen pt-14 text-center`}>
      <div className={`py-6 mb-4 ${dark ? 'bg-gray-800' : 'bg-amber-100'}`}>
        <h1 className="font-bold text-3xl">ToDo App</h1>
      </div>
      <Switch
        checked={dark}
        onChange={() => setDark(!dark)}
        uncheckedIcon={<div className="pt-1 pl-1.5"><BsSunFill size={18} /></div>}
        checkedIcon={<div className="pt-1 pl-1.5"><BsFillMoonStarsFill size={18} /></div>}
      />
      <TaskContainer tasks={tasks} setTasks={setTasks} dark={dark} />
    </div>
  );
}

export default App;
