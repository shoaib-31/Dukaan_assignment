import styled from "styled-components";
import TopBar from "../Components/PayoutsPage/TopBar";
import Select from "react-select";
import { useState } from "react";
import PayOutCard from "../Components/PayoutsPage/PayOutCard";
import Transactions from "../Components/PayoutsPage/Transactions";
import { Payouts, Refunds } from "../userInfo";

const PayoutsPage = () => {
  const DropdownOptions = [
    { value: "This Month", label: "This Month" },
    { value: "This Week", label: "This Week" },
    { value: "This Year", label: "This Year" },
    { value: "All", label: "All" },
  ];
  const [time, setTime] = useState(DropdownOptions[0].value);
  const [transactionType, setTransactionType] = useState("Payouts");

  const handleDropdownChange = (selectedOption) => {
    setTime(selectedOption.value);
  };
  return (
    <Container>
      <TopBar />
      <Content>
        <Section>
          <Head>Overview</Head>
          <Select
            options={DropdownOptions}
            onChange={handleDropdownChange}
            defaultValue={DropdownOptions[0]}
          />
        </Section>
        <Section style={{ flexWrap: "wrap" }}>
          <PayOutCard
            name="Next Payout"
            amount="2,312.23"
            background="#146eb4"
            nextDate="Today,04:00PM"
            orders="23"
          />
          <PayOutCard
            name="Amount Pending"
            background="white"
            amount="92,312.20"
            orders="13"
          />

          <PayOutCard
            name="Amount Processed"
            background="white"
            amount="23,92,312.19"
          />
        </Section>
        <Section
          style={{
            color: "#1A181E",
            fontSize: "1.25rem",
            fontWeight: "500",
          }}
        >
          Transactions | {time}
        </Section>
        <Section style={{ justifyContent: "flex-start", gap: "12px" }}>
          <TransactionType
            onClick={() => setTransactionType("Payouts")}
            selected={transactionType == "Payouts"}
          >
            Payouts &#40;{Payouts.length}&#41;
          </TransactionType>
          <TransactionType
            onClick={() => setTransactionType("Refunds")}
            selected={transactionType == "Refunds"}
          >
            Refunds &#40;{Refunds.length}&#41;
          </TransactionType>
        </Section>
        <Transactions time={time} transactionType={transactionType} />
      </Content>
    </Container>
  );
};

export default PayoutsPage;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
  background-color: #fafafa;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #333;
  }
`;

const Content = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Head = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`;
const TransactionType = styled.div`
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 6px 1rem;
  color: ${(props) => (props.selected ? "white" : "#808080")};
  background-color: ${(props) => (props.selected ? "#146eb4" : "#E6E6E6")};
  border-radius: 40px;
`;
