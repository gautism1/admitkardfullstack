import React ,{useState}from 'react';
import './App.css';
import axios from 'axios';

 
function search()
{
     const [check,setCheckString]=useState();  
     const[query, setQuery] = useState([]);
      onsubmit=(e)=> 
      {
         e.preventDefault();
         const searchable={
             "name":check
       }       
       const ans=  axios.post('http://localhost:5000/searching',searchable);
       
       
       {  ans.then((data)=>
         {   
            setQuery([data.data]);

         }).catch((err)=>
         {
            console.log("something uneven happened",err)
         }); 
           
      }
     // else {
       //  alert("No matching found")
     // }
console.log(query);
      }
     
    return(
        <div className="searching">
           <div className="inputbox">
             <form onSubmit={onsubmit}>
               <input type="text"  className="inputfield" placeholder="Enter string to be searched" onChange={(e) =>setCheckString(e.target.value)} required>
               </input>
                  <div className="buttondiv">
                       <button type="submit" className="submitbutton" name="searchbutton"  > Go for Search</button>
                       </div>
             </form>
             <div>
                <h2>Questions those having given string in tags or  query(questions)</h2>
                     <div className="datashown">
                     <ul>     
                    {                      
                       query &&  query.map((data,index)=>
                       (<p key={index}> {query.toString()}</p>))
                    }
                      </ul>   
                     </div>
             </div>
           </div>
        </div>

    )
}
export default search;