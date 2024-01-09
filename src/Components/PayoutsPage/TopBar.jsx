import styled from "styled-components";
import { GoQuestion } from "react-icons/go";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Conversation from "/src/assets/Conversation.svg";
import Polygon from "/src/assets/Polygon.svg";
const TopBar = () => {
  return (
    <Main>
      <Left>
        <Name>Payouts</Name>
        <How>
          <GoQuestion />
          How it works
        </How>
      </Left>
      <Mid>
        <FaMagnifyingGlass
          style={{
            width: "1rem",
            height: "1rem",
            fill: "#808080",
            transform: "translateX(2rem)",
          }}
        />
        <SearchBox
          type="text"
          id="search-input"
          placeholder="Search features, tutorials, etc."
        />
      </Mid>
      <Right>
        <Icon>
          <img src={Conversation} alt="Conversation" />
        </Icon>
        <Icon>
          <img src={Polygon} alt="Polygon" />
        </Icon>
      </Right>
    </Main>
  );
};

export default TopBar;

const Main = styled.div`
  height: 4rem;
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #d9d9d9;
  background-color: white;
  box-sizing: border-box;
`;
const Left = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: #4d4d4d;
`;
const Name = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  color: black;
`;
const How = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
`;
const Mid = styled.div`
  display: flex;
  align-items: center;
`;
const SearchBox = styled.input`
  width: 25rem;
  height: 2.5rem;
  border-radius: 6px;
  font-size: 15px;
  padding: 9px 1rem 9px 2.5rem;
  background-color: #f2f2f2;
  border: none;
  box-sizing: border-box;
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;
const Icon = styled.div`
  background-color: #e6e6e6;
  width: 2.5rem;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
