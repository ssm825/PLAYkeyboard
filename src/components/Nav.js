import styled, { css } from 'styled-components';

import { colors } from 'styles/colors';

const Nav = () => {
  return (
    <Wrapper>
      <Content>
        <Store>
          <StoreIcon />
          <Text>스토어</Text>
        </Store>
        <Charge>
          <ChargeIcon />
          <Text>충전소</Text>
        </Charge>
        <MyTheme>
          <MyThemeIcon />
          <Text>MY테마</Text>
        </MyTheme>
        <Setting>
          <SettingIcon />
          <Text>설정</Text>
        </Setting>
      </Content>
    </Wrapper>
  );
};

const Mixins = ({ img }) => css`
  background: url(${img}) no-repeat center;
  background-size: contain;
  cursor: pointer;
  transition: 0.2s;
`;

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  margin-top: 30px;
  padding-bottom: 20px;
  height: 120px;
  width: 100%;
  max-width: calc(1120px - 32px);
  box-shadow: inset 0px 11px 8px -10px rgba(0, 0, 0, 0.08),
    inset 0px -11px 8px -10px rgba(0, 0, 0, 0.08);
  background-color: ${colors.white};

  @media (max-width: 768px) {
    height: 90px;
  }

  @media (max-width: 480px) {
    height: 60px;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
    position: relative;
    padding: 0 20px;
    div {
      width: 80px;
      height: 50px;
    }
    p {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -5px;
      text-align: center;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 500;
      font-size: medium;
      color: ${colors.dark_gray};
    }
    &:hover {
      p {
        color: ${colors.main_pink};
        transition: 0.2s;
      }
    }
  }

  @media (max-width: 768px) {
    button {
      padding: 0 30px;
      div {
        width: 40px;
      }
      p {
        font-size: inherit;
      }
    }
  }

  @media (max-width: 480px) {
    button {
      padding: 0 30px;
      div {
        width: 30px;
      }
      p {
        bottom: -15px;
        font-size: x-small;
      }
    }
  }
`;

const Store = styled.button`
  &:hover {
    div {
      ${Mixins({
        img: '/images/ic_nav_store.png',
      })};
    }
  }
`;
const Charge = styled.button`
  &:hover {
    div {
      ${Mixins({
        img: '/images/ic_nav_charge.png',
      })};
    }
  }
`;
const MyTheme = styled.button`
  p {
    color: ${colors.main_pink} !important;
  }
`;
const Setting = styled.button`
  &:hover {
    div {
      ${Mixins({
        img: '/images/ic_nav_setting.png',
      })};
    }
  }
`;

const StoreIcon = styled.div`
  ${Mixins({
    img: '/images/ic_nav_store_disabled.png',
  })};
`;
const ChargeIcon = styled.div`
  ${Mixins({
    img: '/images/ic_nav_charge_disabled.png',
  })};
`;
const MyThemeIcon = styled.div`
  ${Mixins({
    img: '/images/ic_nav_mytheme.png',
  })};
`;
const SettingIcon = styled.div`
  ${Mixins({
    img: '/images/ic_nav_setting_disabled.png',
  })};
`;

const Text = styled.p``;

export default Nav;
