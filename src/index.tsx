import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transactions: Model,
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => this.schema.all("transactions"));

    this.post("/transactions", (schema, request) =>
      schema.create("transactions", JSON.parse(request.requestBody))
    );
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
