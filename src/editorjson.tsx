import { useEffect, useRef, useState } from "react";

import { basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { json } from "@codemirror/lang-json";
import { EditorView, ViewUpdate } from "@codemirror/view";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const EditorJSON: React.FC<Props> = (props) => {
  const { value, onChange } = props;

  const [view, setView] = useState<EditorView | null>(null);

  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      let editorState = EditorState.create({
        doc: value,
        extensions: [
          basicSetup,
          json(),
          EditorView.updateListener.of((u: ViewUpdate) =>
            onChange(u.state.doc.toString())
          ),
          EditorView.theme({
            "&": {
              fontSize: "14pt",
              border: "0.5px solid silver",
              height: "350px",
            },
            ".cm-gutters": {
              color: "grey",
              minHeight: "350px",
            },
            ".cm-scroller": {
              overflow: "auto",
              minHeight: "350px",
              minWidth: "500px",
              maxHeight: "700px",
              maxWidth: "1000px",
            },
          }),
        ],
      });

      setView(
        new EditorView({
          state: editorState,
          parent: codeRef.current,
        })
      );

      return () => {
        view?.destroy();
      };
    } else {
      throw new Error("Se ha producido un error con el EditorJSON");
    }
  }, []);

  useEffect(() => {
    if (view) {
      let transaction = view.state.update({
        changes: {
          from: 0,
          to: view.state.doc.length,
          insert: value,
        },
      });
      if (value !== view.state.doc.toString()) {
        view.dispatch(transaction);
      }
    }
  }, [value]);

  return <div ref={codeRef} />;
};
