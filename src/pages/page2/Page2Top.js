import themeApi from 'api/themeAPI';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/dist';
import styled from 'styled-components';
import HistoryBack from './HistoryBack';
import ThemeImage from './ThemeImage';
import ThemeTxt from './ThemeTxt';
import AdArea from './AdArea';
import Page2Bottom from './Page2Bottom';

const Page2Top = () => {
  const [a, setA] = useState([]);
  const params = useParams();
  useEffect(() => {
    themeApi.getThemeDetailData(params.id).then((data) => {
      setA(data.data);
    });
  }, []);

  if (a) {
    return (
      <div>
        <Page2top>
          <HistoryBack />
          <FlexArea>
            <ThemeImage a={a} />
            <div>
              <ThemeTxt a={a} />
              <AdArea />
            </div>
          </FlexArea>
          <Page2Bottom />
        </Page2top>
      </div>
    );
  }
};

export default Page2Top;

const Page2top = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

const FlexArea = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
