import React, {useState} from 'react';
import './App.css';
import Movie from './Movie.js';
import Modal from 'react-modal';



function Recommended({url1, url2, url3, url4, title1, title2, title3, title4, img1, img2, img3, img4}) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return(
        
            <div className="rowv">

                <div className="episodes_section">
                    <div className="row__posters">
                        

                    <div className="post">
                    <a href={url1} target="_blank"><Movie image={img1}/></a>
                    <h1 className="titlevideo">{title1}</h1>
                    </div>


                    <div className="post">
                    <a href={url2} target="_blank"><Movie  image={img2}/></a>
                    <h1 className="titlevideo">{title2}</h1>
                    </div>

                    <div className="post">
                    <a href={url3} target="_blank"><Movie  image={img3}/></a>
                    <h1 className="titlevideo">{title3}</h1>
                    </div>

                    <div className="post">
                    <a href={url4} target="_blank"><Movie  image={img4}/></a>
                    <h1 className="titlevideo">{title4}</h1>
                    </div>

                    </div>

                </div>
            </div>

    )
}

export default Recommended;