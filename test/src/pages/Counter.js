
import { useSelector,useDispatch } from "react-redux";
import { incrementByAmount,lotusincrement,rosedecrement } from "../redux/CounterSlice";
import { useState } from "react";

const Counter=()=>{
    const redusdata=useSelector((state)=>state.flowers)
    const dispatch=useDispatch()

    return(
        <div>

    <div className="row">

        <div className="col-3">
            <h1>Lotus</h1>
            <p>
         {redusdata.lotus}

            </p>
    <button onClick={()=>dispatch(lotusincrement())}> Increment</button>

        </div>
        
        <div className="col-3">
            <h1>Rose</h1>
            <p>
    {redusdata.rose}
    </p>
    <button onClick={()=>dispatch(rosedecrement())}>decrement</button>


        </div>
        
        <div className="col-3">
            <h1>Total Flowers</h1>
    {redusdata.totalflowers}
        
    <button  onClick={()=>dispatch(incrementByAmount(redusdata.rose+redusdata.lotus))}> iNCREARE tOTAL</button>

        </div>

    </div>



        </div>
    )
}

export default Counter