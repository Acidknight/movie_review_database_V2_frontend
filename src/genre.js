class Genre {
    constructor(id, genreAttributes) {
      this.id = id;
      this.name = genreAttributes.name;
      
      Genre.all.push(this);
    }
  
  }
  
   Genre.all = [];