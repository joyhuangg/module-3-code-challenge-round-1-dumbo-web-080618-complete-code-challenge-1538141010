class Adapter{
  constructor(baseURL){
    this.baseURL = baseURL
  }

  get(path){
    return fetch(path).then(res => res.json())
  }

  //not working!!
  patch(path, body){
    return fetch(path, {
       method: "PATCH", // *GET, POST, PUT, DELETE, etc.
       headers: {
           'Accept': 'application/json',
           "Content-Type": "application/json; charset=utf-8"
       },
       body: JSON.stringify(body), // body data type must match "Content-Type" header
    })
      .then(res => res.json())
  }

  post(path, body){
    return fetch(path, {
       method: "POST", // *GET, POST, PUT, DELETE, etc.
       headers: {
           'Accept': 'application/json',
           "Content-Type": "application/json; charset=utf-8"
       },
       body: JSON.stringify(body), // body data type must match "Content-Type" header
    })
      .then(res => res.json())
  }

  delete(path){
    return fetch(path, {
      method: "DELETE",
      headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json; charset=utf-8"
      }
    })
      .then(res => res.json())
  }

}
