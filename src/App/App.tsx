import { ReactNode, useState } from 'react';
import Header from './components/header/Header';
import RefDek from './components/RefDek/RefDek';
import RefDekExamples from './models/RefDekExamples';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const latestDek: number = 0;
  let [currentDek, setTab] = useState(latestDek);

  const refDeks: Map<number, RefDek> = new Map(
    RefDekExamples().map((refDek, index) => [index, refDek]),
  );

  function displayNewDekModal(): ReactNode {
    console.log('Display new dek modal');
    return <div>New Dek Modal</div>;
  }

  return (
    <>
      <div className='app-container'>
        <Header></Header>
        <div className='app-content'>
          {refDeks.has(currentDek) && refDeks.get(currentDek) ? (
            refDeks.get(currentDek)!.render()
          ) : (
            <div className='ref-dek-container'>{displayNewDekModal()}</div>
          )}
        </div>
      </div>
      <Footer
        refDeks={Array.from(refDeks.values())}
        defaultTab={latestDek}
        onTabChange={setTab}
      ></Footer>
    </>
  );
}

export default App;
