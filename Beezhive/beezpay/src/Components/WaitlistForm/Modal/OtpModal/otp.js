import React from "react";
import "./otp.css";

const Otp=()=>{

    return(
        <div className="otp_modal">
            <ion-icon name="close-circle-outline"></ion-icon>
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
                <input type="text"></input>
                <input type="text"></input>
                <input type="text"></input>
                <input type="text"></input>
                <input type="text"></input>
                <input type="text"></input>
                </form>
            </div>
            <div className="resend">
                <p>Resend</p>
                <p>1:00</p>
            </div>
            <div className="verify">
                <button type="submit">Verify</button>
            </div>
        </div>
    );

}

export default Otp;