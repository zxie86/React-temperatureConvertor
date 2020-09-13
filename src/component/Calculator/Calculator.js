import React from 'react';
import ReactDOM from 'react-dom';

export class Calculator extends React.Compoent{
    constructor(props){
        super(props);
        this.state={unit:'Fahrenheit',temp:0};
    }
    changeTemp(){
        let unit = this.state.unit;
        let inputTemp = this.state.temp;
        let newTemp;

        //f to c
        if ({unit}=='Fahrenheit'){
            newTemp = ({inputTemp} - 32) * 5/9;
        //c to f
        }else{
            newTemp = ({inputTemp} * 9/5) + 32;
        }
        //set new temperature
        this.setState({temp:newTemp});
    }

    changeUnit(){
        const newUnit = this.state.unit=='Fahrenheit'?'Celsius':'Fahrenheit';
        this.setState({unit:newUnit});
    }
    
    render(){
        return(
        <div>
            console.log(`${inputTemp} ${unit} is ${newTemp} ${newUnit}`);
        </div>)
        
}
}