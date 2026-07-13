import FeaturesImage from "../Assets/Main-Dashboard.jpg";
import "../CSS/Features.css";


const FeaturesData = [
    {
        id: 1,
        image: FeaturesImage,
        altText: "Feature-Image",
        title: 'Flexible Authentication',
        desc: 'Support secure sign-in using Username, Email, Mobile Number, Google Login, or Okta integration. Built-in password recovery and security questions simplify user authentication while maintaining security.',
    },
    {
        id: 2,
        image: FeaturesImage,
        altText: "Feature-Image",
        title: 'Organization Management',
        desc: 'Create, update, search, and manage organizations through a centralized interface with secure eSign confirmation for authorized administrative changes.',
    },
    {
        id: 3,
        image: FeaturesImage,
        altText: "Feature-Image",
        title: 'Application & Access Management',
        desc: 'Manage enterprise applications with complete visibility. Add, edit, delete, search, and control application access while maintaining secure authorization workflows.',
    },
    {
        id: 4,
        image: FeaturesImage,
        altText: "Feature-Image",
        title: 'User, Group & Department Control',
        desc: 'Organize users into departments and groups with role-based permissions. Track changes, maintain accountability, and simplify enterprise access management.',
    },
];


function Features() {
    return (
        <section className="FeaturesBlock sec-top-bottom-spacing section-alter-bg" id="Features">
            <div className="container">
                <div className="headingGroup text-center">
                    <div className="subTitle"><span>Key Capabilities</span></div>
                      
                    <h2 className="title">Everything You Need for <span className="highlightTitle">Enterprise </span>Identity Management</h2>
                    <p className="contentWrapper">Manage authentication, authorization, organizations, users, and applications from one secure platform designed for enterprise environments.</p>
                </div>

                <div className="FeaturesWrapper">
                    {FeaturesData.map((item,index) => (
                        <div className="FeatureItem" key={index}>
                            <div className="MediaBlock">
                                <div className="imgGroup">
                                    <img src={item.image} alt={item.altText}/>
                                </div>
                            </div>
                            <div className="ContentGroup">
                                <h3 className="itemTitle">{item.title}</h3>
                                <p className="itemDesc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;