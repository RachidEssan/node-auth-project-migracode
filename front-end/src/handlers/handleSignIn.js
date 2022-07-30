const fetchedData = async (credentials) => {
    return fetch('http://localhost:5000/user/sign-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(data => data.json())
}

const handleSignIn = async (e) => {
    e.preventDefault();
    const response = await fetchedData({
        email,
        password,
    });
    return response.isAuthenticated
};