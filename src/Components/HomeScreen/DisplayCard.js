import React from "react";
import styled from "styled-components";
const DisplayCard = ({ setDisplay }) => {
  return (
    <Container
      onMouseEnter={() => {
        setDisplay(true);
      }}
      onMouseLeave={() => {
        setDisplay(false);
      }}
    >
      <Wrapper>
        <Top>
          <Image src="/boy.png" />
          <Holder>
            <Name>Name</Name>
            <Realname>Vshoki tuni</Realname>
            <Follow>
              Followed by <span>Lex</span>
            </Follow>
          </Holder>
        </Top>
        <Middle>
          <Countholder>
            <Count>{0}</Count>
            <Title>Post</Title>
          </Countholder>
          <Countholder>
            <Count>{0}</Count>
            <Title>Followers</Title>
          </Countholder>
          <Countholder>
            <Count>{0}</Count>
            <Title>Folloe</Title>
          </Countholder>
        </Middle>
        <Bottom>
          <Image1 src="/boy.png" />
          <Image1 src="/boy.png" />
          <Image1 src="/boy.png" />
        </Bottom>
        <Botton>follow</Botton>
      </Wrapper>
    </Container>
  );
};

export default DisplayCard;
const Botton = styled.div`
  margin: 10px;
  background: #69bff8;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  border-radius: 3px;
`;
const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Image1 = styled.img`
  width: 116px;
  height: 116px;
  /* border-radius: 50%; */
  object-fit: cover;
  /* margin-right: 5px; */
  :hover {
    opacity: 0.9;
  }
`;

const Middle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
  padding: 10px 0;
`;
const Count = styled.div`
  font-weight: 700;
`;
const Title = styled.div`
  text-transform: capitalize;
`;
const Countholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const Name = styled.div``;
const Follow = styled.div``;
const Realname = styled.div`
  font-size: 13px;
  margin-bottom: 15px;
  color: gray;
`;
const Holder = styled.div``;
const Top = styled.div`
  display: flex;
  padding: 10px 0;
  margin: 20px;
`;
const Wrapper = styled.div`
  padding-bottom: 10px;
`;
const Container = styled.div`
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  background-color: white;
  width: 400px;
  font-size: 12px;
  border-radius: 5px;
  z-index: 10;
`;
