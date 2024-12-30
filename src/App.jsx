import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Container, ToDoList, Input, Button, ListItem, Trash, Checked } from './styles.js';



function App() {
// Código JavaScript
// const list = [
//   {key: uuidv4(), task: "Levar o Steve para passear"},
//   {key: uuidv4(), task: "Comprar Banana" },
//   {key: uuidv4(), task: "Terminar as aulas de React"}
// ];

const [list, setList] = useState([
  //{key: uuidv4(), task: "Levar o Steve para passear", finished: true}
]);


const [inputTask, setInputTask] = useState("");

function changeInput(event){
  //console.log(event.target.value);  
  //setList([{key: uuidv4(), task: event.target.value}])
  setInputTask(event.target.value)

}

function btnEvent(){
  //console.log("Btn click");
  if(inputTask){
    setList([...list, {key: uuidv4(), task: inputTask, finished: false}])
  }
  
}

function finalizarTarefa(key){
  //console.log(key);
  
  const newList = list.map( item => (
    item.key === key ? { ...item, finished: !item.finished} : item
  ))
  setList(newList);
}

function deletarTarefa(key){
  const newList = list.filter(item => item.key !== key)

  setList(newList)
}


// Retorna Código HTML//////////////////////////////
  return (
    // Fragment <> </>
    <>    
      <Container>
        <ToDoList>
         <Input onChange={changeInput} placeholder="O que tenho que fazer ..." />
         <Button onClick={btnEvent}>Adicionar</Button>

         <ul>
          {list.length > 0 ? (
            list.map(item => (
              <ListItem isFinished={item.finished} key={item.key}>
                <Checked onClick={() => finalizarTarefa(item.key)}/>
                <li >{item.task}</li>
                <Trash onClick={() => deletarTarefa(item.key)}/>
            </ListItem>
            ))
          ) : (
            <h3>Não há itens na lista</h3>
          )}
         </ul>
         </ToDoList>
      </Container>  
    </>
  )
}

export default App
