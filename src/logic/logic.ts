import { basicSetup } from "codemirror";

import { EditorState } from "@codemirror/state";
import { json } from "@codemirror/lang-json";
import { EditorView, ViewUpdate } from "@codemirror/view";

//TODO: concretar paquetes codemirror y prescindir del setup
export const createCodeMirror = (
  update: (update: ViewUpdate) => void,
  e: HTMLElement
) => {
  let state = EditorState.create({
    extensions: [basicSetup, json(), EditorView.updateListener.of(update)],
  });
  new EditorView({
    state,
    parent: e,
  });
};
