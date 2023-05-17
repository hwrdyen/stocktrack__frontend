import "./BuyInDataListItem.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function BuyInDataListItem(props) {
    const navigate = useNavigate();
    const [ClickedDelete, setClickedDelete] = useState(false);

    // Delete a Buy-In Data List Item
    useEffect(() => {
        if (ClickedDelete === true) {
        axios
            .delete(`https://stocktrack-backend-api.herokuapp.com/allbuyindata/${props.BuyInSingleRecord?.id}`)
            .then((res) => {
                // console.log(props.BuyInSingleRecord?.id);
                // console.log(res.status);
                setClickedDelete(false);
                props.setRequiredReLoading(true);
                navigate("/buyinrecord");
            })
            .catch(err => console.log(err));
        }
    }, [ClickedDelete]);

  const ClickDeleteButton = (event) => {
    event.preventDefault();
    setClickedDelete(true);
    props.setRequiredReLoading(true);
    // CloseDeletePopup();
  };

    return (
        <>
            <NavLink to={`/buyinrecord/${props.BuyInSingleRecord?.id}`}>
                <div className="BuyInDataListItem__container">
                    <div className="BuyInDataListItem__infosection">
                        <div className="BuyInDataListItem__infobox">
                            <div className="BuyInDataListItem__title">日期</div>
                            <div className="BuyInDataListItem__result">{props.BuyInSingleRecord?.buyin_date}</div>
                        </div>
                        <div className="BuyInDataListItem__infobox">
                            <div className="BuyInDataListItem__title">股號</div>
                            <div className="BuyInDataListItem__result">{props.BuyInSingleRecord?.stock_id}</div>
                        </div>
                        <div className="BuyInDataListItem__infobox">
                            <div className="BuyInDataListItem__title">股名</div>
                            <div className="BuyInDataListItem__result">{props.BuyInSingleRecord?.stock_name}</div>
                        </div>
                        <div className="BuyInDataListItem__infobox">
                            <div className="BuyInDataListItem__title">買進金額</div>
                            <div className="BuyInDataListItem__result">{props.BuyInSingleRecord?.price_per_stock}</div>
                        </div>
                        <div className="BuyInDataListItem__infobox">
                            <div className="BuyInDataListItem__title">收盤價</div>
                            <div className="BuyInDataListItem__result">{props.BuyInSingleRecord?.today_endmarketprice}</div>
                        </div>
                        <div className="BuyInDataListItem__infobox">
                            <div className="BuyInDataListItem__title">壓力</div>
                            <div className="BuyInDataListItem__result">{props.BuyInSingleRecord?.today_pointprice}</div>
                        </div>
                        <div className="BuyInDataListItem__infobox">
                            <div className="BuyInDataListItem__title">支撐</div>
                            <div className="BuyInDataListItem__result">{props.BuyInSingleRecord?.today_supportprice}</div>
                        </div>
                    </div>
                    
                    <button className="BuyInDataListItem__button--delete" id="BuyInDataListItem__button--delete" onClick={ClickDeleteButton}>刪除</button>
                </div>
            </NavLink>
        </>
    );
}

export default BuyInDataListItem;