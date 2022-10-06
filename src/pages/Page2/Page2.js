import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import themeApi from 'api/themeAPI';
import { useParams } from 'react-router-dom';

const Page2 = () => {
  const [figureImg, setFigureImg] = useState('');
  const { themId } = useParams();

  useEffect(() => {
    themeApi.getThemeDetailData(themId).then((data) => {
      setFigureImg(data.data.figure);
    });
  }, []);

  return (
    <Inner>
      <Content>
        {figureImg && (
          <>
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
            </NoticeArea>
          </>
        )}
        <UserReactionArea>
          {REACTION_DATA.map((data) => {
            return (
              <EmoArea key={data.id}>
                <EmoImgArea>
                  <img src={data.url} alt="x" />
                </EmoImgArea>
                <EmoComment>{data.content}</EmoComment>
              </EmoArea>
            );
          })}
        </UserReactionArea>
        <ButtonArea>
          <ProductInquiryBox>
            <ProductInquiry>상품 문의</ProductInquiry>
          </ProductInquiryBox>
          <ProductBuyBox>
            <ProductBuy>
              <ProductP>
                구매
                <Image3 src="/images/icon/diamond.png" />7
              </ProductP>
              <ProductP>광고제거 · 무제한 사용</ProductP>
            </ProductBuy>
          </ProductBuyBox>
        </ButtonArea>
      </Content>
    </Inner>
  );
};

export default Page2;

const Image3 = styled.img`
  width: 14px;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1120px;
  min-width: 768px;
  margin: 100px auto 0;
  padding: 0 16px;
`;

const Content = styled.div`
  width: 50%;
  margin: 0 auto;
  border: 1px solid #ebebeb;
`;

const ImageArea = styled.div``;

const Image = styled.img`
  width: 33%;
`;

const NoticeArea = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  line-height: 24px;
`;

const P = styled.p`
  color: #919299;
`;

const Ins = styled.ins`
  color: #4b4e57;
  font-weight: 700;
`;

const UserReactionArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 18px;
`;

const EmoArea = styled.div`
  cursor: pointer;
`;
const EmoImgArea = styled.div`
  text-align: center;
`;
const EmoComment = styled.div`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: #919299;
`;

const ProductInquiry = styled.button`
  width: 70%;
  height: 40px;
  margin: 24px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  color: #ff417d;
  border: 3px solid #ff417d;
  border-radius: 20px;
  cursor: pointer;
`;
const ProductBuy = styled.button`
  width: 80%;
  height: 46px;
  margin: 10px;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  background: #ff417d;
  border-radius: 30px;
  cursor: pointer;
`;

const ProductBuyBox = styled.div``;

const ProductInquiryBox = styled.div`
  border-top: 1px solid #f2f3f7;
  border-bottom: 1px solid #f2f3f7;
`;

const ButtonArea = styled.div`
  text-align: center;
`;

const ProductP = styled.p`
  :last-child {
    line-height: 18px;
    font-weight: 400;
    font-size: 12px;
  }
`;

const REACTION_DATA = [
  {
    id: 0,
    name: 'smile',
    content: '맘에 들어요',
    url: '/images/icon/smile.svg',
  },
  {
    id: 1,
    name: 'heart',
    content: '심쿵했어요',
    url: '/images/icon/heart.svg',
  },
  { id: 2, name: 'wingk', content: '응원해요', url: '/images/icon/wingk.svg' },
  { id: 3, name: 'cry', content: '갖고싶어요', url: '/images/icon/cry.svg' },
];
