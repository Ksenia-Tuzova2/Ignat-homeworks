import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e:any)=>void // need to fix any
    addUser: (name:string)=> void// need to fix any
    error: string 
    totalUsers: number 
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} 
) => {
    const inputClass = s.error // need to fix with (?:)

    return (
        <div className="flex_wrap">
           <div className="flex">
            <span>людей добавили {totalUsers}</span>
            <div className="">
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button className='add' onClick={()=>addUser(name)}>add</button>
            </div>
            <span>{error}</span>
            </div>
            
            
        </div>
    )
}

export default Greeting
