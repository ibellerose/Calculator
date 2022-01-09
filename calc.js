
// class CalcScreenClass extends React.Component{
//     constructor(props){
//         super(props);
        
//         this.state = {calcVariable: 0};
//     }

//     render(){
//         return(
//             <div class="screen">
//                 <div id="calcNumber">
//                     {this.state.calcVariable}
//                 </div>
//             </div>
//         )
//     }
// }


class ButtonClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {calcVariable: '0', firstValue: 0, secondValue: 0, mathOperation: '+'};

        //binding method
        this.addToScreen = this.addToScreen.bind(this);
    }

    addToScreen = (btnPushed) => {
        if(btnPushed == "AC"){
            this.setState({calcVariable: '0', firstValue: 0, secondValue: 0, mathOperation: '+'})
        }
        else if((btnPushed >= 0 && btnPushed <= 9) || (btnPushed == "." && !this.state.calcVariable.includes('.')))
        {
            if((this.state.calcVariable == '0' || this.state.calcVariable == '+' || this.state.calcVariable == '-' || this.state.calcVariable == 'x' || this.state.calcVariable == '/') && btnPushed == "."){
                this.setState({calcVariable : "0."})
            }
            else if((this.state.calcVariable == '0' || this.state.calcVariable == '+' || this.state.calcVariable == '-' || this.state.calcVariable == 'x' || this.state.calcVariable == '/') && btnPushed != "."){
                this.setState({calcVariable : btnPushed})
            }
            else{
                this.setState({calcVariable : this.state.calcVariable + btnPushed})
            }
        }
        else if(btnPushed == "+")
        {
            this.setState({firstValue: parseFloat(this.state.calcVariable)})
            this.setState({calcVariable : '+'})
            this.setState({mathOperation : '+'})
        }
        else if(btnPushed == "-")
        {
            this.setState({firstValue: parseFloat(this.state.calcVariable)})
            this.setState({calcVariable : '-'})
            this.setState({mathOperation : '-'})
        }
        else if(btnPushed == "x")
        {
            this.setState({firstValue: parseFloat(this.state.calcVariable)})
            this.setState({calcVariable : 'x'})
            this.setState({mathOperation : 'x'})
        }
        else if(btnPushed == "/")
        {
            this.setState({firstValue: parseFloat(this.state.calcVariable)})
            this.setState({calcVariable : '/'})
            this.setState({mathOperation : '/'})
        }
        else if(btnPushed == "=")
        {
            //this.setState({secondValue : parseFloat(this.state.calcVariable)})
            if(this.state.mathOperation == '+'){
                this.setState({calcVariable: (this.state.firstValue + parseFloat(this.state.calcVariable))})
            }
            else if(this.state.mathOperation == '-'){
                this.setState({calcVariable: (this.state.firstValue - parseFloat(this.state.calcVariable))})
            }
            else if(this.state.mathOperation == 'x'){
                this.setState({calcVariable: (this.state.firstValue * parseFloat(this.state.calcVariable))})
            }
            else if(this.state.mathOperation == '/'){
                this.setState({calcVariable: (this.state.firstValue / parseFloat(this.state.calcVariable))})
            }
        }
    }

    render(){
        return(
            <div>
                <div class="screen">
                    <div id="calcNumber">
                        {this.state.calcVariable}
                    </div>
                </div>

                <div class="numberButtonWrapper">
                    <button onClick={() => this.addToScreen("AC")} class="numberButton" id="buttonAC">AC</button>
                    <button onClick={() => this.addToScreen("/")} class="mathButton" id="divide">/</button>
                    <button onClick={() => this.addToScreen("x")} class="mathButton" id="multiply">x</button>
                    <button onClick={() => this.addToScreen("7")} class="numberButton" id="seven">7</button>
                    <button onClick={() => this.addToScreen("8")} class="numberButton" id="eight">8</button>
                    <button onClick={() => this.addToScreen("9")} class="numberButton" id="nine">9</button>
                    <button onClick={() => this.addToScreen("-")} class="mathButton" id="subtract">-</button>
                    <button onClick={() => this.addToScreen("4")} class="numberButton" id="four">4</button>
                    <button onClick={() => this.addToScreen("5")} class="numberButton" id="five">5</button>
                    <button onClick={() => this.addToScreen("6")} class="numberButton" id="six">6</button>
                    <button onClick={() => this.addToScreen("+")} class="mathButton" id="add">+</button>
                    <button onClick={() => this.addToScreen("1")} class="numberButton" id="one">1</button>
                    <button onClick={() => this.addToScreen("2")} class="numberButton" id="two">2</button>
                    <button onClick={() => this.addToScreen("3")} class="numberButton" id="three">3</button>
                    <button onClick={() => this.addToScreen("=")} class="numberButton" id="equal">=</button>
                    <button onClick={() => this.addToScreen("0")} class="numberButton" id="zero">0</button>
                    <button onClick={() => this.addToScreen(".")} class="numberButton" id="buttonDot">.</button>
                </div>
            </div>
        )
    }
}

class Calculator extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {};
    }

    render(){
        return(
           <div>
               <ButtonClass />
           </div>
        )
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('calculator')
);