import { NavBar } from "./components/NavBar";
import { ViewNotes } from "./components/ViewNotes";
import { Footer } from "./components/footer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ViewNotes />
      <Footer />
    </div>
  );
}

export default App;
