import React from 'react';
import styled from 'styled-components';

const ThemeTxt = ({a}) => {
   if(a) {
   return (
      <TxtArea>
         <ThemeName>{a.name}</ThemeName>
         <ThemeCreator>{a.creator}</ThemeCreator>
         <div>
            {a.hashtag && a.hashtag.map((data) => {
               return (
                  <Tag>{data}</Tag>
               )
            })}
         </div>
      </TxtArea>
   );
   }
};

export default ThemeTxt;

const TxtArea = styled.div`
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

const Tag = styled.div`
   display:inline-block;
   background-color: #ebedf5;
   margin-right:4px;
   margin-bottom: 20px;
   padding:4px 10px;
   border-radius:18px;
`;