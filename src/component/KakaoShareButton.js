import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
const { Kakao } = window;


const KakaoShareButton = ({ data }) => {
  const url = "https://findyourcat.netlify.app/";
  const resultUrl = window.location.href;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("acbbc0eedc5d72623bcfa5e6301d7ecb");
    console.log(Kakao.isInitialized());
  },[]);

  const shareKakao = () => {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '예비집사 판별기 결과',
        description: `예비 집사님이 고양이를 키운다면 가장 잘맞는 고양이는 ${data.name} 입니다.`,
        imageUrl: url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        }
      ]
    });
  }
  
  return(          
  <Button 
    style = {{
      fontSize: "24px",
      marginLeft: "20px"
    }}
    onClick = { shareKakao }
  >카카오톡 공유하기</Button>);
}

export default KakaoShareButton;