import React, {useEffect, useState} from "react";
import {Image} from "react-bootstrap";
import Moment from 'react-moment';
import header from "../../assets/header3.jpg"
import 'moment/locale/ru';
import 'moment/locale/sv';
import {getWeddingDate} from "../../util/GetAPI";
import {API_BASE_URL, translation} from "../../constants";
import Countdown from "./Countdown";
// import Countdown from 'react-countdown';
const Header =(props)=>{
    // const [date,setDate]=useState('')
    const date = ""
    // const Completionist = () => <span>Свадьба состоялась!!!</span>;
    // const getDateFromAPI=(signal)=>{
    //     let promise = getWeddingDate(signal)
    //     promise
    //         .then(response => {
    //             const newDate = new Date(response.weddingDate)
    //             setDate(newDate)
    //         }).catch(() => {
    //     });
    // }
    // useEffect(()=>{
    //     const abortController = new AbortController()
    //     const signal = abortController.signal
    //     getDateFromAPI(signal);
    //     return function cleanup() {
    //         abortController.abort()
    //     }
    // },[])
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return(
        <div id={"home"} style={{"overflow":"hidden","position":"relative"}}>
                <Image className={"header"}
                       src={header}/>
                <div className={"timerBlock"}>
                    <div className={"blockText"}>
                        {/*<div className={"weddingDate"}>*/}
                        {/*    29 августа 2020*/}
                        {/*</div>*/}
                        <div className={"datePlace"}>29 АВГУСТА, 15:00 | Загородный клуб «Artiland»</div>
                        {/*<div className={"inviteText"}>Приглашаем Вас разделить с нами этот волшебный праздник - нашу свадьбу.</div>*/}


                        {/*<div className={"beforeWedding"}>{translation.beforeWedding}</div>*/}
                        <div className={"timer"}>
                            {/*<Countdown*/}
                            {/*    date={Date.now() + 5000000}*/}
                            {/*    renderer={renderer}*/}
                            {/*>*/}
                            {/*</Countdown>*/}
                            <Countdown date={`${year}-08-29T15:00:00`} />
                        </div>
                        <div className={"hashtag"}>#скажитеДАчувствам</div>
                    </div>

                </div>
        </div>
    )
}
export default Header;