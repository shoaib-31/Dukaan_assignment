import styled from "styled-components";
import UserImage from "/UserImage.png";
import { FaAngleDown } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Orders from "../assets/Icons/Orders";
import { LuTruck } from "react-icons/lu";
import Products from "../assets/Icons/Products";
import Marketing from "../assets/Icons/Marketing";
import Analytics from "../assets/Icons/Analytics";
import Payouts from "../assets/Icons/Payouts";
import Discounts from "../assets/Icons/Discounts";
import Audience from "../assets/Icons/Audience";
import Appearance from "../assets/Icons/Appearance";
import Plugins from "../assets/Icons/Plugins";
import Wallet from "../assets/Icons/Wallet";
import { useEffect } from "react";
import { user } from "../userInfo";
const NavOptions = [
  {
    name: "Home",
    icon: <GoHome style={{ width: "20px", height: "20px" }} />,
    value: "",
  },
  {
    name: "Orders",
    icon: <Orders />,
    value: "orders",
  },
  {
    name: "Products",
    icon: <Products />,
    value: "products",
  },
  {
    name: "Delivery",
    icon: <LuTruck style={{ width: "20px", height: "20px" }} />,
    value: "delivery",
  },
  {
    name: "Marketing",
    icon: <Marketing />,
    value: "marketing",
  },
  {
    name: "Analytics",
    icon: <Analytics />,
    value: "analytics",
  },
  {
    name: "Payouts",
    icon: <Payouts />,
    value: "payouts",
  },
  {
    name: "Discounts",
    icon: <Discounts />,
    value: "discounts",
  },
  {
    name: "Audience",
    icon: <Audience />,
    value: "audience",
  },
  {
    name: "Appearance",
    icon: <Appearance />,
    value: "appearance",
  },
  {
    name: "Plugins",
    icon: <Plugins />,
    value: "plugins",
  },
];

const Navbar = ({ currentTab, setCurrentTab }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const pathname = window.location.pathname;
    const currentPageFromPath = pathname.replace("/", "");
    setCurrentTab(currentPageFromPath);
  }, []);

  return (
    <Main>
      <UserBox>
        <UserImg src={UserImage} alt="user" />
        <UserName>
          {user.name}
          <a href="" style={{ color: "white", fontSize: "13px" }}>
            View Store
          </a>
        </UserName>
        <FaAngleDown
          style={{
            color: "white",
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
        />
      </UserBox>
      <NavList>
        {NavOptions.map((item, index) => (
          <NavItem
            key={index}
            active={currentTab == item.value}
            onClick={() => {
              navigate(`/${item.value}`);
              setCurrentTab(item.value);
            }}
          >
            {item.icon}
            {item.name}
          </NavItem>
        ))}
      </NavList>
      <Credits>
        <Icon>
          <Wallet />
        </Icon>
        <Available>
          Available Credits
          <span style={{ fontSize: "1rem", fontWeight: "500" }}>
            {user.credits}
          </span>
        </Available>
      </Credits>
    </Main>
  );
};

export default Navbar;

const Main = styled.div`
  background-color: #1e2640;
  height: 100%;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
  padding: 16px 10px;
  width: 14rem;
  box-sizing: border-box;
`;
const UserBox = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const UserImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 4px;
  object-fit: cover;
`;
const UserName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  font-size: 15px;
  flex: 1;
  font-weight: 500;
`;
const NavList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  box-sizing: border-box;
  gap: 12px;
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  border-radius: 4px;
  height: 36px;
  background-color: ${(props) =>
    props.active ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  color: white;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 16px;
`;
const Credits = styled.div`
  background-color: rgba(53, 60, 83, 1);
  width: 100%;
  height: 54px;
  box-sizing: border-box;
  padding: 6px 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Icon = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;
const Available = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 13px;
  flex-direction: column;
`;
