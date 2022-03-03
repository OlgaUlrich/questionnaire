import './App.css';
import StartPage from './components/startpage';
import QuestionPage from './components/questionPage';
import Results from './components/results';
import {Routes, Route } from "react-router-dom"
import GlobalStyle from './globalstyle';


function App() {
 
  return (
   
    <div>
     
     <GlobalStyle />
    <Routes>
     <Route path="/" element={<StartPage />} />
     <Route path="question/:i" element={<QuestionPage />} />
     <Route path="results" element={<Results />} />
     </Routes>
    
     

 

    
    

    </div>
 
     
  );
}

export default App;
