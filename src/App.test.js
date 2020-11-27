import React from "react";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

//todo -- needs context.
test("Mulan is in the movies", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  setTimeout(() => {
    expect(getByText(/Mulan/i)).toBeInTheDocument();
  }, 3000);
});
