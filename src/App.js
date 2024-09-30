import './App.css';
import Button from './components/Button';
import ButtonStyled from './components/ButtonStyled';
import ConditionalComponent from './components/ConditionalComponent';
import ConditionalRendering from './components/ConditionalRendering';
import Counter from './components/Counter';
import DisplayData from './components/DisplayData';
import DisplayList from './components/DisplayList';
import Event from './components/Event';
import FruitsList from './components/FruitList';
import InlineStyledDiv from './components/InlineStyle';
import MyComponent from './components/MyComponent';
import MyFunctionalComponent from './components/MyFunctionalComponent';
import ParentComponent from './components/nestedComponents/ParentComponent';
import Greeting from './components/Greeting';

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
      <DisplayData />
      <DisplayList />
      <ConditionalRendering />
      <ConditionalRendering isLoggedIn={true}/>
      <ConditionalComponent />
      <ConditionalComponent isAdmin={true}/>
      <FruitsList />
      <Event />
      <Counter />
      <Greeting 
        name="John"
        message="Welcome to My app!"/>
    </div>
  );
}

export default App;
