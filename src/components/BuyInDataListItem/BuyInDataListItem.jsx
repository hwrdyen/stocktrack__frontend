import "./BuyInDataListItem.scss";

import {NavLink} from "react-router-dom";

function BuyInDataListItem(props) {
    return (
        <>
            <NavLink to={`/buyinrecord/${props.BuyInSingleRecord?.id}`}>
                <div className="BuyInDataListItem__container">
                    <div>
                        <div className="BuyInDataListItem__title">日期</div>
                        <div>{props.BuyInSingleRecord?.buyin_date}</div>
                    </div>
                    <div>
                        <div className="BuyInDataListItem__title">股號</div>
                        <div>{props.BuyInSingleRecord?.stock_id}</div>
                    </div>
                    <div>
                        <div className="BuyInDataListItem__title">股名</div>
                        <div>{props.BuyInSingleRecord?.stock_name}</div>
                    </div>
                    <div>
                        <div className="BuyInDataListItem__title">買進金額</div>
                        <div>{props.BuyInSingleRecord?.price_per_stock}</div>
                    </div>
                    <div>
                        <div className="BuyInDataListItem__title">今天的點位(壓力)</div>
                        <div>{props.BuyInSingleRecord?.today_pointprice}</div>
                    </div>
                    <div>
                        <div className="BuyInDataListItem__title">今天的支撐</div>
                        <div>{props.BuyInSingleRecord?.today_supportprice}</div>
                    </div>
                </div>
            </NavLink>
        </>
    );
}

export default BuyInDataListItem;