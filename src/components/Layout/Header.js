import React, { Fragment } from "react";
import HeaderCardButton from "./HeaderCardButton";
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css';
const Header = props => {
        return (<Fragment>
                <header className={classes.header}>
                        <h1>Meals</h1>
                        <HeaderCardButton onClick={props.onShowCart} />
                </header>
                <div className={classes['main-image']}>
                        <img src={mealsImage} alt="Food" />
                </div>
        </Fragment>);
};
export default Header;