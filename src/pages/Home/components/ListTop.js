import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import themeApi from 'api/themeAPI';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ListTop = () => {
  const navigate = useNavigate();
  const [buckets, setBuckets] = useState([]);
  const [list, setList] = useState([]);
  const [onList, setOnList] = useState('CAMPAIGN');
  const [perView, setPerView] = useState(7);
  const [width, setWidth] = useState(window.innerWidth);

  const check = () => {
    width > 1000 ? setPerView(7) : setPerView(4);
  };

  const Resize = () => {
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
        check();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [width]);
  };

  Resize();

  useEffect(() => {
    themeApi.getCategoryData().then((data) => {
      setBuckets(data.data);
    });

    themeApi.getThemeData(onList).then((data) => {
      setList(data.data);
    });
  }, [onList]);

  const getList = (cate) => {
    setOnList(cate);
  };

  const goToDetail = (id) => {
    navigate('/detail/' + id);
  };

  return (
    <>
      <Title>취향대로 골라보기</Title>

      <CategoryUl>
        <Swiper spaceBetween={0} slidesPerView={perView}>
          {buckets &&
            buckets.map((list, idx) => {
              return list === onList ? (
                <SwiperSlide
                  style={{ textAlign: 'center' }}
                  key={idx}
                  onClick={() => {
                    getList(list);
                  }}
                >
                  <CategorySpanOn>{list}</CategorySpanOn>
                </SwiperSlide>
              ) : (
                <SwiperSlide
                  style={{ textAlign: 'center' }}
                  key={idx}
                  onClick={() => {
                    getList(list);
                  }}
                >
                  <CategorySpan>{list}</CategorySpan>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </CategoryUl>

      <ListContainer>
        {list.length > 0 ? (
          list.map((els) => {
            const { themeId, imageUrl, name, hashtag, downloads, price } = els;
            return (
              <>
                <ListItem
                  key={themeId}
                  onClick={() => {
                    goToDetail(themeId);
                  }}
                >
                  <ItemImg src={imageUrl} />
                  <Name>{name}</Name>
                  <HashtagUl>
                    {hashtag.map((els) => {
                      return <HashtagLi>#{els}</HashtagLi>;
                    })}
                  </HashtagUl>
                  <ItemBottom>
                    <LikeDown>
                      <img src="/images/icon/down.png" alt="다운아이콘" />
                      {downloads}
                    </LikeDown>
                    <LikeDown>
                      <img src="/images/icon/price.png" alt="가격아이콘" />
                      {price}
                    </LikeDown>
                  </ItemBottom>
                </ListItem>
              </>
            );
          })
        ) : (
          <ItemEmpty>
            <h2>
              <ItemEmptySpan>{onList}</ItemEmptySpan> 카테고리에 제품이
              없습니다.
            </h2>
          </ItemEmpty>
        )}
      </ListContainer>
    </>
  );
};

const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #42444c;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 25px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const CategoryUl = styled.ul`
  width: 100%;
  height: 30px;
  margin-top: 10px;
`;

const CategorySpan = styled.span`
  font-size: 20px;
  line-height: 33px;
  color: #aaabb3;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const CategorySpanOn = styled.span`
  font-size: 20px;
  line-height: 33px;
  font-weight: 400;
  color: #ff417d;
  border-bottom: 2px solid #ff417d;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;

  margin-bottom: 150px;
`;

const ListItem = styled.div`
  width: calc(32% - 4px);
  border: 1px;
  margin-top: 33px;

  @media (max-width: 768px) {
    width: calc(50% - 8px);
    margin-top: 20px;
  }
`;

const ItemImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
`;

const Name = styled.h3`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    margin-top: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`;

const HashtagUl = styled.ul`
  height: 22px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    height: 18px;
  }
`;

const HashtagLi = styled.li`
  float: left;
  font-weight: 400;
  font-size: 15px;
  margin: 2px 5px 0px 0px;
  color: #aaabb3;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LikeDown = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  display: flex;
  align-items: center;

  img {
    width: 15px;
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;

    img {
      width: 12px;
      margin-right: 3px;
    }
  }
`;

const ItemEmpty = styled.div`
  width: 100%;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  color: #aaabb3;
`;

const ItemEmptySpan = styled.span`
  font-size: 22px;
  color: #ff417d;
  font-weight: 700;
`;

export default ListTop;
