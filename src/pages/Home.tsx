import styled from 'styled-components';
import Dock from '../components/Dock';

const Home = () => {
  return (
    <Wrapper>
      <Dock />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #fff;
`;

export default Home;
