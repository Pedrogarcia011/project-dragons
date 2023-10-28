import Race from './Race';

export default class Halfling extends Race {
  private static _createdRacesInstances = 0;
  private readonly _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}