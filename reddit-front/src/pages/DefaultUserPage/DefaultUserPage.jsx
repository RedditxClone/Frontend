import { Outlet } from 'react-router-dom';
import { AllDiv } from '../../components/GlobalStyles/GlobalStyles.style';
import SideImage from '../../components/SideImage/SideImage';

export default function DefaultUserPage() {
  return (
    <AllDiv>
      <SideImage />
      <Outlet />
    </AllDiv>
  );
}
