import React, { useState } from "react";
import Form from "./Form";
import Modal from "react-modal";
import axios from "axios";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if(vote >= 8 ) {
        return 'bg-success'
    } else if (vote >= 6 ) {
        return 'bg-warning'
    } else {
        return 'bg-danger';
    }
}

function Movie ({ title, poster_path, overview, vote_average, release_date }) { 

const [modalIsOpen, setModalIsOpen] = useState(false);
 
function addToCart(){
    var movieAdd = title;
    axios.post('http://localhost:5000/api/Titles' || process.env.PORT, {
      titles: movieAdd,     
      })
    .then((response) => {   console.log(`Added to cart:  ${movieAdd}`);
    // alert(`Added to cart:  ${movieAdd}`);
    })
    .catch((error) =>{
      console.log(error);
    })

}
  return(

<div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ 
  backgroundImage: `url(${poster_path ? IMG_API + poster_path : "https://duetaz.org/wp-content/uploads/2018/07/Movie-Night.jpg" })` 
}}>
        
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          {/* <ing className="img-fluid" src={IMG_API + poster_path} alt={title}/> */}
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{title}</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                {/* <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-award-fill" viewBox="0 0 16 16">
  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
</svg>
              </li>
              <li className="me-auto">{release_date}</li>
              <li className="d-flex align-items-center">
              <span className={`badge rounded-pill ${setVoteClass(vote_average)}`}>{vote_average} </span>
  
 
                {/* <small className={`badge rounded-pill ${setVoteClass(vote_average)}`}>{vote_average}</small> */}
              </li>
            </ul>
            
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
              
              <button type="button" className="btn btn-warning add-btn" id={title} onClick={addToCart}>Add to Cart</button>
              <button onClick={() => setModalIsOpen(true)} type="button" className="btn btn-primary">View detail</button>
              {/*  */}


              <Modal 
              isOpen={modalIsOpen} 
              onRequestClose={() => setModalIsOpen(false)}
              style={
                {
                  overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                },
                content: {
                  padding: '0px'
                }
                }
                
              }
              >
              
              <div className="container popUpWrapper">
                <div className="row">
                  <div className="col-4">
                    <img className="img-fluid" src={IMG_API + poster_path} />
                    
                  </div>
                  <div className="col-4 pt-5">
                    <p>{overview}</p>
                    <button type="button" className="btn btn-warning add-btn" id={title} onClick={addToCart}>Add to Cart</button>
                    <button onClick={() => setModalIsOpen(false)} type="button" className="popupCloser btn btn-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                      <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                    </svg>
                    </button>
                  
                  </div>
                  <div className="col-4 pt-5">
                  <Form/>
                  </div>
                  </div>
                </div>
              
              </Modal>
                

              {/*  */}
            </div>
          </div>
        </div>
      </div>



)  
  

}
export default Movie;