import './PlanatariumContainer.css';
import React, {useState, useEffect} from "react";
// import { ReactComponent as Logo } from "clientassests/download.jpeg";
import mercury from '../assests/Mercury.png';
import venus from '../assests/Venus.png';
import earth from '../assests/Earth.png';
import mars from '../assests/Mars.png';
import jupiter from '../assests/Jupiter.png';
import saturn from '../assests/Saturn.png';
import uranus from '../assests/Uranus.png';
import neptune from '../assests/Neptune.png';


const PlanetariumContainer = () => {
    const [planets, setPlanets] = useState([]);


    const getPlanets = function(){
        fetch('https://api.le-systeme-solaire.net/rest/bodies/')
        .then(res => res.json())
        .then(planets => {
            setPlanets(planets.bodies.filter(planet => planet.isPlanet))});
        
    }

    
    const onClickPlanet = function (id){
        fetch(`https://api.le-systeme-solaire.net/rest/bodies/${id}`)
        .then(res => res.json())
        .then(res => console.log(res))
    }
     


    useEffect(() => {
        getPlanets();
        
    }, [])

    // useEffect(() => {
    //     onlyPlanest();

    // }, [])

    


    return(
        

        <div>
        <h1>Our Planatarium</h1>
        <div className="planetContainer">
            <img src={mercury} className="mercury" key="mercury" onClick={() => onClickPlanet("mercury")}/>
            <img src={venus} className="venus" key="venus" onClick={() => onClickPlanet("venus")}/>
            <img src={earth} className="earth" key="earth" onClick={() => onClickPlanet("earth")}/>
            <img src={mars} className="mars" key="mars" onClick={() => onClickPlanet("mars")}/>
            <img src={jupiter} className="jupiter" key="jupiter" onClick={() => onClickPlanet("jupiter")}/>
            <img src={saturn} className="saturn" key="saturn" onClick={() => onClickPlanet("saturn")}/>
            <img src={uranus} className="uranus" key="uranus" onClick={() => onClickPlanet("uranus")}/>
            <img src={neptune} className="neptune" key="neptune" onClick={() => onClickPlanet("neptune")}/>
        </div>
        
        

        {/* <PlanetsDetails planets={planets} /> */}
        </div>
    )
    
}


export default PlanetariumContainer;