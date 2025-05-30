import headshot from '../images/headshot.png';
import '../css/home.css'

export default function Home(){
    return(
        <div className='home'>
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>

            <div className="headshot">
                <picture id="headshot_pic">
                    <img src={headshot} width="194" height="218" alt="headshot.png"/>
                </picture>
            </div>
                <div>
                    <h1>About Me</h1>
                    <p>&emsp;I'm Chris Lovett. I'm a data scientist and software developer.
                        When I'm not writing code or coming up with a way to effectively 
                        present data, I like to spend time with my wife and kids, work out,
                        and learn new things.
                    </p>
                    <p>&emsp;If you want to learn more about my professional experience, please 
                        click the link to my <a href='/resume'>Resume</a> page and also take a look at some of 
                        the <a href='/projects'>Projects</a> that I've done, and others that I'm currently working on.
                        Note that do to a lot of my professional work being confidential, I've only listed personal
                        projects on this page.
                    </p>
                </div>                
                <div className="links">
                    <h4>Github Repositories</h4>
                    <a href="https://github.com/clovett02?tab=repositories">
                        https://github.com/clovett02?tab=repositories</a><p></p>

                    <h4>LinkedIn Profile</h4>
                    <div className="badge-base LI-profile-badge" data-locale="en_US" 
                        data-size="medium" data-theme="light" data-type="HORIZONTAL" 
                        data-vanity="chris-lovett-7b1207b6" data-version="v1">
                        <a className="badge-base__link LI-simple-link" 
                        href="https://www.linkedin.com/in/chris-lovett-7b1207b6?trk=profile-badge">
                        https://www.linkedin.com/in/chris-lovett-7b1207b6/</a>
                    </div>
                </div>
        </div>
    );

}