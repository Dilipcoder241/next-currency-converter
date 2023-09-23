"use client"

import { useEffect, useState } from "react";




function whitebox(props) {


  return (
    <div className="h-1/3 bg-white rounded-lg p-4 flex justify-between items-center relative">

      <div className="space-y-2">
        <h1 className="text-lg">{props.state}</h1>
        <input type="number" value={props.value} onChange={(e) => { props.setter(e.target.value) }} disabled={props.disable} className="px-1 font-bold text-lg rounded outline-none border-2 border-slate-300" placeholder={0} />
      </div>

      <div className="space-y-2 flex flex-col">
        <h1>Currency Type</h1>
        <select id="fcur" className="justify-items-end border-2 border-slate-200 bg-slate-100 rounded" onChange={(e) => props.setcon(e.target.value)}>
          <option value={`${props.con}`}>{props.con}</option>
          {props.countries.map((elem, idx) => (
            <option key={idx} value={elem}>{elem}</option>
          ))}

        </select>
      </div>


    </div>
  )
}

export default whitebox