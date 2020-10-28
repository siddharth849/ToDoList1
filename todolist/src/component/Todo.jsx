import React from 'react'

function Todo({item,text,ItemList,setItemList}) {
    
    const DeleteHandler=()=>{
        setItemList(ItemList.filter((e)=>e.id!==item.id))
    }

    const completeHandler=()=>{
       ItemList.filter((it)=>{
           if(it.id===item.id){
               it.completed=!it.completed;
               return it
           }
           else{
               return it;
           }
       })
            console.log(ItemList)
        }
    return (
        <div>
            <li className={item.completed?"completed":""}>{
            text}
            <button onClick={DeleteHandler}>Delete</button>
            <button onClick={completeHandler}>Complete</button>
            </li>

        </div>
    )
}

export default Todo
