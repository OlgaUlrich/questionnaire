import React, { useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { addAnswer } from "../actions"
import styled from "styled-components"

const Container = styled.div`
display: flex;
width: 100%;
height: 100vh;
background-color: #ffffff;
justify-content:center;
align-items: center;

`


const QuestionWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items:center;
align-self: center;
width: 600px;
padding: 10px;
height: 350px;
background-color:#730099;
color: #ffffff;
border-radius: 5px;
box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
`
const Question = styled.div`
align-self: center;
text-align: center;
font-size: 1.7rem;
`
const BtnWrap = styled.div`
align-self: center;
display: flex;
flex-wrap: wrap;
width: 70%;
justify-content: space-between;


button{
margin: 1%;
border: none;
min-width: 200px;
min-height:50px; 
border-radius: 5px;

a{
 
  text-decoration: none;
  color: black;
}

}
button:hover{
    border: 4px solid #f2ccff;
    cursor: pointer;
}

button:active{
    background-color: #ac00e6;
    color: #ffffff;
}

`

function QuestionPage() {

let answersStore = useSelector(state => state.answers)
    useEffect(() => {
      localStorage.setItem("answersStorage", JSON.stringify(answersStore))
    }, [answersStore])
        

    let navigate = useNavigate();


    const dispatch = useDispatch()
    // const questions = useSelector(state => state.questions)
    const questions = JSON.parse(localStorage.getItem("questionsStorage"))
    const { i } = useParams();
    let pageObject = questions[i]
    console.log(typeof i)
     let randNum = Math.floor(Math.random() * pageObject.incorrect_answers.length)
    //  let answers = pageObject.incorrect_answers.concat(pageObject.correct_answer)
    let buffer =  pageObject.incorrect_answers[randNum]
    pageObject.incorrect_answers[randNum] = pageObject.correct_answer
     let answers = pageObject.incorrect_answers.concat(buffer)

   
    return ( 
        
        <Container>
        <QuestionWrapper>
    
          <Question>{pageObject.question.replaceAll( /&quot;|&#039;/ig, "'")}</Question>
         
          <BtnWrap>
          {answers.map((item, key)=>{
              return(
              
                  Number(i) <= questions.length-2 ?
                     
                        <button onClick={()=>{dispatch(addAnswer(i, item))   
                                            navigate(`/question/${Number(i)+1}`)
                        }}>
                        {/* <Link to={`/question/${Number(i)+1}`}>{item}</Link>   */}
                        {item}
                        </button>
                 
                    
                  :
                   
                        <button onClick={()=>{dispatch(addAnswer(i, item))
                                                 navigate(`/results/`)}}>
                                                     {item}
                        {/* <Link to={`/results`}>{item}</Link>  */}
                        </button>
                    

              
                
                  
              
                    )              
          })
          }
          </BtnWrap>
        </QuestionWrapper>
        </Container>
       
            );
    
}

export default QuestionPage;















// import React, { Component } from "react";
// import { connect } from 'react-redux'




// class QuestionPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }



//     render() { 


         
//         console.log(this.props.questions)
//         return (
//             <div>
// ld
//             </div>
//           );
//     }
// }
//      const mapStateToProps = (state) => {
//     return{
//         questions: state.questions
//         }
//     }



// export default connect(mapStateToProps)(QuestionPage);