import React from 'react'
import Todo from './Todo'

function ToDoList({setItemList,ItemList,filteredList}) {
    return (
        <div>
            <ul>
                {
                    filteredList.map((item=>{
                        return(<Todo
                        key={item.id} 
                        setItemList={setItemList}
                        text={item.text} 
                        item={item}
                        ItemList={ItemList}
                        />)
                    }))
                }
            </ul>
        </div>
    )
}

export default ToDoList
