const diceroll = {
_d2: () => {
  return Math.floor(Math.random() * 2)
  },
_d4: () => {
  return Math.floor(Math.random() * 4)
  },
_d6: () => {
  return Math.floor(Math.random() * 6)
  },
_d8: () => {
  return Math.floor(Math.random() * 8)
  },
_d10: () => {
  return Math.floor(Math.random() * 10)
  },
_d12: () => {
  return Math.floor(Math.random() * 12)
  },
_d20: () => {
  return Math.floor(Math.random() * 20)
  },
_d100: () => {
  return Math.floor(Math.random() * 100)
  },
get d2 () {
  return this._d2()
  },
get d4 () {
  return this._d4()
  },
get d6(){return this._d6();},
get d8(){return this._d8();},
get d10(){return this._d10();},
get d12(){return this._d12();},
get d20(){return this._d20();},
get d100(){return this._d100();}
}
module.exports.diceroll = diceroll