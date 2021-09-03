import React, {useState} from 'react';
import Modal from 'react-modal';
import './Todo.css';
import Dropzone from 'react-dropzone';


function Todo2({task, date, button, name}) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        
        <div className="bar">
            <p className="task">{task}</p>
            <p className="date">{date}</p>
            <p className="name">{name}</p>
            <a href="https://samsan-quiz.web.app/" style={{ textDecoration: 'none' }}><p onClick={()=>setModalIsOpen(true)} className="action">{button}</p></a>
        </div>



    )

}



export default Todo2;