import React, {useState} from "react";
import Header from "./parts/Header";
import AboutUs from "./parts/AboutUs";
import OurStory from "./parts/OurStory";
import Program from "./parts/Program";
import Place from "./parts/Place";
import Invitation from "./parts/Invitation";
import './Parts.css?v9'
import DressCode from "./parts/DressCode";
import Navigation from "./parts/Navigation";

const MainPage = (props) => {
    return (
        <div>
            <Navigation/>
            <Header/>
            <OurStory/>
            <Program/>
            <DressCode/>
            <Invitation/>
            <Place/>
        </div>
    )
}
export default MainPage;
