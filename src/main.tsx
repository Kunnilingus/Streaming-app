import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./firebase.ts";
import { Provider } from "react-redux";
import { persistor, store } from "./store/index.ts";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
    </PersistGate>
  </Provider>
);
