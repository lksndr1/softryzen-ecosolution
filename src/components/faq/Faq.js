import './faq.css';
import plus from '../../img/add.svg';
import minus from '../../img/minus.svg';
import { useState } from 'react';
import { ReactComponent as ContactIcon } from '../../img/contact-us-icon.svg';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqData = [
        {
            question: "How do wind turbines and solar panels work together in a renewable energy system?",
            answer: "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."
        },
        {
            question: "What sets EcoSolution's renewable energy solutions apart from others on the market?",
            answer: "Our renewable energy solutions stand out through a comprehensive approach covering solar, wind, and cutting-edge technologies. We prioritize customization to meet specific needs, uphold environmental stewardship, boast a seasoned team with a proven track record, and maintain a client-centric focus. Choosing EcoSolution means opting for innovative, tailored, and environmentally conscious energy solutions."
        },
        {
            question: "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
            answer: "Businesses and communities gain sustainable advantages by integrating EcoSolution's renewable energy solutions. Our tailored approach ensures cost-effective, eco-friendly energy solutions, fostering environmental responsibility, reducing long-term operational costs, and promoting energy independence for a resilient future."
        },
        {
            question: "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
            answer: "EcoSolution prioritizes environmental sustainability by employing eco-friendly materials in product manufacturing, minimizing carbon footprint in production processes, and ensuring energy-efficient designs. We are committed to responsible sourcing, recycling initiatives, and continuous improvement in green practices to mitigate environmental impact."
        },
        {
            question: "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
            answer: "EcoSolution fosters community engagement by collaborating with local stakeholders, providing education on renewable energy benefits, and offering job opportunities. Our commitment to a just transition involves prioritizing social equity, supporting local economies, and ensuring that the shift to renewable energy is inclusive and beneficial for all."
        }
    ];

    // Scroll to Contact Us section
    const scrollToContactUs = (e) => {
        e.preventDefault();
        const casesSection = document.getElementById('contact-us');
        if (casesSection) {
            casesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="faq" className="faq">
            <div className="container">
                <div className="faq-grid-container">
                    <h2 className="faq-heading">Frequently Asked Questions</h2>
                    <div className="answer-question-container">
                        {faqData.map((faq, index) => (
                            <div className={`aq-block ${index}`} key={index}>
                                <div className='question-block' onClick={() => toggleAnswer(index)}>
                                    <div className='plus-minus'>
                                        <img src={openIndex === index ? minus : plus} alt={openIndex === index ? 'minus' : 'plus'} />
                                    </div>
                                    <div className='question-text'>
                                        <p>{faq.question}</p>
                                    </div>
                                </div>
                                {openIndex === index && (
                                    <div className='answer-block'>
                                        <div className='plus-minus invisible'>
                                            <img src={minus} alt='minus' />
                                            <img src={plus} alt='plus' />
                                        </div>
                                        <div className='answer-text'>
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="faq-contact-us">
                        <p>Didn't find the answer to your question?</p>
                        <button className="faq-contact-us-button" onClick={scrollToContactUs}>
                            <ContactIcon className="contact-us-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
