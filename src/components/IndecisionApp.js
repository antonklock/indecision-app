import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    
    state = {
        options: [],
        selectedOption: undefined
    }
    
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }
    deleteAllOptions = () => {
        this.setState(() => ({options: []}))
    };
    addNewOption = (newOption) => {
        if(!newOption){
            return 'Please enter a valid option';
        }else if(this.state.options.indexOf(newOption) > -1) {
            return 'This option already exists'
        }
        
        this.setState((prevState) => ({ 
            options: prevState.options.concat(newOption)
        }));
    };
    pickRandomOption = () => {
        const randomIndex = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomIndex];
        this.setState(() => ({
            selectedOption: option
        }));
    };
    deleteOption = (optionToRemove) => {
        const newOptions = this.state.options.filter((option) => option !== optionToRemove);
        this.setState(() => ({options: newOptions}))
    };

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState((prevState) => ({options: options}))
            }
        } catch (error) {
            // console.log(error);
        }
        
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            console.log('saving data...')
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <div className="container">
                    <Header subtitle={subtitle}/>
                    <Action 
                            hasOptions={this.state.options.length > 0}
                            pickRandomOption={this.pickRandomOption}
                        />
                    <div className="widget">
                        <Options 
                            options={this.state.options} 
                            deleteAllOptions={this.deleteAllOptions}
                            deleteOption={this.deleteOption}
                        />
                        <AddOption addOption={this.addNewOption}/>
                    </div>
                    
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    clearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}