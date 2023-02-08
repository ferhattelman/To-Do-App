import React from "react"

let isActive = false

function List({
    todolist,
    setTodolist,
    situation
}) {
    return ( <
            >
            <
            section className = "main" >
            <
            input className = "toggle-all"
            type = "checkbox" / > {} <
            label htmlFor = "toggle-all"
            onClick = {
                () => {
                    if (!isActive) {
                        const newArray = [...todolist]
                        newArray.map((item) => {
                            item.state = "inactive"
                        })
                        setTodolist([...newArray])
                        isActive = true
                    } else {
                        const newArray = [...todolist]
                        newArray.map((item) => {
                            item.state = "active"
                        })
                        setTodolist([...newArray])
                        isActive = false
                    }

                }
            } >

            <
            /label>

            <
            ul className = "todo-list" > {
                todolist.map((item, index) => {
                        if (situation === "All") {
                            if (item.state === "active") {
                                return ( <
                                    li key = {
                                        index
                                    } >
                                    <
                                    div className = "view" >
                                    <
                                    input className = "toggle"
                                    type = "checkbox"
                                    checked = {
                                        false
                                    }
                                    onChange = {
                                        () => {
                                            const newArray = [...todolist]
                                            newArray[index].state = "inactive"
                                            setTodolist([...newArray])
                                        }
                                    }
                                    /> <
                                    label > {
                                        item.text
                                    } < /label> <
                                    button className = "destroy"
                                    onClick = {
                                        () => {
                                            const newArray = [...todolist]
                                            newArray.splice(index, 1)
                                            setTodolist([...newArray])
                                        }
                                    } > < /button> <
                                    /div> <
                                    /li>)
                                }
                                else {
                                    return ( <
                                        li className = "completed"
                                        key = {
                                            index
                                        } >
                                        <
                                        div className = "view" >
                                        <
                                        input className = "toggle"
                                        type = "checkbox"
                                        checked = {
                                            true
                                        }
                                        onChange = {
                                            () => {
                                                const newArray = [...todolist]
                                                newArray[index].state = "active"
                                                setTodolist([...newArray])
                                            }
                                        }
                                        /> <
                                        label > {
                                            item.text
                                        } < /label> <
                                        button className = "destroy"
                                        onClick = {
                                            () => {
                                                const newArray = [...todolist]
                                                newArray.splice(index, 1)
                                                setTodolist([...newArray])
                                            }
                                        } > < /button> <
                                        /div> <
                                        /li>)
                                    }
                                } else if (situation === "Active") {
                                    if (item.state === "active") {
                                        return ( <
                                            li key = {
                                                index
                                            } >
                                            <
                                            div className = "view" >
                                            <
                                            input className = "toggle"
                                            type = "checkbox"
                                            checked = {
                                                false
                                            }
                                            onChange = {
                                                () => {
                                                    const newArray = [...todolist]
                                                    newArray[index].state = "inactive"
                                                    setTodolist([...newArray])
                                                }
                                            }
                                            /> <
                                            label > {
                                                item.text
                                            } < /label> <
                                            button className = "destroy"
                                            onClick = {
                                                () => {
                                                    const newArray = [...todolist]
                                                    newArray.splice(index, 1)
                                                    setTodolist([...newArray])
                                                }
                                            } > < /button> <
                                            /div> <
                                            /li>)
                                        }
                                    } else {
                                        if (item.state === "inactive") {
                                            return ( <
                                                li className = "completed"
                                                key = {
                                                    index
                                                } >
                                                <
                                                div className = "view" >
                                                <
                                                input className = "toggle"
                                                type = "checkbox"
                                                checked = {
                                                    true
                                                }
                                                onChange = {
                                                    () => {
                                                        const newArray = [...todolist]
                                                        newArray[index].state = "active"
                                                        setTodolist([...newArray])
                                                    }
                                                }
                                                /> <
                                                label > {
                                                    item.text
                                                } < /label> <
                                                button className = "destroy"
                                                onClick = {
                                                    () => {
                                                        const newArray = [...todolist]
                                                        newArray.splice(index, 1)
                                                        setTodolist([...newArray])
                                                    }
                                                } > < /button> <
                                                /div> <
                                                /li>)
                                            }
                                        }
                                    })
                            } <
                            /ul> <
                            /section> <
                            />
                        )
                    }
                    export default List