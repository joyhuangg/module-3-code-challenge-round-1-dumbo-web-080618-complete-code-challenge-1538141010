class Comment {
  constructor(comment,adapter){
    this.id = comment.id
    this.content = comment.content
    this.image_id = comment.image_id
    this.created_at = comment.created_at
    this.updated_at = comment.updated_at
    this.adapter = adapter
  }

  renderLI(){
    let comment = document.createElement('li')
    comment.innerText = this.content
    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = "X"
    comment.append(deleteBtn)
    deleteBtn.addEventListener('click', (e) => {
      this.deleteComment(e)
    })
    return comment
  }

  deleteComment(e){
    let commentLI = e.target.parentElement
    let id = this.id
    this.adapter.delete(`${this.adapter.baseURL}/comments/${id}`)
    commentLI.remove()
  }
}
