import countrydata from '../api/data.json'
export const About=()=>{
    return <section className="container section-about">
        <h2 className="container-title">
            Here are some Interesting Facts <br />
            we are proud of
        </h2>
        <div className="gradient-cards">
          {
             countrydata.map((currentCountry)=>{
                 const {id,countryName,capital,population,interestingFact}=currentCountry
                  return (
                   
                    <div className="card" key={id}>
                   <div className="container-card about bg-blue-box">
                    <p className="card-title">{countryName}</p>
                    <p>
                        <span className="card-description">Capital:</span>
                         {capital}
                    </p>
                    <p>
                        <span className="card-description">Population:</span>
                         {population}
                    </p>
                    <p>
                        <span className="card-description">Interesting Fact:</span>
                        {interestingFact}
                    </p>
                </div>
            </div>
                  )
             })
          }  
            
        </div>
    </section>
}