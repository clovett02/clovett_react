import React, { Component } from "react";



export default class Sidepanel extends Component{

    openNav(){
        document.getElementById("mySidepanel").style.width = "150px";
    }
    
    closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
    }

    render(){
        return(
            <div>
                <a class="openbtn" onclick={this.openNav()}>Open Sidebar</a>
                <div id="mySidepanel" class="sidepanel">
                    <button class="closebtn" onClick={handleClick}>&times;</button>
                    
                    <a href="/">Home</a> 
                    <a href="/resume">Resume</a>
                    <a href="/projects">Projects</a>
                    <a href="https://github.com/clovett02">GitHub Profile</a>
                </div>
                <script src="/src/javascript/sidepanel.js" type="text/javascript"/>
            </div>
        )
    }
}