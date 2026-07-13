import React from 'react';
import {useState} from 'react';
import { SquareCheckBig, ShieldCheck } from 'lucide-react';
import "../CSS/pricingTable.css";
import Button from "../Components/Common/Button";
import Links from "../Components/Common/Link";


const pricingPlanData = [
    {
        title: "Cloud Deployment",
        desc: "Best for organizations looking for a fully managed cloud environment with secure authentication and centralized administration.",
        cta: "View Demo",
        url: Links.demoURL,
        target: '_blank',

        features: [
            { text: "Fully Managed Infrastructure" },
            { text: "Automatic Updates" },
            { text: "Secure Authentication & Authorization" },
            { text: "Multi-Factor Authentication (MFA)" },
            { text: "Role-Based Access Control" },
            { text: "Organization & User Management" },
            { text: "Scalable Cloud Environment" },
            { text: "Standard Support" },
        ],
    },
    {
        title: "On-Premise Deployment",
        desc: "Designed for organizations that require complete control over infrastructure, security, and regulatory compliance.",
        cta: "Request Demo",
        url: `mailto:${Links.email}`,
        target: '_self',
        featured: true,

        features: [
            { text: "Everything in Cloud Deployment" },
            { text: "Deploy Within Your Infrastructure" },
            { text: "Data Residency & Compliance" },
            { text: "Advanced Security Policies" },
            { text: "SSO & Enterprise Integrations" },
            { text: "Security Policy Configuration" },
            { text: "Custom Authentication Workflows" },
            { text: "Priority Technical Support" },
        ],
    },
    {
        title: "Enterprise Deployment",
        desc: "Built for large enterprises with unique authentication, authorization, and identity management requirements.",
        cta: "Contact Sales",
        url: `mailto:${Links.email}`,
        target: '_self',

        features: [
            { text: "Everything in On-Premise" },
            { text: "Custom Integrations" },
            { text: "Dedicated Implementation Team" },
            { text: "Multi-Organization Management" },
            { text: "Enterprise SLA" },
            { text: "Custom Security Configuration" },
            { text: "Dedicated Account Manager" },
            { text: "Premium Support" },
        ],
    }
];


function DeploymentOptions() {

    return (
        <section className="PricingTableSection sec-top-bottom-spacing" id="pricing">
            <div className="container">
                <div className="headingGroup text-center">
                    <div className="subTitle"><span>Deployment Options</span></div>
                        
                    <h2 className="title">Flexible Deployment <span className="highlightTitle">Options</span> for Every Organization</h2>
                    <p className="contentWrapper">Deploy A2ORU the way your organization needs. Whether you prefer a fully managed cloud solution, an on-premise deployment, or a customized enterprise implementation, A2ORU provides secure and scalable identity management for every environment.</p>
                </div>

                <div className="PricingWrapper deploymentOptions">

                    <div className="contentWrapper">
                        {
                        pricingPlanData.map((pricingPlan) => {

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

                                        <div className="description">
                                            <p>{pricingPlan.desc}</p>
                                        </div>
                                    </div>

                                    <div className="divider"></div>

                                    <div className="features">

                                        <h6>Features</h6>

                                        <ul className="featureLists">
                                            {pricingPlan.features.map((f,i) => (
                                                <li 
                                                    key={i}
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
                    <p>Flexible Deployment • Enterprise-Grade Security • Scalable Identity Management</p>
                </div>

            </div>

        </section>
    )
}

export default DeploymentOptions;