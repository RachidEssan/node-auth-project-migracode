const fetchedData = async (credentials) => {
  return fetch('http://localhost:5000/user/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
};

const handleSignUp = async (e) => {
  e.preventDefault();
  const response = await registerUser({
    name,
    email,
    password,
  });
  return response.isAuthenticated;
};
