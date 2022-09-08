import styled from 'styled-components';
import { Line } from './atoms';
import {
  icon_chrome,
  icon_finder,
  icon_launchpad,
  icon_memo,
  icon_message,
  icon_trash,
  icon_vscode,
} from '../assets/images';
import Icon from './atoms/Icon';

const Dock = () => {
  return (
    <Wrapper>
      <Icon
        backgroundImage={icon_finder}
        height={70}
        width={70}
        margin={'0 5px'}
        tooltipMargin={'0px'}
        tooltip={'Finder'}
      />
      <Icon
        backgroundImage={icon_launchpad}
        height={70}
        width={70}
        margin={'0 5px'}
        tooltipMargin={'0px'}
        tooltip={'Launchpad'}
      />
      <Icon
        backgroundImage={icon_chrome}
        height={70}
        width={70}
        margin={'0 5px'}
        tooltipMargin={'0px'}
        tooltip={'Chrome'}
      />
      <Icon
        backgroundImage={icon_memo}
        height={60}
        width={60}
        margin={'5px'}
        tooltipMargin={'5px'}
        tooltip={'메모'}
      />
      <Icon
        backgroundImage={icon_message}
        height={60}
        width={60}
        margin={'5px'}
        tooltipMargin={'5px'}
        tooltip={'메모'}
      />
      <Icon
        backgroundImage={icon_vscode}
        height={70}
        width={70}
        margin={'0 5px'}
        tooltipMargin={'0px'}
        tooltip={'Visual Studio Code'}
      />
      <Line />
      <Icon
        backgroundImage={icon_trash}
        height={70}
        width={70}
        margin={'0 5px'}
        tooltipMargin={'0px'}
        tooltip={'휴지통'}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  border-radius: 20px;
  position: absolute;
  bottom: 0%;
  margin: 0.5rem;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: rgba(120, 120, 120, 0.1);
  box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.1);
`;

export default Dock;
