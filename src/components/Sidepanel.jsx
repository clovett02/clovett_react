import React from "react";
// import { useState, useEffect } from "react";

function openNav(){

}

function closeNav(){

}

export default function Sidepanel (){
    return(
        <div>
            {/* <button> class="openbtn" onclick={this.openNav()}Open Sidebar</button> */}
            <div id="mySidepanel" className="sidepanel" /*style={{width: this.state.panelwidth}}*/>
                {/* <button class="closebtn" onClick={this.closeNav()}>&times;</button> */}
                
                <a href="/">Home</a> 
                <a href="/resume">Resume</a>
                <a href="/projects">Projects</a>
                <a href="https://github.com/clovett02">GitHub Profile</a>
            </div>
            {/* <script src="/src/javascript/sidepanel.js" type="text/javascript"/> */}
        </div>
    );
    
}