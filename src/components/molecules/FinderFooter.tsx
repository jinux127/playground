import styled from 'styled-components';

const FinderFooter = () => {
  return (
    <Wrapper>
      <div>1/142 선택됨</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  border-radius: 0 0px 12px 12px;

  color: #c2c2c2;
  height: 3vh;
  position: absolute;
  width: 100%;
  bottom: 0%;
  background-color: #575757;
`;

export default FinderFooter;
