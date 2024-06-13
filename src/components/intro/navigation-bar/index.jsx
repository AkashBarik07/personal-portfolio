import React from "react";
import logo from "../../../images/logo.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";
import "./style.scss";
import Portfolio from "../../portfolio";

const Navigation = () => {
    return (
        <div className="top-navigation-bar">
            <div className="app-logo">
                <img
                    src={logo}
                    alt="Akash Barik"
                />
            </div>

            <div className="navigation">
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection("skills")}
                >
                    Skills
                </span>
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection("portfolio")}
                >
                    Portfolio   
                </span>
                <span
                    className="navigation-item"
                    onClick = {() => scrollToSection("blogs")}
                >
                    Blogs & Article
                </span>
                <CallToAction
                    text="Contact me"
                    action = {() => scrollToSection("contact")}
                />
            </div>
        </div>
    );
};

export default Navigation;
