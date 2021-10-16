console.log('app.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
        // console.log(decisionOptions);
    }
    e.preventDefault();
}

const onRemoveAll = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    if(app.options.length > 0){
        const randomIndex = Math.floor(Math.random() * app.options.length);
        alert("Here's what you should do: " + app.options[randomIndex]);
        renderApp();
    } else {
        alert('Please add some options');
    }
}

const renderApp = () => {
    const template = ( 
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length) ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length < 1} onClick={onMakeDecision}>What should I do?</button>
            <button disabled={app.options.length < 1} onClick={onRemoveAll}>Remove all</button>
            
            <ol>
            {
                app.options.map((option) => {
                    return <li key={app.options.indexOf(option)}>{option}</li>
                })
            }
            </ol>
            
            <form onSubmit={onFormSubmit}>
                <span>
                    <input type='text' name='option'/>  
                    <button>Add Option</button>
                </span>
            </form>
        </div>
    );  

    ReactDOM.render(template, appRoot);
}

const appRoot = document.querySelector('#app');

renderApp();


