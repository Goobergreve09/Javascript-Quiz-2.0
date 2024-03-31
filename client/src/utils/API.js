import AuthService from "./auth";

const handleFetchError = (error) => {
  console.error("Fetch Error:", error);
  // Perform appropriate action based on the error
  // For example, redirect the user to the login page or display an error message
  if (error instanceof TypeError) {
    // Handle network errors
    console.error("Network Error:", error.message);
    // Display an appropriate error message to the user
  } else if (error instanceof SyntaxError) {
    // Handle JSON parsing errors
    console.error("JSON Parsing Error:", error.message);
    // Display an appropriate error message to the user
  } else {
    // Handle other types of errors
    console.error("Unknown Error:", error.message);
    // Display a generic error message to the user
  }
};

export const getAllUsers = () => {
  return fetch("/api/users", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      handleFetchError(error);
    });
};

export const getMe = () => {
  const token = AuthService.getToken();
  console.log("Using token:", token);
  return fetch("/api/users/me", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      handleFetchError(error);
    });
};
