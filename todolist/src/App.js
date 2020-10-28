import logo from './logo.svg';
import './App.css';
import Form from "./component/Form"
import React,{useState,useEffect} from "react"
import ToDoList from './component/ToDoList'

function App() {
  const [AddItem,setAddItem]=useState("");
  const [ItemList,setItemList]=useState([])
  const [status,setStatus]=useState('all')
  const [filteredList,setFilteredList]=useState([])




  useEffect(() => {
      const filterHandler=()=>{
      switch(status){
        case 'completed':
          setFilteredList(ItemList.filter(item=>item.completed===true))
          break;
        case 'uncompleted':
          setFilteredList(ItemList.filter(item=>item.completed===false))
          break;
        default:
          setFilteredList(ItemList)
          break

      }
    }
    filterHandler()

  }, [ItemList,status])



  return (
    <div className="App">
        <Form 
          setAddItem={setAddItem}
          AddItem={AddItem}
          setItemList={setItemList}
          ItemList={ItemList}
          setStatus={setStatus}
          filteredList={filteredList}
        />
        <ToDoList 
        ItemList={ItemList}
        setItemList={setItemList}
        filteredList={filteredList}/>

    </div>
  );
}

export default App;
