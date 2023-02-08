import {
    useState,
    useEffect
} from 'react'

const initialTodo = {
    text: "",
    state: ""
};

function Header({
    todolist,
    setTodolist
}) {
    const [todo, setTodo] = useState(initialTodo)
    const onChangeInput = (e) => {
        setTodo({
            text: e.target.value,
            state: "active"
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (todo.text === "") {
            console.log("Please enter what to do")
        } else {
            setTodolist((n) => [...n, todo])
        }
    }
    useEffect(() => {
        setTodo(initialTodo)
    }, [todolist])
    return ( <
        >
        <
        h1 className = 'todos' > Todos < /h1> {} <
        form onSubmit = {
            onSubmit
        } >
        <
        input className = "new-todo"
        placeholder = "What needs to be done?"
        autoFocus onChange = {
            onChangeInput
        }
        value = {
            todo.text
        }
        /> <
        /form> <
        />
    )
}

export default Header