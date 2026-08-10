import { FaArrowRight } from "react-icons/fa";
import { About } from "./About";
export const Home=()=>{
    return (
        <>
         <main className="hero-section main">
           <div className="container grid grid-two-cols">
            <div className="hero-content">
                <h1 className="heading-xl">
                    Explore the world, One Country at a Time
                </h1>
                <p className="paragraph">
                    Discover the history, culture, and beauty of every nation.Sort,
                    search, and filter through countries to find details you need.
                </p>
                <button className="btn btn-darken btn-inline bg-white-box">
                    Start Exploring <FaArrowRight/>
                </button>
            </div>
            <div className="hero-image">
                <img src="/images/World.png" alt="world image" className="banner-image"/>
            </div>
            </div> 
        </main>
        <About></About>
        </>
       
    )
}
