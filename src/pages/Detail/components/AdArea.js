import React from 'react';
import styled from 'styled-components';

const AdArea = () => {
   return (
      <Ad>
         <img src='/assets/images/ad.png' alt='ad'/>
      </Ad>
   );
};

export default AdArea;

const Ad = styled.div`
   margin-bottom: 20px;
   padding: 0 20px;

   img {
      width:100%;
   }
`;