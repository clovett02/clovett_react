import '../css/projects.css';
import jh1 from '../images/jobhunt1.png';
import jh2 from '../images/jobhunt2.png';
import gl1 from '../images/gitlab1.png';
import gl2 from '../images/gitlab2.png';

export default function Projects(props) {
  return (
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
                    <li>Typescript</li>
                    <li>Javascript</li>
                    <li>Docker</li>
                    <li>MySQL</li>
                    <li>C# API</li>
                </ul>
            </span>
        </li>
        <li className='project'>
            <span className="pics">
                <img src={gl1} alt="Gitlab 1"/>
                <img src={gl2} alt="Gitlab 2"/>
            </span>
            <span className="description">
                <h2>Gitlab (local docker instance)</h2>
                <p>I have a local instance of Gitlab running on my linux server in a docker container. </p>
            </span>
            <span className="skills">
                <h3>Skills/Topics Demonstrated</h3>
                <ul>
                    <li>Git</li>
                    <li>Gitlab</li>
                    <li>CI/CD</li>
                </ul>
            </span>
            
        </li>
        
    </ul>
  );
}