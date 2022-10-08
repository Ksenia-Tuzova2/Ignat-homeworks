import React, { ChangeEvent, useState } from 'react'
import Greeting from './Greeting'
import { v1 } from 'uuid'

type GreetingContainerPropsType = {
    users: Array<String>
    addUserCallback: (name: String) => void
}


// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }


    const addUser = (name: string) => {

        if (name.trim() !== '') {
           setError('')
           addUserCallback(name)
           setTotalUser(totalUsers + 1) 
           alert(`Hello ` + name + `!`)
           setName('')
        }else{
           setError('ошибка! введите имя!')
        }
       

    }


    const [totalUsers, setTotalUser] = useState(0)// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
