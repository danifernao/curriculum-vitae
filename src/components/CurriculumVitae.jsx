import Header from "./CurriculumVitaeHeader";
import Aside from "./CurriculumVitaeAside";
import Main from "./CurriculumVitaeMain";
import Footer from "./CurriculumVitaeFooter";
import Loading from "./CurriculumVitaeLoading";
import Language from "./CurriculumVitaeLanguage";
import { useState } from "react";

function CurriculumVitae() {
  const [cv, setCV] = useState(null);

  const handleData = (obj) => {
    setCV(obj);
  };

  return (
    <>
      {cv && cv.status === "success" ? (
        <div className="cv">
          {cv.data.header && <Header cv={cv.data.header} />}
          {cv.data.aside && <Aside cv={cv.data.aside} />}
          {cv.data.main && <Main cv={cv.data.main} />}
          {cv.data.footer && <Footer cv={cv.data.footer} />}
        </div>
      ) : (
        <Loading error={cv && cv.status === "error" ? true : false} />
      )}
      <Language handleData={handleData} />
    </>
  );
}

export default CurriculumVitae;
