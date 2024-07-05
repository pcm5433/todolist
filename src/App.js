import {useState, useRef, useCallback} from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import TodoItem from './components/main/todoItem';
import './App.css';

function App() {
  const [lists, setLists] = useState([
    {
      id: '1',
      todoList: '배운 내용 복습하기'
    },
    {
      id: '2',
      todoList: '설거지하기'
    }
  ])

  const [inputs, setInputs] = useState({
    todoList: ''
  })

  const {todoList} = inputs;

  function changeTxt(e){
    const {name, value} = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  let addId = useRef(2);

  function clickTxt(){
    let list = {
      id: addId.current,
      todoList
    }
    setLists([...lists, list])
    setInputs({
      todoList: ''
    })
    addId.current += 1
  }

  function deleteBtn(targetId){
    setLists(lists.filter((list)=>list.id !== targetId))
  }

  const onSubmit = useCallback((edits)=>{
    let newList = {
      ...edits
    }
    setLists(
      lists.map((list)=>list.id === edits.id ? list = newList : list)
    )
  },[lists])

  return (
    <div className="App">
      <Header></Header>
      <TodoItem
        todoList={todoList}
        changeTxt={changeTxt}
        clickTxt={clickTxt}>
      </TodoItem>
      <Main lists={lists} deleteBtn={deleteBtn} onSubmit={onSubmit}></Main>
    </div>
  )
}

export default App;