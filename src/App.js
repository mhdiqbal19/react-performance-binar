import React, { useCallback, useState } from 'react';
import './App.css';

const Kids = React.lazy(() => import("./component/Kids"))
const Boys = React.lazy(() => import("./component/Boys"))

function App() {
  const [count, setCount] = useState(0);
  const [countChild, setCountChild] = useState(0);
  console.log("Cpmponent Bapak");

  const handleTambah = () => {
    return setCount(count + 1)
  }

  // const handleChild = () => {
  //   setCountChild((prevState) => prevState + 1)
  // }
  // const memoHandleAnak = useCallback(() => handleChild(), []);

  const memoHandleAnak = useCallback(() => setCountChild((prevState) => prevState + 1), []);


  return (
    <div className="App">
      <h3>Component Orang Tua</h3>
      <h1>{count}</h1>
      <button onClick={handleTambah}>Tambah</button>
      <hr/>
      <Kids countChild={countChild} handleChild={memoHandleAnak}/>
      <hr/>
      <Boys/>
    </div>
  );
}

export default App;
