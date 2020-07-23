import React, {useState} from "react";
import Header from "./parts/Header.js";
import OurStory from "./parts/OurStory.js";
import Program from "./parts/Program.js";
import Place from "./parts/Place.js";
import Invitation from "./parts/Invitation.js";
import './Parts.css?v11'
import DressCode from "./parts/DressCode.js";
import Navigation from "./parts/Navigation.js";

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
