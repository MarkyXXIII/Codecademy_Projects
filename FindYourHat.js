const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(array = [[]] ) {
    this.field = array;
    this._playerPosition = [];
  }
//track and update player position after move
  set playerPosition(playerPos) {
    this._playerPosition = playerPos;
    this.field[playerPos[0]][playerPos[1]] = pathCharacter;
  }

  print() {
    for(let i = 0; i < this.field.length; i++ ) {
    console.log(this.field[i].join(''));
    }
  }

  findStartPosition() {
    for(let i = 0; i < this.field.length; i++) {
      for(let j = 0; j < this.field[i].length; j++) {
        if (this.field[i][j] === pathCharacter) {
          this.playerPosition = [i, j];
        }
      }
    }
  }

  promptInput() {
    let move = prompt(`Which way will you go?`);
    if (move !== 'u' && move !== 'd' && move !== 'l' && move !== 'r') {
      console.log(`The directions you can move in are up, down, left, and right. Press u, d, l, or r, respectively.`);
      this.promptInput();
    } else {
      this.applyPlayerMove(move);
    }
  }

  applyPlayerMove(input) {
    let row = this._playerPosition[0];
    let col = this._playerPosition[1];
    switch (input) {
      case 'u':
      if (row == 0) {
        console.log('You went out of bounds. Try again.'); 
      } else  if (this.field[row - 1][col] == hole) {
        console.log('You fell down a hole!');
      } else if (this.field[row - 1][col] == hat) {
        console.log('Congratulations!! You have found your hat.');  
      } else {
        this.playerPosition = [row - 1, col];
        this.print();
        this.promptInput();
      }
      break;
      case 'd':
      if (row  + 1 == this.field.length) {
        console.log('You went out of bounds. Try again.'); 
      } else  if (this.field[row + 1][col] == hole) {
        console.log('You fell down a hole!');
      } else if (this.field[row + 1][col] == hat) {
        console.log('Congratulations!! You have found your hat.');  
      } else {
        this.playerPosition = [row + 1, col];
        this.print();
        this.promptInput();
      }
      break;
      case 'l':
      if (col == 0) {
        console.log('You went out of bounds. Try again.'); 
      } else  if (this.field[row][col - 1] == hole) {
        console.log('You fell down a hole!');
      } else if (this.field[row][col - 1] == hat) {
        console.log('Congratulations!! You have found your hat.');
      } else {
        this.playerPosition = [row, col -1];
        this.print();
        this.promptInput();
      }
      break;
      case 'r':
      if (col == this.field[row].length) {
        console.log('You went out of bounds. Try again.'); 
      } else  if (this.field[row][col + 1] == hole) {
        console.log('You fell down a hole!');
      } else if (this.field[row][col + 1] == hat) {
        console.log('Congratulations!! You have found your hat.');
      } else {
        this.playerPosition = [row, col + 1];
        this.print();
        this.promptInput();
      }
      break;
    }
  }

  static generateField(height, width, difficulty = 15) {
      const field = Array(height);
      for(let i = 0; i < height; i++) {
        field[i] = Array(width).fill(fieldCharacter);
      }

      //random hat location

      const hatLocationY = Math.floor(Math.random() * height);
      const hatLocationX = Math.floor(Math.random() * width);
      field[hatLocationY][hatLocationX] = hat;

      //random starting position and check for hat at same position

      let startLocationY;
      let startLocationX;
      do{
      startLocationY = Math.floor(Math.random() * height);
      startLocationX = Math.floor(Math.random() * width);
      }
      while (field[startLocationY][startLocationX] === hat);
      field[startLocationY][startLocationX] = pathCharacter;

      //drill holes and don't ovewrite the hat or start location

      let holeCount = 0;
      while (holeCount < Math.floor(height * width * difficulty / 100)) {
        const holeLocationY = Math.floor(Math.random() * height);
        const holeLocationX = Math.floor(Math.random() * width);
        if (field[holeLocationY][holeLocationX] === hat || field[holeLocationY][holeLocationX] === pathCharacter){
          null;
        } else {
          field[holeLocationY][holeLocationX] = hole;
          holeCount++;
        }
      };
      return field; 
  }
};



const myField = new Field(Field.generateField(10, 30 , 30));

myField.findStartPosition();
myField.print();
myField.promptInput();