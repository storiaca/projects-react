import UserService from "./services/user.service.js";

async function startApp() {
  // Start services
  await UserService.start();

  try {
    // Simulate user creation
    const newUser = await UserService.call("user.createUser", {
      username: "john",
      email: "john@gmail.com",
    });
    console.log("New user created: ", newUser);
    const users = await UserService.call("user.getUsers");
    console.log("All users: ", users);
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await UserService.stop();
  }
}

startApp();
