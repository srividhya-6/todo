import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function Todo(){
    let [list,setList]=useState([{task:"sample task",id:uuidv4(),isDone:false}]);
    let [newTask,setNewTask]=useState("");
    function newList(){
        setList([...list,{task:newTask,id:uuidv4(),isDone:false}])
        setNewTask("")
    }
    function addNewTask(event){
        setNewTask(event.target.value)
    }
    function deleteTask(id){
        setList(list.filter((t)=>
            t.id!=id
        ))
    }
    function doneTask(id){
        setList(list.map(
            (t)=>{
                if(t.id==id){
                    return {...t,isDone:true}

                }
                else{
                    return {...t}
                }
            }
        ))
    }
    
    return(
        <>
            <input className="input-group-text" placeholder="add item" id="input" value={newTask} onChange={addNewTask}></input>
            <button className="btn btn-primary m-3" onClick={newList}>add</button><br />
            <div className="container border">
            <h2>Tasks</h2>
            <ul>
                {
                    list.map((t)=>{
                        return <li>
                            
                            <p style={{textDecoration:t.isDone?"line-through":"none"}}>{t.task} <button className="btn btn-primary m-3" onClick={()=>deleteTask(t.id)} id={t.id}>delete</button>
                            <button className="btn btn-primary m-3" onClick={()=>doneTask(t.id)} id={t.id}>Done</button>
</p>
                           
                            
                            </li>
                    })
                }
                
            </ul>
            </div>

        </>
    );
}