import { useEffect, useState } from "react"
import { CountryCard } from "./CountryCard";
import { SearchFilter } from "../Components/Layout/SeachFilter";
const API_KEY = import.meta.env.VITE_API_KEY;
export const Country=()=>{
    const[countrydata,setCountrydata]=useState([]);
    const [search,setSearch]=useState('');
    const [filter,setFilter]=useState('all');
    useEffect(()=>{
       async function fetchData(){
        try
        {
        const result=await fetch('https://api.restcountries.com/countries/v5?limit=100',
            {
                headers:{
                    'Authorization': "Bearer "+API_KEY
                }
            }
        );
        const data=await result.json()
        console.log("API ",data);
        console.log("Status ",result.status);
        if(!result.ok)
        {
            throw new Error(`API Error: ${result.status}`)
       }
        setCountrydata(data?.data.objects);
        console.log(data);
        }
        catch(error)
        {
            console.error('Error:',error);
        }
       } 
       fetchData();
     } ,[]);


     //search country

     const searchCountry=(country)=>
     {
        if(search)
        {
            return country.names.common.toLowerCase().includes(search.toLowerCase())
        }
        return country;
     }
     const filterCountry=(country)=>
     {
        if(filter==='all')
        return country;
       else
        return country.region===filter
     }
    //  const filteredCountry=countrydata.filter((country)=>searchCountry(country)&&filterCountry(country));
    const filteredCountry = Array.isArray(countrydata) 
  ? countrydata.filter((country) => searchCountry(country) && filterCountry(country))
  : [];
      if(countrydata.length<1)
          return <h1 style={{margin:"10%",textAlign:'center'}}>Loading....</h1>
      return (
        <section className="country-section">
            <SearchFilter search={search} filter={filter} setSearch={setSearch} setFilter={setFilter} countries={countrydata} setCountries={setCountrydata}></SearchFilter>
            <ul className="grid grid-four-cols countryLi">
            {
                filteredCountry.map((currCountry,index)=>
            {
                 return <CountryCard country={currCountry} key={index}></CountryCard>
            })}
            </ul>
            
        
        </section>
        
      )

}
