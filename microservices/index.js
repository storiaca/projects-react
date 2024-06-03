import UserService from "./services/user.service.js";
import EmailService from "./services/email.service.js";

async function startApp() {
  // Start services
  await UserService.start();
  await EmailService.start();

  try {
    // Simulate user creation
    const newUser = await UserService.call("user.createUser", {
      username: "john",
      email: "john@gmail.com",
    });
    console.log("New user created: ", newUser);
    const users = await UserService.call("user.getUsers");
    console.log("All users: ", users);
    // Simulate sending email
    const emailResult = await EmailService.call("email.sendEmail", {
      recipient: newUser.email,
      subject: "Welcome to our platform!",
      content: "Thank you for singing up",
    });
    console.log(emailResult);
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await UserService.stop();
  }
}

startApp();
