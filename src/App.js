import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
<Header />
<MovieList />
<Footer/>
      </header>
    </div>
  );
}

export default App;
