export async function login(credentials) {
  const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });
  return await response.json();
}

export async function register(userInfo) {
  const response = await fetch("http://localhost:5000/api/auth", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  });
  return await response.json();
}