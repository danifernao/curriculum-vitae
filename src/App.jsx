import CurriculumVitae from "./components/CurriculumVitae";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  return <CurriculumVitae />;
}

export default App;
