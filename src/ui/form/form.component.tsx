import { CodeMirrorContainer } from "../codeMirror";

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setText: (text: string) => void;
}

export const FormComponent: React.FC<Props> = (props) => {
  const { handleSubmit, setText } = props;

  return (
    <form onSubmit={handleSubmit}>
      <CodeMirrorContainer setText={setText} />
      <button>Send</button>
    </form>
  );
};
