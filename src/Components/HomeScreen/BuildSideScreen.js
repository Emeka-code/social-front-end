import React from "react";
import styled from "styled-components";

const BuildSideScreen = () => {
  return (
    <Container>
      <Wrapper>
        <Holder>
          <Image src="" />
          <Hold>
            <Name>name</Name>
            <Profile>profile</Profile>
          </Hold>
        </Holder>
      </Wrapper>
    </Container>
  );
};

export default BuildSideScreen;

const Container = styled.div`
  width: 100%;
  position: fixed;
`;
const Wrapper = styled.div``;
const Holder = styled.div``;
const Image = styled.img``;
const Hold = styled.div``;
const Name = styled.div``;
const Profile = styled.div``;
// const Wrapper = styled.div``
// const Wrapper = styled.div``
// const Wrapper = styled.div``
