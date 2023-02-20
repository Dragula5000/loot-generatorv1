const randomizer = require('./diceroll.js')
const Arrays = require('./arrays.js')
const Range = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const lootGenerator = {
gemDrops : {
  legendaryDrop: () => {
    switch(randomizer.diceroll.d4){
      case 0:
      return 'A ' + Arrays.gemArrays.gemCollection5000Gp[0] + ' Was Found!';
      case 1:
      return 'A ' + Arrays.gemArrays.gemCollection5000Gp[1] + ' Was Found!';
      case 2:
      return 'A ' + Arrays.gemArrays.gemCollection5000Gp[2] + ' Was Found!';
      case 3:
      return 'A ' + Arrays.gemArrays.gemCollection5000Gp[3] + ' Was Found!';
      break;
      }
    },
  heroicDrop: () => {
    switch(randomizer.diceroll.d8){
      case 0:
      return 'A ' + Arrays.gemArrays.gemCollection1000Gp[0] + ' Was Found!';
      case 1:
      return 'A ' + Arrays.gemArrays.gemCollection1000Gp[1] + ' Was Found!';
      case 2:
      return 'A ' + Arrays.gemArrays.gemCollection1000Gp[2] + ' Was Found!';
      case 3:
      return 'A ' + Arrays.gemArrays.gemCollection1000Gp[3] + ' Was Found!';
      case 4:
      return 'A ' + Arrays.gemArrays.gemCollection1000Gp[4] + ' Was Found!';
      case 5:
      return 'A ' + Arrays.gemArrays.gemCollection1000Gp[5] + ' Was Found!';
      case 6:
      return 'A ' + Arrays.gemArrays.gemCollection1000Gp[6] + ' Was Found!';
      case 7:
      return 'A ' + Arrays.gemArrays.gemCollection1000Gp[7] + ' Was Found!';
      break;
      }
    },
  rareDrop: () => {
    switch(randomizer.diceroll.d6){
      case 0:
      return 'A ' + Arrays.gemArrays.gemCollection500Gp[0] + ' Was Found!';
      case 1:
      return 'A ' + Arrays.gemArrays.gemCollection500Gp[1] + ' Was Found!';
      case 2:
      return 'A ' + Arrays.gemArrays.gemCollection500Gp[2] + ' Was Found!';
      case 3:
      return 'A ' + Arrays.gemArrays.gemCollection500Gp[3] + ' Was Found!';
      case 4:
      return 'A ' + Arrays.gemArrays.gemCollection500Gp[4] + ' Was Found!';
      case 5:
      return 'A ' + Arrays.gemArrays.gemCollection500Gp[5] + ' Was Found!';
      break;
      }
    },
  greaterDrop: () => {
    switch(randomizer.diceroll.d10){
      case 0:
      return 'A ' + Arrays.gemArrays.gemCollection100Gp[0] + ' Was Found!';
      case 1:
      return 'A ' + Arrays.gemArrays.gemCollection100Gp[1] + ' Was Found!';
      case 2:
      return 'A ' + Arrays.gemArrays.gemCollection100Gp[2] + ' Was Found!';
      case 3:
      return 'A ' + Arrays.gemArrays.gemCollection100Gp[3] + ' Was Found!';
      case 4:
      return 'A ' + Arrays.gemArrays.gemCollection100Gp[4] + ' Was Found!';
      case 5:
      return 'A ' + Arrays.gemArrays.gemCollection100Gp[5] + ' Was Found!';
      case 6:
      return 'A ' + Arrays.gemArrays.gemCollection100Gp[6] + ' Was Found!';
      case 7:
      return 'A ' + Arrays.gemArrays.gemCollection100Gp[7] + ' Was Found!';
      case 8:
      return 'A ' + Arrays.gemArrays.gemCollection100Gp[8] + ' Was Found!';
      case 9:
      return 'A ' + Arrays.gemArrays.gemCollection100Gp[9] + ' Was Found!';
      break;
      }
    },
  lesserDrop: () => {
    switch(randomizer.diceroll.d12){
      case 0:
      return 'A ' + Arrays.gemArrays.gemCollection50Gp[0] + ' Was Found!';
      case 1:
      return 'A ' + Arrays.gemArrays.gemCollection50Gp[1] + ' Was Found!';
      case 2:
      return 'A ' + Arrays.gemArrays.gemCollection50Gp[2] + ' Was Found!';
      case 3:
      return 'A ' + Arrays.gemArrays.gemCollection50Gp[3] + ' Was Found!';
      case 4:
      return 'A ' + Arrays.gemArrays.gemCollection50Gp[4] + ' Was Found!';
      case 5:
      return 'A ' + Arrays.gemArrays.gemCollection50Gp[5] + ' Was Found!';
      case 6:
      return 'A ' + Arrays.gemArrays.gemCollection50Gp[6] + ' Was Found!';
      case 7:
      return 'A ' + Arrays.gemArrays.gemCollection50Gp[7] + ' Was Found!';
      case 8:
      return 'A ' + Arrays.gemArrays.gemCollection50Gp[8] + ' Was Found!';
      case 9:
      return 'A ' + Arrays.gemArrays.gemCollection50Gp[9] + ' Was Found!';
      case 10:
      return 'A ' + Arrays.gemArrays.gemCollection50Gp[10] + ' Was Found!';
      case 11:
      return 'A ' + Arrays.gemArrays.gemCollection50Gp[11] + ' Was Found!';
      break;
      }
    },
  commonDrop: () => {
    switch(randomizer.diceroll.d12){
      case 0:
      return 'A ' + Arrays.gemArrays.gemCollection10Gp[0] + ' Was Found!';
      case 1:
      return 'A ' + Arrays.gemArrays.gemCollection10Gp[1] + ' Was Found!';
      case 2:
      return 'A ' + Arrays.gemArrays.gemCollection10Gp[2] + ' Was Found!';
      case 3:
      return 'A ' + Arrays.gemArrays.gemCollection10Gp[3] + ' Was Found!';
      case 4:
      return 'A ' + Arrays.gemArrays.gemCollection10Gp[4] + ' Was Found!';
      case 5:
      return 'A ' + Arrays.gemArrays.gemCollection10Gp[5] + ' Was Found!';
      case 6:
      return 'A ' + Arrays.gemArrays.gemCollection10Gp[6] + ' Was Found!';
      case 7:
      return 'A ' + Arrays.gemArrays.gemCollection10Gp[7] + ' Was Found!';
      case 8:
      return 'A ' + Arrays.gemArrays.gemCollection10Gp[8] + ' Was Found!';
      case 9:
      return 'A ' + Arrays.gemArrays.gemCollection10Gp[9] + ' Was Found!';
      case 10:
      return 'A ' + Arrays.gemArrays.gemCollection10Gp[10] + ' Was Found!';
      case 11:
      return 'A ' + Arrays.gemArrays.gemCollection10Gp[11] + ' Was Found!';
      break;
      }
    }
  },
  artDrops : {
    legendaryArt: () => {
      switch(randomizer.diceroll.d8){
        case 0:
        return 'A ' + Arrays.artArrays.artCollection7500Gp[0] + ' Was Found!';
        case 1:
        return 'A ' + Arrays.artArrays.artCollection7500Gp[1] + ' Was Found!';
        case 2:
        return 'A ' + Arrays.artArrays.artCollection7500Gp[2] + ' Was Found!';
        case 3:
        return 'A ' + Arrays.artArrays.artCollection7500Gp[3] + ' Was Found!';
        case 4:
        return 'A ' + Arrays.artArrays.artCollection7500Gp[4] + ' Was Found!';
        case 5:
        return 'A ' + Arrays.artArrays.artCollection7500Gp[5] + ' Was Found!';
        case 6:
        return 'A ' + Arrays.artArrays.artCollection7500Gp[6] + ' Was Found!';
        case 7:
        return 'A ' + Arrays.artArrays.artCollection7500Gp[7] + ' Was Found!';
        break;
      }
    },
    rareArt: () => {
      switch(randomizer.diceroll.d10){
        case 0:
        return 'A ' + Arrays.artArrays.artCollection2500Gp[0] + ' Was Found!';
        case 1:
        return 'A ' + Arrays.artArrays.artCollection2500Gp[1] + ' Was Found!';
        case 2:
        return 'A ' + Arrays.artArrays.artCollection2500Gp[2] + ' Was Found!';
        case 3:
        return 'A ' + Arrays.artArrays.artCollection2500Gp[3] + ' Was Found!';
        case 4:
        return 'A ' + Arrays.artArrays.artCollection2500Gp[4] + ' Was Found!';
        case 5:
        return 'A ' + Arrays.artArrays.artCollection2500Gp[5] + ' Was Found!';
        case 6:
        return 'A ' + Arrays.artArrays.artCollection2500Gp[6] + ' Was Found!';
        case 7:
        return 'A ' + Arrays.artArrays.artCollection2500Gp[7] + ' Was Found!';
        case 8:
        return 'A ' + Arrays.artArrays.artCollection2500Gp[8] + ' Was Found!';
        case 9:
        return 'A ' + Arrays.artArrays.artCollection2500Gp[9] + ' Was Found!';
        break;
      }
    },
    valuableArt: () => {
      switch(randomizer.diceroll.d10){
        case 0:
        return 'A ' + Arrays.artArrays.artCollection750Gp[0] + ' Was Found';
        case 1:
        return 'A ' + Arrays.artArrays.artCollection750Gp[1] + ' Was Found!';
        case 2:
        return 'A ' + Arrays.artArrays.artCollection750Gp[2] + ' Was Found!';
        case 3:
        return 'A ' + Arrays.artArrays.artCollection750Gp[3] + ' Was Found!';
        case 4:
        return 'A ' + Arrays.artArrays.artCollection750Gp[4] + ' Was Found!';
        case 5:
        return 'A ' + Arrays.artArrays.artCollection750Gp[5] + ' Was Found!';
        case 6:
        return 'A ' + Arrays.artArrays.artCollection750Gp[6] + ' Was Found!';
        case 7:
        return 'A ' + Arrays.artArrays.artCollection750Gp[7] + ' Was Found!';
        case 8:
        return 'A ' + Arrays.artArrays.artCollection750Gp[8] + ' Was Found!';
        case 9:
        return 'A ' + Arrays.artArrays.artCollection750Gp[9] + ' Was Found!';
        break;
      }
    },
    lesserArt: () => {
      switch(randomizer.diceroll.d10){
        case 0:
        return 'A ' + Arrays.artArrays.artCollection250Gp[0] + ' Was Found!';
        case 1:
        return 'A ' + Arrays.artArrays.artCollection250Gp[1] + ' Was Found!';
        case 2:
        return 'A ' + Arrays.artArrays.artCollection250Gp[2] + ' Was Found!';
        case 3:
        return 'A ' + Arrays.artArrays.artCollection250Gp[3] + ' Was Found!';
        case 4:
        return 'A ' + Arrays.artArrays.artCollection250Gp[4] + ' Was Found!';
        case 5:
        return 'A ' + Arrays.artArrays.artCollection250Gp[5] + ' Was Found!';
        case 6:
        return 'A ' + Arrays.artArrays.artCollection250Gp[6] + ' Was Found!';
        case 7:
        return 'A ' + Arrays.artArrays.artCollection250Gp[7] + ' Was Found!';
        case 8:
        return 'A ' + Arrays.artArrays.artCollection250Gp[8] + ' Was Found!';
        case 9:
        return 'A ' + Arrays.artArrays.artCollection250Gp[9] + ' Was Found!';
        break;
      }
    },
    commonArt: () => {
      switch(randomizer.diceroll.d10){
        case 0:
        return 'A ' + Arrays.artArrays.artCollection25Gp[0] + ' Was Found!';
        case 1:
        return 'A ' + Arrays.artArrays.artCollection25Gp[1] + ' Was Found!';
        case 2:
        return 'A ' + Arrays.artArrays.artCollection25Gp[2] + ' Was Found!';
        case 3:
        return 'A ' + Arrays.artArrays.artCollection25Gp[3] + ' Was Found!';
        case 4:
        return 'A ' + Arrays.artArrays.artCollection25Gp[4] + ' Was Found!';
        case 5:
        return 'A ' + Arrays.artArrays.artCollection25Gp[5] + ' Was Found!';
        case 6:
        return 'A ' + Arrays.artArrays.artCollection25Gp[6] + ' Was Found!';
        case 7:
        return 'A ' + Arrays.artArrays.artCollection25Gp[7] + ' Was Found!';
        case 8:
        return 'A ' + Arrays.artArrays.artCollection25Gp[8] + ' Was Found!';
        case 9:
        return 'A ' + Arrays.artArrays.artCollection25Gp[9] + ' Was Found!';
        break;
      }
    }
  },
  moneyDrops : {
    platinum : {
      '1-100': () => {return Math.floor(Math.random() * 100 + 1) + ' Platinum was Dropped!';},
      '100-500': () => {return Range(100, 500) + ' Platinum was Dropped!';},
      '500-1000': () => {return Range(500, 1000) + ' Platinum Was Dropped!';},
      '1000-5000': () => {return Range(1000, 5000) + ' Platinum Was Dropped!';},
      '5000-10000': () => {return Range(5000, 10000) + ' Platinum Was Dropped';}
    },
    gold : {
      '1-100': () => {return Math.floor(Math.random() * 100 + 1) + ' Gold was Dropped!'},
      '100-500': () => {return Range(100, 500) + ' Gold was Dropped!'},
      '500-1000': () => {return Range(500, 1000) + ' Gold was Dropped!'},
      '1000-5000': () => {return Range(1000, 5000) + ' Gold was Dropped!'},
      '5000-10000': () => {return Range(5000, 10000) + ' Gold was Dropped!'}
    },
    electrum : {
      '1-100': () => {return Math.floor(Math.random() * 100 + 1) + ' Electrum was Dropped!';},
      '100-500': () => {return Range(100, 500) + ' Electrum was Dropped!';},
      '500-1000': () => {return Range(500,1000) + ' Electrum was Dropped!';},
      '1000-5000': () => {return Range(1000,5000) + ' Electrum was Dropped!';},
      '5000-10000': () => {return Range(5000, 10000) + ' Electrum was Dropped!';}
    },
    silver : {
      '1-100': () => {return Math.floor(Math.random() * 100 + 1) + ' Silver was Dropped!';},
      '100-500': () => {return Range(100, 500) + ' Silver was Dropped!';},
      '500-1000': () => {return Range(500, 1000) + ' Silver was Dropped!';},
      '1000-5000': () => {return Range(1000, 5000) + ' Silver was Dropped';},
      '5000-10000': () => {return Range(5000, 10000) + ' Silver was Dropped!';}
    },
    copper : {
      '1-100': () => {return Math.floor(Math.random() * 100 + 1) + ' Copper was Dropped!';},
      '100-500': () => {return Range(100, 500) + ' Copper was Dropped!';},
      '500-1000': () => {return Range (500, 1000) + ' Copper was Dropped!';},
      '1000-5000': () => {return Range(1000, 5000) + ' Copper was Dropped!';},
      '5000-10000': () => {return Range(5000, 10000) + ' Copper was Dropped!';}
    }
  }
};

