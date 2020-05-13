// Practising JavaScript Classes here
class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  } 

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(bool) {
    this._isCheckedOut = bool;
  }

  toggleCheckOutStatus() {
    return this._isCheckedOut ? this._isCheckedOut = false : this._isCheckedOut = true;
  }

  getAverageRating() {
    const sumOfRating = (accl, curVal) => accl + curVal;
    return this._ratings.reduce(sumOfRating) / this._ratings.length;
  }

  addRatings(rate){
    this._ratings.push(rate);
  }
};

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
};
/*const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRatings(4);
historyOfEverything.addRatings(5);
historyOfEverything.addRatings(5);

console.log(historyOfEverything.getAverageRating());*/


class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }

};
/*const speed = new Movie('Speed', 'Jan de Bont', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRatings(1);
speed.addRatings(1);
speed.addRatings(5);
console.log(speed.getAverageRating());*/

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

  shuffle() {
    const randNum =Math.floor(Math.random() * this._songs.length);
    return this._songs[randNum];
  }
};

const remixes = new CD('Remixex', 'Many Artists',['Stuck With U ', 'StarBoy', 'Intentions', 'Takeaway', 'Don\'t start now'
]);

console.log(remixes.shuffle());
