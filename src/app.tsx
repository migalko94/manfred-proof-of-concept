import { useState } from "react";

import { EditorJSON } from "./editorjson";

export const App = () => {
  const [value, setValue] = useState<string>(
    "Pega aquí tu JSON en formato MAC"
  );

  const handleChange = (update: string) => {
    setValue(update);
  };

  const handleOnExport = () => console.log(JSON.stringify(value));

  const handleReset = () => setValue("");

  return (
    <>
      <EditorJSON value={value} onChange={handleChange} />
      <button onClick={handleOnExport}>Send</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
