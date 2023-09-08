import React, { useEffect, useState } from 'react'

//https://api.edamam.com/api/recipes/v2?type=public&q=pasta&app_id=f9e9380f&app_key=1f35a7e8b737e9f2be9b3a338e574e1e&calories=100
const id="f9e9380f";
const api="1f35a7e8b737e9f2be9b3a338e574e1e"
const Calorie = () => {
    const[query,setQuery]=useState("pasta")
    const[data,setData]=useState([])
    const[calory,setColory]=useState("100-500")



    const getData=(query,calory)=>{

        fetch(`https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${api}&calories=${calory}`)
        .then((res)=>res.json())
        .then((res)=>{

            if(res){
                setData(res.hits)
            }
            
            console.log(res.hits)
        })
    
        }
    
        useEffect(()=>{
            getData(query,calory)
        },[])
    

        const handlebsearch=()=>{

            console.log(query,calory)
            getData(query,calory)
        }

        const handlebtn=()=>{
            alert("“Order Placed")
        }
    
 

  return (
    <div>

        <div className='inputbox'>
            <input placeholder='keyword'
            type="text"
            onChange={(e)=>setQuery(e.target.value)}
            />

           <input placeholder='enter colories in range like 100-200'
            type="text"
            onChange={(e)=>setColory(e.target.value)}
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
                       <h4 >{elem.recipe.label}</h4>
                       
                       <h5>Protein :
                       {elem.recipe.totalNutrients.PROCNT.quantity.toFixed(0)}
                       {elem.recipe.totalNutrients.PROCNT.unit}</h5>
                       <h5>FAT :{elem.recipe.totalNutrients.FAT.quantity.toFixed(0)}
                       {elem.recipe.totalNutrients.PROCNT.unit}</h5>
                       <p>colories :
                       {(elem.recipe.calories/elem.recipe.yield).toFixed(0)}</p>

                         <button onClick={handlebtn} className='btn'>
                           Order Now
                         </button>
                       
                      
                       

                      
                   </div>
               </div>
           </div>


      
       ))

   }


 </div>

          
        
      
    </div>
  )
}

export default Calorie
