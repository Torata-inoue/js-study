export default function typeAliasSample () {
  type Country = {
    capital: string,
    language: string,
    name: string
  };

  const Japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  };
  console.log('Object alias sample 1:', Japan);

  const US: Country = {
    capital: 'W.D.C',
    language: 'English',
    name: 'US'
  }
  console.log('Object alias sample 2:', US);

  type Knight = {
    hp: number,
    sp: number,
    weapon: string,
    swordSkill: string,
  };

  type Wizard = {
    hp: number,
    mp: number,
    weapon: string,
    magicSkill: string
  };

  type Adventure = Knight | Wizard;

  type Paladin = Knight & Wizard;

  const adventure1: Adventure = {
    hp: 100,
    sp: 30,
    weapon: '木の杖',
    swordSkill: '三連切り'
  };

  const adventure2: Adventure = {
    hp: 100,
    mp: 20,
    weapon: '木の棒',
    magicSkill: 'ファイアボール'
  };

  console.log('Object alias sample 3:', adventure1);
  console.log('Object alias sample 4:', adventure2);

  const adventure3: Paladin = {
    hp: 100,
    mp: 30,
    sp: 20,
    weapon: '木のぼう',
    swordSkill: '三連切り',
    magicSkill: 'ファイアボール'
  };
  console.log('Object alias sample 5:', adventure3);
}