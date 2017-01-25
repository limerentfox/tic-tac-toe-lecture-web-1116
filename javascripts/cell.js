class Cell {

  constructor(play, index){
    this.play = play
    this.index = index
  }

  build(){
    return `<div id=${this.index} class='cell col-m-4'>${this.play}</div>`
  }
}
