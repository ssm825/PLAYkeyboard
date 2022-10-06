import Header from 'components/Header';
import MainBody from './components/MainBody';
import Nav from 'components/Nav';

import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <Inner>
        <Header />
        <MainBody />
        <Nav />
      </Inner>
    </>
  );
};

export default Home;

const Inner = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto 0;
  padding: 0 16px;
`;
