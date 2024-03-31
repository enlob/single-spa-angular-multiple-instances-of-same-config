import { registerApplication, start } from "single-spa";

registerApplication({
  name: "parent",
  app: () =>
    System.import(
      "parent"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
