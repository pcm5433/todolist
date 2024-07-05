import './todoitem.css'

const TodoItem = ({todoList, changeTxt, clickTxt})=>{
    return (
        <div id='todoItem'>
            <input type="text" name="todoList" value={todoList} onChange={changeTxt} placeholder='할일을 추가하세요' />
            <button onClick={clickTxt}>추가</button>
        </div>
    )
}

export default TodoItem;