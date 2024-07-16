import { useCallback, useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-text";

import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/theme-crimson_editor";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-dawn";
import "ace-builds/src-noconflict/theme-eclipse";

import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-dracula";

import "ace-builds/src-noconflict/ext-language_tools";

const Ace = () => {
  const [language, setLanguage] = useState("text");
  const [theme, setTheme] = useState("chrome");
  const [code, setCode] = useState(``);

  function onValueChange(newValue) {
    console.log("change", newValue);
    setCode(newValue);
  }

  function handleLanguageChange(e) {
    setLanguage(e.target.value);
  }

  function handleThemeChange(e) {
    setTheme(e.target.value);
  }

  // Render editor
  return (
    <>
      <label htmlFor="lang">Language: </label>
      <select id="lang" value={language} onChange={handleLanguageChange}>
        <option value="text" disabled>
          Choose a language
        </option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="c_cpp">C++</option>
        <option value="java">Java</option>
      </select>
      <label htmlFor="theme">Theme: </label>
      <select value={theme} onChange={handleThemeChange}>
        <optgroup label="Light">
          <option value="chrome">Chrome</option>
          <option value="dawn">Dawn</option>
          <option value="eclipse">Eclipse</option>
        </optgroup>

        <optgroup label="Dark">
          <option value="cobalt">Cobalt</option>
          <option value="dracula">Dracula</option>
          <option value="monokai">Monokai</option>
        </optgroup>
      </select>
      <AceEditor
        mode={language}
        theme={theme}
        value={code}
        onChange={onValueChange}
        name="editor"
        editorProps={{ $blockScrolling: true }}
      />
    </>
  );
};

export default Ace;
export { code };
