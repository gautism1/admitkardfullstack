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
            if(data.data[0]) {
              setQuery([data.data[0]]);  
            }
           
         }).catch((err)=>
         {
            console.log("something uneven happened",err)
         }); 
           
      }
   
console.log(query[0]);
      }    
    return(
        <div className="searching">
           <div className="inputbox">
             <form onSubmit={onsubmit} className="searcchform inputsearchfield">
               <input type="text"  className="inputfield" placeholder="Enter string to be searched" onChange={(e) =>setCheckString(e.target.value)} required>
               </input>
                  <div className="buttondiv">
                       <button type="submit" className="submitbutton searchbutton" name="searchbutton"  > Go for Search</button>
                       </div>
             </form>
             <div>
                <h2>Questions those having given string in tags or  query(questions)</h2>
                     <div className="datashown">
                     <ul>     
                    {                      
                       query &&  query.map((data,index)=>
                       (<h3 key={index}> {data.string }</h3>))
                    }
                      </ul>   
                     </div>
             </div>
           </div>
        </div>

    )
}
export default search;