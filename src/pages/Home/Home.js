import ListTop from './components/ListTop';
import ListBottom from './components/ListBottom';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <div>메인 페이지</div>
      <Inner>
        <ListTop />
        <ListBottom />
      </Inner>
    </>
  );
};

export default Home;

const Inner = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 100px auto 0;
  padding: 0 16px;
`;
