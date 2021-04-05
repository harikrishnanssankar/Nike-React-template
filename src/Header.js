import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="container">
      <img className="bg" src="/images/background.jpg" alt="" />

      <div className="header">
        <img className="logo" src="/images/nikelogo.png" />
        <div className="header__items">
          <ul>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>CUSTOMIZE</li>
            <li>FAVORITES</li>
          </ul>

        </div>

        <div className="basket">
          <ShoppingBasketIcon/>
        </div>
        

      </div>
        <div className="inner">
        <img className="bg__Inner" src="/images/shoe1.png" alt="" />
        </div>
     
     

    </div>
  );
}

export default Header;
