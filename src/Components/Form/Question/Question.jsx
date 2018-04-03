import React from 'react';

class Question extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            answers: {
                answer1: 'yes',
                answer2: 'no'
            }
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return(
            <label>
                <input type="radio" value={this.state.answer1} name="answer"/>
                <input type="radio" value={this.state.answer2} name="answer"/>
            </label>
        )
    }
}

export default Question;