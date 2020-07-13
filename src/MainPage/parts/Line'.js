import React from "react";
import {Image} from "react-bootstrap";
import {API_BASE_URL} from "../../constants";

const Line =()=>{
    return(
        <div className={"text-center"}>
            <Image style={{"width":"40vw"}} src={API_BASE_URL+"aria-alexander-backend.herokuapp.com/api/admin/files/line.png"}/>
        </div>
    )
}
export default Line;