const BASE_URL = 'http://localhost:5000'

export function createVacant(data) {
  return fetch(`${BASE_URL}/vacants/create`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

export function getVacants () {
  return fetch(`${BASE_URL}/vacants`, {
    method: 'GET'
  }).then(res => res.json())
    .catch(err => console.log(err))
}

export function updateVacant (data) {
  return fetch(`${BASE_URL}/vacants/update/:id`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }).then(res => res.json())
    .catch(err => console.log(err))
}