import React from 'react'

function Todo({item,text,ItemList,setItemList}) {
    
    const DeleteHandler=()=>{
        setItemList(ItemList.filter((e)=>e.id!==item.id))
    }

    const completeHandler=()=>{
        setItemList(ItemList.map(it=>{
            if(it.id===ItemList.id){
                return{
                    ...it,completed:!it.completed
                }
            }
            return it
        })) 
    }
    return (
        <div>
            <li className={`${ItemList.completed?"completed":""}`}>{
            text}
            <button onClick={DeleteHandler}>Delete</button>
            <button onClick={completeHandler}>Complete</button>
            </li>

        </div>
    )
}

export default Todo
