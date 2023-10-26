import React from 'react';

function Pure({salary, age}) {
    console.log("inside pure component");
    return (
        <div>
            <h1>Inside Pure Component</h1>
            <h1>salary is : {salary}</h1>
            <h1>age is : {age}</h1>
        </div>
    )
}

export default React.memo(Pure);