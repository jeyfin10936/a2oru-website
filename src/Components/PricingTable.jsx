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
        monthlyPrice: 0,
        yearlyPrice: 0,
        desc: "Perfect for individuals and small teams looking to implement secure authentication with essential identity management features.",
        cta: "Get Started Free",
        featured: false,
        url: Links.demoURL,
        target: '_blank',

        features: [
            { text: "Up to 25 Users", included: true },
            { text: "Username, Email & Mobile Login", included: true },
            { text: "Password Recovery", included: true },
            { text: "Basic Role-Based Access Control", included: true },
            { text: "Organization Management", included: true },
            { text: "Community Support", included: true },
            { text: "SSO Integration", included: false },
            { text: "Advanced Security Policies", included: false },
        ],
    },
    {
        id: "pro",
        title: "Professional",
        monthlyPrice: 29,
        yearlyPrice: 23,
        desc: "Designed for growing businesses that require centralized administration, advanced authentication, and stronger security controls.",
        cta: "Start Free Trial",
        featured: true,
        url: Links.demoURL,
        target: '_blank',

        features: [
            { text: "Unlimited Users", included: true },
            { text: "Multi-Factor Authentication (MFA)", included: true },
            { text: "Google & Okta Login", included: true },
            { text: "Role-Based Access Control", included: true },
            { text: "Organization & Application Management", included: true },
            { text: "Group & Department Management", included: true },
            { text: "Security Policy Configuration", included: true },
            { text: "Priority Email Support", included: true },
        ],
    },
    {
        id: "enterprise",
        title: "Enterprise",
        monthlyPrice: null,
        yearlyPrice: null,
        desc: "Tailored for large enterprises requiring advanced identity management, compliance, custom integrations, and dedicated implementation support.",
        cta: "Contact Sales",
        featured: false,
        url: `mailto:${Links.email}`,
        target: '_self',

        features: [
            { text: "Everything in Professional", included: true },
            { text: "Single Sign-On (SSO)", included: true },
            { text: "Advanced Security Policies", included: true },
            { text: "Custom Integrations", included: true },
            { text: "Dedicated Account Manager", included: true },
            { text: "Audit & Compliance Support", included: true },
            { text: "Enterprise SLA", included: true },
            { text: "Premium Support", included: true },
        ],
    }
];


function PricingTable() {

    const [isYearly, setIsYearly] = useState(false);

    const getPrice = (pricingPlan) => {
        if(pricingPlan.monthlyPrice === null) return null;

        return isYearly ? pricingPlan.yearlyPrice : pricingPlan.monthlyPrice;
    };

    return (
        <section className="PricingTableSection sec-top-bottom-spacing" id="pricing">
            <div className="container">
                <div className="headingGroup text-center">
                    <div className="subTitle"><span>Pricing Plans</span></div>
                      
                    <h2 className="title">Flexible Plans for <span className="highlightTitle">Organizations</span> of Every Size</h2>
                    <p className="contentWrapper">Choose the plan that best fits your organization's authentication, authorization, and identity management needs. Upgrade anytime as your business grows.</p>
                </div>

                <div className="PricingWrapper">
                    <div className="toggleWrapper">
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
                        

                    </div>

                    <div className="contentWrapper">
                        {pricingPlanData.map((pricingPlan) => {

                            const price = getPrice(pricingPlan);

                            return (
                                <div
                                    key={pricingPlan.id}
                                    className={`pricingCard ${pricingPlan.featured ? "featured" : ""}`}
                                >
                                    {pricingPlan.featured && (
                                        <span className="badge">Most popular</span>
                                    )}

                                    <div className="headerGroup">
                                        <div className="title">
                                            <h5>{pricingPlan.title}</h5>
                                        </div>
                                        <div className="priceDetails">
                                            {price === null ? (
                                                <span className="customPrice">Custom</span>
                                            ) : (
                                                <div className="priceGroup">
                                                    <span className="currency">$</span>
                                                    <span className="priceAmount">{price}</span>
                                                    {/* <span className="priceSuffix">/month</span> */}
                                                    <span className="priceSuffix">{isYearly ? "/year" : "/month"}</span>
                                                </div>
                                            )}
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
                    <p>No credit card required • Flexible deployment options • Enterprise-grade security</p>
                </div>

            </div>

        </section>
    )
}

export default PricingTable;