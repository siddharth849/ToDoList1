import React from 'react'

function Form({setAddItem,AddItem,setItemList,setStatus,ItemList}) {

    const ItemHandler=(e)=>{
        setAddItem(e.target.value)
    }

    const ListHandler=(e)=>{
        e.preventDefault()
        setItemList([...ItemList,{text:AddItem,completed:false,
        id:Math.random()*1000}])
        setAddItem("")
    }

    const statusHandler=(e)=>{
        setStatus(e.target.value)
    }

    return (
        <div>
            <h1>Siddharth's TODOLIST</h1>
            <form>
                <input type="text" name="item" placeholder="add your activity" onChange={ItemHandler}/>
                <button onClick={ListHandler}type="submit">+</button>
            <div>
                <select onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="complete">Complete</option>
                    <option value="Incomplete">Incomplete</option>
                </select>
            </div>
            </form>
        </div>
    )
}

export default Form
