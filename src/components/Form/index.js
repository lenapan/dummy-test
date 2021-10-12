import React from 'react';
import axios from 'axios';
import "./form.css";

function getItems(){
    const element = document.querySelector(".last-comment");     
    axios.get('http://localhost:5000/api/Comments' || process.env.PORT)
    .then( response =>   response.data.forEach(function(db){ //function(db, i, newArray) 
        console.log(element.innerHTML = `<strong>${db.user} says</strong> "${db.comment}"`)//Will appear in both console.log and the DOM
    })
    );
}
class Form extends React.Component {
        sendForm(event){
            event.preventDefault();    
            const resComment = document.querySelector("#comment"); 
            const resUser = document.querySelector("#user");
            axios.post('http://localhost:5000/api/Comments' || process.env.PORT, {
                user: this.refs.user.value,
                comment: this.refs.comment.value
            })
            .then((response) => { //i.e 200 status
                resComment.value = ``; 
                resUser.value = ``;  
                getItems();
            })
            .catch((error) =>{
                console.log(error);
            })
        }
        getItems(event){
            event.preventDefault();
            const element = document.querySelector(".last-comment");     
            axios.get('http://localhost:5000/api/Comments' || process.env.PORT)
            .then( response =>   response.data.map((db) => {   
               console.log(element.innerHTML = `<strong>${db.user} says</strong> "${db.comment}"`) //Will appear in both console.log and the DOM
            })
            );
        }
        render(){
            return (
                <> 
                {/* <p onLoad={this.getItems.bind(this)}></p> */}
                <form onSubmit={this.sendForm.bind(this)}>
                    <input id="user" ref="user" type="text" placeholder="name@example.com"/>
                    <textarea id="comment" ref="comment" type="text" />
                    <button className="btn waves-effect waves-light btn3" type="submit"
                    nme="action">Add Comment</button>
                </form>
                <form className ="form" onSubmit={this.getItems.bind(this)}>
                    <button className="btn waves-effect waves-light btn2" type="submit"
                    nme="action"><i class="fa fa-chevron-circle-left"><i class="fa fa-chevron-circle-right"></i></i></button>
                   <p class="last-comment"></p>
                </form>
                
                </>
            );
        }
} 
export default Form;