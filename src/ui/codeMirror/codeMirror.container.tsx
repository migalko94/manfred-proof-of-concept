import { useEffect, useRef } from "react";
import { ViewUpdate } from "@codemirror/view";

import { createCodeMirror } from "../../logic";
import { CodeMirrorComponent } from "./codeMirror.component";

interface Props {
  setText: (text: string) => void;
}

export const CodeMirrorContainer: React.FC<Props> = (props) => {
  const { setText } = props;

  const codeRef = useRef<HTMLElement>(null);

  const handleText = (u: ViewUpdate) => setText(u.state.doc.toString());

  useEffect(() => {
    codeRef.current ? createCodeMirror(handleText, codeRef.current) : "";
  }, []);

  return <CodeMirrorComponent codeRef={codeRef} />;
};
