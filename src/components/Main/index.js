import React, { useEffect, useState } from "react";
import Header from "../Header";

import Movie from "../Movie";

import "./style.css";


const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_bypopularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=";




function Main(){
  // const movies = ["1", "2", "3"];
  const [ movies, setMovies ] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
  getMovies(FEATURED_API);
  
  }, []);

const getMovies = (API) => {
  fetch(API).then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
    });

}

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
      getMovies(SEARCH_API+searchTerm);
      

    setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
    return(
      <>
      <div>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
    <h1 className="display-4 fw-bold">VHS video  Rental</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Enjoy our full collection of VHS classic movies</p>
      <div className="justify-content-sm-center mb-5">
        
        
          <form onSubmit={handleOnSubmit}>
          <div className="input-group input-group-lg">
  <input type="search"   className="form-control rounded" placeholder="Search..." value={searchTerm} onChange={handleOnChange} />
  </div>

           
          </form>
        
      </div>
    </div>
    {/* <div className="overflow-hidden" >
      <div className="container px-5">
        <img src="https://developer.imdb.com/hero-dynamic.jpg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
      </div>
    </div> */}
  </div>
  </div>



  <div className="container px-4 py-5" id="custom-cards">
    <h2 className="pb-2 border-bottom">VHS Movies Catalogue</h2>

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      

      {movies.length > 0 && movies.map((movie) => (
            <Movie key={movie.id} {...movie}/>
          ))}

      
    </div>
  </div>
  
  </>
    );
}
export default Main;