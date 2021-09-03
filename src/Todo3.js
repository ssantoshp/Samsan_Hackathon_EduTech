import React, {useState} from 'react';
import Modal from 'react-modal';
import './Todo.css';
import Dropzone from 'react-dropzone';


function Todo({task, date, button, name}) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        
        <div className="bar">
            
            <Modal isOpen={modalIsOpen}>
                <h2>Report for this assignment</h2>
                <ul>
                    <li>23 students completed this task</li>
                    <li>Alexis Thomas, John Hammer and Melissa Castello didn't send it yet</li>

                </ul>
                <button>Check results</button>
                <br></br>
                <button onClick={()=> setModalIsOpen(false)}>Close</button>


            </Modal>

            <p className="task">{task}</p>
            <p className="date">{date}</p>
            <p className="name">{name}</p>
            <p onClick={()=>setModalIsOpen(true)} className="action">{button}</p>
        </div>



    )

}



export default Todo;