// DepositForm.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import icon1 from './assets/img/icon1.png';
import icon2 from './assets/img/icon2.jpg';
import icon3 from './assets/img/icon3.jpg';
import icon4 from './assets/img/icon4.jpg';
import icon5 from './assets/img/icon5.jpg';
import icon6 from './assets/img/icon6.png';
import icon7 from './assets/img/icon7.png';
// Styled components
const Container = styled.div`
  background: rgb(32,35,40);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 255);
  padding: 20px;
  width: 330px;
  margin: 20% auto;
`;

const Title = styled.div`
  color: rgb(229,230,224);
  margin-bottom: 20px;
  font-size: 17px;
  margin: 1% 0 8% 0;
  font-weight: 500;
`;

const Subtitle = styled.div`
color: rgb(87,94,104);
  font-size: 13px;
  margin:2% 0;
  font-weight: 500;
  margin-bottom: 10px;
`;

const InnerContainer = styled.div`
  display:flex;
  align-items: center;
  flex-direction: row;
`;
const Leftcontent = styled.div`
  flex-grow: 2;
  width:40%;
  
`;
const Middlecontent = styled.div`
  flex-grow: 1;
  width:10%;
`;

const Leftspot = styled.div`
  background: rgb(20,20,22);
  border-radius: 10px;
  height:40px;
`;
const Leftspan = styled.span`
  display: inline-block;
  color: rgb(91,98,106);
  font-size: 13px;
  line-height: 37px;
  vertical-align: top;
`;
const Lefti = styled.i`
  display: inline-block;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: 30% 50%;
  width: 40px;
  height: 40px;
  background-image: url(${icon1});
`;
const Rightcontent = styled.div`
  flex-grow: 2;
  width:40%;
`;
const Rightspot = styled.div`
background: rgb(20,20,22);
border-radius: 10px;
height:40px;
`;
const Rightinput = styled.input`
  background: rgb(20, 20, 22);
  border-radius: 10px;
  height: 37px;
  width: 60px;
  border: none;
  margin-left: 0;
  vertical-align: top;
  color: rgb(91, 98, 106);
  &:focus {
    outline:none;
  }
`;
const Rightione = styled.i`
  display: inline-block;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: 30% 50%;
  width: 40px;
  height: 40px;
  background-image: url(${icon2});
`;
const Rightisecond = styled.i`
  display: inline-block;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: 100% 0%;
  width: 30px;
  height: 30px;
  background-image: url(${icon3});
`;
const Middlei = styled.i`
  display: inline-block;
  background-size: 68%;
  background-repeat: no-repeat;
  background-position: 75% 60%;
  width: 20px;
  height: 25px;
  margin-top: 83%;
  margin-left: 15%;
  background-image: url(${icon6});
`;
const AmountContainer = styled.div`
  margin-bottom: 20px;
`;

const AmountLabel = styled.div`
  margin-right: 10px;
  margin-top:20px;
  position: relative;
`;
const Amountspot = styled.div`
  background: rgb(32, 36, 40);
  border-radius: 10px;
  height:40px;
  border:0.5px solid rgb(55,59,66);
  margin-top: 10px;
`;
const Amounti = styled.i`
  display: inline-block;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: 30% 20%;
  width: 50px;
  height: 50px;
  background-image: url(${icon4});
`;
const AmountInput = styled.input`
  background: rgb(32, 36, 40);
  border-radius: 0px;
  height: 37px;
  width: calc(100% - 150px);
  border-left: 0.5px solid rgb(55,59,66);
  border-right: none;
  border-top: none;
  border-bottom: none;
  padding-left: 10px;
  margin-left: 0;
  margin-top: 0px;
  vertical-align: top;
  color: #fff;
  &:focus {
    outline:none;
  }
`;
const Amountspan = styled.span`
  display: inline-block;
  color:#fff;
  font-size: 12px;
  font-weight: 500;
  vertical-align: top;
  line-height: 37px;
`;
const AmountNumber = styled.span`
  display: inline-block;
  color:rgb(91, 98, 106);
  font-size: 11px;
  vertical-align: top;
  line-height: 37px;
`;

const LabelLeft = styled.span`
  display: inline-block;
  color: rgb(91,98,106);
  font-size: 16px;
  line-height: 0px;
  font-weight: 500;
  
`;
const LabelRight = styled.span`
  display: inline-block;
  color: rgb(91,98,106);
  font-size: 13px;
  line-height: 0px;
  position: absolute;
  right: 0%;
  top: 10px;
`;

const Buttontop = styled.button`
border: none;
border-radius: 4px;
padding: 2px 6px;
cursor: pointer;
font-size: 12px;
margin-left: 10px;
color: rgb(91, 98, 106);
background-color: rgb(43, 49, 57);
  &:hover {
    background-color: rgb(43, 49, 57);
  }
`;
const Button = styled.button`
  width:100%;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 15px;
  color: rgb(72,75,81);
  font-weight: bold;
  background-color: rgb(237, 242, 248);
  margin-bottom: 1%;
  height:55px;
  &:hover {
    background-color: rgb(43, 49, 57);
  }
`;
const Footbtn = styled.p`
  font-size: 13px;
  color: rgb(91, 98, 106);
  font-weight: 400;
  margin-bottom: 2%;
  text-align: center;
  margin-top: 2%;
`;

const Buttontopdiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
`;
const Headcontent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const CloseButton = styled.button`
  border: none;
  outline:none;
  padding: 0px 0px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-image: url(${icon7});
  margin-top: -10%;
  background-repeat: no-repeat;
  background-size: 100%;
`;
const Tipspot = styled.div`
  background: rgb(20,20,22);
  border-radius: 10px;
  height:35px;
  margin-bottom: 20px;
`;
const Tipspan = styled.span`
  display: inline-block;
  color: rgb(243,243,249);
  font-size: 13px;
  line-height: 37px;
  vertical-align: top;
`;
const TipTime = styled.span`
  display: inline-block;
  color: rgb(243,243,249);
  font-size: 13px;
  line-height: 37px;
  font-weight: 500;
  vertical-align: top;
`;

const Tipi = styled.i`
  display: inline-block;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: 30% 50%;
  width: 40px;
  height: 40px;
  background-image: url(${icon5});
`;
// The DepositForm component
const DepositForm: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Container>
      <Headcontent>
      <Title>Deposit ATOM</Title>
      <CloseButton></CloseButton>      
      </Headcontent>
      <InnerContainer>
        <Leftcontent>
          <Subtitle>From Cosmos Hub</Subtitle>
          <Leftspot>
            <Lefti></Lefti>
            <Leftspan>atom...m6ww</Leftspan>
          </Leftspot>
        </Leftcontent>
        <Middlecontent>
          <Middlei></Middlei>
        </Middlecontent>
        <Rightcontent>
          <Subtitle>From Cosmos Hub</Subtitle>
          <Rightspot>
            <Rightione></Rightione>
            <Rightinput type='text'/>
            <Rightisecond></Rightisecond>
          </Rightspot>
        </Rightcontent>
        <Subtitle></Subtitle>
      </InnerContainer>
      <AmountContainer>
        <AmountLabel>
          <LabelLeft>Select amount</LabelLeft>
          <LabelRight>Available 2 ATOM</LabelRight>
        </AmountLabel>
        <Amountspot>
          <Amounti></Amounti>
          <AmountInput type="number" value={amount} onChange={handleAmountChange} />
          <Amountspan>ATOM <AmountNumber> ≈ $1,013 </AmountNumber></Amountspan>
        </Amountspot>
        <Buttontopdiv>
          <Buttontop onClick={() => handleSelectOption('Max')}>Max</Buttontop>
          <Buttontop onClick={() => handleSelectOption('1/2')}>1/2</Buttontop>
          <Buttontop onClick={() => handleSelectOption('1/3')}>1/3</Buttontop>
        </Buttontopdiv>
      </AmountContainer>
      <Tipspot>
        <Tipi></Tipi>
        <Tipspan>Estimated time: <TipTime>20 seconds</TipTime></Tipspan>
      </Tipspot>
      <div>
        <Button onClick={() => console.log('Transfer clicked')}>Transfer</Button>
        <Footbtn>Cancel</Footbtn>
      </div>
      
    </Container>
  );
};

export default DepositForm;