import React, {useState} from 'react';
import './App.css';
import Movie from './Movie.js';
import Modal from 'react-modal';



function Campus({url1, url2, url3, url4, title1, title2, title3, title4, video1, video2, video3, video4}) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return(
        
            <div className="rowv">

<Modal isOpen={modalIsOpen}>
                <h2>Live</h2>
                <button onClick={()=> setModalIsOpen(false)}>Close</button>
                <br></br><br></br>
                <iframe width="1500" height="650" src={video1} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <input placeholder="Comment here..." className="question"></input>
            </Modal>
                <div className="episodes_section">
                    <div className="row__posters">
                        

                    <div onClick={()=>setModalIsOpen(true)} className="post">
                    <Movie image={url1}/>
                    <h1 className="titlevideo">{title1}</h1>
                    </div>


                    <div onClick={()=>setModalIsOpen(true)} className="post">
                    <Movie  image={url2}/>
                    <h1 className="titlevideo">{title2}</h1>
                    </div>

                    <div onClick={()=>setModalIsOpen(true)} className="post">
                    <Movie  image={url3}/>
                    <h1 className="titlevideo">{title3}</h1>
                    </div>

                    <div onClick={()=>setModalIsOpen(true)} className="post">
                    <Movie  image={url4}/>
                    <h1 className="titlevideo">{title4}</h1>
                    </div>

                    </div>

                </div>
            </div>

    )
}

export default Campus;