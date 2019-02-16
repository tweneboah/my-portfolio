import React, { Component } from 'react';

const TITLES = [
    'a software Engineer',
    'a React Developer',
    'a Node js developer',
    'a MongoDb developer'
];

class TitleAnimation extends Component {
    state = { titleIndex: 0}

    componentDidMount() {
        this.animateTitles();
    }

    animateTitles = ()=> {
        setInterval(()=>{
         const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
         this.setState({titleIndex: titleIndex})
        
        }, 4000)
    }

    render() { 
        const title = TITLES[this.state.titleIndex]
        return ( 
            <div>
               <h3>I am {title}</h3>
            </div>
         );
    }
}
 
export default TitleAnimation;