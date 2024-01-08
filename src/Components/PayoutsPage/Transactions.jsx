import { FaMagnifyingGlass } from "react-icons/fa6";
import styled from "styled-components";
import { TbArrowsDownUp } from "react-icons/tb";
import { BsDownload } from "react-icons/bs";
import TransactionListElement from "./TransactionListElement";

const Transactions = () => {
  return (
    <Main>
      <Section>
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
            placeholder="Order ID or transaction ID"
          />
        </span>
        <SortNDownload>
          <Sort>
            Sort <TbArrowsDownUp />
          </Sort>
          <Sort>
            <BsDownload style={{ width: "20px", height: "20px" }} />
          </Sort>
        </SortNDownload>
      </Section>
      <TransactionTableHead>
        <span>Order ID</span>
        <span>Status</span>
        <span>Transaction ID</span>
        <span>Refund Date</span>
        <span style={{ textAlign: "right" }}>Order amount</span>
      </TransactionTableHead>
      <TransactionListElement />
      <TransactionListElement />
      <TransactionListElement />
      <TransactionListElement />
      <TransactionListElement />
      <TransactionListElement />
    </Main>
  );
};

export default Transactions;
const Main = styled.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: 12px 12px 8px 12px;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const SearchBox = styled.input`
  width: 15.5rem;
  height: 2.5rem;
  border-radius: 4px;
  font-size: 14px;
  padding: 10px 1rem 10px 2.5rem;
  background-color: white;
  border: 2px solid #f2f2f2;
  box-sizing: border-box;
`;
const SortNDownload = styled.div`
  display: flex;
  gap: 12px;
`;
const Sort = styled.button`
  border: 1px solid #d9d9d9;
  color: #4d4d4d;
  font-size: 1rem;
  padding: 6px 12px;
  border-radius: 4px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  &:active {
    color: black;
    border-color: black;
  }
`;
const TransactionTableHead = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 8px;
  padding: 10px 12px;
  width: 100%;
  color: #4d4d4d;
  background-color: #f2f2f2;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
`;
