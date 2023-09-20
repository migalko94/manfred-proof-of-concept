interface Props {
  codeRef: React.RefObject<HTMLElement>;
}

export const CodeMirrorComponent: React.FC<Props> = (props) => {
  const { codeRef } = props;
  return <span ref={codeRef} />;
};
