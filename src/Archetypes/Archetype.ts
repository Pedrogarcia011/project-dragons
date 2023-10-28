import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name: string;
  private _special;
  private _cost;

  constructor(name: string) {
    this._name = name;
    this._cost = 0;
    this._special = 0;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}