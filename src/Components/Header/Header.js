import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { BiMessageAdd } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Hold>
          <Logo>Instagram</Logo>
          <SearchBar>
            <Icon />
            <SearchInput placeholder="search" />
          </SearchBar>
        </Hold>
        <Hold>
          <HomeIcon />
          <PostIcon />
          <LoveIcon />
          <Image src="/boy.png" />
        </Hold>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid silver;
  position: fixed;
  background-color: white;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;
const Hold = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;
const Logo = styled.div`
  margin-right: 40px;
  color: red;
  font-weight: 500;
  font-size: 25px;
  font-style: italic;
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 40px;
  border-radius: 5px;
  background: lightgray;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Icon = styled(BsSearch)`
  margin: 0 10px;
`;
const SearchInput = styled.input`
  outline: none;
  background: transparent;
  border: 0;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }

  ::placeholder {
    font-family: poppins;
  }
`;
const HomeIcon = styled(FaHome)`
  font-size: 30px;
  margin: 0 10px;
  /* color: #0000; */
  cursor: pointer;
`;
const PostIcon = styled(BiMessageAdd)`
  font-size: 30px;
  margin: 0 10px;
  /* color: #0000; */
  cursor: pointer;
`;
const LoveIcon = styled(AiFillHeart)`
  font-size: 30px;
  margin: 0 10px;
  /* color: #0000; */
  cursor: pointer;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  object-fit: center;
`;
// const Image = styled.div``;
// const Image = styled.div``;
