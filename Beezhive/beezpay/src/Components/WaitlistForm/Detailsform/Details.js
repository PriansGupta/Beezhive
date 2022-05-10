import React, { useRef, useState } from "react";
import "./Details.css";
import Otp from "../Modal/OtpModal/otp";
import Transition from "react-transition-group";
import Thanks from "../Modal/ThanksModal/Thanks";

const FormDetails = () => {
  const [display, setDisplay] = useState(false);
  const [verify, setVerify] = useState("NO");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const nameChange=(e)=>{
      setName(e.target.value)
  }
  const phoneChange=(e)=>{
      setPhone(e.target.value)
  }
  const emailChange=(e)=>{
      setEmail(e.target.value)
  }

  //   const SendData = (Data) => {
  //     setTimeout(() => {
  //       const requestOptions = {
  //         method: "POST",
  //         body: JSON.stringify(Data),
  //       };
  //       fetch(
  //         "https://us-central1-beezhive-79e2f.cloudfunctions.net/app/api/waitlist",
  //         requestOptions
  //       )
  //         .then(async (response) => {
  //           if (!response.ok) {
  //             console.log(response);
  //           }
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     }, 1000);
  //   };

  //   SendData({
  //     id: "hjhi877",
  //     name: "Priyansh",
  //     email: "priyanshg615@gmail.com",
  //     number: "845377213",
  //   });

  const ModalDisplay = (e) => {
    console.log(name,email,phone);
    e.preventDefault();
    setDisplay(true);
  };

  const Verify = () => {
    setVerify("YES");
  };

  const CloseModal = (value) => {
    console.log(value);
    setDisplay(!display);
  };
  const CloseVerify = (value) => {
    console.log(value);
    setVerify("NO");
  };
  return (
    <React.Fragment>
      {display && <Otp onClose={CloseModal} onVerify={Verify}></Otp>}
      {verify === "YES" && <Thanks onClose={CloseVerify}></Thanks>}
      <div className="form-data">
        <div className="form-lottie"></div>
        <div className="form-details">
          <div>
            <h1>Join Waitlist Now</h1>
            <br></br>
            <p>No Hidden Fees.No Joining Fees.No Annual Fees</p>
          </div>
          <div className="form">
            <form onSubmit={ModalDisplay}>
              <input
                required
                type="text"
                placeholder="Name"
                onChange={nameChange}
              ></input>
              <input
                required
                type="email"
                placeholder="Email"
                onChange={emailChange}
              ></input>
              <input type="text" placeholder="Referal Code"></input>
              <div>
                <input
                  required
                  type="text"
                  placeholder="+91"
                ></input>
                <input required type="number" placeholder="Phone No." onChange={phoneChange}></input>
              </div>
              <button type="submit">Join Now</button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormDetails;
