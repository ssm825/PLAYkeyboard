import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import themeApi from 'api/themeAPI';
import { useParams } from 'react-router-dom';

const Page2 = () => {
  const [figureImg, setFigureImg] = useState('');
  const { day } = useParams();

  useEffect(() => {
    themeApi.getThemeDetailData(day).then((data) => {
      // console.log(data.data.figure[0].imageUrl);
      console.log(data);
      setFigureImg(data.data.figure);
    });
  }, []);

  console.log(figureImg);

  return (
    <Inner>
      <Content>
        <ImageArea>
          {figureImg &&
            figureImg.map((data, index) => {
              return (
                <Image key={index} src={data.imageUrl} alt="없다."></Image>
              );
            })}
        </ImageArea>
        <NoticeArea>
          <P>일부 앱에서는 움짤 형태로 전송되거나, 멈춰있는</P>
          <P>이모티콘으로 전송될 수 있어요.</P>
          <Ins>이모티콘은 어떻게 전송하나요?</Ins>
        </NoticeArea>{' '}
        <Image2 src="/images/icon/cry.png" />
        <Image2 src="/images/icon/heart.png" />
        <Image2 src="/images/icon/smile.png" />
        <Image2 src="/images/icon/wingk.png" />
      </Content>
    </Inner>
  );
};

export default Page2;

const Image2 = styled.img``;

const Inner = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 100px auto 0;
  padding: 0 16px;
  border: 1px solid black;
`;

const Content = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const ImageArea = styled.div`
  /* border: 1px solid black; */
  width: 50%;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 33%;
`;

const NoticeArea = styled.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.4vw;
  font-weight: 400;
  text-align: center;
  line-height: 2.4vw;
`;

const P = styled.p`
  color: #919299;
`;

const Ins = styled.ins`
  color: #4b4e57;
  font-weight: 700;
  /* border-bottom: 1px solid black; */
`;
