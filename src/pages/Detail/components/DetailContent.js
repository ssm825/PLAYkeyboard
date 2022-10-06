import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import themeApi from 'api/themeAPI';
import { useParams } from 'react-router-dom';

const Page2Bottom = () => {
  const [figureImg, setFigureImg] = useState('');
  const { id } = useParams();

  useEffect(() => {
    themeApi.getThemeDetailData(id).then((data) => {
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
                구매&nbsp;
                <Diamond src="/images/ic_dia.png" />
                &nbsp;7
              </ProductP>
              <ProductP>광고제거 · 무제한 사용</ProductP>
            </ProductBuy>
          </ProductBuyBox>
        </ButtonArea>
      </Content>
    </Inner>
  );
};

export default Page2Bottom;

const Inner = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 100px auto 0;
`;

const Content = styled.div`
  margin: 0 auto;
`;

const ImageArea = styled.div`
  max-width: 1120px;
  margin: 0 auto 40px;
`;

const Image = styled.img`
  width: 33%;

  @media screen and (min-width: 768px) {
    width: 25%;
  }
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
  margin: 50px auto 18px;
`;

const EmoArea = styled.div`
  cursor: pointer;
`;
const EmoImgArea = styled.div`
  max-width: 1120px;
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
  margin: 24px 15px;
  padding: 2.133vh;
  font-size: 1rem;
  line-height: 24px;
  font-weight: 700;
  color: #ff417d;
  border: 3px solid #ff417d;
  border-radius: 20px;
  cursor: pointer;
`;

const ProductBuy = styled.button`
  width: 80%;
  margin: 10px;
  padding: 2.133vh;
  font-weight: 700;
  font-size: 0.857rem;
  color: #ffffff;
  background: #ff417d;
  border-radius: 30px;
  cursor: pointer;
`;

const ProductBuyBox = styled.div`
  border-top: 1px solid #f2f3f7;
`;

const ProductInquiryBox = styled.div`
  border-top: 1px solid #f2f3f7;
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

const Diamond = styled.img`
  width: 14px;
  vertical-align: text-top;
`;

const REACTION_DATA = [
  {
    id: 0,
    name: 'smile',
    content: '맘에 들어요',
    url: '/images/emoji_smile.svg',
  },
  {
    id: 1,
    name: 'heart',
    content: '심쿵했어요',
    url: '/images/emoji_heart.svg',
  },
  { id: 2, name: 'wingk', content: '응원해요', url: '/images/emoji_wingk.svg' },
  { id: 3, name: 'cry', content: '갖고싶어요', url: '/images/emoji_cry.svg' },
];
