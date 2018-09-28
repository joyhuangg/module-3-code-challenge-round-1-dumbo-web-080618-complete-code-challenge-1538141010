class Image {
  constructor(image, adapter){
    this.id = image.id
    this.url = image.url
    this.name = image.name
    this.like_count = image.like_count
    this.uuid = image.uuid
    this.comments = image.comments
    this.adapter = adapter
  }

  renderImage(){
    const imageCard = document.querySelector('#image_card')
    const image = document.querySelector('#image')
    const name = document.querySelector('#name')
    const likes = document.querySelector('#likes')
    const likeBtn = document.querySelector('#like_button')
    const commentForm = document.querySelector('#comment_form')
    const comments = document.querySelector('#comments')
    image.src = this.url;
    name.innerHTML = this.name
    likes.innerHTML = this.like_count
    this.comments.forEach((commentObj) => {
      let comment = new Comment(commentObj, this.adapter)
      let li = comment.renderLI();
      comments.append(li);
    })


    likeBtn.addEventListener('click', (e) => {
      let newLikes = this.increaseLikes();
      likes.innerHTML = newLikes;
      this.adapter.post(`${this.adapter.baseURL}/likes`, {
        image_id: this.id
      })
    })

    commentForm.addEventListener('submit', (e) => {
      e.preventDefault()
      let comment = e.target.comment
      this.adapter.post(`${this.adapter.baseURL}/comments`, {
        image_id: this.id,
        content: e.target.comment.value
      })
        .then((commentObj) => {
          let comment = new Comment(commentObj, this.adapter);
          let li = comment.renderLI();
          comments.append(li)
        })
      comment.value = ''
    })

  }

  increaseLikes(){
    let likes = ++this.like_count;
    return likes;
  }

}


// <div id="image_card" class="card col-md-4">
//     <img id="image" data-id/>
//     <h4 id="name"></h4>
//     <span>Likes:
//       <span id="likes">0</span>
//     </span>
//     <button id="like_button">Like</button>
//     <form id="comment_form">
//       <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
//       <input type="submit" value="Submit"/>
//     </form>
//     <ul id="comments">
//
//     </ul>
// </div>
