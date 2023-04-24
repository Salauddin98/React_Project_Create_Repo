import React, { createContext, useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Contact from "../Contact/Contact";
export const RingContext = createContext("Salauddin");
export const moneyTaka = createContext(0);

const Home = () => {
  const navigation = useNavigation();
  const [money, setMoney] = useState(0);
  return (
    <moneyTaka.Provider value={[money, setMoney]}>
      <RingContext.Provider value="Hi Context switching">
        <div>
          <Header></Header>
          <div>{navigation.state === "loading" && "Loading..."}</div>
          <Outlet></Outlet>
        </div>
      </RingContext.Provider>
    </moneyTaka.Provider>
  );
};

export default Home;
