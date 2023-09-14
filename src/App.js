import Accordion from "./Components/Accordion/Accordion";
import { Search } from "./Components/Search/Search";
import data from "./data/celebrities.json";

function App() {
  return (
    <div className="App">
      <Search data={data} />
      {data.map((item) => (
        <Accordion user={item} />
      ))}
    </div>
  );
}

export default App;
