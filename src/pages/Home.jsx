import React, { Component } from "react";
import headshot from '../images/headshot.png';

export default Home(){
    
    return(
        <div>
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>

            <div class="headshot">
                <picture id="headshot_pic">
                    <img src={headshot} width="194" height="218" alt="headshot.png"/>
                </picture>
            </div>
            <h1>About Me</h1>
                <p>I'm Chris Lovett. I'm a data scientist and software developer.
                    When I'm not writing code or coming up with a way to effectively 
                    present data, I like to spend time with my wife and kids, work out,
                    and learn new things.
                </p>
                <p>If you want to learn more about my professional experience, please 
                    click the link to my Resume page and also take a look at some of 
                    the projects that I've done, and others that I'm currently working on.
                </p>
        </div>
    );

}