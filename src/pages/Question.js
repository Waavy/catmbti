import { React, useState } from "react";
import styled from "styled-components";
import { createSearchParams, useNavigate } from "react-router-dom";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";

const Question = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  const navigate = useNavigate();

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    
    setTotalScore(newScore);

    if(QuestionData.length !== questionNo + 1 ) {
      // 다음 문제로 넘어가기 위해 문제수 증가
      setQuestionNo(questionNo + 1);
    } else {
      // mbti 도출
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc + (curr.score >= 2 ? curr.id.substring(0, 1): curr.id.substring(1, 2)),
          ""
      );
      // console.log('mbti', mbti);
      // 결과페이지로 넘어가기
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`
      });
    }
   


    // if ( type === "EI" ) {
    //   // 기존 스코어에 더할 값을 계산 (기존값 + 배점)
    //   const addScore = totalScore[0].score + no;
    //   // 새로운 객체
    //   const newObject = { id: "EI", score: addScore };
    //   // splice 사용해 새로운 객체를 해당객체 자리에 넣어줌
    //   totalScore.splice(0, 1, newObject);
    // } else if ( type === "SN") {
    //     const addScore = totalScore[0].score + no;
    //     const newObject = { id: "SN", score: addScore };
    //     totalScore.splice(1, 1, newObject);
    // } else if ( type === "TF") {
    //     const addScore = totalScore[0].score + no;
    //     const newObject = { id: "TF", score: addScore };
    //     totalScore.splice(2, 1, newObject);
    // } else if ( type === "JP") {
    //     const addScore = totalScore[0].score + no;
    //     const newObject = { id: "JP", score: addScore };
    //     totalScore.splice(3, 1, newObject);
    // }
  }
  
  return (
    <Wrapper>
      <ProgressBar 
        striped
        variant="danger"
        now={ (questionNo / QuestionData.length) * 100}
        style={{ marginTop: '20px' }}
      />
      <Title>{ QuestionData[questionNo].title }</Title>
      <ButtonGroup>
        <Button
          style={{
            width:'40%',
            minHeight: '200px',
            fontSize: '16pt',
            border: 'none',
            backgroundColor: 'royalblue'
          }}
          onClick={() => handleClickButton(1, QuestionData[questionNo].type)}
        >{ QuestionData[questionNo].answera }
        </Button>
        <Button
          style={{
            width:'40%',
            minHeight: '200px',
            fontSize: '16pt',
            marginLeft: '20px',
            border: 'none',
            backgroundColor: 'orange'
          }}
          onClick={() => handleClickButton(0, QuestionData[questionNo].type)}
        >{ QuestionData[questionNo].answerb }
        </Button>
      </ButtonGroup>
    </Wrapper>
  );

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