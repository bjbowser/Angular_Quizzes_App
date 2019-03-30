import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { LOTROClass } from './class.model';
import { LOTROCraft } from './craft.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private questionsClass: Question[] = [
    {
      questionId: 1,
      questionText: 'You walk into a fight in progress! Do you prefer to wade into the melee or pick off targets from a distance?',
      choice1: 'I run in swinging!',
      choice2: 'It is much safer to hang back'
    },
    {
      questionId: 2,
      questionText: 'Your friend is injured! Do you stop and attempt healing or get revenge?',
      choice1: 'I cannot let my friend die!',
      choice2: 'This outrage will not go unpunished!'
    },
    {
      questionId: 3,
      questionText: 'I prefer fighting with a ___________ melee weapon: ',
      choice1: 'Large, oversize monstrous weapon that I would likely not be to hold IRL!',
      choice2: 'Daggers and swords are great, so are clubs and hammers. Regarless, I can dual-wield them!'
    },
    {
      questionId: 4,
      questionText: 'I prefer fighting with a ___________ ranged weapon',
      choice1: 'Bow and crossbow FTW!',
      choice2: 'Magic! Let my fire, ice, or magic-imbued song end you!'
    },
    {
      questionId: 5,
      questionText: 'Do you look for the complex options to really enjoy things or is do you prefer simple fun?',
      choice1: 'I want to memorize things and practice!',
      choice2: 'I play to enjoy and I was told there would be no math! '
    },
    {
      questionId: 6,
      questionText: 'Do you like to command attention or do you prefer to sneak around and look innocent until it is too late?',
      choice1: 'Everyone should notice me, I am the best at what I do!',
      choice2: 'I love hiding and jumping out to great surprise!'
    }
  ];

  private questionsCraft: Question[] = [
    {
      questionId: 1,
      questionText: 'Do you want to be able to make your gear or prefer to make items that assist you?',
      choice1: 'I want gear! Better armour, better weapons, better everything.',
      choice2: 'It is so much more useful to have helper food, potions, scrolls, items than gear.'
    },
    {
      questionId: 2,
      questionText: 'Weapons or Armour?',
      choice1: 'More important to wreck the opponent faster so Weapons!',
      choice2: 'More important to survive so Armour!'
    },
    {
      questionId: 3,
      questionText: 'Do you have an overwhemling need to gather all material nodes you see?',
      choice1: 'I have to close my eyes and run quickly past!',
      choice2: 'Eh, I mostly ignore whatever gathering nodes I see.'
    },
    {
      questionId: 4,
      questionText: 'Are you looking to get into crafting to make money or make things for yourself?',
      choice1: 'Show me the money!',
      choice2: 'I like to be self-sufficient and make myself beatifully equipped!'
    },
    {
      questionId: 5,
      questionText: 'Do you prefer the simple delight of shaping wood or the wild sparks of working with metal?',
      choice1: 'Wood is so smooth and simple and earthy, like myself',
      choice2: 'Metal is my love and my choice of music! '
    }
  ];

  private hunterClass: LOTROClass = {
    className: 'Hunter',
    classReason: 'The classic ranged damage class! You can pew pew from a distance and also kite incredibly well!',
    points: 0
  };
  private minstrelClass: LOTROClass = {
    className: 'Mini',
    classReason: 'Minstrels are the primary healer class! But minis are not at all slouches when it comes to dps.',
    points: 0
  };
  private guardClass: LOTROClass = {
    className: 'Guard',
    classReason: 'The primary tank class! But guards can dps decently well when you get the I-need-to-solo bug.',
    points: 0
  };
  private championClass: LOTROClass = {
    className: 'Champ',
    classReason: 'Champion is the primary melee damage class! You can tank when you put your mind to it,' +
                  'but you primarily run up and put a hurting on everything you can reach.',
    points: 0
  };
  private captainClass: LOTROClass = {
    className: 'Cappy',
    classReason: 'The Captain wonderful heavy-armour support class! Captians can tank, heal and dps. ' +
                  'They are not the best in everything but offer amazing support to anyone and everyone else.',
    points: 0
  };
  private loremasterClass: LOTROClass = {
    className: 'LM',
    classReason: 'Loremaster is a wonderful light-armour support class! Loremasters utilize pets which can tank or dps and ' +
                  'you have healing ablities. They are slightly more difficult to master but are incredibly versatile in all situations.',
    points: 0
  };
  private burglarClass: LOTROClass = {
    className: 'Burg',
    classReason: 'Burlgars are best sneaky class in the game! Burglars can hide in plain sight to do devestating backstab damage. ' +
                  'They are more difficult to master but are incredibly damaging when played well.',
    points: 0
  };
  private explorerCraft: LOTROCraft = {
    craftName: 'Explorer',
    craftReason: 'Explorers process forestry items (hides and wood) AND ore. They also make light & medium armour. Every account needs ' +
                  'an explorer, if only to gather materials and be able to sell whatever access you have to get your gold in the black!',
    points: 0
  };
  private woodsmanCraft: LOTROCraft = {
    craftName: 'Woodsman',
    craftReason: 'A must have for any class where bows/crossbows are your primary melee weapon but useful for their staves, clubs,' +
                  ' spears, and hammers as well!  Woodworkers can also farm to assist any cooking needs or sell produce for gold.',
    points: 0
  };
  private armourerCraft: LOTROCraft = {
    craftName: 'Armourer',
    craftReason: 'Metalsmiths can make any and all armour.  Light, Medium and Heavy but they are best skilled at Heavy, especially ' +
                  'since they are the only craft to make Heavy. They also have the ability to make crafting tools and shields!',
    points: 0
  };
  private armsmanCraft: LOTROCraft = {
    craftName: 'Armsman',
    craftReason: 'Weaponsmiths can make any and all weapon.  Swords, bows, axes, staves, whatever you want! They are best skilled in ' +
                  'metal weapons because they cannot gather/process wood themselves. Thankfully, throwing axes fall under metal ' +
                  'weapons so you will yet have one ranged option!',
    points: 0
  };
  private yeomanCraft: LOTROCraft = {
    craftName: 'Yeoman',
    craftReason: 'Yeomen are the cloest to self-sufficient hermits LOTRO crafts can get. They farm to make their materials for cooking ' +
                  'food that increases stats or gives you a heal over time. They also can make light and medium armour if they can get ' +
                  'leather',
    points: 0
  };
  private tinkerCraft: LOTROCraft = {
    craftName: 'Tinker',
    craftReason: 'Jewlers make rings, necklaces, bracelets AND tokens that ward off dread. Bonus: they also make talismans that ' +
                  'enable Loremasters to attract special pets. Lastly, they can cook if provided materials but you can find those ' +
                  'materials searching most landscapes!',
    points: 0
  };
  private historianCraft: LOTROCraft = {
    craftName: 'Historian',
    craftReason: 'Historians process texts to create a wide variety of scrolls, potions, dyes, and other useful items ' +
                  'The potions and scrolls are very usable and assist every class in fighting or in their own crafting ' +
                  'endeavours! They can also make metal weapons but need to find the ingots to do so.',
    points: 0
  };
  constructor() { }

  getClassQuestion(questionId: number) {
    return {
      ...this.questionsClass.find(question => {
        return question.questionId === questionId + 1;
      })
    };
  }

  getCraftQuestion(questionId: number) {
    return {
      ...this.questionsCraft.find(question => {
        return question.questionId === questionId + 1;
      })
    };
  }

  getBestClass(answerslist: string) {
    let counter = 0;
    answerslist.split('').forEach(answer => {
      counter++;
      if (counter === 1 ) {
        if (answer === '1') {
          this.hunterClass.points += 0;
          this.minstrelClass.points += 1;
          this.guardClass.points += 4;
          this.championClass.points += 3;
          this.captainClass.points += 3;
          this.loremasterClass.points += 0;
          this.burglarClass.points += 3;
        } else {
          this.hunterClass.points += 4;
          this.minstrelClass.points += 3;
          this.guardClass.points += 0;
          this.championClass.points += 1;
          this.captainClass.points += 0;
          this.loremasterClass.points += 4;
          this.burglarClass.points += 1;
        }
      } else if (counter === 2) {
        if (answer === '1') {
          this.hunterClass.points += -4;
          this.minstrelClass.points += 4;
          this.guardClass.points += -4;
          this.championClass.points += -4;
          this.captainClass.points += 3;
          this.loremasterClass.points += 2;
          this.burglarClass.points += -4;
        } else {
          this.hunterClass.points += 2;
          this.minstrelClass.points += -2;
          this.guardClass.points += 4;
          this.championClass.points += 4;
          this.captainClass.points += 1;
          this.loremasterClass.points += 2;
          this.burglarClass.points += 4;
        }
      } else if (counter === 3) {
        if (answer === '1') {
          this.hunterClass.points += 0;
          this.minstrelClass.points += 0;
          this.guardClass.points += 3;
          this.championClass.points += 2;
          this.captainClass.points += 4;
          this.loremasterClass.points += 0;
          this.burglarClass.points += 0;
        } else {
          this.hunterClass.points += 4;
          this.minstrelClass.points += 4;
          this.guardClass.points += 1;
          this.championClass.points += 5;
          this.captainClass.points += 0;
          this.loremasterClass.points += 1;
          this.burglarClass.points += 4;
        }
      } else if (counter === 4) {
        if (answer === '1') {
          this.hunterClass.points += 4;
          this.minstrelClass.points += 0;
          this.guardClass.points += 2;
          this.championClass.points += 2;
          this.captainClass.points += 1;
          this.loremasterClass.points += 0;
          this.burglarClass.points += 1;
        } else {
          this.hunterClass.points += 0;
          this.minstrelClass.points += 4;
          this.guardClass.points += 0;
          this.championClass.points += 0;
          this.captainClass.points += 3;
          this.loremasterClass.points += 4;
          this.burglarClass.points += 0;
        }
      } else if (counter === 5) {
        if (answer === '1') {
          this.hunterClass.points += 1;
          this.minstrelClass.points += 1;
          this.guardClass.points += 0;
          this.championClass.points += 0;
          this.captainClass.points += 2;
          this.loremasterClass.points += 5;
          this.burglarClass.points += 5;
        } else {
          this.hunterClass.points += 3;
          this.minstrelClass.points += 3;
          this.guardClass.points += 4;
          this.championClass.points += 4;
          this.captainClass.points += 2;
          this.loremasterClass.points += 3;
          this.burglarClass.points += 0;
        }
      } else if (counter === 6) {
        if (answer === '1') {
          this.hunterClass.points += 0;
          this.minstrelClass.points += 1;
          this.guardClass.points += 4;
          this.championClass.points += 3;
          this.captainClass.points += 3;
          this.loremasterClass.points += 1;
          this.burglarClass.points += -5;
        } else {
          this.hunterClass.points += 4;
          this.minstrelClass.points += 3;
          this.guardClass.points += 0;
          this.championClass.points += 1;
          this.captainClass.points += 1;
          this.loremasterClass.points += 3;
          this.burglarClass.points += 4;
        }
      }
    });

    console.log(this.guardClass.points);
    console.log(this.championClass.points);
    if (this.hunterClass.points > this.minstrelClass.points &&
        this.hunterClass.points > this.guardClass.points &&
        this.hunterClass.points > this.championClass.points &&
        this.hunterClass.points > this.captainClass.points &&
        this.hunterClass.points > this.loremasterClass.points &&
        this.hunterClass.points > this.burglarClass.points) {
      return this.hunterClass;
    } else if (this.minstrelClass.points > this.guardClass.points &&
        this.minstrelClass.points > this.championClass.points &&
        this.minstrelClass.points > this.captainClass.points &&
        this.minstrelClass.points > this.loremasterClass.points &&
        this.minstrelClass.points > this.burglarClass.points) {
      return this.minstrelClass;
    } else if (this.guardClass.points > this.championClass.points &&
      this.guardClass.points > this.captainClass.points &&
      this.guardClass.points > this.loremasterClass.points &&
      this.guardClass.points > this.burglarClass.points) {
    return this.guardClass;
    } else if (this.captainClass.points > this.championClass.points &&
      this.captainClass.points > this.loremasterClass.points &&
      this.captainClass.points > this.burglarClass.points) {
    return this.captainClass;
    } else if (this.loremasterClass.points > this.championClass.points &&
      this.loremasterClass.points > this.burglarClass.points) {
    return this.loremasterClass;
    } else if (this.burglarClass.points > this.championClass.points) {
      return this.burglarClass;
    } else {
      return this.championClass;
    }
  }

  getBestCraft(answerslist: string) {
    let counter = 0;
    answerslist.split('').forEach(answer => {
      counter++;
      if (counter === 1 ) {
        if (answer === '1') {
          this.explorerCraft.points += 5;
          this.woodsmanCraft.points += 4;
          this.armourerCraft.points += 6;
          this.armsmanCraft.points += 4;
          this.yeomanCraft.points += 0;
          this.tinkerCraft.points += 4;
          this.historianCraft.points += 1;
        } else {
          this.explorerCraft.points += 0;
          this.woodsmanCraft.points += 1;
          this.armourerCraft.points += 1;
          this.armsmanCraft.points += 0;
          this.yeomanCraft.points += 6;
          this.tinkerCraft.points += 3;
          this.historianCraft.points += 4;
        }
      } else if (counter === 2) {
        if (answer === '1') {
          this.explorerCraft.points += 0;
          this.woodsmanCraft.points += 6;
          this.armourerCraft.points += 0;
          this.armsmanCraft.points += 6;
          this.yeomanCraft.points += 0;
          this.tinkerCraft.points += 0;
          this.historianCraft.points += 3;
        } else {
          this.explorerCraft.points += 6;
          this.woodsmanCraft.points += 0;
          this.armourerCraft.points += 6;
          this.armsmanCraft.points += 0;
          this.yeomanCraft.points += 3;
          this.tinkerCraft.points += 3;
          this.historianCraft.points += 0;
        }
      } else if (counter === 3) {
        if (answer === '1') {
          this.explorerCraft.points += 5;
          this.woodsmanCraft.points += 3;
          this.armourerCraft.points += 3;
          this.armsmanCraft.points += 3;
          this.yeomanCraft.points += 1;
          this.tinkerCraft.points += 3;
          this.historianCraft.points += 2;
        } else {
          this.explorerCraft.points += 0;
          this.woodsmanCraft.points += 2;
          this.armourerCraft.points += 1;
          this.armsmanCraft.points += 1;
          this.yeomanCraft.points += 6;
          this.tinkerCraft.points += 2;
          this.historianCraft.points += 3;
        }
      } else if (counter === 4) {
        if (answer === '1') {
          this.explorerCraft.points += 4;
          this.woodsmanCraft.points += 2;
          this.armourerCraft.points += 3;
          this.armsmanCraft.points += 2;
          this.yeomanCraft.points += 2;
          this.tinkerCraft.points += 4;
          this.historianCraft.points += 8;
        } else {
          this.explorerCraft.points += 2;
          this.woodsmanCraft.points += 2;
          this.armourerCraft.points += 2;
          this.armsmanCraft.points += 2;
          this.yeomanCraft.points += -1;
          this.tinkerCraft.points += 5;
          this.historianCraft.points += -2;
        }
      } else if (counter === 5) {
        if (answer === '1') {
          this.explorerCraft.points += 2;
          this.woodsmanCraft.points += 8;
          this.armourerCraft.points += 0;
          this.armsmanCraft.points += 4;
          this.yeomanCraft.points += 2;
          this.tinkerCraft.points += 1;
          this.historianCraft.points += 0;
        } else {
          this.explorerCraft.points += 2;
          this.woodsmanCraft.points += 0;
          this.armourerCraft.points += 0;
          this.armsmanCraft.points += 8;
          this.yeomanCraft.points += 0;
          this.tinkerCraft.points += 6;
          this.historianCraft.points += 3;
        }
      }
    });

    if (this.woodsmanCraft.points > this.armourerCraft.points &&
        this.woodsmanCraft.points > this.armsmanCraft.points &&
        this.woodsmanCraft.points > this.yeomanCraft.points &&
        this.woodsmanCraft.points > this.tinkerCraft.points &&
        this.woodsmanCraft.points > this.historianCraft.points &&
        this.woodsmanCraft.points > this.explorerCraft.points) {
      return this.woodsmanCraft;
    } else if (this.armourerCraft.points > this.armsmanCraft.points &&
        this.armourerCraft.points > this.yeomanCraft.points &&
        this.armourerCraft.points > this.tinkerCraft.points &&
        this.armourerCraft.points > this.historianCraft.points &&
        this.armourerCraft.points > this.explorerCraft.points) {
      return this.armourerCraft;
    } else if (this.armsmanCraft.points > this.yeomanCraft.points &&
      this.armsmanCraft.points > this.tinkerCraft.points &&
      this.armsmanCraft.points > this.historianCraft.points &&
      this.armsmanCraft.points > this.explorerCraft.points) {
    return this.armsmanCraft;
    } else if (this.yeomanCraft.points > this.tinkerCraft.points &&
      this.yeomanCraft.points > this.historianCraft.points &&
      this.yeomanCraft.points > this.explorerCraft.points) {
    return this.yeomanCraft;
    } else if (this.tinkerCraft.points > this.historianCraft.points &&
      this.tinkerCraft.points > this.explorerCraft.points) {
    return this.tinkerCraft;
    } else if (this.historianCraft.points > this.explorerCraft.points) {
      return this.historianCraft;
    } else {
      return this.explorerCraft;
    }
  }
}
