import styled from 'styled-components';
import { Icon, Tooltip } from '../atoms';
import { IconProps } from '../atoms/Icon';
import { TooltipProps } from '../atoms/Tooltip';

export type IconWithTooltipProps = IconProps & TooltipProps;

const IconWithTooltip = (props: IconWithTooltipProps) => {
  return (
    <Wrapper>
      <Icon {...props} />
      <ToolTipWrapper>
        <Tooltip {...props} />
      </ToolTipWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  cursor: pointer;
`;
const ToolTipWrapper = styled.div`
  display: none;
  width: 100%;
  ${Wrapper}:hover & {
    display: inline;
  }
`;

export default IconWithTooltip;
