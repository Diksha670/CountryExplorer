export const SearchFilter=({search,Filter,setSearch,setFilter,countries,setCountries})=>
{
    const handleInput=(event)=>
    {
      setSearch(event.target.value);
    }
    const handleSelect=(event)=>
    {
       setFilter(event.target.value)
    }
    const sortCountries=(value)=>
    {
      const sortCountry=[...countries].sort((a,b)=>{
        return value==='asc'?a.names.common.localeCompare(b.names.common)
        :b.names.common.localeCompare(a.names.common);
      })
      setCountries(sortCountry);
    }
  return (
    <section className="searchFilter-section">
      <div className="search">
         <input type="text" placeholder="Search" value={search} onChange={handleInput}/>
      </div>
       <div className="search-btnorder">
        <button onClick={()=>sortCountries('asc')}>Asc</button>
       </div>
        <div className="search-btnorder">
        <button onClick={()=>sortCountries('dsc')}>Dsc</button>
       </div>
        <div className="search-btnorder">
            <select className="select-section" value={Filter}
            onChange={handleSelect}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </section>
  )
}