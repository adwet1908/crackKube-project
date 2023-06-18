import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import Card from './components/Card';

function App() {
  const customStyle = {
    // backgroundColor: 'white',
    color: 'white',
    backgroundColor: '#1D1F25',
    borderRadius: '25px',
    fontWeight: '60',
    padding: '10px',
    float: 'left',
    marginLeft: '40px',
    marginTop: '15px'
  }

  const cardMapping = [
    {
      id: '1', 
      
    }
  ]
 

  return (
    <div className="App">
      <div className="navigation">
        <Header />
        <Categories style={customStyle}/>
        </div>
    </div>
  );
}

export default App;
