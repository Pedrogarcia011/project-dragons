import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
/* import getRandomInt from './utils'; */

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _name: string;
  private _energy: Energy;

  constructor(name: string) {
    this._name = name;
    this._dexterity = Math.floor(Math.random() * 10) + 1;
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints) / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Math.floor(Math.random() * 10) + 1;
    this._defense = Math.floor(Math.random() * 10) + 1;
    this._energy = { type_: this._archetype.energyType,
      amount: Math.floor(Math.random() * 10) + 1 };
  }

  get name(): string {
    return this._name;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy { return { ...this._energy }; }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) { this._lifePoints -= damage; } 
    if (damage <= 0) { this._lifePoints -= 1; }
    if (this.lifePoints <= 0) { this._lifePoints = -1; }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void { enemy.receiveDamage(this._strength); }

  levelUp(): void {
    this._maxLifePoints += Math.floor(Math.random() * 10) + 1;
    this._strength += Math.floor(Math.random() * 10) + 1;
    this._dexterity += Math.floor(Math.random() * 10) + 1;
    this._defense += Math.floor(Math.random() * 10) + 1;
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }
}
