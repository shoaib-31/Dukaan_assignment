import styled from "styled-components";
import date from "date-and-time";
const convertMongoDate = (mongoDate) => {
  const cdate = new window.Date(mongoDate);
  const now = new window.Date();
  const nowDay = date.format(now, "DD");
  const nowMonth = date.format(now, "MM");
  const nowYear = date.format(now, "YYYY");
  const cdateDay = date.format(cdate, "DD");
  const cdateMonth = date.format(cdate, "MM");
  const cdateYear = date.format(cdate, "YYYY");
  if (nowDay == cdateDay && nowMonth == cdateMonth && nowYear == cdateYear) {
    return "Today " + date.format(cdate, "hh:mm A");
  }
  if (
    Number(nowDay) - Number(cdateDay) == 1 &&
    nowMonth == cdateMonth &&
    nowYear == cdateYear
  ) {
    return "Yesterday " + date.format(cdate, "hh:mm A");
  }
  return date.format(cdate, "DD MMM hh:mm A");
};
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
const Date = styled.div`
  color: #4d4d4d;
`;
const OrderAmount = styled.div`
  text-align: right;
  color: #1a181e;
`;
