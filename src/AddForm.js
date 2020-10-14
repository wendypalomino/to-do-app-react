import React, { Component} from 'react'

class AddTodo extends Component {
    render(){
        return(
            <div>
                <form >
                    <label htmlForm="content"> Content:</label>
                    <input type="text" id="content"></input>
                    <button className="waves-effect waves-light blue btn">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;