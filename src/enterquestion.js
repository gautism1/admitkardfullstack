import React ,{useState} from 'react';
import image from './admitkardlogo.png';
import './App.css';
import axios from 'axios';

  function enterquestion()
{
  const [query,setQuery]=useState();
  const [topic,setTopic]=useState();
  const [tags,setTags]=useState();

  const  onsubmit=(e) =>{
    e.preventDefault();
    const completequery={
       "string": query,
        "Topic":topic,
         "tags":tags
    } 
     
       axios.post('http://localhost:5000/search',completequery).then((response) =>{
          if(response)
            alert(" Thanks ! successfully uploaded query");
            document.getElementById("myForm").reset();
    }).catch((err)=>
    {
      console.log("error occuresd",err)
    })
    
} 
return (
    
          <div className="maindiv">
              <div className="divlogo">
                     <img src={image} className="image" alt="logo"></img>
              </div>
              <div className="formdiv">
                  <form onSubmit={onsubmit}  id="myForm" >
                     <div className="input-fields">                     
                       <input type="text" name="question" placeholder="Enter question(Query)" className="inputfield" required
                        onChange={(e) =>setQuery(e.target.value)}  >
                       </input>                  
                       <input type="text"  name="topic" placeholder="Enter topic"  className="inputfield" required 
                        onChange={(e) =>setTopic(e.target.value)} >
                       </input>
                    
                       <input type="text" name="tags"placeholder="Enter tags"  className="inputfield" required 
                        onChange={(e) =>setTags(e.target.value)} >                     
                       </input>
                       <br>
                       </br>
                       <div className="buttondiv">
                       <button type="submit" className="submitbutton" name="submitbutton"> Add  Question</button>
                       </div>
                       </div>
                </form>
              </div> 
          </div>
    
);
}
export default enterquestion;