import React, { Component } from 'react';
import {
    Link,
} from "react-router-dom";
import { db } from './Firebase';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSkills: [],
            userSummery: '',
            userEducation: [],
            userTools: [],
            userProjects: [],
            usersProfile:{}
        }
    }
    GetUserSkills() {
        db.collection("UserSkills").orderBy("id", "asc")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                this.setState({ userSkills: data });
                // console.log(data); // array of cities objects
            }).catch(err => {
                console.log("Something went wrong" + err);
            });
    }
    GetUserSummary() {
        db.collection("UserSummary").orderBy("id", "asc").limit(1)
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                this.setState({ userSummery: data[0].summary })
            }).catch(err => {
                console.log("Something went wrong" + err);
            });
    }

    GetUserEducation() {
        db.collection("UserEducation").orderBy("id", "asc")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                this.setState({ userEducation: data });
                // console.log(data); // array of cities objects
            }).catch(err => {
                console.log("Something went wrong" + err);
            });
    }
    GetUserTools() {
        db.collection("UserTools").orderBy("id", "asc")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                this.setState({ userTools: data });
                // console.log(data); // array of cities objects
            }).catch(err => {
                console.log("Something went wrong" + err);
            });
    }
    GetUserProjects() {
        db.collection("UserProjects").orderBy("id", "asc")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                this.setState({ userProjects: data });
                // console.log(data); // array of cities objects
            }).catch(err => {
                console.log("Something went wrong" + err);
            });
    }
    
    GetUsers() {
        db.collection("Users").orderBy("id", "asc").limit(1)
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                this.setState({ usersProfile: data[0] });
                // console.log(data); // array of cities objects
            }).catch(err => {
                console.log("Something went wrong" + err);
            });
    }

    componentDidMount() {
        this.GetUserSkills();
        this.GetUserSummary();
        this.GetUserEducation();
        this.GetUserTools();
        this.GetUserProjects();
        this.GetUsers();
    }
    render() {
        return (
            <div>
                <div style={{ textAlign: 'center', marginTop: 20 }}>
                    {/* <button className="btn btn-success">Download Resume</button> */}
                </div>
                <div className="wrapper" id="toPdf">
                    <div className="sidebar-wrapper">
                        <div className="profile-container">
                            <img className="profile" src={this.state.usersProfile?this.state.usersProfile.profile_img:"https://naeem-abbas.github.io/naeem-abbas-resume/assets/images/profile.png"} alt="" style={{ width: 150, height: 170, borderRadius: '50%' }} />
                            <h1 className="name">Naeem Abbas</h1>
                            <h3 className="tagline">{this.state.usersProfile?this.state.usersProfile.story_line:"Full Stack JavaScript Web & Mobile App Developer"}</h3>
                        </div>

                        <div className="contact-container container-block">
                            <ul className="list-unstyled contact-list">
                                <li className="email">
                                    <i className="fas fa-envelope">
                                    </i>
                                    <Link to="/"> naeemabbas7247@gmail.com</Link>
                                </li>
                                <li className="phone">
                                    <i className="fas fa-phone">
                                    </i>
                                    <a href="tel:923483460275"> (92) 348-3460275</a>
                                </li>
                                {/* <li className="website"><Link onClick={() => { window.open('https://naeemabbas7247.github.io/online_resume/') }}>https://naeemabbas7247.github.io/online_resume/</Link></li> */}
                                <li className="linkedin">
                                    <i className="fab fa-linkedin-in"></i>
                                    <Link to="" onClick={() => { window.open('https://www.linkedin.com/in/naeem-abbas') }}>
                                        {' '}linkedin.com/in/naeem-abbas</Link>
                                </li>
                                <li className="github">
                                    <i className="fab fa-github"></i>
                                    <Link to="" onClick={() => { window.open("https://www.github.com/naeem-abbas") }}>
                                        {' '}
                                    github.com/naeem-abbas</Link></li>
                                {/* <li className="twitter"><i className="fab fa-twitter"></i><a href="https://twitter.com/3rdwave_themes" target="_blank">@twittername</a></li> */}
                            </ul>
                        </div>
                        <div className="education-container container-block">
                            <h2 className="container-block-title">Education</h2>
                            {
                                this.state.userEducation ?
                                    this.state.userEducation.map((item, i) => (
                                        <div key={i} className="item">
                                            <h4 className="degree">{item.degree_title}</h4>
                                            <h5 className="meta">{item.institute}</h5>
                                            <div className="time">{item.duration_date}</div>
                                            <div className="time">Scored: {item.scored}</div>
                                        </div>
                                    ))
                                    :
                                    <div className="item">
                                        <div className="degree">Please add your education</div>
                                    </div>
                            }
                           
                        </div>

                     

                    </div>

                    <div className="main-wrapper">

                        <section className="section summary-section">
                            <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user" style={{ marginTop: 7 }}></i></span>Summary</h2>
                            <div className="summary">
                                <p  style={{textAlign:'justify'}}>
                                    {this.state.userSummery ? this.state.userSummery : ""}
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
                            <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive" style={{ marginTop: 8 }}></i></span>Projects</h2>
                           
                            {
                                this.state.userProjects ?
                                    this.state.userProjects.map((item,i)=>(
                                    <div className="item" key={i}>
                                        <span className="project-title">{item.project_title}</span> - <span className="project-tagline">
                                            {item.project_desc}
                                        </span>
                                    </div>
                                    ))
                                    :
                                    <div className="item">
                                        <span className="project-title">Please add your project first</span>

                                    </div>
                            }

                        </section>

                        <section className="skills-section section">
                            <h2 className="section-title">
                                <span className="icon-holder"><i className="fas fa-rocket" style={{ marginTop: 8 }}></i></span>Skills</h2>
                            <div className="skillset">
                                <div className="item">
                                    <ul className="skillslist">
                                        {
                                            this.state.userSkills ?
                                                this.state.userSkills.map((item, i) => (
                                                    <li key={i}>{item.skill_desc}</li>
                                                ))
                                                :
                                                <li>Please add your skills first</li>
                                        }
                                    </ul>
                                   
                                </div>

                                

                            </div>
                        </section>


                        <section className="skills-section section">
                            <h2 className="section-title">
                                <span className="icon-holder"><i className="fas fa-tools" style={{ marginTop: 8 }}></i></span>Tools</h2>
                            <div className="skillset">
                                <div className="item">
                                    <ul className="skillslist">

                                        {
                                            this.state.userTools ?
                                                this.state.userTools.map((item, i) => (
                                                    <li key={i}>{item.tool_desc}</li>
                                                ))
                                                :
                                                <li>Please add your skills first</li>
                                        }


                                    </ul>
                                    
                                </div>

                               
                            </div>
                        </section>
                    </div>
                </div>

                <footer className="footer">
                    <div className="text-center">
                        <p>Resume created using React JS & Firebase by Naeem Abbas</p>
                        
                    </div>
                </footer>
            </div>
        );
    }
}
