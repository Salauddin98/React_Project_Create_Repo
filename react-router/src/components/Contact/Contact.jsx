import React, { useContext } from "react";
import { RingContext, moneyTaka } from "../Home/Home";

const Contact = () => {
  const item = useContext(RingContext);
  const [money, setMoney] = useContext(moneyTaka);
  return (
    <div>
      <h1>{item}</h1>
      <h1>Akon amr kace ace: {money} taka</h1>
      <button
        onClick={() => setMoney(money + 1000)}
        style={{
          backgroundColor: "#fb5200",
          color: "white",
          padding: "10px 5px",
        }}
      >
        1000 tk de more
      </button>
    </div>
  );
};

export default Contact;
