import React from "react";
import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";

const BuildMainScreen = () => {
  return (
    <Container>
      <TopBuild>
        <Holder>
          <Image src="/boy.png" />
          <Name>name</Name>
        </Holder>
      </TopBuild>
      <PostBuild>
        <Top>
          <ImageProfile src="/boy.png" />
          <ProfileHolder>
            <ProfileName>name</ProfileName>
            <Profile>Original</Profile>
          </ProfileHolder>
          <Doticon />
        </Top>
        <PostImage src="/boy.png" />
      </PostBuild>
    </Container>
  );
};

export default BuildMainScreen;

const PostImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const Doticon = styled(BsThreeDots)`
  font-size: 30px;
  color: silver;
`;

const PostBuild = styled.div`
  margin: 10px 0;
  background: white;
  border-radius: 10px;
`;
const Top = styled.div`
  display: flex;
  margin: 20px;
  /* background: red; */
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
`;
const ImageProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  outline: 2px solid purple;
  border: 2px solid transparent;
  background-clip: content-box;
  margin-right: 15px;
`;
const ProfileName = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const Profile = styled.div``;
const ProfileHolder = styled.div``;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  /* background-color: white; */
`;
const Holder = styled.div`
  display: flex;
`;

const TopBuild = styled.div`
  padding: 20px 0;
  padding-left: 20px;
  background: white;
  border-radius: 7px;
  display: flex;
  align-items: flex-start;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  outline: 2px solid purple;
  border: 2px solid transparent;
  background-clip: content-box;
`;
const Name = styled.div`
  margin-top: 5px;
`;
