import weight from '../src/Assets/Images/wet.png'
import React from "react";

class Mystate extends React.Component {

    state = {
            count: 0
    }

    functionDecrease = () => {
        this.setState({
            count: this.state.count - 10
        })
    }

    functionIncrease = () => {
        this.setState({
            count: this.state.count + 10
        })
    }

  
    
    render() {
        return (

            <>
            <div className="outer">
                <div>
                <img src={weight} alt="weight"  className='imagesize'/>

                </div>
                <h1>What is your weight</h1>

                <div className='buton-main-box'>
                <div className='button1'>
                <button onClick={this.functionDecrease} className='but1'>Decrease</button>
                </div>
                
                <h2>{this.state.count}</h2>
                <div className='button2'>
                <button onClick={this.functionIncrease} className='but2'>Increase</button>
                </div>
            </div>
            <div className='sumbitbut'>
            <button className='sum'>Sumbit</button>
            </div>
            </div>
            </>
        )
    }
}

export default Mystate