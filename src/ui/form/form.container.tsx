import { useState } from "react";

import { FormComponent } from "./form.component";

export const FormContainer = () => {
  const [text, setText] = useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => (
    e.preventDefault(), console.log(JSON.stringify(text))
  );

  return <FormComponent handleSubmit={handleSubmit} setText={setText} />;
};
