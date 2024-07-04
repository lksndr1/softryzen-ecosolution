import './faq.css';
import plus from '../../img/add.svg';
import minus from '../../img/minus.svg';
import { useState } from 'react';

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

    return (
        <section className="faq">
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
                        <button className="faq-contact-us-button">
                            <svg width="130" height="39" viewBox="0 0 130 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="130" height="39" rx="19.5" fill="#97D28B"/>
                                <path d="M21.456 13.784C22.1173 13.784 22.672 13.8693 23.12 14.04C23.5787 14.2107 24.0427 14.488 24.512 14.872L23.68 15.848C23.008 15.304 22.2987 15.032 21.552 15.032C20.6347 15.032 19.8933 15.384 19.328 16.088C18.7733 16.792 18.496 17.9227 18.496 19.48C18.496 20.9947 18.7733 22.1147 19.328 22.84C19.8827 23.5547 20.6187 23.912 21.536 23.912C22.0053 23.912 22.416 23.832 22.768 23.672C23.12 23.512 23.4933 23.288 23.888 23L24.64 23.96C24.2987 24.312 23.8613 24.6053 23.328 24.84C22.7947 25.0747 22.1813 25.192 21.488 25.192C20.592 25.192 19.792 24.9733 19.088 24.536C18.3947 24.088 17.8507 23.4373 17.456 22.584C17.072 21.72 16.88 20.6853 16.88 19.48C16.88 18.2747 17.0827 17.2453 17.488 16.392C17.8933 15.528 18.4427 14.8773 19.136 14.44C19.8293 14.0027 20.6027 13.784 21.456 13.784ZM28.6886 16.376C29.8726 16.376 30.79 16.7707 31.4406 17.56C32.102 18.3493 32.4326 19.4213 32.4326 20.776C32.4326 21.6507 32.2833 22.424 31.9846 23.096C31.686 23.7573 31.254 24.2747 30.6886 24.648C30.1233 25.0107 29.4513 25.192 28.6726 25.192C27.4886 25.192 26.566 24.7973 25.9046 24.008C25.2433 23.2187 24.9126 22.1467 24.9126 20.792C24.9126 19.9173 25.062 19.1493 25.3606 18.488C25.6593 17.816 26.0913 17.2987 26.6566 16.936C27.222 16.5627 27.8993 16.376 28.6886 16.376ZM28.6886 17.56C27.2273 17.56 26.4966 18.6373 26.4966 20.792C26.4966 22.936 27.222 24.008 28.6726 24.008C30.1233 24.008 30.8486 22.9307 30.8486 20.776C30.8486 18.632 30.1286 17.56 28.6886 17.56ZM38.1924 16.376C38.9604 16.376 39.5577 16.6053 39.9844 17.064C40.4217 17.5227 40.6404 18.152 40.6404 18.952V25H39.1684V19.16C39.1684 18.5627 39.0564 18.1413 38.8324 17.896C38.6084 17.6507 38.2777 17.528 37.8404 17.528C37.3924 17.528 36.9977 17.656 36.6564 17.912C36.315 18.168 35.995 18.536 35.6964 19.016V25H34.2244V16.568H35.4884L35.6164 17.816C35.915 17.368 36.283 17.016 36.7204 16.76C37.1684 16.504 37.659 16.376 38.1924 16.376ZM47.2154 24.616C46.6607 25 46.0314 25.192 45.3274 25.192C44.6127 25.192 44.0527 24.9893 43.6474 24.584C43.2527 24.168 43.0554 23.5707 43.0554 22.792V17.704H41.5834V16.568H43.0554V14.664L44.5274 14.488V16.568H46.5274L46.3674 17.704H44.5274V22.728C44.5274 23.1653 44.602 23.4853 44.7514 23.688C44.9114 23.88 45.1727 23.976 45.5354 23.976C45.866 23.976 46.2394 23.864 46.6554 23.64L47.2154 24.616ZM53.6713 23.032C53.6713 23.3733 53.7299 23.6293 53.8473 23.8C53.9646 23.96 54.1406 24.0827 54.3753 24.168L54.0393 25.192C53.6019 25.1387 53.2499 25.016 52.9833 24.824C52.7166 24.632 52.5193 24.3333 52.3913 23.928C51.8259 24.7707 50.9886 25.192 49.8793 25.192C49.0473 25.192 48.3913 24.9573 47.9113 24.488C47.4313 24.0187 47.1913 23.4053 47.1913 22.648C47.1913 21.752 47.5113 21.064 48.1513 20.584C48.8019 20.104 49.7193 19.864 50.9033 19.864H52.1993V19.24C52.1993 18.6427 52.0553 18.216 51.7673 17.96C51.4793 17.704 51.0366 17.576 50.4393 17.576C49.8206 17.576 49.0633 17.7253 48.1673 18.024L47.7993 16.952C48.8446 16.568 49.8153 16.376 50.7113 16.376C51.7033 16.376 52.4446 16.6213 52.9353 17.112C53.4259 17.592 53.6713 18.28 53.6713 19.176V23.032ZM50.2153 24.088C51.0579 24.088 51.7193 23.6507 52.1993 22.776V20.84H51.0953C49.5379 20.84 48.7593 21.416 48.7593 22.568C48.7593 23.0693 48.8819 23.448 49.1273 23.704C49.3726 23.96 49.7353 24.088 50.2153 24.088ZM59.1264 16.376C59.6277 16.376 60.0864 16.4507 60.5024 16.6C60.9184 16.7387 61.3184 16.968 61.7024 17.288L60.9984 18.216C60.6997 18.0027 60.4064 17.848 60.1184 17.752C59.841 17.6453 59.5317 17.592 59.1904 17.592C58.5077 17.592 57.9744 17.864 57.5904 18.408C57.217 18.952 57.0304 19.7573 57.0304 20.824C57.0304 21.8907 57.217 22.68 57.5904 23.192C57.9637 23.6933 58.497 23.944 59.1904 23.944C59.521 23.944 59.825 23.896 60.1024 23.8C60.3797 23.6933 60.689 23.528 61.0304 23.304L61.7024 24.264C60.9344 24.8827 60.0757 25.192 59.1264 25.192C57.985 25.192 57.0837 24.808 56.4224 24.04C55.7717 23.272 55.4464 22.2107 55.4464 20.856C55.4464 19.96 55.5957 19.176 55.8944 18.504C56.193 17.832 56.6144 17.3093 57.1584 16.936C57.713 16.5627 58.369 16.376 59.1264 16.376ZM67.311 24.616C66.7563 25 66.127 25.192 65.423 25.192C64.7083 25.192 64.1483 24.9893 63.743 24.584C63.3483 24.168 63.151 23.5707 63.151 22.792V17.704H61.679V16.568H63.151V14.664L64.623 14.488V16.568H66.623L66.463 17.704H64.623V22.728C64.623 23.1653 64.6977 23.4853 64.847 23.688C65.007 23.88 65.2683 23.976 65.631 23.976C65.9617 23.976 66.335 23.864 66.751 23.64L67.311 24.616ZM79.4226 21.464C79.4226 22.2 79.268 22.8507 78.9586 23.416C78.66 23.9707 78.2173 24.408 77.6306 24.728C77.0546 25.0373 76.3613 25.192 75.5506 25.192C74.324 25.192 73.3746 24.856 72.7026 24.184C72.0413 23.5013 71.7106 22.5947 71.7106 21.464V13.976H73.2306V21.352C73.2306 22.2053 73.4226 22.8453 73.8066 23.272C74.1906 23.6987 74.772 23.912 75.5506 23.912C76.34 23.912 76.9266 23.704 77.3106 23.288C77.6946 22.8613 77.8866 22.216 77.8866 21.352V13.976H79.4226V21.464ZM83.9542 16.376C84.5302 16.376 85.0476 16.456 85.5062 16.616C85.9649 16.776 86.4022 17.016 86.8182 17.336L86.1942 18.264C85.8102 18.0187 85.4422 17.8373 85.0902 17.72C84.7489 17.6027 84.3862 17.544 84.0022 17.544C83.5222 17.544 83.1436 17.6453 82.8662 17.848C82.5889 18.04 82.4502 18.3067 82.4502 18.648C82.4502 18.9893 82.5782 19.256 82.8342 19.448C83.1009 19.64 83.5756 19.8267 84.2582 20.008C85.1969 20.2427 85.8956 20.5627 86.3542 20.968C86.8236 21.3733 87.0582 21.928 87.0582 22.632C87.0582 23.464 86.7329 24.0987 86.0822 24.536C85.4422 24.9733 84.6582 25.192 83.7302 25.192C82.4502 25.192 81.3889 24.824 80.5462 24.088L81.3302 23.192C82.0449 23.736 82.8342 24.008 83.6982 24.008C84.2529 24.008 84.6902 23.896 85.0102 23.672C85.3409 23.4373 85.5062 23.1227 85.5062 22.728C85.5062 22.44 85.4476 22.2107 85.3302 22.04C85.2129 21.8587 85.0102 21.704 84.7222 21.576C84.4342 21.4373 84.0129 21.2933 83.4582 21.144C82.5622 20.9093 81.9116 20.5947 81.5062 20.2C81.1116 19.8053 80.9142 19.304 80.9142 18.696C80.9142 18.2587 81.0422 17.864 81.2982 17.512C81.5649 17.1493 81.9276 16.872 82.3862 16.68C82.8556 16.4773 83.3782 16.376 83.9542 16.376Z" fill="#173D33"/>
                                <circle cx="107" cy="19.5" r="7" fill="#173D33"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
