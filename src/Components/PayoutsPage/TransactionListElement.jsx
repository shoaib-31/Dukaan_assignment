import styled from "styled-components";

const TransactionListElement = () => {
  return (
    <Main>
      <OrderID>&#x23;281209</OrderID>
      <Status>
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#17B31B",
          }}
        ></div>
        Successful
      </Status>
      <TransactionID>131634495747</TransactionID>
      <RefundDate>Today, 08:45PM</RefundDate>
      <OrderAmount>₹1,125.00</OrderAmount>
    </Main>
  );
};

export default TransactionListElement;
const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 8px;
  padding: 14px 12px;
  width: 100%;
  font-size: 14px;
`;
const OrderID = styled.div`
  font-weight: 500;
  color: #146eb4;
`;
const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const TransactionID = styled.div`
  color: #4d4d4d;
`;
const RefundDate = styled.div`
  color: #4d4d4d;
`;
const OrderAmount = styled.div`
  text-align: right;
  color: #1a181e;
`;
