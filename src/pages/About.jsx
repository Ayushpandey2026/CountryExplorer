import countryfacts from "../api/CountryData.json"
export const About=()=>{
    return(
        <> 
        <section className=" section-about container">
            <h1 className="container-title">
                Here are the Intresting Facts <br />
                we are proud of
            </h1>
            <div className="gradient-card">
                    {countryfacts.map((curElem)=>{
                    const{id,countryName,capital,population,interestingFact}=curElem;
            return(
                <div className="card" key={id}>
                    <div className="container-card bg-blue-box">
            <p className="card-title">{countryName}</p>
            <p>
                <span className="card-description">Country:</span> {capital}
            </p>
            <p>
                <span className="card-description">Population:</span> {population}
            </p>
            <p>
                <span className="card-description">Interesting facts:</span> {interestingFact}
            </p>
                </div>
                </div>
             );
             })
            }
            </div>
        </section>
        </>
    )
}