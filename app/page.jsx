"use client"

import { useEffect, useState } from "react";
import Whitebox from "./whitebox";


export default function Home() {

  const [from, setfrom] = useState();
  const [to, setto] = useState();
  const [fcon, setfcon] = useState("inr");
  const [tcon, settcon] = useState("usd");

  const [countries, setcountries] = useState([]);
  const [data, setdata] = useState()

  const currecys = async () => {
    let res = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fcon}.json`);
    let data = await res.json();
    setdata(data);
    setcountries(Object.keys(data[fcon]));
  };

  useEffect(() => {
    currecys();
  }, [fcon, tcon])


  const converter = () => {
    setto(from * data[fcon][tcon]);
  }

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-no-repeat bg-cover bg-center bg-[url('https://img.freepik.com/premium-vector/global-currency-background_115579-800.jpg')]">
        <div className="h-3/5 xl:w-2/5 w-11/12 rounded backdrop-blur-3xl p-8 space-y-4 relative flex justify-center item-center flex-col">

          <Whitebox state={"From"} value={from} setter={setfrom} setcon={setfcon} countries={countries} con={fcon} />
          <Whitebox state={"To"} value={to} setter={setto} setcon={settcon} countries={countries} con={tcon} disable />

          <button onClick={converter} className="text-white w-full bg-blue-600 rounded py-3 xl:text-lg text-xs">Convert <span className="uppercase">{fcon}</span> To <span className="uppercase">{tcon}</span></button>
        </div>
      </div>
    </>
  )
}
