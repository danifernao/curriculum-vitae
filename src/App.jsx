import CurriculumVitae from "./components/CurriculumVitae";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(faXTwitter, faGithub, faLinkedin);

function App() {
  return <CurriculumVitae />;
}

export default App;
