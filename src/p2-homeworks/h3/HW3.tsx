import React, {useState} from 'react'
import { v1 } from 'uuid'

import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: String
    name: String
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<any>([]) 

    const addUserCallback = (name: String) => { 
       let newUser={
        _id:v1(),
        name:name,
       }
        setUsers([...users, newUser]) // need to fix
    }

    return (
        <div>
            <hr/>
           <b> homeworks 3</b>

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
