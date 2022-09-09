import styled from 'styled-components';
import { icon_menu_hamburger, icon_menu_square, icon_search, icon_sort } from '../../assets/images';
import { Icon } from '../atoms';

const FinderMenu = () => {
  return (
    <MenuWrapper>
      <IconWrapper>
        <Icon backgroundImage={icon_menu_square} height={20} width={20} margin="5px" />
      </IconWrapper>
      <IconWrapper>
        <Icon backgroundImage={icon_menu_hamburger} height={20} width={20} margin="5px" />
      </IconWrapper>
      <IconWrapper>
        <Icon backgroundImage={icon_sort} height={20} width={20} margin="5px" />
      </IconWrapper>
      <IconWrapper>
        <Icon backgroundImage={icon_search} height={20} width={20} margin="5px" />
      </IconWrapper>
    </MenuWrapper>
  );
};

const IconWrapper = styled.div`
  display: flex;
  left: 23vw;

  border-radius: 5px;
  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
const MenuWrapper = styled.div`
  display: flex;

  border-radius: 5px;
  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export default FinderMenu;
