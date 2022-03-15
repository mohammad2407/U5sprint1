import React from "react";
import { List } from "./List";

import "./style.css"
function WishList() {

    const[query,setQuery] = React.useState("");
    const[list, setList]  = React.useState([])
    const display = (e) =>{
        const value = e.target.value;
        setQuery(value)
    }

    const addToList = () =>{
        const payload = {
            title:query, status :false

        }
        let newList = [...list, payload]
        setList(newList)
    }

    
    


    return (
        <>
            <h1>WishList</h1>
            <input value={query} onChange={display} placeholder = "Add Your WishList" ></input>
            <div> { list.length < 3 ? <button  onClick={addToList}>Add</button>: "You can not add more"} </div>

        <div>
            {
                list.map((item) => {
                    return  < List  title={item.title}/>
                })
            }
        </div>
        </>
    )
}

export{WishList}