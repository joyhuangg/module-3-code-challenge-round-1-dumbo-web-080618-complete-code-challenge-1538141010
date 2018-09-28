document.addEventListener('DOMContentLoaded', function() {

  const yourUUID = "40bacccb-3701-4415-8ccb-ba4094922999" //Enter your assigned uuid here

  const imageURL = `https://randopic.herokuapp.com/images/${yourUUID}`

  let imageId = 878 //Enter the id from the fetched image here

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const baseURL = "https://randopic.herokuapp.com"

  let adapter = new Adapter(baseURL)

  adapter.get(imageURL)
    .then((imageObj) => {
      let image = new Image(imageObj, adapter)
      image.renderImage();
    })




})
