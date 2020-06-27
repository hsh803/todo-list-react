import React, {useState} from 'react';
import './App.css';
import Add from './components/Add';
import Todo from './components/Todo';

function App() {
  const [list, setList] = useState([])

  const updateList = (item) => {
      item.id = Math.random()
      item.completed = false
      const newList = [...list, item]
      setList(newList)
  }

  const deleteList = (id) => {
      const newList = list.filter(element => 
         element.id !== id ? element : null
        )
      setList(newList)
  }

  const checkList = (id) => {
    const newList = [...list].map(element => {
      if(element.id === id) {
        element.completed = !element.completed
      }
      return element
    })
    setList(newList)
  }

  return (
    <div className="App">
    <Todo list={list} delete={deleteList} check={checkList} />
    <Add submit={updateList} />
    </div>
  );
  
}

export default App;
