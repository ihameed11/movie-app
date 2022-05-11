import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import {Backgroungimg} from '../Home/style'
import img1 from '../../assets/movieimg.jpeg'
import { Containerbox,Movieimg,MovieName,MoviesAcotor,Actorcontainer,Acortcard,ActorcardCont } from './style'

function Moviename() {
  return (
    <div>
      <Navbar/>
<Backgroungimg>
<Containerbox>
    
</Containerbox>
<Movieimg src={img1}/>
<MovieName>
     <h2>movie name</h2>
    <h4>plot</h4>
    <p>LoremLorem Lorem  LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem </p>
    <p>IMDB RAITING</p>
    <progress value="8" max="10"  />  8

    <h5>DIRECTIOR</h5>
    <p>Ibrahim Hameed</p>


</MovieName>

</Backgroungimg>
<MoviesAcotor> Movie Acotors</MoviesAcotor>
<Actorcontainer>

{[1,2,3,4,5,6].map((movie)=>(
    <>
    <Acortcard>
    
    <img src={img1} alt='images' style={{width:'100px' , hight:"200px"}}/>
    <div  style={{backgroundColor:'black',color:"white",width:"150px"}}>  <p style={{marginLeft:'10%'}}>Actorname</p>  </div>
    
    
    </Acortcard>
    
    
    </>
) )}


    
</Actorcontainer>

    </div>
  )
}

export default Moviename
