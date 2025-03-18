import React, { Component } from "react";



export default class Sidepanel extends Component{
    constructor(props){
        super(props)
        this.state={
            panelwidth: "150px"
        }
    }
    openNav(){
        this.setState({
            panelwidth:"150px"
    })
    }
    
    closeNav() {
        this.setState({
            panelwidth:"0px"
        })
    }

    render(){
        return(
            <div>
                {/* <button> class="openbtn" onclick={this.openNav()}Open Sidebar</button> */}
                <div id="mySidepanel" className="sidepanel" style={{width: this.state.panelwidth}}>
                    <button class="closebtn" onClick={this.closeNav()}>&times;</button>
                    
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