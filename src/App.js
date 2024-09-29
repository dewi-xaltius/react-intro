import './App.css';
import Button from './components/Button';
import ButtonStyled from './components/ButtonStyled';
import InlineStyledDiv from './components/InlineStyle';
import MyComponent from './components/MyComponent';
import MyFunctionalComponent from './components/MyFunctionalComponent';
import ParentComponent from './components/nestedComponents/ParentComponent';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <MyComponent />
      <MyFunctionalComponent />
      <ParentComponent />
      <InlineStyledDiv />
      <Button />
      <ButtonStyled />
    </div>
  );
}

export default App;
