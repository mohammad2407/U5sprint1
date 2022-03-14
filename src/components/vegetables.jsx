import React from "react";


function Vegetables () {
    const [tomato,setTomato] = React.useState(10);
    const [potato, setPotato] = React.useState(8);
    const [carrot, setCarrot] = React.useState(5);
    const [onions, setOnions] = React.useState(7);
    
    
    function changeTomato(val){
        setTomato(tomato+val)
    }
    
    function changePotatoes(val){
        setPotato(potato+val)
    }
    
    function changeCarrots(val){
        setCarrot(carrot+val)
    }
    
    function changeOnions(val){
        setOnions(onions+val)
    }
    


return (
    <>
    
    <h4>Tomato:{tomato} Kg</h4>
        <button onClick={()=>changeTomato(1)}>Add</button>
        <button onClick={()=>changeTomato(-1)}>remove</button>

        <h4>Potatoes:{potato} Kg</h4>
        <button onClick={()=>changePotatoes(1)}>Add</button>
        <button onClick={()=>changePotatoes(-1)}>remove</button>

        <h4>Carrot:{carrot} Kg</h4>
        <button onClick={()=>changeCarrots(1)}>Add</button>
        <button onClick={()=>changeCarrots(-1)}>remove</button>


        <h4>Onions:{onions} kg</h4>
        <button onClick={()=>changeOnions(1)}>Add</button>
        <button onClick={()=>changeOnions(-1)}>remove</button>
        
    </>
)
}

export {Vegetables}