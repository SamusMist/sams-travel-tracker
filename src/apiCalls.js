let fetchData = (param) => {
    return fetch(`http://localhost:3001/api/v1/${param}`).then(response => response.json());
}

//Post Data to Trips API
const postData = (url, newData) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(newData),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    console.log(response, "response")
    if(!response.ok) {
      throw new Error(`Error in promise, response not ok`);
    } else {
    response.json()
  }
  })
}
export {fetchData, postData};
