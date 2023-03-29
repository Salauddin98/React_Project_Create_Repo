import React from "react";
import Message from "./Message";
import { guns } from "../../../../test";

const Person = () => {
  const person = { name: "salauddin", age: "21", department: "CSE" };

  return (
    <section className="container mx-auto mt-10">
      <div className="grid grid-cols-3 items-center gap-10">
        {guns.map(
          (value, index) => {
            return <Message {...value} key={value.id}></Message>;
            // return <Message {...value} key={index}></Message>;
          }
          // <Message values={value}></Message>
        )}
      </div>
    </section>

    // <div className="bg-slate-300 p-5 text-center w-3/5 mt-3 mx-auto">
    //   {/* <img src="./img/download.png" alt="" />
    //   <h1 className="text-2xl">Md Salauddin</h1>
    //   <Message></Message> */}
    //   <Message info={person}></Message>
    // </div>
  );
};

export default Person;
