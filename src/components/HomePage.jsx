import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

function HomePage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/AboutPage", { state: { name } });
  };

  return (
    <FirstPageContainer>
      <div className="box">
        <h1>Login Page</h1>
        <div className="input-enter">
          <input 
            type="text" 
            placeholder="Enter the Name" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required
          />
          <button onClick={handleSubmit} disabled={!name.trim()}>
            Submit
          </button>
        </div>
      </div>
    </FirstPageContainer>
  );
}

const FirstPageContainer = styled.div`
  .box{
    margin: 100px auto;
    max-width: 380px;
    padding: 60px;
    box-shadow: 0px 0px 10px black;
  }
  h1{
    position: relative;
    top: -80px;
    left: -10px;
    font-size: 4.3rem;
  }
  .input-enter{
    margin-top: -90px;
  }
  input {
    border: 2px solid red;
    padding-top: -40px;
    padding: 10px;
  }
  button {
    background-color: black;
    color: aliceblue;
    padding:10px;
    margin-left: 10px;
    cursor: pointer;
    opacity: ${props => (props.disabled ? 0.5 : 1)};
  }
`;

export default HomePage;
