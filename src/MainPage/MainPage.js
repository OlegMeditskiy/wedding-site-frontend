import React, {useState} from "react";
import Header from "./parts/Header.js?v1";
import OurStory from "./parts/OurStory.js?v1";
import Program from "./parts/Program.js?v1";
import Place from "./parts/Place.js?v1";
import Invitation from "./parts/Invitation.js?v2";
import './Parts.css?v11'
import DressCode from "./parts/DressCode.js?v1";
import Navigation from "./parts/Navigation.js?v1";

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
