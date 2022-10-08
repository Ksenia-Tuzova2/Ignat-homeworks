import React from 'react'
import { AffairType, deleteAffair } from './HW2'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    // debugger
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className='delete'>
          <span> {props.affair.name}</span>

            <button className='deleteBtn' onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
