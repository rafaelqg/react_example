import React from 'react';
import NavigationBar from './NavigationBar';

function App() {
  const accountTypes=["Bronze", "Silver", "Gold"];
  const listItems = accountTypes.map((d) => <li key={d}>{d}</li>);

  return (
    <div>
      <h1>=== ReactJS APP ===</h1>
      <NavigationBar username="Rafael Q. Gonçalves"></NavigationBar>
      <br />
      <ul>
      {listItems}
      </ul>
    </div>
  );
}

export default App;

