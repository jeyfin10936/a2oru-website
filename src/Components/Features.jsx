import FeaturesImage from "../Assets/Main-Dashboard.jpg";
import "../CSS/Features.css";


const FeaturesData = [
    {
        id: 1,
        image: FeaturesImage,
        altText: "Feature-Image",
        title: 'Multi-Factor Auth',
        desc: 'Sed in nulla elementum, tincidunt ex nec, iaculis mi. Cras rhoncus vitae odio sed pellentesque. In hac habitasse platea dictumst. Integer egestas risus quis velit feugiat ultricies. Sed accumsan lacus vitae massa efficitur, sed ultrices sem consequat. Maecenas sit amet lacus mollis, fermentum nibh et, sollicitudin risus. Mauris at eleifend lectus, eget dapibus felis. Nullam eget vehicula est.',
    },
    {
        id: 2,
        image: FeaturesImage,
        altText: "Feature-Image",
        title: 'Multi-Factor Auth',
        desc: 'Sed in nulla elementum, tincidunt ex nec, iaculis mi. Cras rhoncus vitae odio sed pellentesque. In hac habitasse platea dictumst. Integer egestas risus quis velit feugiat ultricies. Sed accumsan lacus vitae massa efficitur, sed ultrices sem consequat. Maecenas sit amet lacus mollis, fermentum nibh et, sollicitudin risus. Mauris at eleifend lectus, eget dapibus felis. Nullam eget vehicula est.',
    },
    {
        id: 3,
        image: FeaturesImage,
        altText: "Feature-Image",
        title: 'Multi-Factor Auth',
        desc: 'Sed in nulla elementum, tincidunt ex nec, iaculis mi. Cras rhoncus vitae odio sed pellentesque. In hac habitasse platea dictumst. Integer egestas risus quis velit feugiat ultricies. Sed accumsan lacus vitae massa efficitur, sed ultrices sem consequat. Maecenas sit amet lacus mollis, fermentum nibh et, sollicitudin risus. Mauris at eleifend lectus, eget dapibus felis. Nullam eget vehicula est.',
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