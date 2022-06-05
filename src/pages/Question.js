import React from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";

const Question = () => {
  return (
    <Wrapper>
      <ProgressBar 
        striped
        variant="danger"
        now={80}
        style={{ marginTop: '20px' }}
      />
      <Title>{ QuestionData[0].title }</Title>
      <ButtonGroup>
        <Button
          style={{
            width:'40%',
            minHeight: '200px',
            fontSize: '16pt'
          }}>{ QuestionData[0].answera }
        </Button>
        <Button
          style={{
            width:'40%',
            minHeight: '200px',
            fontSize: '16pt',
            marginLeft: '20px'
          }}>{ QuestionData[0].answerb }
        </Button>
      </ButtonGroup>
    </Wrapper>
  )
}

export default Question;


// css-in-js
const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  font-family: "Simkyungha";
`

const Title = styled.div`
  font-size: 30pt;
  text-align: center;
  margin-top: 20px;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`