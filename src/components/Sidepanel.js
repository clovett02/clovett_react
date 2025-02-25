import React, { Component } from "react";
import '../javascript/sidepanel'


export default class Sidepanel extends Component{
    render(){
        return(
            <div>
                <a class="openbtn" onclick="openNav()">Open Sidebar</a>
                <div id="mySidepanel" class="sidepanel">
                    <button class="closebtn" onclick="closeNav()">&times;</button>
                    
                    <a href="/">Home</a> 
                    <a href="/resume">Resume</a>
                    <a href="/projects">Projects</a>
                    <a href="https://github.com/clovett02">GitHub Profile</a>
                </div>
                <script src="/javascript/sidepanel.js"></script>
            </div>
        )
    }
}