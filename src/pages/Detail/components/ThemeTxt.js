import React from 'react';
import styled from 'styled-components';

const ThemeTxt = ({themeData}) => {
   return (
      <TxtArea>
         <ThemeName>{themeData.name}</ThemeName>
         <ThemeCreator>{themeData.creator}</ThemeCreator>
         <ShareBtn><img src="/images/ic_all_share.png" alt="share-button"/></ShareBtn>
         <div>
            {themeData.hashtag && themeData.hashtag.map((data, idx) => {
               return (
                  <Tag key={idx}>{data}</Tag>
               )
            })}
         </div>
      </TxtArea>
   );
};

export default ThemeTxt;

const TxtArea = styled.div`
   position: relative;
   padding: 0 20px;
`;

const ThemeName = styled.p`
   padding: 20px 0 4px;
   font-size: 20px;
   font-weight: 700;
   line-height: 28px;
`;

const ThemeCreator = styled.p`
   padding-bottom: 20px;
   font-size:14px;
   font-weight: 500;
   line-height: 20px;
   color: #919299;
`;

const ShareBtn = styled.button`
   position: absolute;
   top: 24px;
   right: 20px;
   cursor: pointer;
`;

const Tag = styled.div`
   display:inline-block;
   background-color: #ebedf5;
   margin-right:4px;
   margin-bottom: 20px;
   padding:4px 10px;
   border-radius:18px;
`;