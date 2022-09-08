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
import IconWithTooltip from './molecules/IconWithTooltip';

const Dock = () => {
  return (
    <Wrapper>
      <IconWithTooltip
        backgroundImage={icon_finder}
        height={70}
        width={70}
        margin={'0 5px'}
        content={'Finder'}
      />
      <IconWithTooltip
        backgroundImage={icon_launchpad}
        height={70}
        width={70}
        margin={'0 5px'}
        content={'Launchpad'}
      />
      <IconWithTooltip
        backgroundImage={icon_chrome}
        height={70}
        width={70}
        margin={'0 5px'}
        content={'Chrome'}
      />
      <IconWithTooltip
        backgroundImage={icon_memo}
        height={60}
        width={60}
        margin={'5px'}
        content={'메모'}
      />
      <IconWithTooltip
        backgroundImage={icon_message}
        height={60}
        width={60}
        margin={'5px'}
        content={'메시지'}
      />
      <IconWithTooltip
        backgroundImage={icon_vscode}
        height={70}
        width={70}
        margin={'0 5px'}
        content={'Visual Studio Code'}
      />
      <Line />
      <IconWithTooltip
        backgroundImage={icon_trash}
        height={70}
        width={70}
        margin={'0 5px'}
        content={'휴지통'}
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
