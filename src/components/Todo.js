import React from 'react';

function Todo(props) {
    const checkStyle = {
        textDecoration: "line-through"
    }
    const todoList = props.list.map(element => 
        <div key={element.id}>
            <div onClick={() => props.check(element.id)} style={element.completed ? checkStyle : null}>{element.item}</div>
            <input type="submit" value="Delete" onClick={() => props.delete(element.id)} />
        </div>
    )
    return(
        <div>{todoList}</div>
        )

    
}

export default Todo;