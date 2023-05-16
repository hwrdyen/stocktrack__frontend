// import SCSS style sheet
import "./App.scss";
import "./styles/_global.scss";

// import dependencies
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// import JSON Data
// import BuyInRecordJSONData from "./assets/Data/buyin_recorddata.json";

// import Components
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import StockBase from "./pages/StockBase/StockBase.js";
import BuyInRecord from "./pages/BuyInRecord/BuyInRecord.js";
import BuyInDataDetail from "./components/BuyInDataDetail/BuyInDataDetail.jsx";
import AddBuyInData from "./components/AddBuyInData/AddBuyInData.jsx";

function App() {

  const [AllBuyInRecordData, setAllBuyInRecordData] = useState([]);


//   // useEffect - GetAllWarehousesInfo
//   useEffect(() => {
//     function GetAllWarehousesInfo() {
//         return axios
//             .get(`http://localhost:8080/warehouses`)
//             .then((element) => {
//                 let warehouses_info = element.data;
//                 setAllWarehousesInfo(warehouses_info);
//                 setRequiredReLoading(false);
//             });
//     }
//     if (RequiredReLoading === true) {
//         GetAllWarehousesInfo();
//     }
// }, [AllWarehousesInfo, RequiredReLoading]);


  useEffect(() => {
    function GetAllWarehousesInfo() {
      return axios
          .get(`http://localhost:8080/allbuyindata`)
          .then((element) => {
              let buyindata_info = element.data;
              setAllBuyInRecordData(buyindata_info);
          });
    }
    GetAllWarehousesInfo();
  }, [AllBuyInRecordData])

  console.log(AllBuyInRecordData);

  if (AllBuyInRecordData === []) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }
  else {
    return (
      <>
        <BrowserRouter>
          {/* Header */}
          <Header/>
  
          <Routes>
              <Route 
                path="/" 
                element={<StockBase AllBuyInRecordData={AllBuyInRecordData}/>}
              />
  
              <Route 
                path="/buyinrecord" 
                element={<BuyInRecord AllBuyInRecordData={AllBuyInRecordData} />}
              />
  
              <Route 
                path="/buyinrecord/:buyinID" 
                element={<BuyInDataDetail AllBuyInRecordData={AllBuyInRecordData} />}
              />

              <Route 
                path="/addbuyinrecord" 
                element={<AddBuyInData AllBuyInRecordData={AllBuyInRecordData} setAllBuyInRecordData={setAllBuyInRecordData} />}
              />
  
          </Routes>
  
          {/* Footer */}
          <Footer/>
        </BrowserRouter>
  
      </>
    );
  }


}

export default App;
