import Slideshow from "./Slideshow.tsx";

export interface ProjectType{
    name: string;
    description: string;
    skills: string[];
    pics: string[];
    alts: string[];
}

export function Project(props:{project: ProjectType}) {
    const {name, description, skills, pics, alts} = props.project;
    
    return (
        <li className="project">
            <Slideshow pics={pics} alts={alts}/>
            <span className="description">
                <h2>{name}</h2>
                <p>{description}</p>
            </span>
            <span className="skills">
                <h3>Skills/Topics Demonstrated</h3>
                <ul>
                    {skills.map((skill) =>
                        <li>{skill}</li>
                    )}
                </ul>

            </span>
        </li>
    );
}