import '../css/projects.css';
import { Project, ProjectType } from '../components/Project.tsx'
import jh1 from '../images/jobhunt1.png';
import jh2 from '../images/jobhunt2.png';
import gl1 from '../images/gitlab1.png';
import gl2 from '../images/gitlab2.png';

const projs: ProjectType[] = [
    {
        id: "1",
        name: "Job App Tracker",
        description: `This is a simple web application that I use to track job applications. I built it with
                        React, and it runs in a docker container on my homeserver. I use it to create, read, and
                        update job application information by interacting with an API, that I authored in C#.
                        The C# API interacts with a local instance of MySQL running on my server.`,
        skills: ["React", "Typescript", "Javascript", "Docker", "MySQL", "C# API"],
        pics: [jh1, jh2],
        alts: ["jobhunt 1", "jobhunt 2"]
    }, 
    {
        id: "2",
        name: "Gitlab (local docker instance)",
        description: `I have a local instance of Gitlab running on my linux server in a docker container. Making use
                    of Gitlab CI/CD has greatly sped up the process of building, testing, and deploying web apps,
                    docker images, python packages, and other applications that I work on. After the initial setup
                    and configuration of the associted .gitlab-ci.yml file, the whole build, test, and deploy
                    process for a project is quick and painlessly kicked off with a push to the main branch of that
                    projects repository.`,
        skills: ["Git", "Gitlab", "CI/CD"],
        pics: [gl1, gl2],
        alts: ["Gitlab 1", "Gitlab 2"]
    }
]

export default function Projects(props) {
  return (
    <ul className='projects'>
        {projs.map((p) =>
            <Project key={p.id} project={p}/>
        )}
    </ul>
  );
}