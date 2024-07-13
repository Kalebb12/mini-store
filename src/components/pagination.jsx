import React from 'react'
import { useContext } from "react";
import { GlobalContext } from "../context/context";
const Pagination = () => {
    const { setPage ,page ,setLoading ,setData} = useContext(GlobalContext);
    const noOfPage = 3
    const handlePageSwitch = (i)=>{
        setData([])
        setLoading(true)
        setPage(i)
            
    }
  return (
    <div>
        {/* pagination using buttons*/}
        <div className="flex flex-cen-full gap pages">
          {
            [...Array(noOfPage)].map((_,i) => {
                i++
                return (
                  <button key={i} onClick={() =>{handlePageSwitch(i)}} className={`page-btn ${page === i? 'active' : ''}`}>{i}</button>
                )
            })
          }
        </div>
      </div>
  )
}

export default Pagination