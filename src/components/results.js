//import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import Canvas from "./canvas"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
display: flex;
width: 100%;
height:100%;
background-color: #730099;
justify-content:center;
align-items: center;
color: #ffffff;

`
function Results() {
const questions = JSON.parse(localStorage.getItem("questionsStorage"))
const answers = JSON.parse(localStorage.getItem("answersStorage"))
const [resArr, setresArr] = useState([])

const checkFunction = (arg1, arg2) =>{
    let right = 0
    let wrong = 0
  for (let i = 0; i<= arg1.length -1; i++){

      if(arg1[i] === arg2[`${i}`]){
            right += 1;
      }
      else{
          wrong +=1;
      }
  }

  let arr=[right, wrong]
 return arr
}

//   const answers = useSelector(state => state.answers)
    useEffect(() => {
     let allAnswers = questions.map((item)=>item.correct_answer)
    setresArr(checkFunction(allAnswers, answers))
    }, [])
 

    return (
        <Container>
        <div>
           <h1>Results</h1>
           {resArr.length>0 ?
           <>
           <div style={{"width":"100%", "backgroundColor":"#730099"}}>
                       <div>Right: {resArr[0]} </div>   
         <div>Wrong: {resArr[1]} </div>  
          <Canvas resArr={resArr}/>
          </div>
 
         </>
         :
         ""
        }
        {questions.map((item, key) =>{
            return(<>
        <div>{key +1}. {item.question.replaceAll( /&quot;|quo;t|&#039;/ig, "'")} 
        {String(item.correct_answer) === String(answers[`${key}`])?
          <svg style={{"width":"15px"}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
     :
     <svg style={{"width":"15px"}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" class="svg-inline--fa fa-times-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path></svg>   

    
    }
        <div style={{"display":"flex", "justifyContent":"space-between"}}>
       <div> {"Right answer: ".concat(item.correct_answer.replaceAll( /&quot;|&#039;/ig, "'"))}</div>
      
      {console.log(answers[`${key}`])} 
       <div> {"Your answer: ".concat(String(answers[`${key}`]).replaceAll( /&quot;|&#039;/ig, "'"))}</div>
        </div>
        </div>

         <div>...</div>       
        </>

            )
           
        })}
      
        </div>
        </Container>
      );
}

export default Results;