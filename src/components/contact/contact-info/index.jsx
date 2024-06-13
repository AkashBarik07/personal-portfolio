import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./style.scss";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                I would be happy to answer any question you may have about
                freelance writing or contact marcketing!
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text">+91 345654334</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className="text">xyz@gmail.com</span>
            </div>
        </div>
    );
};

export default ContactInfo;
