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
      <h1>Login Page</h1>
      <input 
        type="text" 
        placeholder="Enter the Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </FirstPageContainer>
  );
}

const FirstPageContainer = styled.div`
  input {
    border: 2px solid red;
  }
  button {
    border: 2px solid red;
  }
`;

export default HomePage;
