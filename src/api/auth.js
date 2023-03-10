export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };

  // Save user in DB and get token
  fetch(`https://task-management-server-green.vercel.app/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("taskQuery_token", data.token);
    });
};
