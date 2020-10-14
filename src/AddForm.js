import React, { Component} from 'react'

class AddTodo extends Component {

    state = { content: null }

    handleChange = (e) => {
        this.setState({
           content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        
    }
   

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="content"> Add new to do:</label>
                    <input type="text" id="content" onChange={this.handleChange}></input>
                    <button className="waves-effect waves-light blue btn">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;