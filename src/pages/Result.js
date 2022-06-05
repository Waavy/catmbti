import React from "react";
import styled from "styled-components";
import PangImage from "../assets/ggompang.jpeg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";

const Result = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>결과 보기</Title>
        <LogoImage>
          <img 
            className = "rounded-circle"
            src = { ResultData[0].image }
            width = { 350 }
            height = { 350 } />
        </LogoImage>
        <Desc>예비 집사님과 찰떡궁합인 고양이는 아비시니안 입니다.</Desc>
        <Button 
          style = {{fontSize: "24px"}}
          onClick = {() => navigate("/")}
        >Test 다시하기</Button>
      </Contents>
    </Wrapper>
  );
}

export default Result;

// css-in-js
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