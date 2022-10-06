import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Title>
          <Link to="/">
            <img src="/assets/images/img_playkeyboard_logo.png" alt="logo" />
          </Link>
        </Title>
        <Search>
          <SearchIcon />
        </Search>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  height: 120px;

  @media (max-width: 768px) {
    height: 90px;
  }

  @media (max-width: 480px) {
    height: 60px;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  width: 320px;

  @media (max-width: 768px) {
    width: 200px;
  }
  @media (max-width: 480px) {
    width: 136px;
  }
`;
const Search = styled.div``;
const SearchIcon = styled.div`
  width: 40px;
  height: 40px;
  background: url('/assets/images/ic_search.png') no-repeat center;
  background-size: cover;
  &:hover {
    background: url('/assets/images/ic_search_hover.png') no-repeat center;
    background-size: cover;
    cursor: pointer;
    transition: 0.2s;
  }

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

export default Header;
