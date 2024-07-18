import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function AboutPage() {
  const location = useLocation();
  const { name } = location.state || { name: "Guest" }; // Fallback to "Guest" if no name is provided

  const [conductedClasses, setConductedClasses] = useState("");
  const [presentClasses, setPresentClasses] = useState("");
  const [requiredPercentage, setRequiredPercentage] = useState(75);
  const [result, setResult] = useState("");

  const calculateAttendance = () => {
    const conducted = parseInt(conductedClasses);
    const present = parseInt(presentClasses);

    if (isNaN(conducted) || isNaN(present) || conducted <= 0) {
      setResult("Please enter valid numbers for classes conducted and classes present.");
      return;
    }

    const currentPercentage = (present / conducted) * 100;
    const requiredClasses = (requiredPercentage / 100) * conducted;

    if (currentPercentage >= requiredPercentage) {
      const maxBunks = Math.floor((present - (requiredPercentage / 100) * conducted) / (1 - requiredPercentage / 100));
      setResult(`You can bunk ${maxBunks} more classes and still maintain ${requiredPercentage}% attendance.`);
    } else {
      const requiredToAttend = Math.ceil(requiredClasses - present);
      setResult(`You need to attend ${requiredToAttend} more classes to reach ${requiredPercentage}% attendance.`);
    }
  };

  return (
    <>
      <TopContainer>
        <div className="box">
          <h1>Welcome, {name}!</h1>
          <h2>Let's Bunk</h2>

          <div className="inputValue1">
            <p>Classes Conducted</p>
            <input
              type="text"
              placeholder="Total Classes Conducted"
              value={conductedClasses}
              onChange={(e) => setConductedClasses(e.target.value)}
            />
          </div>

          <div className="inputValue2">
            <p>Classes Present</p>
            <input
              type="text"
              placeholder="Total Classes Present"
              value={presentClasses}
              onChange={(e) => setPresentClasses(e.target.value)}
            />
          </div>

          <div className="lastBox">
            <p>Required Percentage</p>
            <div className="percentage">
              <li
                onClick={() => setRequiredPercentage(75)}
                className={requiredPercentage === 75 ? "selected" : ""}
              >
                75%
              </li>
              <li
                onClick={() => setRequiredPercentage(80)}
                className={requiredPercentage === 80 ? "selected" : ""}
              >
                80%
              </li>
              <li
                onClick={() => setRequiredPercentage(85)}
                className={requiredPercentage === 85 ? "selected" : ""}
              >
                85%
              </li>
              <li
                onClick={() => setRequiredPercentage(90)}
                className={requiredPercentage === 90 ? "selected" : ""}
              >
                90%
              </li>
            </div>
          </div>
          <button onClick={calculateAttendance}>Submit</button>
          <div className="last">{result}</div>
        </div>
      </TopContainer>
    </>
  );
}

export default AboutPage;

const TopContainer = styled.div`
  max-width: 500px;
  border: 1px solid red;
  margin: 80px auto;
  text-align: center;
  background-color: #0101f36b;
  outline: none;

  .box {
    font-family: 'Courier New', Courier, monospace;
    color: black;
    margin: 20px;
  }

  .box h1 {
    font-size: 2.2rem;
    margin-top: 0px;
    white-space: nowrap;
  }

  .box .inputValue1 p {
    display: block;
    margin-top: -17px;
    margin-left: -276px;
    font-size: 1.1rem;
    font-weight: 800;
  }

  .box .inputValue1 input {
    width: 95%;
    margin-left: -1px;
    margin-top: -12px;
    padding: 10px;
  }

  .box .inputValue2 p {
    display: block;
    margin-top: 17px;
    margin-left: -296px;
    font-size: 1.1rem;
    font-weight: 800;
  }

  .box .inputValue2 input {
    width: 95%;
    margin-left: -1px;
    margin-top: -12px;
    padding: 10px;
  }

  .box .lastBox p {
    margin-left: -262px;
    font-weight: 700;
  }

  .box .lastBox .percentage {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    gap: 12px;
    margin-left: 10px;
    cursor: pointer;
  }

  .box .lastBox .percentage li {
    background-color: pink;
    padding: 6px;
  }

  .box .lastBox .percentage li.selected {
    background-color: green;
  }

  .box button {
    margin-top: 17px;
    width: 100%;
    background-color: brown;
    color: black;
    font-size: 20px;
    cursor: pointer;
  }

  .box .last {
    margin-top: 15px;
    text-align: center;
    justify-content: center;
    font-weight: 700;
    font-size: 22px;
  }
`;
