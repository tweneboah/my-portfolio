import React, { Component } from 'react';

class Jokes extends Component {
    state = { joke: { }, jokes: [] }

    getJokes = ()=> {
       fetch('https://official-joke-api.appspot.com/random_ten')
       .then((response) => {
           return response.json()
       })
       .then((jokesData) => {
           return this.setState({
               jokes: jokesData
              
           }) 
       })
    }

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
       .then((response) =>{
          return response.json()
       })
        .then((data) => {
           return this.setState({joke: data})
        })
    }
    render() { 
        const {setup, punchline} = this.state.joke;
        return ( 
        <div className ='p-5 bg-danger text-white'>
         <h2>Random jokes for you</h2>
         <hr className='bg-success p-1'/>
        <p>{setup} <em className='text-warning'>{punchline}</em></p>
        <hr/>
        <button onClick={this.getJokes} className='btn btn-info btn-lg mb-5 '>Want more jokes?</button>
        {
            this.state.jokes.map((joke) => {
                const {id, setup, punchline} = joke;
               return <p className='bg-info p-2' key ={id}>{setup} <em className='text-warning'>{punchline}</em></p>
            })
        }
        </div>
     );
    }
}
 
export default Jokes;