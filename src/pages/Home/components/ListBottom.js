import React from 'react';
import styled from 'styled-components';

const ListBottom = () => {
  return (
    <BottomContainer>
      <BottomBtn>
        <img src="/images/icon/store.png" width="24px" alt="스토어" />
        <BtnTxt>스토어</BtnTxt>
      </BottomBtn>
      <BottomBtn>
        <img src="/images/icon/recharge.png" width="24px" alt="충전소" />
        <BtnTxt>충전소</BtnTxt>
      </BottomBtn>
      <BottomBtn>
        <img src="/images/icon/favorite.png" width="24px" alt="테마" />
        <BtnTxt>MY테마</BtnTxt>
      </BottomBtn>
      <BottomBtn>
        <img src="/images/icon/setting.png" width="24px" alt="설정" />
        <BtnTxt>설정</BtnTxt>
      </BottomBtn>
    </BottomContainer>
  );
};

const BottomContainer = styled.div`
  width: 100%;
  height: 56px;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 50px;
`;

const BottomBtn = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const BtnTxt = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  color: #919299;
`;
export default ListBottom;
