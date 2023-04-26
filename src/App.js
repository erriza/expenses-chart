import './App.css';
import Balance from './components/balance';
import Chartcomponent from './components/Chartcomponent';

function App() {
  return (
    <div className="bg-orange-100 min-h-screen">
      <div className='p-7 bg-orange-100'>
        <Balance/>
        <Chartcomponent/>
      </div>
    </div>
  );
}

export default App;
