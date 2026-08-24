import "../CSS/ContactBlock.css"

import ContactForm from "./ContactForm";

const ContactProcessData = [
    {
        id: 1,

        title:"Tell us about your environment",

        content: "Share your requirements, users, applications and deployment preferences."
    },

    {
        id: 2,

        title:"Meet an A2ORU specialist",
        
        content: "Our IAM experts will understand your needs and recommend the right approach."
    },

    {
        id: 3,

        title:"See a product demonstration",
        
        content: "Get a personalized walkthrough of A2ORU and see it in action."
    },

    {
        id: 4,

        title:"Discuss deployment & integration",
        
        content: "We'll help you plan integration, deployment and customization for your environment."
    }
]

function ContactBlock() {


    return (


        <section className="sec-top-spacing" id='Contact'>

            <div className="container">

                <div className="headingGroup text-center">

                    <div className="subTitle"><span>Get Started</span></div>
                       
                    <h2 className="title">Let's Talk <span className="highlightTitle">Enterprise</span> Identity</h2>

                </div>

                <div className="contactGridBlock">


                    <div className="">

                        <div className="contactProcess">

                            {
                                ContactProcessData.map((item, index) => (

                                    <div className="processBlock" key={index}>

                                        <span className="counterItem">

                                            {String(index + 1).padStart(2, "0")}

                                        </span>

                                        <div className="processItem">

                                            <h6 className="title">{item.title}</h6>

                                            <p className="content">{item.content}</p>

                                        </div>

                                    </div>
                                ))
                            }

                        </div>

                    </div>


                    <div className="contactFormBlock">

                            <ContactForm />

                    </div>
                    
                </div>            

            </div>

        </section>

    )
}

export default ContactBlock