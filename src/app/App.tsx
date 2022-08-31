import { Routes } from "./routes";
import { LoggedUserProvider } from "./shared/context";

export const App = () => {
  return (
    <LoggedUserProvider>
      <Routes />
    </LoggedUserProvider>
  );
}

export default App;
