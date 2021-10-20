function submitData(name,email){
  let postRequest = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: `${name}`,
      email: `${email}`
    })
  }

  return fetch("http://localhost:3000/users",postRequest)
  .then(response => response.json())
  .then(json => document.body.append(json.id))
  .catch(error => document.body.append(error.message))
}