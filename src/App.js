import logo from './logo.svg';
import './App.css';

const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed',
  },
  {
    id: 'cato',
    name: 'Little Cato',
  },
  {
    id: 'kvn',
    name: 'KVN',
  },
  {
    id: 'mooncake',
    name: 'Mooncake',
  },
  {
    id: 'quinn',
    name: 'Quinn Ergon',
  }
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Final Space Characters</h1>
        <ul className="characters">
          {finalSpaceCharacters.map(({id, name, thumb}) => {
            return (
              <li key={id}>
                <p>
                  { name }
                </p>
              </li>
            );
          })}
        </ul>
      </header>
      <p>
        Images from <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">Final Space Wiki</a>
      </p>
    </div>
  );
}

export default App;
