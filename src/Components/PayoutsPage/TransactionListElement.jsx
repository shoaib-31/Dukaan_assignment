import styled from "styled-components";
import { convertMongoDate } from "../../utils/mongoDateConverter";
const TransactionListElement = ({
  orderID,
  status,
  transactionID,
  date,
  orderAmount,
}) => {
  const formattedDate = convertMongoDate(date);
  return (
    <Main>
      <OrderID>&#x23;{orderID}</OrderID>
      <Status>
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: `${
              status == "Successful"
                ? "#17B31B"
                : status == "Pending"
                ? "#999999"
                : "#FF0000"
            }`,
          }}
        ></div>
        {status}
      </Status>
      <TransactionID>{transactionID}</TransactionID>
      <Date>{formattedDate}</Date>
      <OrderAmount>{orderAmount}</OrderAmount>
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
  box-sizing: border-box;
  height: 3rem;
`;
const OrderID = styled.div`
  font-weight: 500;
  color: #146eb4;
  padding: 0 10px;
`;
const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 10px;
`;
const TransactionID = styled.div`
  color: #4d4d4d;
  padding: 0 10px;
`;
const Date = styled.div`
  color: #4d4d4d;
  padding: 0 10px;
`;
const OrderAmount = styled.div`
  padding: 0 10px;
  text-align: right;
  color: #1a181e;
`;
