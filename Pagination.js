import axios from 'axios';
import React, { useEffect, useState } from 'react'
export default function Pagination() {
    const[value,setValue]=useState([]);
    const[search,setSearch]=useState("");
    const[searchElem]=useState(["id","name","age"])
     const[filtered,setFilterd]=useState([])
     const[sorted,setSorted]=useState("Ascending");
     const [number,setNumber]=useState(1);

     const PostPerPage=10;

    useEffect(()=>{
        axios.get("http://localhost:4000/pagination")
        .then(response=>{
         setValue(response.data);
        //  setFilterd(value.filter(data=>{return data.name.toLowerCase().includes(search.toLowerCase());}))
        // });
    },[search,value]);
  }

    const data=Object.values(value);

    return search(value){
      return value.filter((value) => {
        if(value.region==filtered){
          return searchElem.some((newItem) => {
            return (
              value[newItem] .toString() .toLowerCase() .indexOf(value.toLowerCase()) > -1);});
            }else if (filtered=="All"){
              return searchElem.some((newItem)=>){
                  value[newItem].toString().toLowerCase()
                  .indexOf(search.toLowerCase()> -1);)
              });

              
            }
        });
    }
  }
    
      
          
              
                 
                 
                 
          

     const lastPage = number * PostPerPage;
     const firstPage = lastPage - PostPerPage;
     const currentPage = value.slice(firstPage, lastPage);
     const pageNumber = [];
  
     for (let i = 1; i <= Math.ceil(value.length / PostPerPage); i++) {
           pageNumber.push(i);
         }
      const changePage = (pageNumber) => {
           setNumber(pageNumber);
      }
    const handleSort=(col)=>{
        if(sorted==="Ascending"){
            const sorting=[...value].sort((a,b)=>a[col].toLowerCase() > b[col].toLowerCase() ? 1: -1
            );
            setValue(sorting);
            setSorted("Descending");

        }if(sorted==="Descending")
        {
            const sorting=[...value].sort((a,b)=>a[col].toLowerCase() < b[col].toLowerCase() ? 1: -1
            );
            setValue(sorting);
            setSorted("Ascending");

        }
    }
  return (
    <div>
       
    <input type="text" placeholder="search here..." value={search} onInput={(e)=>setSearch(e.target.value)}></input>
    <table>
    <thead>
        <tr>
            <th onClick={()=>handleSort("id")}>S.No ↑↓   </th>
            <th onClick={()=>handleSort("name")}>Name ↑↓ </th>
            <th onClick={()=>handleSort("email")}>Email ↑↓ </th>
            <th onClick={()=>handleSort("age")}>Age ↑↓ </th>
        </tr>
        </thead>
        <tbody>
        {currentPage.map((value,index)=>(
            <tr key={index}>
            <td>{value.id}</td>
            <td>{value.name}</td>
            <td>{value.email}</td>
            <td>{value.age}</td>
           
        </tr>
        ))}
           
         </tbody>
        </table>
        <button onClick={()=>setNumber(number-1)}>Previous</button>
          {pageNumber.map((ele)=>{
               return(<button onClick={()=>changePage(ele)}>{ele}</button>
        );
        })}
        <button onClick={()=>setNumber(number+1)}>Next</button> 
        
            
       

        </div>
  )
}
