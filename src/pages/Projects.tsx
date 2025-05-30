import '../css/projects.css';
import { Project, type ProjectType } from '../components/Project.tsx'
import johu1 from '../images/jobhunt1.png';
import johu2 from '../images/jobhunt2.png';
import gila1 from '../images/gitlab1.png';
import gila2 from '../images/gitlab2.png';
import gasa1 from '../images/gamesaveapp1.png';
import gasa2 from '../images/gamesaveapp2.png';
import gasa3 from '../images/gamesaveapp3.png';
import grli1 from '../images/grocerylist1.png';

const projs: ProjectType[] = [
{
        id: "0",
        name: "Grocery List Web App",
        description: `This is the first app that I began working on with the goal of learning more about Angular. This is a web app that assists 
                        me, my wife, and anyone else on our home network with adding and removing things from a grocery list that we share for 
                        the household. It runs within a docker container on our home server. In the near future, I plan to add features so that it 
                        pulls pricing and availability data from Walmart and Target using their respective APIs.`,
        skills: ["AngularJS", "Typescript", "Docker"],
        pics: [grli1],
        alts: [""]
    },
    {
        id:"1",
        name: "Gamesave Web App",
        description: `Over time, keeping up with gamesaves can be a chore. To deal with that, I created a Python script for checking
                        and linking those dirctories, and a MySQL database for storing the Game Names and save locations. I then 
                        created this simple Angular web app that interacts with an API to create, read, update, and delete 
                        (CRUD) those gamesaves within a loc MySQL database.`,
        skills: ["AngularJS", "Typescript", "Docker"],
        pics: [gasa1, gasa2, gasa3],
        alts: [""]
    },
    {
        id: "2",
        name: "Job App Tracker",
        description: `This is a simple web application that I use to track job applications. I built it with
                        React, and it runs in a docker container on my homeserver. I use it to create, read, and
                        update job application information by interacting with an API, that I authored in C#.
                        The C# API interacts with a local instance of MySQL running on my server.`,
        skills: ["ReactJS", "Typescript", "Javascript", "Docker", "MySQL", "C# API"],
        pics: [johu1, johu2],
        alts: ["jobhunt 1", "jobhunt 2"]
    },
    {
        id: "3",
        name: "Gitlab (local docker instance)",
        description: `I have a local instance of Gitlab running on my linux server in a docker container. Making use
                    of Gitlab CI/CD has greatly sped up the process of building, testing, and deploying web apps,
                    docker images, python packages, and other applications that I work on. After the initial setup
                    and configuration of the associted .gitlab-ci.yml file, the whole build, test, and deploy
                    process for a project is quick and painlessly kicked off with a push to the main branch of that
                    project's repository.`,
        skills: ["Git", "Gitlab", "CI/CD"],
        pics: [gila1, gila2],
        alts: ["Gitlab 1", "Gitlab 2"]
    }
]

export default function Projects(props) {
  return (
    <div className='projcontainer'>
        <p className='projintro'>
            I find that the best way to learn is by doing, so I've developed a habit of coming up with useful ideas and creating
            projects to solve those problems when I'm looking to learn about a new technology. Example are listed below.
        </p>
        <p className='projintro'>
            ***As a reminder, I'm unable to list any of my professional projects.
        </p>
        <ul className='projects'>
        {projs.map((p) =>
            <Project key={p.id} project={p}/>
        )}
    </ul>
    </div>
    
  );
}

/* new Project Scaffolding
    {
        id: "",
        name: "",
        description: ``,
        skills: [""],
        pics: [],
        alts: [""]
    },

*/