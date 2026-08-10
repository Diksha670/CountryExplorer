import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom"
const API_KEY = import.meta.env.VITE_API_KEY;
export const CountryDetails=()=>{
   const paraData = useParams();
     const[currCountry,setCurrCountry]=useState({});
       useEffect(()=>{
          async function fetchData(){
           try
           {
           const result=await fetch(`https://api.restcountries.com/countries/v5/names.common/${paraData.id}?response_fields=names,population,region,subregion,tld,capitals,currencies,languages,borders,flag`,
           {headers:{
                    'Authorization': "Bearer "+API_KEY
                }
              }
           );
           const data=await result.json();
           console.log(data.data.objects[0].names.common);
           setCurrCountry(data.data.objects[0]);
           }
           catch(error)
           {
               console.error('Error:',error);
           }
          } 
          fetchData()
        } ,[]);
        
        if(!currCountry.flag)
          return <h1>Loading....</h1>
         console.log(currCountry);
        const {flag,names,population,region,subregion,capitals,tld,currencies,languages}=currCountry; 
   return (
     <section className="card country-details-card container">
         <div className="container-card fullcard bg-white-box">
           <div className="country-image grid grid-two-cols">
             <img src={flag?.url_svg || "https://placehold.co/300x200?text=No+Flag"}  
  alt={names?.common || "Flag"}  style={{height:'15rem',width:'100%'}}/>
            <div className="country-content">
            <p className="card-title">{names.official}</p>
            <p>
                <span className="card-description">Native Names:</span>
                {names?.native?Object.values(names.native).map((n)=>
                 n?.common).join(', '):'N/A'}
            </p>
            <p>
                <span className="card-description">Population:</span>
                {population.toLocaleString()}
            </p>
             <p>
                <span className="card-description">Region:</span>
                {region}
            </p>
            <p>
                <span className="card-description">SubRegion:</span>
                {subregion||'N/A'}
            </p>
            <p>
                <span className="card-description">Capital:</span>
                {capitals?.[0]?.name || "N/A"}
            </p>
            <p>
                <span className="card-description">Top Level Domain:</span>
                {tld?.join(', ')||'N/A'}
            </p>
            <p>
                <span className="card-description">Currency:</span>
                {currencies&&Object.keys(currencies).length>0?Object.keys(currencies).map((key)=>currencies[key].name).join(', '):'N/A'}
            </p>
            <p>
                <span className="card-description">Languages:</span>
                {languages&&Object.keys(languages).length>0?Object.values(languages).map((lang)=>lang.name).join(', '):'N/A'}
            </p>
           </div>
         </div>
         <div className="country-card-backbtn">
          <NavLink to='/country' className='backBtn'>
            <button className="country-card-btn">Go Back</button>
          </NavLink>
         </div>
       </div>  
     </section>
   )
}