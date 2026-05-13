import FeaturesImage from "../Assets/Main-Dashboard.jpg";
import "../CSS/Features.css";

const DecorCurve = () => (
    <svg width="173" height="150" viewBox="0 0 173 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0C1.5 43.8579 37.0539 79.4118 80.9118 79.4118H100.912C139.897 79.4118 171.5 111.015 171.5 150" stroke="currentColor" stroke-width="3"/>
    </svg>
);

const FeaturesData = [
    {
        id: 1,
        image: FeaturesImage,
        altText: "Feature-Image",
        title: 'Multi-Factor Auth',
        desc: 'Sed in nulla elementum, tincidunt ex nec, iaculis mi. Cras rhoncus vitae odio sed pellentesque. In hac habitasse platea dictumst. Integer egestas risus quis velit feugiat ultricies. Sed accumsan lacus vitae massa efficitur, sed ultrices sem consequat. Maecenas sit amet lacus mollis, fermentum nibh et, sollicitudin risus. Mauris at eleifend lectus, eget dapibus felis. Nullam eget vehicula est.',
        decorIcon: <DecorCurve/>,
    },
    {
        id: 2,
        image: FeaturesImage,
        altText: "Feature-Image",
        title: 'Multi-Factor Auth',
        desc: 'Sed in nulla elementum, tincidunt ex nec, iaculis mi. Cras rhoncus vitae odio sed pellentesque. In hac habitasse platea dictumst. Integer egestas risus quis velit feugiat ultricies. Sed accumsan lacus vitae massa efficitur, sed ultrices sem consequat. Maecenas sit amet lacus mollis, fermentum nibh et, sollicitudin risus. Mauris at eleifend lectus, eget dapibus felis. Nullam eget vehicula est.',
        decorIcon: <DecorCurve/>,
    },
    {
        id: 3,
        image: FeaturesImage,
        altText: "Feature-Image",
        title: 'Multi-Factor Auth',
        desc: 'Sed in nulla elementum, tincidunt ex nec, iaculis mi. Cras rhoncus vitae odio sed pellentesque. In hac habitasse platea dictumst. Integer egestas risus quis velit feugiat ultricies. Sed accumsan lacus vitae massa efficitur, sed ultrices sem consequat. Maecenas sit amet lacus mollis, fermentum nibh et, sollicitudin risus. Mauris at eleifend lectus, eget dapibus felis. Nullam eget vehicula est.',
        decorIcon: <DecorCurve/>,
    },
    {
        id: 4,
        image: FeaturesImage,
        altText: "Feature-Image",
        title: 'Multi-Factor Auth',
        desc: 'Sed in nulla elementum, tincidunt ex nec, iaculis mi. Cras rhoncus vitae odio sed pellentesque. In hac habitasse platea dictumst. Integer egestas risus quis velit feugiat ultricies. Sed accumsan lacus vitae massa efficitur, sed ultrices sem consequat. Maecenas sit amet lacus mollis, fermentum nibh et, sollicitudin risus. Mauris at eleifend lectus, eget dapibus felis. Nullam eget vehicula est.',
    },
];


function Features() {
    return (
        <section className="FeaturesBlock sec-top-bottom-spacing section-alter-bg" id="Features">
            <div className="container">
                <div className="headingGroup text-center">
                    <div className="subTitle"><span>Powerful Features</span></div>
                    <h2 className="title">Everything you need for <span className="highlightTitle">authentication</span></h2>
                    <p className="contentWrapper">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci error pariatur accusantium enim obcaecati alias est culpa facere.</p>
                </div>

                <div className="FeaturesWrapper">
                    {FeaturesData.map((item,index) => (
                        <div className="FeatureItem" key={index}>
                            <div className="MediaBlock">
                                <img src={item.image} alt={item.altText}/>
                            </div>
                            <div className="ContentGroup">
                                <h3 className="itemTitle">{item.title}</h3>
                                <p className="itemDesc">{item.desc}</p>
                            </div>
                            {item.decorIcon}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;