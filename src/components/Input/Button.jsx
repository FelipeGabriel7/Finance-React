import React from "react";


export function Button({click}){
    return(
        <div style={{display: 'flex' , justifyContent: 'center' , marginTop: '1em'}}>
            <button onClick={click}> Adicionar </button>
        </div>
    )
}