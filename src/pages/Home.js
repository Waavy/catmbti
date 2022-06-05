import React from "react";
import styled from "styled-components";
import PangImage from "../assets/ggompang.jpeg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    // usehistory
    navigate('/question');
  }
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img 
            className = "rounded-circle"
            src = { PangImage }
            width = { 350 }
            height = { 350 } />
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기</Desc>
        <Button 
          style = {{fontSize: "24px"}}
          onClick = {handleClickButton}
        >Test 시작하기</Button>
      </Contents>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  font-family: "SimKyungha";
`

const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
`

const LogoImage = styled.div`
  margin-top: 10px;
`

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 30px;
  margin-bottom: 30px;
`