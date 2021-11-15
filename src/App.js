import { useState } from "react";
// Components.
import InputField from "./components/InputField.js";
import SubmitButton from "./components/SubmitButton.js";
import ErrorMessage from "./components/ErrorMessage.js";
// Utils.
import { mockSubmitRequest } from "./utils/index.js";
import "./styles.css";

export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!password) {
      setErrors({ ...errors, password: "Password is required" });
    }
    setIsLoading(true);
    const response = mockSubmitRequest();

    try {
      console.log(await response);
    } catch (error) {
      console.log("error", error);
    }
    setIsLoading(false);
  }

  return (
    <div className="App">
      <h1>Sign up</h1>
      <form>
        <InputField name={"Username"} value={userName} setValue={setUserName} />
        <InputField name={"Password"} value={password} setValue={setPassword} />
        <ErrorMessage errors={errors} />
        <SubmitButton handleSubmit={handleSubmit} isLoading={isLoading} />
      </form>
    </div>
  );
}
