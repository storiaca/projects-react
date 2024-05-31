import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

function generateId() {
  return Math.floor(Math.random() * 1000) + 1;
}
// u realnosti ovi podaci nam dolaze iz baze
const users = [];

broker.createService({
  name: "user",
  actions: {
    createUser(ctx) {
      const { username, email } = ctx.params;
      const newUser = { id: generateId(), username, email };
    },
  },
});
