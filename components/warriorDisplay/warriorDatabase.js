export const warriorDatabase = {
  warriors: [
    {
      id: 1,
      rating: 5,
      secret: "Nine-tailed Fox",
      username: "Naruto",
      weapon: "Rasengan"
    },
    {
      id: 2,
      rating: 4,
      secret: "Wife-Mode",
      username: "Hinata",
      weapon: "Biakugan"
    }
  ],
  all: function() {
    return this.warriors;
  },
  get: function(id) {
    const isWarrior = w => w.number === id;
    return this.warriors.find(isWarrior);
  }
};
