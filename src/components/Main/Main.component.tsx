import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RegisterIcon from 'lib/svg/RegisterIcon.svg';
import FindIcon from 'lib/svg/FindIcon.svg';
import Logo from 'lib/svg/Logo.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(skyblue, plum);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 10rem;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  font-size: 25px;
`;

const SmallTitme = styled.span`
  font-size: 10px;
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Btn = styled(Link)`
  text-decoration: none;
  width: 9rem;
  height: 9rem;
  color: #ffffff;
  display: flex;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainComponent: React.FC = () => (
  <Wrapper>
    <TitleWrapper>
      <img src={Logo} alt="Logo" />
      Remeet
      <SmallTitme>
        Remeet in extreme limit
      </SmallTitme>
    </TitleWrapper>
    <BtnWrapper>
      <Btn to="/register">
        <img src={RegisterIcon} alt="Register Icon" />
        Register
      </Btn>
      <Btn to="/find">
        <img src={FindIcon} alt="Find Icon" />
        Find
      </Btn>
    </BtnWrapper>
  </Wrapper>
);

export default MainComponent;
