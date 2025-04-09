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
                <a href={jh1}>
                    <img src={jh1} alt="Job Hunt 1" />
                </a>
                <a href={jh2}>
                    <img src={jh2} alt="Job Hunt 2" />
                </a>
            </span>
            <span className="description">
                <h2>Job App Tracker</h2>
                    <p>This is a simple web application that I use to track job applications. I build it with
                        React, and it runs in a docker container on my homeserver. It creates, reads, and 
                        updates job application information from an API, written in C#, that interacts with 
                        a local MySQL docker instance, also on my home server.</p>
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
                <a href={gl1}>
                    <img src={gl1} alt="Gitlab 1" />
                </a>
                <a href={gl2}>
                    <img src={gl2} alt="Gitlab 2" />
                </a>
            </span>
            <span className="description">
                <h2>Gitlab (local docker instance)</h2>
                <p>I have a local instance of Gitlab running on my linux server in a docker container. Making use
                    of Gitlab CI/CD has greatly sped up the process of building, testing, and deploying web apps,
                    docker images, python packages, and other applications that I work on. After the initial setup 
                    and configuration of the associted .gitlab-ci.yml file, the whole build, test, and deploy 
                    process for a project is quick and painlessly kicked off with a push to the main branch of that 
                    projects repository.
                </p>
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