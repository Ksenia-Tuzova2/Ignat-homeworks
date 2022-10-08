import React, { SetStateAction } from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = { 
    data: AffairType[]
    setFilter: (value:SetStateAction<FilterType>)=>void
    deleteAffairCallback: (_id: number)=>void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} 
    const setHigh = () => {props.setFilter('high')} 
    const setMiddle = () => {props.setFilter('middle')} 
    const setLow = () => {props.setFilter('low')} 

    return (
        <div>
            <button className='btn all' onClick={setAll}>All</button>
            <button className='btn high' onClick={setHigh}>High</button>
            <button className='btn middle' onClick={setMiddle}>Middle</button>
            <button className='btn low' onClick={setLow}>Low</button>

            {mappedAffairs}
        </div>
    )
}

export default Affairs
