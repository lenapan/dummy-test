import React, { useState } from 'react';
import Modal from "react-modal";
import axios from "axios";

function Cart(){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function clickCart(event){
        const element = document.querySelector(".cartInfo");
        event.preventDefault();
        axios.get('http://localhost:5000/api/Titles' || process.env.PORT)
          .then(response => {  
            element.innerHTML = `<strong>${response.data.length}</strong> item(s) are in your cart`
            response.data.map((db) => {
               console.log(element.content = `${db.titles} is in your cart`) 
            })
             //   element.innerHTML = `<p>${db.titles}</p>`             
          })
          .catch((error) =>{
            console.log(error);
          })      
    }
    return(
        <>
        <i onClick={() => setModalIsOpen(true)}><i class="fa fa-shopping-cart"></i></i>
        <Modal 
              portalClassName="cartModal"
              isOpen={modalIsOpen} 
              onRequestClose={() => setModalIsOpen(false)}   
              style={
                {
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    },
                content: {
                  padding: '0px',
                  width: '25%',
                  marginLeft: '70%'
                    }
                }           
              }> <form className="farrow" onClick ={clickCart}> <a class="arrow"><i class="fa fa-angle-double-down"></i> </a></form>
                <button onClick={() => setModalIsOpen(false)} type="button" className="popupCloser btn btn-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                </svg></button>
                <p className= "cartInfo"></p>
              </Modal>
        </>
    );
}

export default Cart;