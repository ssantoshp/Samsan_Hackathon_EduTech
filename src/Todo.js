import React, {useState} from 'react';
import Modal from 'react-modal';
import './Todo.css';
import Dropzone from 'react-dropzone';


function Todo({task, date, button, name}) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        
        <div className="bar">
            
            <Modal isOpen={modalIsOpen}>
                <h2>Submit your assignment</h2>
                <button onClick={()=> setModalIsOpen(false)}>Cancel</button>
                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drop your assignment by clicking here</p>
                        </div>
                        </section>
                    )}
                    </Dropzone>
                    <button onClick={()=> setModalIsOpen(false)}>Send</button>
            </Modal>

            <p className="task">{task}</p>
            <p className="date">{date}</p>
            <p className="name">{name}</p>
            <p onClick={()=>setModalIsOpen(true)} className="action">{button}</p>
        </div>



    )

}



export default Todo;