import styled from "styled-components";
import { GoQuestion } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";

const PayOutCard = ({ name, amount, background, nextDate, orders }) => {
  return (
    <Main background={background}>
      <Top>
        <Section
          style={{ color: `${background == "white" ? "#4D4D4D" : "white"}` }}
        >
          {name} &nbsp;
          <GoQuestion />
        </Section>
        <Section style={{ justifyContent: "space-between", gap: "1rem" }}>
          <span style={{ fontSize: "2rem", fontWeight: "500" }}>₹{amount}</span>
          {orders && (
            <Orders background={background}>
              {orders} orders{" "}
              <FaChevronRight style={{ width: "24", height: "24" }} />
            </Orders>
          )}
        </Section>
      </Top>

      {nextDate && (
        <Bottom>
          <span>Next payout date:</span>
          <span>{nextDate} </span>
        </Bottom>
      )}
    </Main>
  );
};

export default PayOutCard;
const Main = styled.div`
  width: 30%;
  background-color: ${(props) =>
    props.background ? props.background : "white"};
  color: ${(props) => (props.background == "white" ? "black" : "white")};
  border-radius: 0.5rem;
  height: fit-content;
  min-width: 350px;
`;
const Top = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
`;
const Orders = styled.div`
  font-size: 1rem;
  display: flex;
  text-decoration: underline;
  font-weight: 500;
  cursor: pointer;
  gap: 0.5rem;
  color: ${(props) => (props.background == "white" ? "#146EB4" : "white")};
  align-items: center;
`;
const Bottom = styled.div`
  padding: 0.5rem 1.5rem;
  font-size: 14px;
  font-weight: 400;
  border-radius: 0.5rem;
  background-color: #0e4f82;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
