import React, { useEffect } from "react";
import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useState } from "react";
import portfolioData from "../../Data/portfolio.json";

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState("text-animate");
    console.log(portfolioData);

    useEffect(() =>{
        const timer=setTimeout(() => {
            setLetterClass("text-animate-hover");
        },3000);

        return ()=>{
            clearTimeout(timer);
        }
    },[])

    const renderPortfolio = (portfolio) =>{
        return (
            <div className="images-container">
                {
                    portfolio.map((port,idx)=>{
                        return (
                            <div key={idx} className="image-box">
                                <img className="portfolio-image" src={port.cover} alt="portfolio" />

                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button className="btn" onClick={()=>window.open(port.url)}>
                                        View
                                    </button>
                                </div>
                            </div>
                            
                        )
                    })
                }
            </div>
        );
    }

    return(
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['P','O','R','T','F','O','L','I','O']}
                    idx={15}
                    />
                </h1>
                <div>
                   {renderPortfolio(portfolioData.portfolio)}
                </div>
            </div>
            <Loader type="pacman"/>
        </>
        
    )
}

export default Portfolio;