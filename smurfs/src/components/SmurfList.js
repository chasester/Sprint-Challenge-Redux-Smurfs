import React from 'react';

export function SmurfList(props)
{
    return(
        <div>
            {props.smurfs.map( x=> <div>{x.name}</div>)}
        </div>
    )
}