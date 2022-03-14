import React from "react";


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
            <button onClick={addToList}>Add</button>
        

        <div>
            {
                list.map((item) => {
                    return  <div>{item.title}</div>
                })
            }
        </div>
        </>
    )
}

export{WishList}