
import './App.css';
import { HeadBar } from './components';
import { BaseHeaderBar } from './components/Parts';
import { HeaderPart } from './components/Parts/HeaderPart';


function App() {
  return (
    <>
      <div className="App">
        <BaseHeaderBar />
        <HeaderPart />
      </div>
    </>
  );
}

export default App;
