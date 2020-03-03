import React from "react"

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ""
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log("item submitted!")

    }




    render() {
        return(
            <div>
                <ul>
                    <li>
                        Bananananananananananas!
                    </li>
                </ul>
                <form onSubmit={this.handleSubmit}>
                <label>List Item:</label>
                <input type="text" id="listItem" name="listItem" value={this.state.input} onChange={this.handleChange}></input>
                <input type="submit" value="submit"></input>
                </form>
            </div>
            
        )
    };

}