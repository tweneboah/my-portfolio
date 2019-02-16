import React, { Component } from 'react';

import PROJECTS from '../data/projects';

class Project extends Component {
    
    render() { 
        //Destructuring my object
        const {title, image, description, link} = this.props.project;
        return ( 
            <div style = {{display: 'inline-block', width: 300, margin: 50}} >
              <h3>{title}</h3>
              <img src = {image} alt = 'profile' style ={{width:300, height:200}} />
              <p>{description}</p>
              <a href ={link}>{link}</a>
            </div>
         );
    }
}
 


class Projects extends Component {
    
    render() { 
        return (
         <div className ='border border-danger'>
           <h1>Higlighted Projects</h1>

           <div>
            {
                PROJECTS.map((PROJECT) => {
                    return (
                        <Project key ={PROJECT.id} project = {PROJECT}/>

                    )
                })
            }
           </div>
        </div> 
        );
    }
}
 
export default Projects;