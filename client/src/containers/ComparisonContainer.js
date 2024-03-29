import './ComparisonContainer.css';
import React, {useState, useEffect} from "react";
import ComparisonItem from '../components/ComparisonItem';

const ComparisonContainer = ()=> {
    const [planets, setPlanets] = useState([]);
    const [orderedPlanets, setOrderedPlanets] = useState([]);
    

    let [planetInfo, setPlanetInfo] = useState(null);
    let [planetInfo2, setPlanetInfo2] = useState(null);
    
    // const sortPlanets = (() => {

    // })sortByKey(planet, planet.aphelion)

    // function sortByKey(array, key) {
    //     return array.sort(function(a, b) {
    //         var x = a[key]; var y = b[key];
    //         return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    //     });
    // }

    const getPlanets = function(){
        fetch('https://api.le-systeme-solaire.net/rest/bodies/')
        .then(res => res.json())
        .then(planets => {  
            setPlanets(planets.bodies.filter(planet => (planet.isPlanet && !planet.englishName.startsWith(1) && !planet.englishName.startsWith("P"))))});    
    }
    


    const onClickPlanet = function (id){
        fetch(`https://api.le-systeme-solaire.net/rest/bodies/${id}`)
        .then(res => res.json())
        .then(planetInfo => setPlanetInfo(planetInfo))   
    }
    const onClickPlanet2 = function (id){
        fetch(`https://api.le-systeme-solaire.net/rest/bodies/${id}`)
        .then(res => res.json())
        .then(planetInfo => setPlanetInfo2(planetInfo))   
    }

    console.log(planetInfo);

    // for (const planet in planets) {
    //     console.log(planet.englishName);
    //   }
    

 

    useEffect(() => {
        getPlanets();   
    }, []) 

    

    

    const planetOptions = planets.map((planet,key) => {
        return (
            <li key={key} className="planetListName" onClick={() => onClickPlanet(planet.englishName)}>{planet.englishName}</li>
        )
    })
    const planetOptions2 = planets.map((planet) => {
        return (
            <li className="planetListName" onClick={() => onClickPlanet2(planet.englishName)}>{planet.englishName}</li>
        )
    })

  


    return(
        <div className="comparisonContainerMainDiv">
        <h1>Pick 2 planets to compare their statistics!</h1>
            <div className="comparisonItemParent">
            
                <div className="firstComparisonItem">
                {/* <h2>List 1</h2> */}
                    <ul className="ulcontainer">
                        {planetOptions} 
                    </ul> 
                    
                </div>
                <ComparisonItem  planetInfo= {planetInfo}  />
                {/* <h1 className="vs">VS</h1> */}
                <div className="secondComparisonItem">
                    <ul className="ulcontainer">
                        {planetOptions2} 
                    </ul> 
                    
                </div> 
                <ComparisonItem  planetInfo= {planetInfo2}/>
               
            
           
            </div>
        </div>
        
        )
    
}

export default ComparisonContainer;