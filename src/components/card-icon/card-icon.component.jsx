import React from "react";
import { ReactComponent as Shoppingicon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import "./card-icon.styles.scss";

const CardIcon = ({ toggleCartHidden }) => (
  <div className="card-icon" onClick={toggleCartHidden}>
    <Shoppingicon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CardIcon);
