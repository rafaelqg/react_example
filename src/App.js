import React from 'react';
import NavigationBar from './NavigationBar';

function App() {  
  const listItemsManual=[<div><b>Bronze</b></div>, <div><b>Silver</b></div>, <div><b>Gold</b></div>];
  const accountTypes=["Bronze", "Silver", "Gold"];
  const listItemsComputed = accountTypes.map((d) => <div key={d}><b>{d}</b></div>);
  return (
    <div>
      <h1>=== ReactJS APP ===</h1>
      <NavigationBar appdescription="Overview about ReactJS programming - Component demo" ></NavigationBar>
      <br />
           
    </div>
  );
}
/*
 <div>Manual list</div>
      {listItemsManual}
      <div>Computed list</div>
      {listItemsComputed}
*/
export default App;

