const BASE_URL = 'http://localhost:5000'

export function userRegister(userData) {
  return fetch(`${BASE_URL}/users/create`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log(err))
}


export function getToken(data) {
  return fetch(`${BASE_URL}/users/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
}

export function getUsersBusiness () {
  return fetch(`${BASE_URL}/users/business`, {
    method: 'GET',
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export function getUsersApplicants () {
  return fetch(`${BASE_URL}/users/applicants`, {
    method: 'GET',
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export function getUser (id) {
  return fetch(`${BASE_URL}/users/show/${id}`, {
    method: 'GET',
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export function updateUser (id, data) {
  return fetch(`${BASE_URL}/users/update/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export function deleteUser (id) {
  return fetch(`${BASE_URL}/users/delete/${id}`, {
    method: 'DELETE',
  })
    .then(res => console.log('User deleted'))
    .catch(err => console.log(err))
}