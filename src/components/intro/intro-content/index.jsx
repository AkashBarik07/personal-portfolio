import React from "react";
import "./style.scss";

import girl from "../../../images/girl.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";

import { BsAwardFill } from "react-icons/bs";
import {FaUser} from "react-icons/fa";


const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} alt="js hindi dev" />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Js Dev Hindi</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat iste veniam iusto sapiente exercitationem adipisci, harum nostrum maxime saepe suscipit incidunt ad sint debitis voluptatem quia dicta odit, nobis non?
                    </p>
                    <CallToAction text="Contact me" />
                </div>
                <div className="right-col">
                    <img src={girl} alt="JS Dev Hindi" />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Best Design Award</div>
                    </div>

                    <div className="highlights verticle">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>4k+</span>
                            Happy Customers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
