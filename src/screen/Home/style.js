import styled from 'styled-components'
import imgslide from '../../assets/backgroundimg.jpeg'


export const Main=styled.div`

color: black;
margin: 0;

`

export const Backgroungimg = styled.div`
background-image: url(${imgslide});
height: 500px;
background-size: 1000px;
background-repeat: no-repeat;
background-size:100% 600px;
color: white;
margin: 0;
position:relative;

;

`
export const Title=styled.p`
color  :white ;
font-size: 25px;
margin: 0;
margin-left: 10%;
text-align: bottom;
position: absolute;
bottom: 23%;

  `
  export const Discription=styled.p`
  color  :white ;
  
  font-size: 15px;
  margin: 0;
  margin-left: 10%;
  position: absolute;
  bottom: 15%;
  
    `






export const Popularmovies=styled.p`

 margin-left:10%;
font-weight: bold;

`
export const Moviescontainer = styled.div`

display: flex;
flex-direction: row;
flex-wrap: wrap;


`
export const ImgHolder=styled.img`


width: 200px;
height: 250px;
margin-left:10% ;
margin-bottom: 3%;

`


export const Button=styled.button`
background-color: blue;
margin-left: 45%;
width: 10%;
height: 30px;
border: none;
border-radius:15px;



`