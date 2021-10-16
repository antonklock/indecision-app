class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.toggleDetailsVis = this.toggleDetailsVis.bind(this);
        this.state = {
            isVisable: false
        }
    }
    toggleDetailsVis(){
        this.setState((prevState) => {
            return {
                isVisable: !prevState.isVisable
            }
        });
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleDetailsVis}>{this.state.isVisable ? 'Hide details' : 'Show details'}</button>
                {this.state.isVisable && <p>Here are some details you might like!</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.querySelector('#app'));


























// const appRoot = document.querySelector('#app');

// let isHidden = true;
// let btnMessage = 'Show details';

// const template = (
//     <div>
//         <h1>Visibility App</h1>
//         <button onClick={toggletoggleDetailsVis}>{isHidden ? "Show details" : "Hide details"}</button>
//         {!isHidden && (
//             <div>
//                 <p>Here are some details you might like!</p>
//             </div>
//         ) }
//     </div>
// );

// const toggletoggleDetailsVis = () => {
//     isHidden = !isHidden;
//     renderApp();
// }

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility App</h1>
//             <button onClick={toggletoggleDetailsVis}>{btnMessage}</button>
//             <p hidden={isHidden}>Here are some details you might like!</p>
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// renderApp();
