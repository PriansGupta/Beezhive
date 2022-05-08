import React from "react";
import "./credit.css";
import back1 from "../../../Assets/credit_back_1.png";
import back2 from "../../../Assets/credit_back_2.png";
import credit from "../../../Assets/Credit.png";


const Credit=()=>{

    return(
        <div className="credit_card_details">
            <div className="card">
                <img className="card_1" src={credit} alt="Credit card"></img>
                <img className="card_2" src={back1} alt="Credit card"></img>
                <img className="card_3" src={back2} alt="Credit card"></img>
            </div>
            <div></div>
        </div>
    );

}

export default Credit;