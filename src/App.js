import './App.css';
import Footer from './Components/Footer/index';
import Header from './Components/Header/index';
import List from './Components/List/index';
import {
    useState
} from 'react';



function App() {

    const [todolist, setTodolist] = useState([])
    const [situation, setSituation] = useState("All")
    return ( <
        div className = "App" >
        <
        Header todolist = {
            todolist
        }
        setTodolist = {
            setTodolist
        }
        /> <
        List todolist = {
            todolist
        }
        setTodolist = {
            setTodolist
        }
        situation = {
            situation
        }
        /> <
        Footer situation = {
            situation
        }
        setSituation = {
            setSituation
        }
        todolist = {
            todolist
        }
        setTodolist = {
            setTodolist
        }
        /> <
        /div>
    );
}

export default App;