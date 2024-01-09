import { FaMagnifyingGlass } from "react-icons/fa6";
import styled from "styled-components";
import { TbArrowsDownUp } from "react-icons/tb";
import { BsDownload } from "react-icons/bs";
import TransactionListElement from "./TransactionListElement";
import { Payouts, Refunds } from "../../userInfo";
import { useEffect, useState } from "react";
import debounce from "lodash/debounce";

const Transactions = ({ time, transactionType }) => {
  const [sortedTransactions, setSortedTransactions] = useState([]);
  const [order, setOrder] = useState("descending");
  const [searchTerm, setSearchTerm] = useState("");

  const compareDates = (a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return order === "ascending" ? dateA - dateB : dateB - dateA;
  };

  const filterByTime = (transaction) => {
    const currentDate = new Date();
    const currentWeekStart = currentDate.getDate() - currentDate.getDay();
    const currentWeekEnd = currentWeekStart + 6;
    const transactionDate = new Date(transaction.date).getDate();

    switch (time) {
      case "This Month":
        return new Date(transaction.date).getMonth() === currentDate.getMonth();
      case "This Week":
        return (
          transactionDate >= currentWeekStart &&
          transactionDate <= currentWeekEnd
        );
      case "This Year":
        return (
          new Date(transaction.date).getFullYear() === currentDate.getFullYear()
        );
      default:
        return true;
    }
  };

  const handleSearch = debounce(() => {
    sortTransactions();
  }, 200);

  const sortTransactions = () => {
    const transactionsToSort =
      transactionType === "Payouts" ? [...Payouts] : [...Refunds];

    const filteredAndSorted = transactionsToSort
      .filter(
        (transaction) =>
          transaction.orderID.includes(searchTerm) ||
          transaction.transactionID.includes(searchTerm)
      )
      .filter(filterByTime)
      .sort(compareDates);

    setSortedTransactions(filteredAndSorted);
  };

  useEffect(() => {
    handleSearch();
  }, [transactionType, order, time, searchTerm]);

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
            placeholder="Order ID or Transaction ID"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </span>
        <SortNDownload>
          <Sort
            onClick={() => {
              setOrder(order === "descending" ? "ascending" : "descending");
            }}
          >
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
        <span>
          {transactionType === "Payouts" ? "Transaction" : "Refund"} Date
        </span>
        <span style={{ textAlign: "right" }}>Order amount</span>
      </TransactionTableHead>
      {sortedTransactions.map((payout, index) => {
        return (
          <TransactionListElement
            key={index}
            orderID={payout.orderID}
            status={payout.status}
            transactionID={payout.transactionID}
            date={payout.date}
            orderAmount={payout.orderAmount}
          />
        );
      })}
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
