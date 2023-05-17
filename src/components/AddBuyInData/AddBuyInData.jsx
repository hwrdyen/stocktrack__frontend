// import SCSS style sheet
import "./AddBuyInData.scss";

// import dependencies
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as uuid from "uuid";

function AddBuyInData(props) {
    const navigate = useNavigate();

    const [ClickAddBuyInSubmit, setClickAddBuyInSubmit] = useState(false);
    const [AddBuyInDataInfo, setAddBuyInDataInfo] = useState({
        id: uuid.v4(),
        buyin_date: null,
        stock_id: null,
        stock_name: null,
        target_price: null,
        price_per_stock: null,
        today_endmarketprice: null,
        today_pointprice: null,
        today_supportprice: null,
        buyin_reason: null,
        stoploss_price: null
    });

    // //
    useEffect(() => {
        if (ClickAddBuyInSubmit === true) {
            axios
            .post(`https://stocktrack-backend-api.herokuapp.com/allbuyindata/`, AddBuyInDataInfo)
            // .post(`http://localhost:8080/allbuyindata/`, AddBuyInDataInfo)
            .then((res) => {
            //   console.log(res);
              setClickAddBuyInSubmit(false);
              props.setRequiredReLoading(true);
              navigate("/buyinrecord");
            })
            .catch((err) => console.log(err));
        }

        // console.log("AllBuyInRecordData: " + props.AllBuyInRecordData);

    }, [ClickAddBuyInSubmit])

    const BuyInFormdClickedonSubmit = (event) => {
        event.preventDefault();
        let form = document.getElementById("AddBuyInData__form");
  
        let value_buyin_date = document.getElementById("AddBuyInData__forminput--buyin_date").value;
        let value_stock_id = document.getElementById("AddBuyInData__forminput--stock_id").value;
        let value_stock_name = document.getElementById("AddBuyInData__forminput--stock_name").value;
        let value_target_price = document.getElementById("AddBuyInData__forminput--target_price").value;
        let value_price_per_stock = document.getElementById("AddBuyInData__forminput--price_per_stock").value;
        let value_today_endmarketprice = document.getElementById("AddBuyInData__forminput--today_endmarketprice").value;
        let value_today_pointprice = document.getElementById("AddBuyInData__forminput--today_pointprice").value;
        let value_today_supportprice = document.getElementById("AddBuyInData__forminput--today_supportprice").value;
        let value_buyin_reason = document.getElementById("AddBuyInData__forminput--buyin_reason").value;
        let value_stoploss_price = document.getElementById("AddBuyInData__forminput--stoploss_price").value;
  
        let AddedBuyInDataObj = {...AddBuyInDataInfo, 
            buyin_date:value_buyin_date, 
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
        setAddBuyInDataInfo(AddedBuyInDataObj);
        setClickAddBuyInSubmit(true);
        props.setRequiredReLoading(true);
        form.reset();
    }

    return (
        <>
            <div className="AddBuyInData__container">
                <NavLink to={"/buyinrecord"}>
                    <button className="AddBuyInData__button--previous">&lt; 回到買入紀錄</button>
                </NavLink>
                <form className="AddBuyInData__form" id="AddBuyInData__form" onSubmit={BuyInFormdClickedonSubmit}>
                    <div className="AddBuyInData__forminput">
                        <label className="AddBuyInData__forminput--label" htmlFor="buyin_date">買入日期</label>
                        <input type="text" id="AddBuyInData__forminput--buyin_date" className="AddBuyInData__forminput--input" />
                    </div>
                    
                    <div className="AddBuyInData__forminput">
                        <label className="AddBuyInData__forminput--label" htmlFor="stock_id">股票代號</label>
                        <input type="text" id="AddBuyInData__forminput--stock_id" className="AddBuyInData__forminput--input" />
                    </div>
                
                    <div className="AddBuyInData__forminput">
                        <label className="AddBuyInData__forminput--label" htmlFor="stock_name">股票名稱</label>
                        <input type="text" id="AddBuyInData__forminput--stock_name" className="AddBuyInData__forminput--input" />
                    </div>

                    <div className="AddBuyInData__forminput">
                        <label className="AddBuyInData__forminput--label" htmlFor="target_price">目標價</label>
                        <input type="text" id="AddBuyInData__forminput--target_price" className="AddBuyInData__forminput--input" />
                    </div>

                    <div className="AddBuyInData__forminput">
                        <label className="AddBuyInData__forminput--label" htmlFor="price_per_stock">買進金額</label>
                        <input type="number" step="any" id="AddBuyInData__forminput--price_per_stock" className="AddBuyInData__forminput--input" />
                    </div>

                    <div className="AddBuyInData__forminput">
                        <label className="AddBuyInData__forminput--label" htmlFor="today_endmarketprice">收盤價</label>
                        <input type="number" step="any" id="AddBuyInData__forminput--today_endmarketprice" className="AddBuyInData__forminput--input" />
                    </div>
                    
                    <div className="AddBuyInData__forminput">
                        <label className="AddBuyInData__forminput--label" htmlFor="today_pointprice">壓力</label>
                        <input type="number" step="any" id="AddBuyInData__forminput--today_pointprice" className="AddBuyInData__forminput--input" />
                    </div>
                    
                    <div className="AddBuyInData__forminput">
                        <label className="AddBuyInData__forminput--label" htmlFor="today_supportprice">支撐</label>
                        <input type="number" step="any" id="AddBuyInData__forminput--today_supportprice" className="AddBuyInData__forminput--input" />
                    </div>          
                    
                    <div className="AddBuyInData__forminput">
                        <label className="AddBuyInData__forminput--label" htmlFor="buyin_reason">買入原因</label>
                        <textarea type="text" id="AddBuyInData__forminput--buyin_reason" className="AddBuyInData__forminput--input" />
                    </div>
                    
                    <div className="AddBuyInData__forminput">
                        <label className="AddBuyInData__forminput--label" htmlFor="stoploss_price">停損價</label>
                        <input type="number" step="any" id="AddBuyInData__forminput--stoploss_price" className="AddBuyInData__forminput--input" />
                    </div>

                    <button className="AddBuyInData__forminput--button" id="AddBuyInData__sendbutton">送出</button>
                </form>
            </div>
        </>
    );
}

export default AddBuyInData;