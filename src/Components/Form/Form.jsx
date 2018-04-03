import React from 'react';
import Question from './Question/Question.jsx'

class Form extends React.Component{
    render() {
        return(
            <div>
                <form>
                    <h1>Question</h1>
                    <Question/>
                    <button>This should be a button</button>
                </form>
            </div>
        )
    }
}

export default Form;