
import { useSelector, useDispatch } from "react-redux"
import React,  {useState, useEffect }  from "react";
import { addQuestions } from "../actions"
import { Link } from "react-router-dom"
import styled from "styled-components";

const Container = styled.div`
display: flex;
width: 100%;
height: 100vh;
background-color: #730099;
justify-content:center;
align-items: center;

`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;

h1{
    color: #ffffff;
    font-size: 3rem;

}

button{
    color: #ffffff;
    border: 2px solid #ffffff;
    min-width: 200px;
    min-height: 70px;
    border-radius: 5px;
    align-self: center;
    background-color:#730099;
    transition: background-color 2s ease-out, color 2s ease;
}
}
button:hover{
    cursor:pointer;
    background-color:#ffffff;
   color: #730099;


}


`

function StartPage() {
const dispatch = useDispatch()

const [questionsArr, setQuestionsArr] = useState(null)



    useEffect(() => {
        
 let url ="https://opentdb.com/api.php?amount=10"
    fetch(url)

    .then(respond=>respond.json())
    .then(data=>{dispatch(addQuestions(data.results))
                setQuestionsArr(data.results)})
    
        
   
},[dispatch]);






let questionState = useSelector(state => state.questions)

useEffect(() =>{
   
     localStorage.setItem("questionsStorage", JSON.stringify(questionsArr))
    
}, [questionsArr])


  let i = 0
  
    return (
    <Container>
        <Wrapper>
            <h1> QUIZ GAME </h1>
            {/* <div>{questionState.map((item)=>{
                return(
                    <div>
                        {item.question}
                        </div>
                )
            })}</div> */}
              <Link to={`/question/${i}`}>   <button>Start</button> </Link>
        </Wrapper>
    </Container>   
      );
}

export default StartPage;