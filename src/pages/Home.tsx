import styled from 'styled-components';
import Dock from '../components/organisms/Dock';
import Finder from '../components/organisms/Finder';

const Home = () => {
  return (
    <Wrapper>
      <Finder />
      <Dock />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #fff;
`;

export default Home;
