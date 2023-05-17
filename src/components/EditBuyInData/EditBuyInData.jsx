import "./EditBuyInData.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

function EditBuyInData(props) {
    var { buyinID } = useParams();
    const navigate = useNavigate();
    const [CurrentBuyInRecord, setCurrentBuyInRecord] = useState([]);
    const [ClickEditBuyInSubmit, setClickEditBuyInSubmit] = useState(false);

    useEffect(() => {
        // console.log("AllBuyInRecordData: " + props.AllBuyInRecordData);
        let CurrentBuyInRecordDetails = props.AllBuyInRecordData.find(buyinrecord => buyinrecord.id === buyinID);
        setCurrentBuyInRecord(CurrentBuyInRecordDetails);
    }, [buyinID])
    console.log(CurrentBuyInRecord);

    const [EditBuyInDataInfo, setEditBuyInDataInfo] = useState({
        id: CurrentBuyInRecord?.id,
        buyin_date: CurrentBuyInRecord?.buyin_date,
        stock_id: CurrentBuyInRecord?.stock_id,
        stock_name: CurrentBuyInRecord?.stock_name,
        target_price: CurrentBuyInRecord?.target_price,
        price_per_stock: CurrentBuyInRecord?.price_per_stock,
        today_endmarketprice: CurrentBuyInRecord?.today_endmarketprice,
        today_pointprice: CurrentBuyInRecord?.today_pointprice,
        today_supportprice: CurrentBuyInRecord?.today_supportprice,
        buyin_reason: CurrentBuyInRecord?.buyin_reason,
        stoploss_price: CurrentBuyInRecord?.stoploss_price
    });

    // //
    useEffect(() => {
        if (ClickEditBuyInSubmit === true) {
            axios
            .put(`https://stocktrack-backend-api.herokuapp.com/allbuyindata/${CurrentBuyInRecord?.id}`, EditBuyInDataInfo)
            // .put(`http://localhost:8080/allbuyindata/${CurrentBuyInRecord?.id}`, EditBuyInDataInfo)
            .then((res) => {
            //   console.log(res);
                setClickEditBuyInSubmit(false);
                props.setRequiredReLoading(true);
                navigate("/buyinrecord");
            })
            .catch((err) => console.log(err));
        }

        // console.log("AllBuyInRecordData: " + props.AllBuyInRecordData);

    }, [ClickEditBuyInSubmit])

    const BuyInEditFormdClickedonSubmit = (event) => {
        event.preventDefault();
        let form = document.getElementById("EditBuyInData__form");
    
        let value_buyin_date = document.getElementById("EditBuyInData__forminput--buyin_date").value;
        let value_stock_id = document.getElementById("EditBuyInData__forminput--stock_id").value;
        let value_stock_name = document.getElementById("EditBuyInData__forminput--stock_name").value;
        let value_target_price = document.getElementById("EditBuyInData__forminput--target_price").value;
        let value_price_per_stock = document.getElementById("EditBuyInData__forminput--price_per_stock").value;
        let value_today_endmarketprice = document.getElementById("EditBuyInData__forminput--today_endmarketprice").value;
        let value_today_pointprice = document.getElementById("EditBuyInData__forminput--today_pointprice").value;
        let value_today_supportprice = document.getElementById("EditBuyInData__forminput--today_supportprice").value;
        let value_buyin_reason = document.getElementById("EditBuyInData__forminput--buyin_reason").value;
        let value_stoploss_price = document.getElementById("EditBuyInData__forminput--stoploss_price").value;
    
        let AddedBuyInDataObj = {...EditBuyInDataInfo, 
            id: CurrentBuyInRecord?.id,
            buyin_date: value_buyin_date, 
            stock_id: value_stock_id, 
            stock_name: value_stock_name, 
            target_price: value_target_price,
            price_per_stock: value_price_per_stock,
            today_endmarketprice: value_today_endmarketprice,
            today_pointprice: value_today_pointprice,
            today_supportprice: value_today_supportprice,
            buyin_reason: value_buyin_reason,
            stoploss_price: value_stoploss_price
        };
        setEditBuyInDataInfo(AddedBuyInDataObj);
        setClickEditBuyInSubmit(true);
        props.setRequiredReLoading(true);
        form.reset();
    }

    return (
        <>
            <div className="EditBuyInData__container">
                <NavLink to={"/buyinrecord"}>
                    <button className="EditBuyInData__button--previous">&lt; 回到買入紀錄</button>
                </NavLink>
                <form className="EditBuyInData__form" id="EditBuyInData__form" onSubmit={BuyInEditFormdClickedonSubmit}>
                    <div className="EditBuyInData__forminput">
                        <label className="EditBuyInData__forminput--label" htmlFor="buyin_date">買入日期</label>
                        <input type="text" id="EditBuyInData__forminput--buyin_date" className="EditBuyInData__forminput--input" defaultValue={CurrentBuyInRecord?.buyin_date} />
                    </div>
                    
                    <div className="EditBuyInData__forminput">
                        <label className="EditBuyInData__forminput--label" htmlFor="stock_id">股票代號</label>
                        <input type="text" id="EditBuyInData__forminput--stock_id" className="EditBuyInData__forminput--input" defaultValue={CurrentBuyInRecord?.stock_id} />
                    </div>
                
                    <div className="EditBuyInData__forminput">
                        <label className="EditBuyInData__forminput--label" htmlFor="stock_name">股票名稱</label>
                        <input type="text" id="EditBuyInData__forminput--stock_name" className="EditBuyInData__forminput--input" defaultValue={CurrentBuyInRecord?.stock_name} />
                    </div>

                    <div className="EditBuyInData__forminput">
                        <label className="EditBuyInData__forminput--label" htmlFor="target_price">目標價</label>
                        <input type="text" id="EditBuyInData__forminput--target_price" className="EditBuyInData__forminput--input" defaultValue={CurrentBuyInRecord?.target_price} />
                    </div>

                    <div className="EditBuyInData__forminput">
                        <label className="EditBuyInData__forminput--label" htmlFor="price_per_stock">買進金額</label>
                        <input type="number" step="any" id="EditBuyInData__forminput--price_per_stock" className="EditBuyInData__forminput--input" defaultValue={CurrentBuyInRecord?.price_per_stock} />
                    </div>

                    <div className="EditBuyInData__forminput">
                        <label className="EditBuyInData__forminput--label" htmlFor="today_endmarketprice">收盤價</label>
                        <input type="number" step="any" id="EditBuyInData__forminput--today_endmarketprice" className="EditBuyInData__forminput--input" defaultValue={CurrentBuyInRecord?.today_endmarketprice} />
                    </div>
                    
                    <div className="EditBuyInData__forminput">
                        <label className="EditBuyInData__forminput--label" htmlFor="today_pointprice">壓力</label>
                        <input type="number" step="any" id="EditBuyInData__forminput--today_pointprice" className="EditBuyInData__forminput--input" defaultValue={CurrentBuyInRecord?.today_pointprice} />
                    </div>
                    
                    <div className="EditBuyInData__forminput">
                        <label className="EditBuyInData__forminput--label" htmlFor="today_supportprice">支撐</label>
                        <input type="number" step="any" id="EditBuyInData__forminput--today_supportprice" className="EditBuyInData__forminput--input" defaultValue={CurrentBuyInRecord?.today_supportprice} />
                    </div>          
                    
                    <div className="EditBuyInData__forminput">
                        <label className="EditBuyInData__forminput--label" htmlFor="buyin_reason">買入原因</label>
                        <textarea type="text" id="EditBuyInData__forminput--buyin_reason" className="EditBuyInData__forminput--input" defaultValue={CurrentBuyInRecord?.buyin_reason} />
                    </div>
                    
                    <div className="EditBuyInData__forminput">
                        <label className="EditBuyInData__forminput--label" htmlFor="stoploss_price">停損價</label>
                        <input type="number" step="any" id="EditBuyInData__forminput--stoploss_price" className="EditBuyInData__forminput--input" defaultValue={CurrentBuyInRecord?.stoploss_price} />
                    </div>

                    <button className="EditBuyInData__forminput--button" id="EditBuyInData__sendbutton">送出</button>
                </form>
            </div>
        </>
    );
}

export default EditBuyInData;