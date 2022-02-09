import React, {Component} from 'react';
import Counters from './components/counters'
import Navbar from './components/navbar'

class App extends Component {
  state={
    counters:[
        {id:1, value:1},
        {id:2, value:2},
        {id:3, value:0}
    ]
    
}
handleOnDelete=(counterid)=>{
  const counters = this.state.counters.filter((counter) => counter.id !== counterid );
  //this.setState({counters:counters});
  this.setState({counters});
}
handleOnIncrement=counter=>{
    const counters=[...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value = counters[index].value+1; 
    this.setState({counters});
    console.log(counters);
}
handleReset=()=>{
    const counters = this.state.counters.map((counter)=>{
        counter.value=0
        return counter
    });
    this.setState({counters});
}

productCount=()=>{
  
  return this.state.counters.filter((count)=> count.value > 0).length
}
render(){
  return (
    <React.Fragment>
    <Navbar count={this.productCount()}/>
    <main className='container'>
    <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleOnIncrement} onDelete={this.handleOnDelete} />
    </main>
    </React.Fragment>
  );
}
}

export default App;
