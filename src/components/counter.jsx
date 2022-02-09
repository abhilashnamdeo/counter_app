import React, {Component} from "react";

class Counter extends Component{
    
    
    spanStyle={
        fontSize:100,
        fontWeight:'bold'
    }
    
    render(){
        console.log(this.props);
        return(
            <div>
              
            <span className={this.getBadgeClass()}>{this.formateCount()}</span>
            <button onClick={ ()=> this.props.onIcrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={()=>  this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            {/* <ul>
                {this.state.tags.map(tag=>  <li key={tag}>{tag}</li>)}
            </ul> */}
            </div>
        );
    }
    getBadgeClass()
    {
      return this.props.counter.value === 0 ? "badge badge-warning m-2" : "badge badge-primary m-2";
    }
    formateCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 export default Counter;