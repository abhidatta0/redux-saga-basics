import './App.css';
import AnotherComp from './components/AnotherComp';
import Counter from './components/Counter';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <AnotherComp />
      <hr />
      <Quotes />
    </div>
  );
}

export default App;
