type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(term: string, definition: string) {
    if (!this.words[term]) {
      this.words[term] = definition;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(term: string) {
    delete this.words[term];
  }
  update(term: string, newDef: string) {
    if (this.words[term]) {
      this.words[term] = newDef;
    }
  }
  showAll() {
    Object.keys(this.words).forEach((term) =>
      console.log(`${term}: ${this.words[term]}`)
    );
  }
  count() {
    return Object.keys(this.words).length;
  }
}

const dictionary = new Dict();

dictionary.add("kimchi", "내가 제일 좋아하는 음식");
dictionary.showAll();
console.log(dictionary.count());
dictionary.update("kimchi", "김치전 원재료");
console.log(dictionary.get("김치"));
dictionary.delete("김치");
console.log(dictionary.count());
