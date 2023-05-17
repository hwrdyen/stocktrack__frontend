import "./BuyInRecord.scss";

import { NavLink } from "react-router-dom";

// import components
import BuyInDataListItem from "../../components/BuyInDataListItem/BuyInDataListItem.jsx";

function BuyInRecord(props) {
    return (
        <>  
            <div className="BuyInRecord__container">
                <NavLink to={"/addbuyinrecord"}>
                    <button className="BuyInRecord__button">&#43;新增買入紀錄</button>
                </NavLink>
                <div>{props.AllBuyInRecordData.map(BuyInSingleRecord => (
                    <BuyInDataListItem key={BuyInSingleRecord?.id} BuyInSingleRecord={BuyInSingleRecord} setRequiredReLoading={props.setRequiredReLoading}/>
                ))
                }</div>
            </div>
            
        </>
    );
}

export default BuyInRecord;