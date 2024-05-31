
const API = 'http://localhost:3000/api'
interface User {
    username: string,
    password: string
}


export const createUserRequest = (user: User) =>
    fetch(`${API}/users`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
