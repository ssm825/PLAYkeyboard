import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ThemeImage = ({a}) => {
   return (
      <ImgArea
      slidesPerView={1}
      >
      {a.images && a.images.map((data, idx) => {
         return (
            <SwiperSlide key={idx}>
               <img src={data.imageUrl} alt={a.name} />
            </SwiperSlide>
         );
      })}
      </ImgArea>
   );
};

export default ThemeImage;

const ImgArea = styled(Swiper)`
   flex: 1;
   margin: 0 16px;
   box-sizing: border-box;
   border-radius: 16px;

   img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
`;