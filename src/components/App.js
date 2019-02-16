import React, { Component } from 'react';
import Projects from './Projects';
import Title from './TitleAnimation';
import profile from '../assets/emma.jpg';
import Jokes from './Jokes';
import NavbarComponent from './NavbarComponent';
import Footer from './Footer';

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
          
          <NavbarComponent/>
          <hr className='bg-success p-1'/>
        <img src={profile} alt='profile' className='profile' />
        <h1 className="text-danger">Hello!</h1>
        <p>My name is David.</p>
        <Title />
        <p>I'm always looking forward to working on meaningful projects.</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in San Francisco, and code every day.</p>
              <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
              <p>Besides coding, I also love music and ramen!</p>
              <button onClick={this.toggleDisplayBio}className='btn btn-danger btn-lg m-3'>Show less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio} className="btn btn-primary btn-lg m-3">Read more</button>
            </div>
          )
        }

           <Jokes/>
        <hr />
        <Projects />
        <hr />
    
      <Footer/>
      </div>
    )
  }
}

export default App;
