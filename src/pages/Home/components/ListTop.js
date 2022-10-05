import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import themeApi from '../../../api/themeAPI';
import { useNavigate } from 'react-router-dom';

const ListTop = () => {
  const navigate = useNavigate();
  const [buckets, setBuckets] = useState([]);
  const [list, setList] = useState([]);
  const [onList, setOnList] = useState('CAMPAIGN');

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

  console.log(onList);

  return (
    <>
      <Title>취향대로 골라보기</Title>
      <CategoryUl>
        {buckets &&
          buckets.map((list, idx) => {
            return (
              <CategoryLi
                key={idx}
                onClick={() => {
                  getList(list);
                }}
              >
                {list}
              </CategoryLi>
            );
          })}
      </CategoryUl>
      <ListContainer>
        {list &&
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
          })}
      </ListContainer>
    </>
  );
};

const Title = styled.h1`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #42444c;
`;
const CategoryUl = styled.ul`
  margin: 16px 0px 8px 0px;
  height: 26px;
  overflow: hidden;
`;

const CategoryLi = styled.li`
  float: left;
  margin-right: 20px;
  font-size: 14px;
  line-height: 24px;
  color: #aaabb3;
  font-weight: 400;
  :first-child {
    color: #ff417d;
    border-bottom: 2px solid #ff417d;
  }
`;
const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;
const ListItem = styled.div`
  width: calc(50% - 8px);

  border: 1px;

  margin-top: 16px;
`;
const ItemImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
`;
const Name = styled.h3`
  margin-top: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;
const HashtagUl = styled.ul`
  height: 18px;
  overflow: hidden;
`;
const HashtagLi = styled.li`
  float: left;
  font-weight: 400;
  font-size: 12px;
  margin: 2px 5px 0px 0px;
  color: #aaabb3;
`;

const ItemBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LikeDown = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;

  img {
    width: 12px;
    margin-right: 3px;
  }
`;

export default ListTop;
