import themeApi from 'api/themeAPI'; 
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/dist';
import styled from 'styled-components';
import HistoryBack from './HistoryBack';
import ThemeImage from './ThemeImage';
import ThemeTxt from './ThemeTxt';
import AdArea from './AdArea';

const DetailInfo = () => {
   const [themeData, setThemeData] = useState([]);
   const params = useParams();
   useEffect(() => {
      themeApi.getThemeDetailData(params.id).then((data) => {
         setThemeData(data.data);
      });
   }, []);

   return (
      <>
      {themeData && (
      <Detail>
         <HistoryBack />
         <FlexArea>
         <ThemeImage themeData={themeData}/>
         <TextArea>
            <ThemeTxt themeData={themeData}/>
            <AdArea />
         </TextArea>
         </FlexArea>
      </Detail>
      )}
      </>
   );
};

export default DetailInfo;

const Detail = styled.div`
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

const TextArea = styled.div`
   flex:1;
`;