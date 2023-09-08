import React, { useEffect, useState } from 'react'
const id="f9e9380f";
const api="1f35a7e8b737e9f2be9b3a338e574e1e"

const Recipe = () => {
  
    const[query,setQuery]=useState("")
    const[data,setData]=useState([])

    const getData=(item="pizza")=>{

    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${item}&app_id=${id}&app_key=${api}`)
    .then((res)=>res.json()).then((res)=>{
        if(res){
            setData(res.hits)
        }
        console.log(res.hits)
    })

    }

    useEffect(()=>{
        getData()
    },[])

    const handlebtn=()=>{
        alert("“Order Placed")
    }

    const handlebsearch=()=>{
        getData(query)
    }


  return (
    <>

    <div className='inputbox'>
       <input placeholder='search'
         type="text"
         onChange={(e)=>setQuery(e.target.value)}


       />

       <button className='searchbtn' onClick={handlebsearch}>search</button>
    </div>

    <div className="main">
   
     
      {
         data.map((elem,i)=>(

          
          <div className="cards_item" key={i+1}>
                  <div className="card">

                      <div className="card_image">
                          <img src=
                              {elem.recipe.image}
                                alt='image'
                                
                               />
                      </div>
                      <div className="card_content">
                          <h4 className="card_title">{elem.recipe.label}</h4>
                          <p>{elem.recipe.digest.length}</p>

                          <button onClick={handlebtn} className='btn'>
                          Order Now</button>
                          
                         
                          

                         
                      </div>
                  </div>
              </div>


         
          ))

      }


    </div>


 
 </>
  )
}

export default Recipe
