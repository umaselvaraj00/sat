import React from 'react'
import { useState ,useEffect,axios} from 'react'


export default function Page() {
    // const [number,setNumber]=useState(1);
    // const [postPerPage]=useState(10);
    // const [value,setValue]=([]);
    // useEffect(()=>{
    //     axios.get("http://localhost:4000/pagination")
    //     .then(response=>{
    //      setValue(response.data);
    //      } )})

    // const lastPage = number * postPerPage;
    // const firstPage = lastPage - postPerPage;
    // const currentPage = value.slice(firstPage, lastPage);
    // const pageNumber = [];
  
    // for (let i = 1; i <= Math.ceil(value.length / postPerPage); i++) {
    //     pageNumber.push(i);
    //   }
   
    // const changePage = (pageNumber) => {
    //     setNumber(pageNumber);
      
  return (
    <div>
     {/* {currentPage.map((value,index)=>(
            <tr key={index}>
            <td>{value.id}</td>
            <td>{value.name}</td>
            <td>{value.email}</td>
            <td>{value.age}</td>
           
        </tr>
        ))}<button onClick={()=>setNumber(number-1)}>Previous</button>
    {pageNumber.map((ele)=>{
        return(<button onClick={()=>changePage(ele)}>{ele}</button>
        );
    })}
    <button onClick={()=>setNumber(number+1)}>Next</button> */}
    </div>
  )
}

