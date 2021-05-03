import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { jsPDF } from "jspdf";
export default class Home extends Component {
    constructor(props){
        super(props);
        this.resumeRef = React.createRef();
    }
    DownloadResume(){
        var doc = new jsPDF("landscape","pt","a4");
        doc.html(document.querySelector("#toPdf"),{
            callback:function(pdf){
                pdf.save("Hello.pdf");
            }
        });
     
    }
    componentDidMount(){
        console.log("The html is"+this.resumeRef.current);
    }
    render() {
        return (
            <div>
             <div style={{textAlign:'center',marginTop:20}}>
             <button className="btn btn-success" onClick={()=>{this.DownloadResume()}}>Download Resume</button>
             </div>
                <div className="wrapper" id="toPdf">
                    <div className="sidebar-wrapper">
                        <div className="profile-container">
                            <img className="profile" src="https://naeem-abbas.github.io/naeem-abbas-resume/assets/images/profile.png" alt="" style={{ width: 150, height: 170,borderRadius:'50%' }} />
                            <h1 className="name">Naeem Abbas</h1>
                            <h3 className="tagline">Full Stack JavaScript Developer</h3>
                        </div>

                        <div className="contact-container container-block">
                            <ul className="list-unstyled contact-list">
                                <li className="email"><i className="fas fa-envelope"></i><Link to="/">naeemabbas7247@gmail.com</Link></li>
                                <li className="phone"><i className="fas fa-phone"></i><a href="tel:0123 456 789">(92) 348-3460275</a></li>
                                {/* <li className="website"><Link onClick={() => { window.open('https://naeemabbas7247.github.io/online_resume/') }}>https://naeemabbas7247.github.io/online_resume/</Link></li> */}
                                <li className="linkedin"><i className="fab fa-linkedin-in"></i><Link onClick={() => { window.open('https://www.linkedin.com/in/naeem-abbas') }}>linkedin.com/in/naeem-abbas</Link></li>
                                <li className="github"><i className="fab fa-github"></i><Link onClick={() => { window.open("https://www.github.com/naeem-abbas") }}>github.com/naeem-abbas</Link></li>
                                {/* <li className="twitter"><i className="fab fa-twitter"></i><a href="https://twitter.com/3rdwave_themes" target="_blank">@twittername</a></li> */}
                            </ul>
                        </div>
                        <div className="education-container container-block">
                            <h2 className="container-block-title">Education</h2>
                            <div className="item">
                                <h4 className="degree">BS Computer Science</h4>
                                <h5 className="meta">Institute of Southern Punjab Multan</h5>
                                <div className="time">2016 - 2020</div>
                                <div className="time">Scored : 3.65 out of 4.0</div>
                            </div>
                            <div className="item">
                                <h4 className="degree">ICS</h4>
                                <h5 className="meta">BISE DG Khan</h5>
                                <div className="time">2013 - 2015</div>
                                <div className="time">Scored : 68.85%</div>
                            </div>
                            <div className="item">
                                <h4 className="degree">Matric</h4>
                                <h5 className="meta">BISE DG Khan</h5>
                                <div className="time">2011 - 2013</div>
                                <div className="time">Scored : 76.76%</div>
                            </div>
                        </div>

                        {/* <div className="languages-container container-block">
                            <h2 className="container-block-title">Languages</h2>
                            <ul className="list-unstyled interests-list">
                                <li>English <span className="lang-desc">(Native)</span></li>
                                <li>French <span className="lang-desc">(Professional)</span></li>
                                <li>Spanish <span className="lang-desc">(Professional)</span></li>
                            </ul>
                        </div> */}

                        {/* <div className="interests-container container-block">
                            <h2 className="container-block-title">Skills</h2>
                            <ul className="list-unstyled interests-list">
                                <li>MySQL / MongoDb</li>
                                <li>Express.js</li>
                                <li>React.js</li>
                            </ul>
                        </div> */}

                    </div>

                    <div className="main-wrapper">

                        <section className="section summary-section">
                            <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Summary</h2>
                            <div className="summary">
                                <p>
                                    Seeking a position of Software Engineer in a reputable organization to utilize my
                                    skills for the growth of the organization as well as to enhance my knowledge
                                    about new and emerging trends in the software development industry.
                                </p>
                            </div>
                        </section>
                        {/* <section className="section experiences-section">
                            <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experiences</h2>

                            <div className="item">
                                <div className="meta">
                                    <div className="upper-row">
                                        <h3 className="job-title">Lead Developer</h3>
                                        <div className="time">2019 - Present</div>
                                    </div>
                                    <div className="company">Startup Hubs, San Francisco</div>
                                </div>
                                <div className="details">
                                    <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="meta">
                                    <div className="upper-row">
                                        <h3 className="job-title">Senior Software Engineer</h3>
                                        <div className="time">2018 - 2019</div>
                                    </div>
                                    <div className="company">Google, London</div>
                                </div>
                                <div className="details">
                                    <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>

                                </div>
                            </div>

                            <div className="item">
                                <div className="meta">
                                    <div className="upper-row">
                                        <h3 className="job-title">UI Developer</h3>
                                        <div className="time">2016 - 2018</div>
                                    </div>
                                    <div className="company">Amazon, London</div>
                                </div>
                                <div className="details">
                                    <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                                </div>
                            </div>

                        </section> */}

                        <section className="section projects-section">
                            <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>Projects</h2>
                            {/* <div className="intro">
                                <p>Here is my awesome projects that is developed by me </p>
                            </div> */}
                            <div className="item">
                                <span className="project-title">Transport Management System</span> - <span className="project-tagline">
                                    The project was developed as a
                                    web application of ISP Transport management system for Client using
                                    PHP (Client Project).
                                </span>

                            </div>
                            <div className="item">
                                <span className="project-title">
                                    Timetable Management System
                                    </span> - <span className="project-tagline">
                                    The
                                    project was developed as a web application of Timetable management
                                    system for ISP using ASP.NET MVC (Final Year Project).

                                    </span>
                            </div>

                            <div className="item">
                                <span className="project-title">
                                    Inventory Management System
                                </span> -
                                <span className="project-tagline">
                                    The project was developed as a
                                    desktop application of Inventory management system for ISP using C#
                                (Seventh Semester).</span>
                            </div>

                            <div className="item">
                                <span className="project-title">
                                    E-commerce
                            </span> - <span className="project-tagline">
                                    e The project was developed as a web application of
                                    E-commerce for ISP using PHP (Sixth Semester).
                               </span>
                            </div>
                            <div className="item">
                                <span className="project-title">Fee Report Management System </span> -
                            <span className="project-tagline">
                                    The project was developed as a
                                    desktop application of Fee report management system for ISP using Java
                                    (Fifth Semester).

                            </span>
                            </div>
                        </section>

                        <section className="skills-section section">
                            <h2 className="section-title">
                                <span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills</h2>
                            <div className="skillset">
                                <div className="item">
                                    <ul className="skillslist">
                                        <li>
                                          MySQL  / MongoDB
                                        </li>
                                        <li>
                                            Express.js
                                        </li>
                                        <li>
                                            Angular 9+
                                        </li>
                                        <li>
                                            React.js
                                        </li>
                                        <li>
                                           React Native
                                        </li>
                                        <li>
                                            Node.js
                                        </li>
                                        <li>
                                            ASP.NET MVC (C#)
                                        </li>
                                        <li>
                                            ASP.NET WEB API
                                        </li>
                                        <li>
                                            C#
                                        </li>
                                        <li>
                                            HTML
                                        </li>
                                        <li>
                                            CSS
                                        </li>
                                        <li>
                                            Bootstrap
                                        </li>
                                        <li>
                                            JavaScript
                                        </li>
                                        <li>
                                            jQuery
                                        </li>
                                        <li>
                                           AJAX
                                        </li>
                                        <li>
                                            PHP
                                        </li>
                                        <li>
                                            Java (Swing, JavaFX)
                                        </li>
                                    </ul>
                                    {/* <div className="progress level-bar">
                                        <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '98%' }}></div>
                                    </div> */}
                                </div>

                                {/* <div className="item">
                                    <h3 className="level-title">Javascript &amp; jQuery</h3>
                                    <div className="progress level-bar">
                                        <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '98%' }}></div>
                                    </div>
                                </div>

                                <div className="item">
                                    <h3 className="level-title">Angular</h3>
                                    <div className="progress level-bar">
                                        <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '95%' }}></div>
                                    </div>
                                </div>

                                <div className="item">
                                    <h3 className="level-title">HTML5 &amp; CSS</h3>
                                    <div className="progress level-bar">
                                        <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '98%' }}></div>
                                    </div>
                                </div>

                                <div className="item">
                                    <h3 className="level-title">Ruby on Rails</h3>
                                    <div className="progress level-bar">
                                        <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '85%' }}></div>
                                    </div>
                                </div>

                                <div className="item">
                                    <h3 className="level-title">Sketch &amp; Photoshop</h3>
                                    <div className="progress level-bar">
                                        <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '66%' }}></div>
                                    </div>
                                </div> */}

                            </div>
                        </section>


                        <section className="skills-section section">
                            <h2 className="section-title">
                                <span className="icon-holder"><i className="fas fa-tools"></i></span>Tools</h2>
                            <div className="skillset">
                                <div className="item">
                                    <ul className="skillslist">
                                        <li>
                                        Microsoft Visual Studio 2019

                                        </li>
                                        <li>
                                        MS SQL Server 2019
                                        </li>
                                        <li>
                                        Visual Studio Code
                                        </li>
                                        
                                        <li>
                                        Robo 3T
                                        </li>
                                        <li>
                                        Android Studio
                                        </li>
                                        <li>
                                        GitHub
                                        </li>
                                        <li>
                                         Bitbucket
                                        </li>
                                        <li>
                                        Heroku
                                        </li>
                                        <li>
                                        Adobe Dreamweaver
                                        </li>
                                        <li>
                                        XAMPP
                                        </li>
                                        <li>
                                        NET Beans 8.2
                                        </li>
                                        <li>
                                        Scene Builder
                                        </li>
                                      
                                        
                                    </ul>
                                    {/* <div className="progress level-bar">
                                        <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '98%' }}></div>
                                    </div> */}
                                </div>

                                {/* <div className="item">
                                    <h3 className="level-title">Javascript &amp; jQuery</h3>
                                    <div className="progress level-bar">
                                        <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '98%' }}></div>
                                    </div>
                                </div>

                                <div className="item">
                                    <h3 className="level-title">Angular</h3>
                                    <div className="progress level-bar">
                                        <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '95%' }}></div>
                                    </div>
                                </div>

                                <div className="item">
                                    <h3 className="level-title">HTML5 &amp; CSS</h3>
                                    <div className="progress level-bar">
                                        <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '98%' }}></div>
                                    </div>
                                </div>

                                <div className="item">
                                    <h3 className="level-title">Ruby on Rails</h3>
                                    <div className="progress level-bar">
                                        <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '85%' }}></div>
                                    </div>
                                </div>

                                <div className="item">
                                    <h3 className="level-title">Sketch &amp; Photoshop</h3>
                                    <div className="progress level-bar">
                                        <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '66%' }}></div>
                                    </div>
                                </div> */}

                            </div>
                        </section>
                    </div>
                </div>

                <footer className="footer">
                    <div className="text-center">

                        {/* <small className="copyright">Designed with <i className="fas fa-heart"></i> by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small> */}
                    </div>
                </footer>
            </div>
        );
    }
}
