import './about.css';
import solar from '../../img/man-worker-firld-by-solar-panels1.png';
import wind from '../../img/wind-farms-fields1.png'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="info-wrapper">
                    <h2 className="about-heading">Main values of our company</h2>
                    <div className="about-line"></div>
                    <p className="about-info">EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs.</p>
                </div>
                <div className="values-wrapper">
                    <div className="openness value">
                        <div className="value-heading">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3333 2H13.9999V4.66667" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10 6L14 2" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.66667 14H2V11.3334" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6 10L2 14" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.3466 1.46672C8.91327 1.38005 8.45992 1.33337 7.99992 1.33337C4.31992 1.33337 1.33325 4.32004 1.33325 8.00004C1.33325 8.46004 1.37993 8.90671 1.46659 9.33337" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.65332 14.5333C7.08665 14.62 7.54 14.6666 8 14.6666C11.68 14.6666 14.6667 11.68 14.6667 7.99996C14.6667 7.54663 14.62 7.09996 14.5333 6.66663" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h3>Openness</h3>
                        </div>
                        <div className="value-line"></div>
                        <p>to the world, people, new ideas and projects</p>
                    </div>
                    <div className="responsibility value">
                        <div className="value-heading">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6666 8.00004C14.6666 4.32004 11.6799 1.33337 7.99992 1.33337C4.31992 1.33337 1.33325 4.32004 1.33325 8.00004C1.33325 11.68 4.31992 14.6667 7.99992 14.6667" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.33324 2H5.9999C4.6999 5.89333 4.6999 10.1067 5.9999 14H5.33324" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10 2C10.6467 3.94667 10.9733 5.97333 10.9733 8" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2 10.6667V10C3.94667 10.6467 5.97333 10.9733 8 10.9733" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2 5.99978C5.89333 4.69978 10.1067 4.69978 14 5.99978" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.8068 10.4933L10.4468 12.8534C10.3534 12.9467 10.2668 13.12 10.2468 13.2467L10.1201 14.1467C10.0734 14.4733 10.3001 14.7 10.6268 14.6533L11.5268 14.5267C11.6534 14.5067 11.8334 14.42 11.9201 14.3267L14.2801 11.9667C14.6868 11.56 14.8801 11.0867 14.2801 10.4867C13.6868 9.89334 13.2134 10.0867 12.8068 10.4933Z" stroke="#173D33" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.4668 10.8334C12.6668 11.5534 13.2268 12.1134 13.9468 12.3134" stroke="#173D33" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h3>Responsibility</h3>
                        </div>
                        <div className="value-line"></div>
                        <p>we are aware that the results of our work have an impact on our lives and the lives of future generations</p>
                    </div>
                    <div className="solar-photo grid-photo">
                        <img src={solar} />
                    </div>
                    <div className="wind-photo grid-photo">
                        <img src={wind} />
                    </div>
                    <div className="innovation value">
                        <div className="value-heading">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.40008 13.3333H9.60008C12.2667 13.3333 13.3334 12.2666 13.3334 9.59996V6.39996C13.3334 3.73329 12.2667 2.66663 9.60008 2.66663H6.40008C3.73341 2.66663 2.66675 3.73329 2.66675 6.39996V9.59996C2.66675 12.2666 3.73341 13.3333 6.40008 13.3333Z" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.00008 11.3333H9.00008C10.6667 11.3333 11.3334 10.6666 11.3334 8.99996V6.99996C11.3334 5.33329 10.6667 4.66663 9.00008 4.66663H7.00008C5.33341 4.66663 4.66675 5.33329 4.66675 6.99996V8.99996C4.66675 10.6666 5.33341 11.3333 7.00008 11.3333Z" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.34009 2.66671V1.33337" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8 2.66671V1.33337" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.6667 2.66671V1.33337" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.3333 5.33337H14.6666" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.3333 8H14.6666" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.3333 10.6666H14.6666" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.6667 13.3334V14.6667" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.00659 13.3334V14.6667" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.34009 13.3334V14.6667" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1.33325 5.33337H2.66659" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1.33325 8H2.66659" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1.33325 10.6666H2.66659" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.9999 6.46667L7.37323 7.56001C7.23323 7.80001 7.34656 8.00001 7.62656 8.00001H8.37323C8.65323 8.00001 8.76656 8.20001 8.62656 8.44001L7.9999 9.53334" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h3>Innovation</h3>
                        </div>
                        <div className="value-line"></div>
                        <p>we use the latest technology to implement non-standard solutions</p>
                    </div>
                    <div className="quality value">
                        <div className="value-heading">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.77992 9.33337H2.66659C1.93325 9.33337 1.33325 9.93337 1.33325 10.6667V14.6667H5.77992V9.33337Z" stroke="#173D33" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.88677 6.66663H7.10677C6.37344 6.66663 5.77344 7.26663 5.77344 7.99996V14.6666H10.2201V7.99996C10.2201 7.26663 9.62677 6.66663 8.88677 6.66663Z" stroke="#173D33" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.3333 11.3334H10.22V14.6667H14.6666V12.6667C14.6666 11.9334 14.0666 11.3334 13.3333 11.3334Z" stroke="#173D33" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.34658 1.38L8.69991 2.08667C8.74658 2.18667 8.87324 2.28 8.97991 2.29333L9.61991 2.4C10.0266 2.46667 10.1266 2.76666 9.83324 3.05332L9.33324 3.55332C9.24658 3.63999 9.19991 3.8 9.22658 3.91333L9.36658 4.52667C9.47991 5.01334 9.21991 5.20001 8.79324 4.94668L8.19324 4.59334C8.08658 4.52668 7.90658 4.52668 7.79991 4.59334L7.19991 4.94668C6.77324 5.20001 6.51324 5.01334 6.62657 4.52667L6.76658 3.91333C6.79324 3.8 6.74658 3.63332 6.65991 3.55332L6.16658 3.06C5.87324 2.76666 5.96658 2.47332 6.37991 2.40666L7.01991 2.30001C7.12657 2.28001 7.25324 2.18668 7.29991 2.09334L7.65324 1.38666C7.84658 0.99999 8.15324 1 8.34658 1.38Z" stroke="#173D33" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h3>Quality</h3>
                        </div>
                        <div className="value-line"></div>
                        <p>we do not strive to be the first among others, but we want to be the best in our business</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default About;