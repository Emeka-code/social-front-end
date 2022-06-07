import React from "react";
import styled from "styled-components";
import BuildMainScreen from "./BuildMainScreen";
import BuildSideScreen from "./BuildSideScreen";

const HomeScreen = () => {
  return (
    <Container>
      <Wrapper>
        <MainScreen>
          <BuildMainScreen />
        </MainScreen>
        <SideScreen>
          <BuildSideScreen />
        </SideScreen>
      </Wrapper>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 30px);
  height: 100%;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;
const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;

  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
`;
const MainScreen = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    width: 90%;
  }
`;
const SideScreen = styled.div`
  width: 400px;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
