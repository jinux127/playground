import styled from 'styled-components';
import FinderFooter from '../molecules/FinderFooter';
import FinderHeader from '../molecules/FinderHeader';

const Finder = () => {
  return (
    <Wrapper>
      <FinderHeader />
      <FinderFooter />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 50vw;
  box-shadow: 3px;
  height: 45vh;
  border-radius: 12px;
  background-color: rgb(31, 31, 31);
  top: 5%;
  left: 5%; ;
`;

export default Finder;
