import React, {Component} from 'react'

class ChildComponent extends Component{
    constructor(props){
        super(props)

        this.sendData = this.sendData.bind(this)
    }


    sendData(data){
        this.props.parentCallback("Data from child")
    }

    render(){
        return(
            <div>
                <button onClick={this.sendData}>
                    Send Data
                </button>
            </div>
        )
    }
}

export default ChildComponent