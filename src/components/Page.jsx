import styled from "styled-components";

function Page(){
    return (
        <>
        <TopContainer>
            <div className="box">
                <h1>Let's Bunk</h1>

                <div className="inputValue1">
                    <p>Classes Conducted</p>
                    <input type="text" placeholder="Total Classes Conducted" />
                </div>

                <div className="inputValue2">
                    <p>Classes Present</p>
                    <input type="text" placeholder="Total Classes Present" />
                </div>

                <div className="lastBox">
                    <p>Required Percentage</p>
                    <div className="percentage">
                        <li>75%</li>
                        <li>80%</li>
                        <li>85%</li>
                        <li>90%</li>
                    </div>
                </div>
                <button>Submit</button>
                <div className="last">Hello Dear Students💪</div>
            </div>
        </TopContainer>
        </>
    );
}

export default Page


const TopContainer = styled.div`
    max-width: 500px;
    border: 1px solid red;
    margin: 80px auto;
    text-align: center;
    background-color: #0101f36b;
    outline: none;

    .box{
        font-family: 'Courier New', Courier, monospace;
        color: black;
        margin: 20px;
        /* border: 1px solid red; */
    }

    .box h1{
        font-size: 2.6rem;
        margin-top: 0px;
    }

    .box .inputValue1{
        /* border: 1px solid red; */
    }

    .box .inputValue1 p{
        display: block;
        margin-top: -17px;
        margin-left: -276px;
        font-size: 1.1rem;
        font-weight: 800;
    }

    .box .inputValue1 input{
        width: 95%;
        margin-left: -1px;
        margin-top: -12px;
        padding: 10px;
    }

    .box .inputValue2 p{
        display: block;
        margin-top: 17px;
        margin-left: -296px;
        font-size: 1.1rem;
        font-weight: 800;
    }

    .box .inputValue2 input{
        width: 95%;
        margin-left: -1px;
        margin-top: -12px;
        padding: 10px;
    }

    .box .lastBox p{
        margin-left: -262px;
        font-weight: 700;
    }

    .box .lastBox .percentage{
        display: flex;
        flex-direction:row;
        list-style-type: none;
        gap: 12px;
        margin-left: 10px;
        cursor: pointer;
    }
    
    .box .lastBox .percentage li{
        background-color: pink;
        padding: 6px;
    }

    .box .lastBox .percentage li:active{
        background-color: green;
    }

    .box button{
        margin-top: 17px;
        width: 100%;
        background-color: brown;
        color: black;
        font-size: 20px;
        cursor: pointer;
    }

    .box .last{
        margin-top: 15px;
        text-align: center;
        justify-content: center;
        font-weight: 700;
        font-size: 22px;
    }

`;