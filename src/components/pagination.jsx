import React from 'react'
import { useContext } from "react";
import { GlobalContext } from "../context/context";
const Pagination = () => {
    const { setPage ,page} = useContext(GlobalContext);
    const noOfPage = 3
  return (
    <div>
        {/* pagination using buttons*/}
        <div className="flex flex-cen-full gap pages">
          {
            [...Array(noOfPage)].map((_,i) => {
                i++
                return (
                  <button key={i} onClick={() => setPage(i)} className={`page-btn ${page === i? 'active' : ''}`}>{i}</button>
                )
            })
          }
        </div>
      </div>
  )
}

export default Pagination