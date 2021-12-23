
import './App.css';
import Hello from './Hello'

function App( {name, age} ) {
  return <div>
            <h1>Hello From <strong>{name}</strong>, age: {age + 10}</h1>
            
            <Hello fname={name}></Hello>
          </div>
}

export default App;
