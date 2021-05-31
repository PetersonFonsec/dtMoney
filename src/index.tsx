import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transactions: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: "deposit",
          category: "Desenvolvimento",
          amount: 3000,
          createdAt: new Date("2021-03-12 09:00:00"),
        },
        {
          id: 2,
          title: "Imposto de Renda",
          type: "withdraw",
          category: "Imposto",
          amount: 400,
          createdAt: new Date("2021-04-09 09:00:00"),
        },
        {
          id: 3,
          title: "DAS",
          type: "withdraw",
          category: "Desenvolvimento",
          amount: 60,
          createdAt: new Date("2021-04-09 09:00:00"),
        },
      ],
    });
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
