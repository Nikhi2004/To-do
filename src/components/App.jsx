import React,{StrictMode, useState} from "react";
import TodoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
const [newItem,setNewItem]=useState("");
const [items,setItems]=useState([]);
function handleOnClick(){
  console.log(123);
setItems((prevValue)=>{
  return [...prevValue,newItem]
}
)
console.log(1);
setNewItem("");
}

function handleOnChange(e){
setNewItem(e.target.value);
}

function deleteItem(id){
  console.log(id);
setItems((prevItems)=>{
  return prevItems.filter((item,index)=>{
    return index!==id;
  })
})
}

  return (
    <div className="container">
    
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea handleChange={handleOnChange} addItem={handleOnClick} inputText={newItem} />
      <div>
        <ul>
        
      {  items.map(function(item,index){ return <TodoItem
       key={index}
       id={index}
      value={item}
      deleteItem={deleteItem}  
      />})  }
          
      
        </ul>
      </div>
     
    </div>
  );
}

export default App;
