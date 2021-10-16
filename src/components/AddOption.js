import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    submitNewOption = (e) => {
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);

        this.setState(() => ({ error }))
        
        if(!error) {
            e.target.elements.option.value = '';
        }

        e.preventDefault();
    };
    render(){
        return(
            <div>
                {this.state.error && <p class="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.submitNewOption}>
                    <input className="add-option__input" type='text' name='option'></input>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}