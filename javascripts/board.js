class Board {
  constructor() {
    this.positions = ["+","+","+","+","+","+","+","+","+"]

  }

  render(callback){
    let $board = $("#board")
    this.positions.forEach((position) => {
      $board.append(`<div id="${i}" class="square">${position}</div>`)
    })
    callback()
  }

}
