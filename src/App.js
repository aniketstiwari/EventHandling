import React, { useState } from 'react';


const App = () => {
  const purple = '#8e44ad';
  const [bg, changeBgState] = useState(purple);
  const initext = 'click me';
  const [newtext, textState] = useState(initext);

  const bgchange = () => {
    let newbg = '#34495e';
    changeBgState(newbg);
    textState('text change 🛩️')
  }

  const bgBack = () => {
    changeBgState(purple);
    textState(initext)
  }
    

  return (
    <>
      <div style={{backgroundColor: bg}}>
        <button onClick={bgchange} onDoubleClick={bgBack}>{newtext}</button>
      </div>
    </>
  )
}


export default App;
