import React, { useEffect,useState } from 'react'


const id="f9e9380f";
const api="1f35a7e8b737e9f2be9b3a338e574e1e"
const Diet = () => {

    const[data,setData]=useState([])
    const[query,setQuery]=useState("noddles")

    const getData=(query)=>{

        fetch(`https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${api}&diet=balanced`)
        .then((res)=>res.json())
        .then((res)=>{
           
            if(res.hits){
                setData(res.hits)
            }else{
                alert("It Is not avaible")
            }
        })
    
        }

        useEffect(()=>{
            getData(query)
        },[])

        const handlebsearch=()=>{
            getData(query)
        }
    
        const handlebtn=()=>{
            alert("“Order Placed")
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
                        

                          <h5>Protein :
                          {elem.recipe.totalNutrients.PROCNT.quantity.toFixed(0)}
                          {elem.recipe.totalNutrients.PROCNT.unit}</h5>
                          <h5>FAT :{elem.recipe.totalNutrients.FAT.quantity.toFixed(0)}
                          {elem.recipe.totalNutrients.PROCNT.unit}</h5>

                          

                          <button onClick={handlebtn} className='btn'>
                              Order Now
                            </button>
                          
                         
                          

                         
                      </div>
                  </div>
              </div>


         
          ))

      }


    </div>


 
     </>
  )
}

export default Diet
