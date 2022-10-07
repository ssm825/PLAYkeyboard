import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ThemeImage = ({ themeData }) => {
  const [copyData, setCopyData] = useState('');

  useEffect(() => {
    setCopyData({ ...themeData });
  }, [themeData]);

  return (
    <>
      {copyData.images && (
        <>
          {themeData.images.length > 0 ? (
            <ImgArea slidesPerView={1}>
              {themeData.images.map((data, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <img src={data.imageUrl} alt={themeData.name} />
                  </SwiperSlide>
                );
              })}
            </ImgArea>
          ) : (
            <ImgArea slidesPerView={1}>
              <img src={copyData.imageUrl} alt="x"></img>
            </ImgArea>
          )}
        </>
      )}
    </>
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
