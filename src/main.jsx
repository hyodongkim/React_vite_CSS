import React from "react"
export default ()=>{
    return <div>
        <div>
            <div className="pf-text-xs pf-text-left pf-text-red-700">내용물1</div>
            <div className="pf-text-base pf-text-right pf-text-red-700">내용물2</div>
            <div className="pf-text-xl pf-text-center pf-text-red-700">내용물3</div>
        </div>
        <div>
            <div >
                <img className="pf-w-500 pf-minW-200 pf-maxW-700" src="../img1.jpg" alt="" />
                <img className="pf-w-1/2" src="../img11.jpg" alt="" />
            </div>
            <div>
                <img src="../img1.jpg" alt="" />
                <img src="../img11.jpg" alt="" />
            </div>
        </div>
    </div>
}