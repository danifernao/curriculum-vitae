import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

function Language({ handleData }) {
  const [currentLang, setCurrentLang] = useState("es");
  const selectRef = useRef(null);

  // Idiomas habilitados:
  const supportedLangs = {
    en: { name: "English", selectLabel: "Change language" },
    es: { name: "Español", selectLabel: "Cambiar idioma" },
  };

  const changeLanguage = (langCode = null) => {
    const language = langCode ? langCode : selectRef.current.value;

    selectRef.current.disabled = true;

    setCurrentLang(language);
    localStorage.setItem("lang", language);

    handleData(null);

    import(`../assets/lang/${language}.json`)
      .then((response) => {
        handleData({ status: "success", data: response });
      })
      .catch((_) => {
        handleData({ status: "error", data: null });
      })
      .finally(() => (selectRef.current.disabled = false));

    document.documentElement.lang = language;
  };

  useEffect(() => {
    const locale = new Intl.Locale(navigator.language);
    const savedLang = localStorage.getItem("lang");

    const language = savedLang
      ? savedLang
      : locale.language in supportedLangs
      ? locale.language
      : currentLang;

    changeLanguage(language);
  }, []);

  return (
    <select
      className="language"
      onChange={() => changeLanguage()}
      value={currentLang}
      ref={selectRef}
      aria-label={supportedLangs[currentLang].selectLabel}
    >
      {Object.keys(supportedLangs).map((code, i) => (
        <option value={code} key={i}>
          {supportedLangs[code].name}
        </option>
      ))}
    </select>
  );
}

Language.propTypes = {
  handleData: PropTypes.func,
};

export default Language;
