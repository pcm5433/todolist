import {useState} from 'react';
import './main.css'

const EventList = ({list, deleteBtn, onSubmit})=>{
    const [onUpdate, setOnUpdate] = useState(true)
    const [edits, setEdit] = useState({
        id: list.id,
        todoList: list.todoList
    })
    function onDeleteBtn(){
        let id = list.id
        deleteBtn(id)
    }
    function onUpdateBtn(){
        setOnUpdate(false)
    }
    function editChange(e){
        const {name, value} = e.target
        setEdit({
            ...edits,
            [name]: value
        })
    }
    function onCancleBtn(){
        setOnUpdate(true)
    }
    function onSubmitBtn(){
        onSubmit(edits)
        setOnUpdate(true)
    }
    return(
        <li>
            <div className='numNtodo'>
                <h4>{list.id}</h4>
                {onUpdate === true ? <div> <span>{list.todoList}</span> </div>
                : <div>
                <input type="text" name='todoList' value={edits.todoList} onChange={editChange} />
                </div>}
            </div>
            {onUpdate ?
              <div className='UpDelBtn'>
                <button onClick={onUpdateBtn}>수정</button>
                <button onClick={onDeleteBtn}>삭제</button> </div>
            : <div className='UpDelBtn'>
                <button onClick={onSubmitBtn}>저장</button>
                <button onClick={onCancleBtn}>취소</button>
            </div>}
        </li>
    )
}

const Main = ({lists, deleteBtn, onSubmit})=>{
    return(
        <main id='main'>
            <ul>
                {lists.map((list)=>
                <EventList
                    list={list}
                    key={list.id}
                    deleteBtn={deleteBtn}
                    onSubmit={onSubmit}
                />)}
            </ul>
        </main>
    )
}

export default Main;