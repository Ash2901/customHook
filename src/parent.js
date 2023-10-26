import React from 'react';
import Pure from './Pure';

export default function Parent({salary, id, age}) {
    console.log("inside parent component");
    return (
        <div>
            <h1>id is : {id}</h1>
            <Pure salary = {salary} age = {age}/>
        </div>
    )
}