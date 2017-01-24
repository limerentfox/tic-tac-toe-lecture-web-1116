class Cell {

  constructor(play, index){
    this.play = play
    this.index = index
  }

  build(){
    return `<div id=${this.index} class='cell'>${this.play}</div>`
  }
}
