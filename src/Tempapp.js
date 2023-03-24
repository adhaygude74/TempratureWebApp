import axios from "axios";
import React, { useEffect, useState } from "react";

function Tempapp() {
     let[city,setCity]= useState("")
     let[name,getCity]= useState("")
     let[Search,SearchCity]= useState("Mumbai")  
     useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${Search}%20&units=metric&appid=3d3b4c4ed67210c2d39aed1a0b1f5e1a`).then((result)=>{
               console.log(result.data.name)
               console.log(result)
               setCity(result.data.main)    
               getCity(result.data.name  )
               if(result.data.name=="")
               {
                SearchCity('')
               console.log("empty")  
               getCity("")
               }
               else
               {

               }
        }).catch((err)=>{
            // console.log("dfsdf")
            getCity("") 
        })
     },[Search])

     function GetInputValue(e)
     {
         if(e.target.value.length==0)
         {
            SearchCity("Mumbai")
         }
         else
         {
          SearchCity(e.target.value)
         }
        console.log(e.target.value.length)
         SearchCity(e.target.value)
     }
  
  return (
    <div >
      <div className="row">
        <div className="col-4 "></div>
        <div className="col-4 ">
          <div
            className="card border-secondary mb-3"
            style={{ width: "100%", "margin-top": "80px", height: "100%" }}
          >
          <div className="mt-2">   <h4 className="text-center  ">Temprature App</h4> </div>  
            <div className="card-body text-secondary">
              <div className="row mt-2">
                <input
                  className="form-control "
                  placeholder="City Name"
                  onChange={GetInputValue}
                ></input>
              </div>
              {
               !name? ( <div className="text-center mt-5">No Data Found</div>
               ) : (
                <>
                <div className="row mt-3">
                  <div  className="d-flex  "> 
                        <i style={{"margin-left": "81px"}} class='fas fa-6x fa-street-view'></i> 
                        <span className="mt-5">{Search}</span>
                   </div>
            
              </div>
              <div className="row mt-3">
                  <div className=""> 
                      <h1 className=" text-center">{city.temp}℃</h1>
                        
                   </div>
            
              </div>
              <div className="row mt-3">
                  <div className=""> 
                      <h4 className=" text-center">min : {city.temp_min} ℃  |   max : {city.temp_max} ℃</h4>
                        
                   </div>
            
              </div>
              </>
               )
              }
             

             
            </div>
          </div>
        </div>
      </div>
      <div className="col-4  " ></div>
    </div>
  );
}

export default Tempapp;
