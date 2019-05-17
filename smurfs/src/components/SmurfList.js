import React from 'react';

export function SmurfList(props)
{
    return(
        <div >
            {props.smurfs.map( x=> <div style={{display: "flex", justifyContent: "space-around"}} key={x.id}>
                <div>{x.name}</div>
                <div>{x.age}</div>
                <div>{x.height}</div>
                <button onClick={()=> props.delete(x.id)}>x</button>
            </div>)}
        </div>
    )
}