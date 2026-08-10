import { NavLink } from "react-router-dom";

export const CountryCard=({country})=>
{
   const {flag,names,population,region,capitals}=country; 
  return <li className="country-card card">
    <div className="container-card bg-white-box">
        <img   src={flag?.url_svg || "https://placehold.co/300x200?text=No+Flag"}  
  alt={names?.common || "Flag"}  style={{height:'15rem',width:'100%',aspectRatio:'3/2',objectFit:'cover'}}/>
        <div className="countryInfo">
            <p className="card-title">{names.common.length>10?names.common.slice(0,15)+"...":names.common}</p>
            <p>
                <span className="card-description">Population:</span>
                {population.toLocaleString()}
            </p>
             <p>
                <span className="card-description">Region:</span>
                {region}
            </p>
                        <p>
                <span className="card-description">Capital:</span>
                {capitals?.[0]?.name || "N/A"}
            </p>
            <NavLink to={`/country/${names.common}`}>
                <button className="read-btn">Read More</button>
            </NavLink>
            
        </div>
    </div>
  </li>
}