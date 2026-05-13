import { ShieldCheck } from 'lucide-react';
import "../CSS/WhyChoose.css";

const WhyChooseData = [
    {
        id: 1,
        icon: ShieldCheck,
        title: "Bank-grade Security",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci error pariatur accusantium enim obcaecati alias est culpa facere.",
    },
    {
        id: 2,
        icon: ShieldCheck,
        title: "Bank-grade Security",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci error pariatur accusantium enim obcaecati alias est culpa facere.",
    },
    {
        id: 3,
        icon: ShieldCheck,
        title: "Bank-grade Security",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci error pariatur accusantium enim obcaecati alias est culpa facere.",
    },
    {
        id: 4,
        icon: ShieldCheck,
        title: "Bank-grade Security",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci error pariatur accusantium enim obcaecati alias est culpa facere.",
    }
]

function WhyChoose () {
    return (
        <section className="WhyChooseBlock sec-top-bottom-spacing" id='ChooseUS'>
            <div className="container">
                    <div className="headingGroup text-center">
                        <div className="subTitle"><span>Why Choose Us</span></div>
                        <h2 className="title">Built for teams that value <span className="highlightTitle">security</span> and speed</h2>
                        <p className="contentWrapper">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci error pariatur accusantium enim obcaecati alias est culpa facere.</p>
                    </div>

                    <div className="whyChooseWrapper">
                        {WhyChooseData.map((item) => {
                            return (
                                <div className="item" key={item.id}>
                                    <span className="iconGroup">
                                    <item.icon className="icon" />
                                    </span>
                                    <h6 className="title">{item.title}</h6>
                                    <p className="description">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
            </div>
        </section>
    )
}

export default WhyChoose;