import logo from './logo.svg';
import './bootstrap.css';
import './App.css';
import {Route,Switch} from "react-router-dom";
import Navbar from './componants/Navbar';
import NewsItem from './componants/NewsItem';
import React, { useState, useEffect } from 'react'
import About from './componants/About';





function App() {

  
  const [articles, setarticles] = useState([])
  const [page, setpage] = useState(1)
  const [totalresults, settotalresults] = useState(0)

  

  useEffect( ()=>{

    async function feachdata(){

      let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=429803c40586407ab2280f958ae8de57&page=${page}&pagesize=12`
      let data = await fetch(url);
      let parsedData = await data.json()
      setarticles(parsedData.articles) 
      settotalresults(parsedData.totalResults)
    }

      feachdata();
  });

    
    console.log("chaitnya");
 
  
  
  let handlenext = ()=>{
    setpage(page+1)
   
  }

  let handleprev =  ()=>{
    setpage(page-1)
      
  }

  return (

    <>
    <Navbar/>
      
    <Switch>

      <Route  exact path="/about">
          <About/>
      </Route>

      <Route  path="/home">

   
    <div className="container my-3">
      <h1 className="text-center">
        News-Monks <span>Top-Headings</span>
      </h1>
    </div>
    <div className="container">
      <div className="row">

        {
          articles.map((element)=>{
            
            return (
              <div className="col-md-4 mt-4 mb-4">
            <NewsItem title={element.title?element.title:""} descreption={element.description?element.description:""} imgsrc={element.urlToImage}
            topageurl={element.url} author={element.author?element.author:""}/>
          </div>

  )
  })
  }

      </div>
    </div>
    <div className="container d-flex justify-content-between mt-2 mb-4">
      <button className="btn btn-dark" onClick={handleprev} disabled={page<=1}>&larr; Prev</button>
      <button className="btn btn-dark " onClick={handlenext} disabled={totalresults<=page*9}>Next &rarr;</button>      
    </div>

  </Route>
</Switch>
    </>
  );
}

export default App;
