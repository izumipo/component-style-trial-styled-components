import * as React from "react";
import styled from "styled-components";
import googleLogo from "../images/google_logo.png";

const Container = styled.div`
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 38px;
`;

const Logo = styled.img`
  width: 272px;
  height: 90px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 337px;
  height: 44px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  background-color: #fff;
  border: none;
  border-radius: 24px;
  padding-inline-start: 52px;
  padding-inline-end: 44px;
  position: relative;
  width: 100%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  font-size: 16px;
`;

export const GoogleSearchLiked = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo src={googleLogo} />
      </LogoWrapper>
      <InputWrapper>
        <Input placeholder="Google で検索または URL を入力" />
      </InputWrapper>
    </Container>
  );
};
