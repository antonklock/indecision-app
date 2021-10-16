class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.deleteAllOptions = this.deleteAllOptions.bind(this);
        this.addNewOption = this.addNewOption.bind(this);
        this.pickRandomOption = this.pickRandomOption.bind(this);
        this.deleteOption = this.deleteOption.bind(this);
        this.state = {
            options: []
        }
    }
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
            console.log(JSON.parse(localStorage.getItem('options')));
        }
    }
    deleteAllOptions(){
        this.setState(() => ({options: []}))
    }
    addNewOption(newOption){
        if(!newOption){
            return 'Please enter a valid option';
        }else if(this.state.options.indexOf(newOption) > -1) {
            return 'This option already exists'
        }
        
        this.setState((prevState) => ({ 
            options: prevState.options.concat(newOption)
        }));
    }
    pickRandomOption(){
        const randomIndex = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomIndex]);
    }
    deleteOption(optionToRemove){
        const newOptions = this.state.options.filter((option) => option !== optionToRemove);
        this.setState(() => ({options: newOptions}))
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    pickRandomOption={this.pickRandomOption}
                />

                <Options 
                    options={this.state.options} 
                    deleteAllOptions={this.deleteAllOptions}
                    deleteOption={this.deleteOption}
                />
                <AddOption addOption={this.addNewOption}/>
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return(
        <div>
            <button 
                disabled={!props.hasOptions} 
                onClick={props.pickRandomOption}
            >
                What should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.deleteAllOptions}>Remove All</button>
            {props.options.length < 1 && <p>Please add an option to get started.</p>}
            <ul>
            {
                props.options.map((option) => (
                    <Option 
                        key={option}     
                        optionText={option} 
                        deleteOption={props.deleteOption}
                    />)
                )
            }
            </ul>
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
                {props.optionText}
                <button onClick={(e) => {
                    props.deleteOption(props.optionText);
                }}>Remove</button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.submitNewOption = this.submitNewOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    submitNewOption(e){
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);

        this.setState(() => ({ error }))
        
        if(!error) {
            e.target.elements.option.value = '';
        }

        e.preventDefault();
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.submitNewOption}>
                    <input type='text' name='option'></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.querySelector("#app"));