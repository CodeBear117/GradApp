// hardcoded credentials for a mock user to sign into GradApp.

const mockCredentials = {
    email: "user@example.com",
    password: "password",
  };
  
  export const authenticate = (email, password) => {
    return email === mockCredentials.email && password === mockCredentials.password;
  };