import ExampleComponent from './Components/ExampleComponent'

const App = () => {

    return `
    <div class="header">
    <h1>Header</h1>
    </div>
    <br />
    <div class="wrapper-component">
    ${ExampleComponent()}
    </div>
    `
}

const updateTree = () => {
    document.getElementById("app").innerHTML = App();
}

//? User set state to trigger rerender of the app based on a change in state
const setState = (callback) => {
    callback();
    updateTree(); // extracted function
  };

updateTree();

export default App;