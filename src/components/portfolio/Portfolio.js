import React from 'react';
import "./portfolio.css";
import myImage from "./IMG_3994.png";
import sqrImage from "./IMG_3956.png";
import ContactMeForm from './ContactMeForm';
import SocialIcons from './SocialIcons';
import {
    FaReact,
    FaHome,
    FaPython,
    FaJava,
    FaGitAlt,
    FaGithub,
    FaJs,
    FaFileExcel,
    FaCss3Alt,
    FaDatabase,
    FaHtml5,
    FaFileDownload,
    FaDollarSign,
    FaNode
} from "react-icons/fa";

export default function Portfolio() {

    return (
        <div className="portfolio-website">
            <nav className="nav-header">
                <div className="title"><a href="#home" className="nav-link-anchor"><FaHome className="home-button"/></a></div>
                <div className="links">
                    <div className="nav-sub-item"><a href="#skills" className="nav-link-anchor">Skills</a></div>
                    <div className="nav-sub-item"><a href="#projects" className="nav-link-anchor">Projects</a></div>
                    <div className="nav-sub-item"><a href="/blog" className="nav-link-anchor">Blog</a></div>
                    <div className="nav-sub-item"><a href="#about-me" className="nav-link-anchor">About Me</a></div>
                    <div className="nav-sub-item"><a href="#about-me" className="nav-link-anchor">Resume</a></div>
                    <div className="nav-sub-item"><a href="#lets-talk" className="talk">Let's Talk</a></div>
                </div>
            </nav>
            <div className="landing section" id="home">
                <div className="landing-item left">
                    <div class="typewriter">
                        <h1 className="pre-name-text">Hi there, I'm Adedokun Agunbiade&nbsp;</h1>
                    </div>
                    <h3 className="sub-title">Fullstack Developer - Products Manager - Financial Analyst</h3>
                    <p className="headline">Highly experienced Financial Analyst, Product Manager and Fullstack Software Developer with a background in Accounting.</p>
                    <a href="#lets-talk">
                        <button className="nav-buttons">
                        Let's Talk
                        </button>
                    </a>
                </div>
                <div className="landing-item right">
                    <div className="image-circle">
                        <img src={sqrImage} alt="Adedokun" />
                    </div>
                </div>
            </div>
            <div className="tech-section trigger section" id="skills">
                <div className="skill-section-name">Skills</div>
                <div className="technologies">
                    <div className="stack frontend">
                        <div className="tech-title">Frontend</div>
                        <div className="tech-items">
                            <div className="technologies-sub-item">
                                <div className="tech-sub-item-title">
                                    <FaHtml5 className="skill-icon"/>
                                    HTML
                                </div>
                                <div className="tech-sub-item-ability">
                                    <div className="html-skill skills"></div>
                                </div>
                            </div>
                            <div className="technologies-sub-item">
                                <div className="tech-sub-item-title">
                                    <FaDollarSign className="skill-icon"/>
                                    Figma/Canva
                                </div>
                                <div className="tech-sub-item-ability">
                                    <div className="html-skill skills"></div>
                                </div>
                            </div>
                            <div className="technologies-sub-item">
                                <div className="tech-sub-item-title"><FaCss3Alt  className="skill-icon"/>CSS</div>
                                <div className="tech-sub-item-ability">
                                    <div className="css-skill skills"></div>
                                </div>
                            </div>
                            <div className="technologies-sub-item">
                                <div className="tech-sub-item-title"><FaJs className="skill-icon"/>Javascript</div>
                                <div className="tech-sub-item-ability">
                                    <div className="javascript-skill skills"></div>
                                </div>

                            </div>
                            <div className="technologies-sub-item">
                                <div className="tech-sub-item-title"><FaReact className="skill-icon" />React</div>
                                <div className="tech-sub-item-ability">
                                    <div className="react-skill skills"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stack backend">
                        <div className="tech-title">Backend</div>
                        <div className="tech-items">
                            <div className="technologies-sub-item">
                                <div className="tech-sub-item-title"><FaPython className="skill-icon" />Python</div>
                                <div className="tech-sub-item-ability">
                                    <div className="python-skill skills"></div>
                                </div>
                            </div>
                            <div className="technologies-sub-item">
                                <div className="tech-sub-item-title"><FaPython className="skill-icon" />Django</div>
                                <div className="tech-sub-item-ability">
                                    <div className="django-skill skills"></div>
                                </div>
                            </div>
                            <div className="technologies-sub-item">
                                <div className="tech-sub-item-title"><FaPython className="skill-icon" />Data Analytics</div>
                                <div className="tech-sub-item-ability">
                                    <div className="django-skill skills"></div>
                                </div>
                            </div>
                            <div className="technologies-sub-item">
                                <div className="tech-sub-item-title"><FaFileExcel className="skill-icon" />Excel</div>
                                <div className="tech-sub-item-ability">
                                    <div className="excel-skill skills"></div>
                                </div>
                            </div>
                            <div className="technologies-sub-item">
                                <div className="tech-sub-item-title"><FaDatabase className="skill-icon" />SQL</div>
                                <div className="tech-sub-item-ability">
                                    <div className="sql-skill skills"></div>
                                </div>
                            </div>
                            <div className="technologies-sub-item">
                                <div className="tech-sub-item-title"><FaNode className="skill-icon" />Node JS</div>
                                <div className="tech-sub-item-ability">
                                    <div className="nodejs-skill skills"></div>
                                </div>
                            </div>
                            <div className="technologies-sub-item">
                                <div className="tech-sub-item-title"><FaJava className="skill-icon" />Java</div>
                                <div className="tech-sub-item-ability">
                                    <div className="java-skill skills"></div>
                                </div>
                            </div>
                            <div className="technologies-sub-item">
                                <div className="tech-sub-item-title"><FaGitAlt className="skill-icon" />Git</div>
                                <div className="tech-sub-item-ability">
                                    <div className="git-skill skills"></div>
                                </div>
                            </div>
                            <div className="technologies-sub-item">
                                <div className="tech-sub-item-title"><FaGithub className="skill-icon" />Github</div>
                                <div className="tech-sub-item-ability">
                                    <div className="github-skill skills"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stack finance">
                        <div className="tech-title">Finance/Products</div>
                        <div className="tech-items">
                            <div className="technologies-sub-item">
                                <div className="tech-sub-item-title"><FaPython className="skill-icon" />Financial Modelling</div>
                                <div className="tech-sub-item-ability">
                                    <div className="python-skill skills"></div>
                                </div>
                            </div>
                            <div className="technologies-sub-item">
                                <div className="tech-sub-item-title"><FaPython className="skill-icon" />Products Management</div>
                                <div className="tech-sub-item-ability">
                                    <div className="django-skill skills"></div>
                                </div>
                            </div>
                            <div className="technologies-sub-item">
                                <div className="tech-sub-item-title"><FaPython className="skill-icon" />Taxation</div>
                                <div className="tech-sub-item-ability">
                                    <div className="django-skill skills"></div>
                                </div>
                            </div>
                            <div className="technologies-sub-item">
                                <div className="tech-sub-item-title"><FaFileExcel className="skill-icon" />Financial Reporting</div>
                                <div className="tech-sub-item-ability">
                                    <div className="excel-skill skills"></div>
                                </div>
                            </div>
                            <div className="technologies-sub-item">
                                <div className="tech-sub-item-title"><FaDatabase className="skill-icon" />Financial Analytics</div>
                                <div className="tech-sub-item-ability">
                                    <div className="sql-skill skills"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects-section section" id="projects">
                <div className="projects-section-name">Projects</div>
                <div className="projects">
                </div>
            </div>
            <div className="about-me-section section" id="about-me">
                <div className="about-section-name">About Me</div>
                <div className="about-me">
                    <div className="about-pix about-left">
                        <div className="image-box">
                            <img src={myImage} alt="Adedokun" />
                        </div>   
                    </div>
                    <div className="details about-right" >
                        <div className="about-headline" id="about-headline">
                            Highly experienced Financial Analyst, Product Manager and Fullstack Software Developer with a background in Accounting. Experience in payments and cloud solutions, building complete products, both backend and frontend and of course managing Financial processes.
                        </div>
                        <div className="about-metrics">
                            <div className="metric">
                                <div className="metrics-name">Experience (Years)</div>
                                <div className="metrics-count">+06</div>
                            </div>
                            <div className="metric">
                                <div className="metrics-name">Projects</div>
                                <div className="metrics-count">+05</div>
                            </div>
                            <div className="metric">
                                <div className="metrics-name">Companies worked</div>
                                <div className="metrics-count">+04</div>
                            </div>
                        </div>
                        <button className="download-resume">Download CV<FaFileDownload className="contact-me-icon" /></button>
                    </div>
                </div>
            </div>
            <div className="contact-me-section section" id="lets-talk">
                <div className="contact-section-name">Let's Talk</div>
                <div className="contact-me">
                    <div className="contact-left">
                        <ContactMeForm />
                    </div>
                    <div className="contact-right" >
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </div>
    )
}
