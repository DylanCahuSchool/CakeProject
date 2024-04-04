import { Link, useNavigate } from 'react-router-dom';
import Logo from "./Logo";
import Profile from "./Profile";
import styled from 'styled-components';

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1em 1em 1em 1em; 
  background-color: #f8f9fa;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  .left {
    align-self: flex-start;
  }

  .right {
    align-self: flex-end;
  }
`;

  export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Link className="left" to="/"><Logo /></Link>
      <Profile className="right"  username={username} />
    </NavbarStyled>
  );
}
