import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList'

function App() {
  return (
    <div className="App">
      
      <header>
        <h1>IronCinema</h1>
        <p>Get yourself some popcorn! Our movie catalogue will be displayed below</p>
      </header>

      <MovieList />
      
    </div>
  );
}

export default App;
