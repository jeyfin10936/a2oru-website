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
        desc: "Vivamus odio lorem, porttitor non porttitor nec, sodales in dolor. Suspendisse nunc eros, eleifend nec nulla mollis, egestas maximus erat.",
        cta: "Get Started Free",
        featured: false,
        url: Links.demoURL,
        target: '_blank',

        features: [
            { text: "Up to 3 users", included: true },
            { text: "MFA via email & SMS", included: true },
            { text: "2 role levels", included: true },
            { text: "Audit logs", included: false },
            { text: "SSO / SAML 2.0", included: false },
            { text: "Custom role hierarchy", included: false },
            { text: "Priority support", included: false },
        ],
    },
    {
        id: "pro",
        title: "Pro",
        monthlyPrice: 29,
        yearlyPrice: 23,
        desc: "Vivamus odio lorem, porttitor non porttitor nec, sodales in dolor. Suspendisse nunc eros, eleifend nec nulla mollis, egestas maximus erat.",
        cta: "Start free trial",
        featured: true,
        url: Links.demoURL,
        target: '_blank',

        features: [
            { text: "Up to 3 users", included: true },
            { text: "MFA via email & SMS", included: true },
            { text: "2 role levels", included: true },
            { text: "Audit logs", included: true },
            { text: "SSO / SAML 2.0", included: true },
            { text: "Custom role hierarchy", included: false },
            { text: "Priority support", included: false },
        ],
    },
    {
        id: "enterprise",
        title: "Enterprise",
        monthlyPrice: null,
        yearlyPrice: null,
        desc: "Vivamus odio lorem, porttitor non porttitor nec, sodales in dolor. Suspendisse nunc eros, eleifend nec nulla mollis, egestas maximus erat.",
        cta: "Contact sales",
        featured: false,
        url: `mailto:${Links.email}`,
        target: '_self',

        features: [
            { text: "Up to 3 users", included: true },
            { text: "MFA via email & SMS", included: true },
            { text: "2 role levels", included: true },
            { text: "Audit logs", included: true },
            { text: "SSO / SAML 2.0", included: true },
            { text: "Custom role hierarchy", included: true },
            { text: "Priority support", included: true },
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
                    <div className="subTitle"><span>Pricing Plan</span></div>
                    <h2 className="title">Flexible <span className="highlightTitle">pricing</span> for growing teams</h2>
                    <p className="contentWrapper">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci error pariatur accusantium enim obcaecati alias est culpa facere.</p>
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
                    <p>No credit card required · Cancel anytime · SOC 2 certified</p>
                </div>

            </div>

        </section>
    )
}

export default PricingTable;