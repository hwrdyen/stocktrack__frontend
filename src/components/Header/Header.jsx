// import SCSS style sheet
import "./Header.scss";

// import dependencies
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="Header__container">
                <div className="Header-logo__container">
                    <NavLink to={"/"}>
                        <div className="Header-logo__title">Sunny Stock Trade</div>
                    </NavLink>
                </div>
                
                <div className="Header-title__container">
                    <NavLink to={"/"}>
                        <div className="Header-title__button">
                            股票庫存
                        </div>
                    </NavLink>

                    <NavLink to={"/buyinrecord"}>
                        <div className="Header-title__button">
                            買入紀錄
                        </div>
                    </NavLink>
                </div>

            </div>
        </>
    )
}

export default Header;