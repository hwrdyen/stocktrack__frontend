import "./BuyInDataDetail.scss";

import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

function BuyInDataDetail(props) {

    var { buyinID } = useParams();
    const [CurrentBuyInRecord, setCurrentBuyInRecord] = useState([]);

    useEffect(() => {
        // console.log("AllBuyInRecordData: " + props.AllBuyInRecordData);
        let CurrentBuyInRecordDetails = props.AllBuyInRecordData.find(buyinrecord => buyinrecord.id === buyinID);
        setCurrentBuyInRecord(CurrentBuyInRecordDetails);
    }, [buyinID])

    // console.log(CurrentBuyInRecord);


    return (
        <>
            <div className="BuyInDataDetail__container">
                <NavLink to={"/buyinrecord"}>
                    <button className="BuyInDataDetail__button--previous">&lt; 回到買入紀錄</button>
                </NavLink>
                <div className="BuyInDataDetail__infosection">
                    <div className="BuyInDataDetail__title">買入日期</div>
                    <div>{CurrentBuyInRecord?.buyin_date}</div>
                </div>
                <div className="BuyInDataDetail__infosection">
                    <div className="BuyInDataDetail__title">股票代號</div>
                    <div>{CurrentBuyInRecord?.stock_id}</div>
                </div>
                <div className="BuyInDataDetail__infosection">
                    <div className="BuyInDataDetail__title">股票名稱</div>
                    <div>{CurrentBuyInRecord?.stock_name}</div>
                </div>
                <div className="BuyInDataDetail__infosection">
                    <div className="BuyInDataDetail__title">目標價</div>
                    <div>{CurrentBuyInRecord?.target_price}</div>
                </div>
                <div className="BuyInDataDetail__infosection">
                    <div className="BuyInDataDetail__title">買進金額</div>
                    <div>{CurrentBuyInRecord?.price_per_stock}</div>
                </div>
                <div className="BuyInDataDetail__infosection">
                    <div className="BuyInDataDetail__title">收盤價</div>
                    <div>{CurrentBuyInRecord?.today_endmarketprice}</div>
                </div>
                <div className="BuyInDataDetail__infosection">
                    <div className="BuyInDataDetail__title">支撐</div>
                    <div>{CurrentBuyInRecord?.today_supportprice}</div>
                </div>
                <div className="BuyInDataDetail__infosection">
                    <div className="BuyInDataDetail__title">壓力</div>
                    <div>{CurrentBuyInRecord?.today_pointprice}</div>
                </div>
                <div className="BuyInDataDetail__infosection">
                    <div className="BuyInDataDetail__title">買入原因</div>
                    <div>{CurrentBuyInRecord?.buyin_reason}</div>
                </div>
                <div className="BuyInDataDetail__infosection">
                    <div className="BuyInDataDetail__title">停損價</div>
                    <div>{CurrentBuyInRecord?.stoploss_price}</div>
                </div>
            </div>
        </>
    );
}

export default BuyInDataDetail;