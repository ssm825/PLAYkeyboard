import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HistoryBack = () => {
  const navigate = useNavigate();

  return (
    <BackToPage onClick={() => navigate(-1)}>
      <img src="/images/ic_all_back.png" alt="back" />
    </BackToPage>
  );
};

export default HistoryBack;

const BackToPage = styled.button`
  display: inline-block;
  padding: 20px;
`;
