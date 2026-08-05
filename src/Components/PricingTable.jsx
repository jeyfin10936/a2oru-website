import React from 'react';
import {useState} from 'react';
import { SquareCheckBig, ShieldCheck } from 'lucide-react';
import "../CSS/pricingTable.css";
import Button from "../Components/Common/Button";
import Links from "../Components/Common/Link";


const pricingPlanData = [
    {
        id: "starter",
        title: "Starter",
        addTitle: "Project Based",
        // monthlyPrice: 0,
        // yearlyPrice: 0,
        price: "Project Based",
        desc: "Best for small organizations beginning their identity management journey.",
        cta: "Request Quote",
        featured: false,
        url: `mailto:${Links.email}`,
        target: '_blank',

        features: [
            { text: "Authentication & Authorization", included: true },
            { text: "Organization Management", included: true },
            { text: "User & Group Management", included: true },
            { text: "Role-Based Access Control", included: true },
            { text: "Single Application Support", included: true },
            { text: "Standard Support", included: true },
            // { text: "Multi-Application Management", included: false },
            // { text: "SSO & LDAP Integration", included: false },
        ],
    },
    {
        id: "pro",
        title: "Professional",
        addTitle:"Business License",
        // monthlyPrice: 29,
        // yearlyPrice: 23,
        price: "Business License",
        desc: "Designed for growing organizations requiring centralized identity management across multiple applications.",
        cta: "Request Demo",
        featured: true,
        url: `mailto:${Links.email}`,
        target: '_blank',

        features: [
            { text: "Everything in Starter", included: true },
            { text: "Multi-Application Management", included: true },
            { text: "SSO & LDAP Integration", included: true },
            { text: "Multi-Factor Authentication", included: true },
            { text: "Module, Field & Data-Level Security", included: true },
            { text: "HIPAA-Compliant Architecture", included: true },
            { text: "Priority Support", included: true },
            // { text: "Unlimited Organizations", included: false },
            // { text: "Enterprise Integrations", included: false },
        ],
    },
    {
        id: "enterprise",
        title: "Enterprise",
        addTitle: "Custom Licensing",
        // monthlyPrice: null,
        // yearlyPrice: null,
        price: "Custom Licensing",
        desc: "Tailored implementation for large enterprises with advanced security, integration, and compliance requirements.",
        cta: "Contact Sales",
        featured: false,
        url: `mailto:${Links.email}`,
        target: '_self',

        features: [
            { text: "Everything in Professional", included: true },
            { text: "Unlimited Organizations", included: true },
            { text: "Enterprise Integrations", included: true },
            { text: "Custom Security Policies", included: true },
            { text: "Source-Level Customization", included: true },
            { text: "Dedicated Implementation Team", included: true },
            { text: "Enterprise SLA", included: true },
            { text: "Premium Support", included: true },
        ],
    }
];


function PricingTable() {

    // const [isYearly, setIsYearly] = useState(false);

    // const getPrice = (pricingPlan) => {
    //     if(pricingPlan.monthlyPrice === null) return null;

    //     return isYearly ? pricingPlan.yearlyPrice : pricingPlan.monthlyPrice;
    // };

    return (
        <section className="PricingTableSection sec-top-bottom-spacing" id="pricing">
            <div className="container">
                <div className="headingGroup text-center">
                    <div className="subTitle"><span>Pricing Plans</span></div>
                       
                    <h2 className="title">Flexible Licensing Options for Every <span className="highlightTitle">Organization</span></h2>
                    <p className="contentWrapper">Choose the licensing model that best fits your organization's deployment, scalability, and security requirements.</p>
                </div>

                <div className="PricingWrapper">
                    {/* <div className="toggleWrapper">
                        <div className="btnWrapper">
                            <button
                                className={`btn ${!isYearly ? "toggleActive" : "" }`}
                                onClick={() => setIsYearly(false)}
                            >
                                Monthly
                            </button>

                            <button
                                className={`btn ${isYearly ? "toggleActive" : "" }`}
                                onClick={() => setIsYearly(true)}
                            >
                                Yearly
                            </button>
                        </div>

                        <div className="offerBadge">
                            <span>Save 20% for Yearly Subscription Plan</span>
                        </div>
                        

                    </div> */}

                    <div className="contentWrapper">
                        {pricingPlanData.map((pricingPlan) => {

                            // const price = getPrice(pricingPlan);

                            return (
                                <div
                                    key={pricingPlan.id}
                                    className={`pricingCard ${pricingPlan.featured ? "featured" : ""}`}
                                >
                                    {pricingPlan.featured && (
                                        <span className="badge">Most popular</span>
                                    )}

                                    <div className="headerGroup">

                                        <div className="subtitle">
                                            <span>{pricingPlan.title}</span>
                                        </div>

                                        <div className="title">
                                            <h5>{pricingPlan.addTitle}</h5>
                                        </div> 

                                        <div className="priceDetails">
                                            {/* {price === null ? (
                                                <span className="customPrice">Custom</span>
                                            ) : (
                                                <div className="priceGroup">
                                                    <span className="currency">$</span>
                                                    <span className="priceAmount">{price}</span>
                                                    <span className="priceSuffix">{isYearly ? "/year" : "/month"}</span>
                                                </div>
                                            )} */}
                                        </div>

                                        <div className="description">
                                            <p>{pricingPlan.desc}</p>
                                        </div>
                                    </div>

                                    <div className="divider"></div>

                                    <div className="features">
                                        <ul className="featureLists">
                                            {pricingPlan.features.map((f,i) => (
                                                <li 
                                                    key={i}
                                                    className={`featureList ${!f.included ? "disable" : ""}`}
                                                >
                                                    <span className="listIcon"> <SquareCheckBig /> </span>
                                                    <span className="listText">{f.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="footerGroup">
                                        <Button link={pricingPlan.url} target={pricingPlan.target} text= {pricingPlan.cta} />
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                    
                </div>

                <div className="bottomContent text-center">
                    <ShieldCheck />
                    <p>Flexible Licensing • Project-Based Pricing • Enterprise Deployment • Custom Implementation</p>
                </div>

            </div>

        </section>
    )
}

export default PricingTable;