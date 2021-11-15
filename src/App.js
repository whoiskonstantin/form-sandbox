import { useState } from "react";
// Components.
import InputField from "./components/InputField.js";
import SubmitButton from "./components/SubmitButton.js";
import ErrorMessage from "./components/ErrorMessage.js";
// Utils.
import { mockSubmitRequest } from "./utils/index.js";
import "./styles.css";

const errorInitialState = { username: "", password: "", api: "" };

export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(errorInitialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    // Validation logic...
    if (!userName && !password) {
      setErrors({
        username: "Username is required",
        password: "Password is required"
      });
      return;
    }

    if (!userName) {
      setErrors({ ...errorInitialState, username: "Username is required" });
      return;
    }

    if (!password) {
      setErrors({ ...errorInitialState, password: "Password is required" });
      return;
    }

    setIsLoading(true);

    const response = mockSubmitRequest();

    try {
      await response;
      setErrors(errorInitialState);
      setIsUserSignedIn(true);
    } catch (error) {
      setErrors({ ...errorInitialState, api: error.message });
    }
    setIsLoading(false);
  }

  return (
    <div className="App">
      {isUserSignedIn ? (
        <h1>Thanks for singing up!</h1>
      ) : (
        <>
          <h1>Sign up</h1>
          <form>
            <InputField
              name={"Username"}
              value={userName}
              setValue={setUserName}
            />
            <InputField
              name={"Password"}
              value={password}
              setValue={setPassword}
            />
            <ErrorMessage errors={errors} />
            <SubmitButton handleSubmit={handleSubmit} isLoading={isLoading} />
          </form>
        </>
      )}
    </div>
  );
}
