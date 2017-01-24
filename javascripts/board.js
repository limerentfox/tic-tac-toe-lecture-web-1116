class Board {
  constructor(){
    this.positions = ["+", "+", "+", "+", "+", "+", "+", "+", "+"]
  }

  render(callback){
    let $board = $('#board')
    $board.html('')
    this.positions.forEach(function(play, i){
      let cell = new Cell(play, i)
      $board.append(cell.build())
    })
    callback()
  }
}
