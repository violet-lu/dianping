const headers = new Headers({
  "Accept": "application/json",
  "Content-Type": "application/json"
})

function get(url) {
  return fetch(url, {
    method: "GET",
    headers: headers
  }).then(response => {
    handleResponse(url, response);
  }).catch(err => {
    console.error('Request failed. Url = ${url}. Message=${err}')
    return Promise.reject({error: {message: "Request failed"}})
  })
}

function post(url, data) {
    return fetch(url, {
      method: "POST",
      headers: headers,
      body: data
    }).then(response => {
      handleResponse(url, response);
    }).catch(err => {
      console.error('Request failed. Url = ${url}. Message=${err}')
      return Promise.reject({error: {message: "Request failed"}})
    })
}

//处理response
function handleResponse(url, response) {
  if(Response.status === 200) {
    return Response.json();
  } else {
    console.error('Request failed, Url = ${url}' )
    return Promise.reject({error: {message: "Request failed due to serve error"}})
  }
}

export {get, post}