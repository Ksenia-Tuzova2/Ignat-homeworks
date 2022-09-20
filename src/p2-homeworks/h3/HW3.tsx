import React, {useState} from 'react'

import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: String
    name: String
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<String>>([]) 

    const addUserCallback = (name: object) => { 
       
        setUsers([]) // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
