import React from "react";
import "./otp.css";

const Otp=()=>{

    return(
        <div className="otp_modal">
            <div className="otp_lottie"></div>
            <div className="Verificatiion_code">
                <h2>Verificatiion Code</h2>
                <br></br>
                <p>Please Enter the Code Sent</p>
                <br></br>
                <p>To <b>+11234567890</b></p>
            </div>
            <div className="otp_input">
                <form>
                <input type="number"></input>
                <input type="number"></input>
                <input type="number"></input>
                <input type="number"></input>
                <input type="number"></input>
                <input type="number"></input>
                </form>
            </div>
            <div></div>
        </div>
    );

}

export default Otp;