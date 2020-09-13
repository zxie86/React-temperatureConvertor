import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={unit:'Fahrenheit',temp:0};
        this.handleC=this.handleC.bind(this);
        this.handleF=this.handleF.bind(this);
    }
    handleF(e){
        this.setState({unit:'Fahrenheit',temp:e.target.value});
    }

    handleC(e){
        this.setState({unit:'Celsius',temp:e.target.value});
    }
  
    
    render(){
        const temp= this.state.temp;
        const unit=this.state.unit;
        let celsius;
        let fahrenheit;

        //f to c
        if(unit==='Fahrenheit'){
            celsius =(temp - 32) * 5/9;
        }else{
            celsius=temp;
        }
        //c to f
        if(unit==='Celsius'){
            fahrenheit = temp *9/5 + 32;
        }else{
            fahrenheit = temp;
        }
        return(
            
        <div>
            <h1>Fahrenheit</h1>
            <input value={fahrenheit} onChange={this.handleF}></input>
            <h1>Celsius</h1>
            <input value={celsius} onChange={this.handleC}></input>
        </div>
        )
        
    }
}
 ReactDOM.render(<Calculator/>,document.getElementById('root'));

