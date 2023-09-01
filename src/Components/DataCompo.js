import React, { Component } from "react";

class DataCompo extends Component{
    constructor(props){
        super(props)
        // console.log(this.props.value)
    }
    render(){
        return(
            <>
                <div>
                      <h1>EMPLOYEE FEEDBACK DATA</h1>
                </div>
                <div className="main">
                    <div className="data">
                        {this.props.value.map((item, index) => {
                            return (
                                <div className="content" key={index}>
                                <h4>Name: {item.name} | Department: {item.department} | Rating: {item.rating}</h4>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <button onClick={this.props.ToFunction}>Go Back</button>
            </>
        )
    }
}

export default DataCompo;