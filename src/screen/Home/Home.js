import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import {Backgroungimg , Discription, Main, Title,Popularmovies,Moviescontainer,ImgHolder, Button }from './style'
import img from '../../assets/jokerm.jpg'

function Home() {
  return (
    <Main>
      <Navbar/>
      <Backgroungimg >
      <Title> title</Title>
      <Discription>this is just a film discription will get from api</Discription>

      </Backgroungimg>
      <Popularmovies> popular movies</Popularmovies>
      
     <Moviescontainer>
     <ImgHolder src={img}/>
     {[1,2,3,4,5,6].map(movie=><ImgHolder src={img}/> )}

     </Moviescontainer>
    <Button> load more...</Button>
      
      </Main>
  )
}

export default Home
