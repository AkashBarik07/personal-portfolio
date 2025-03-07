import React from "react";
import Section from "../shared/section";
import ContactInfo from "./contact-info";
import Form from "./form";

import "./style.scss";

const Contact = () => {
    return (
        <Section
            id="contact"
            title="Any question? Feel free to contact"
            background="light"
        >
            <div className="contact-content-wrapper">
                <ContactInfo/>
                <Form/>
            </div>
        </Section>
    );
};

export default Contact;


//service_36obpuo service id
//template id = template_se6oncy
//public key = -xlp1hHVMddcZBBYT