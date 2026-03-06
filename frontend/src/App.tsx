// Main application file that imports and displays components

import Heading from "./components/Heading";
import TeamList from "./components/TeamList";

function App() {
  return (
    <div>
      <Heading />
      <TeamList />
    </div>
  );
}

export default App;