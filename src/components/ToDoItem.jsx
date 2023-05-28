import React, { useState } from 'react';

function TodoItem(props){

return <li  onClick={()=>{

props.deleteItem(props.id)} }>{props.value}</li>
}

export default TodoItem