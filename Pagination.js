import axios from 'axios';
// import Page from './Page';
import React, { useEffect, useState } from 'react'
export default function Pagination() {
    const[value,setValue]=useState([]);
    const[search,setSearch]=useState("");
     const[filtered,setFilterd]=useState([])
     const[sorted,setSorted]=useState(true);

    useEffect(()=>{
        axios.get("http://localhost:4000/pagination")
        .then(response=>{
         setValue(response.data);
        //  console.log(response.data);
         setFilterd(value.filter(data=>{return data.name.toLowerCase().includes(search.toLowerCase());}))
        });
    },[search,value]);
  

    const handleSort=(col)=>{
        if(sorted==="Asending"){
            const sorting=[...value].sort((a,b)=>a[col].toLowerCase( ) > b[col].toLowerCase()?1: -1
            );
            setValue(sorting);
            setSorted("Desending");

        }if(sorted==="Desending")
        {
            const sorting=[...value].sort((a,b)=>a[col].toLowerCase( ) < b[col].toLowerCase() ?1: -1
            );
            setValue(sorting);
            setSorted("Asending");

        }
    }
        


return (
    <div>
    {/* <h5>Sort</h5>
    <select >
    <option disabled value='none'>sort</option>
    <option value='id' onclick={handleSort}>Id</option>
    <option value='name' onclick={handleSort}>Name</option>
    <option value='age' onclick={handleSort}>Age</option>
    </select> */}
    {/* <button onChange={handleSubmit}>Search</button> */}
    <input type="text" placeholder="search here..." value={search} onInput={(e)=>setSearch(e.target.value)}></input>
    <table>
    <thead>
        <tr>
            <th onClick={()=>handleSort("id")}>S.No </th>
            <th onClick={()=>handleSort("name")}>Name </th>
            <th onClick={()=>handleSort("email")}>Email </th>
            <th onClick={()=>handleSort("age")}>Age </th>
        </tr>
        </thead>
        <tbody>
        {filtered.map((value,index)=>(
            <tr key={index}>
            <td>{value.id}</td>
            <td>{value.name}</td>
            <td>{value.email}</td>
            <td>{value.age}</td>
           
        </tr>
        ))}
           
         </tbody>
        </table>
            
       {/* <Page data={value}> </Page>  */}

        </div>
  )
}

