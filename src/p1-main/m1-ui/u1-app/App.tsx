// import React from 'react'
// import s from './App.module.css'

// import Pages from '../../../p2-homeworks/h5-rrd-v6/Pages';

// function App() {
//     // debugger
//     return (
//         <div className={s.App}>
         
//             <Pages/>

//         </div>
//     )
// }

// export default App
import {createStore} from 'redux'
import ReactDOM from 'react-dom'
import {Provider, useSelector, useDispatch} from 'react-redux'
import React from 'react'

const students = {
    students: [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Donald'},
        {id: 4, name: 'Ann'},
    ]
}
type RemoveStudentAT = {
    type: "REMOVE-STUDENT"
    id: number
}
const RemoveStudentAC = (id: number): RemoveStudentAT => ({
    type: "REMOVE-STUDENT",
    id
})

const studentsReducer = (state = students, action: RemoveStudentAT) => {
    switch (action.type) {
        case "REMOVE-STUDENT":
            return {
                ...state,
                students: state.students.filter(s => s.id !== action.id)
            }
    }
    return state
}

const store = createStore(studentsReducer)
type RootStateType = ReturnType<typeof studentsReducer>


const StudentList = () => {
    const listItemStyles = {
        width: "100px",
        borderBottom: "1px solid gray",
        cursor: "pointer",
    }
    const students = useSelector((state: RootStateType) => state.students)
    const dispatch = useDispatch()
    const studentsList = students.map(s => {
        const removeStudent = () => {
            dispatch(RemoveStudentAC(s.id))
        }
        return (
            <li key={s.id}
                style={listItemStyles}
                onClick={removeStudent}>
                {s.name}
            </li>)
    })
    return (
        <ol>
            {studentsList}
        </ol>

    )
}


ReactDOM.render(<div>
        <Provider store={store}>
            <StudentList/>
        </Provider>
    </div>,
    document.getElementById('root')
)

//check for deploy