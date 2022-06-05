import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
const { Kakao } = window;


const KakaoShareButton = () => {
  const url = "https://findyourcat.netlify.app/";
  const resultUrl = window.location.href;
  console.log('ddd', resultUrl, url);

  useEffect(()=>{
    Kakao.cleanup();
    Kakao.init("acbbc0eedc5d72623bcfa5e6301d7ecb");
    console.log(Kakao.isInitialized());
  },[])
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '예비집사 판별기 결과',
      description: '예비 집사님이 고양이를 키운다면 가장 잘맞는 고양이는 아비시니안 입니다.',
      imageUrl:
        'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        androidExecutionParams: 'test',
      },
    },
    buttons: [
      {
        title: '나도 테스트 하러가기',
        link: {
          mobileWebUrl: 'https://findyourcat.netlify.app/',
        },
      }
    ]
  });
  return(          
  <Button 
    style = {{
      fontSize: "24px",
      marginLeft: "20px"
    }}
  >카카오톡 공유하기</Button>);
}

export default KakaoShareButton;