import '../css/projects.css';
import jh1 from '../images/jobhunt1.png';
import jh2 from '../images/jobhunt2.png';
import gl1 from '../images/gitlab1.png';
import gl2 from '../images/gitlab2.png';

export default function Projects(props) {
  return (
    <div>
        <ul className='projects'>
            <li className="project">
                <span className="pics">
                    <img src={jh1} alt="Job Hunt 1"/>
                    <img src={jh2} alt="Job Hunt 2"/>
                </span>
                <span className="description">
                    <h2>Job App Tracker</h2>
                        <p>A web application to track job applications. Built with React, and 
                            containerized as a docker image. It creates, reads, and updates job application 
                            information from an API, written in C#, that interacts with a local MySQL instance on
                            my home server.</p>
                    </span>
                <span className="skills">
                    <h3>Skills/Topics Demonstrated</h3>
                    <ul>
                        <li>React</li>
                        <li>Docker</li>
                        <li>MySQL</li>
                        <li>API</li>
                    </ul>
                </span>
            </li>
            <li>
                <div className="project">
                    <span className="pics">
                        <img src={gl1} alt="Gitlab 1"/>
                        <img src={gl2} alt="Gitlab 2"/>
                    </span>
                    <span className="description">
                        <h2>Gitlab</h2>
                        <p>Gitlab is a web-based DevOps lifecycle tool that provides a Git repository manager 
                            providing wiki, issue-tracking, and CI/CD pipeline features, using an open-source license.</p>
                    </span>
                    <span className="skills">
                        <h3>Skills/Topics Demonstrated</h3>
                        <ul>
                            <li>Git</li>
                            <li>Gitlab</li>
                            <li>CI/CD</li>
                        </ul>
                    </span>
                </div>
            </li>
            
        </ul>
    </div>
  );
}