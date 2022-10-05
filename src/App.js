import { render } from "react-dom";
import LibraryContainer from "./Containers/LibraryContainer";

const App = () => {
  return (
    <div>
      <h1>Digital Library</h1>
      <section className="library-container">
        <LibraryContainer />
      </section>
    </div>
  );
};
render(<App />, document.getElementById("root"));
