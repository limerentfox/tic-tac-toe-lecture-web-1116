class TicTacToe {

  constructor(){
    this.board = new Board();
    this.currentMove = 'X'
  }

  render(){
    this.board.render(this.addEventHandlers.bind(this))
  }

  hasWinner(){
    return false
  }

  addEventHandlers(){
    $('.cell').click(this.updateBoard.bind(this))
  }

  updateBoard(event){
    let id = parseInt(event.target.id)
    this.board.positions[id] = this.currentMove
    this.updateCurrentMove()
    this.render()
  }

  updateCurrentMove(){
    if (this.currentMove === 'X') {
      this.currentMove = 'O'
    } else {
      this.currentMove = 'X'
    }
  }
}
