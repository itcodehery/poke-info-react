export class PokemonModel {
  public id: number;
  public name: string;
  public height: number;
  public weight: number;
  public base_experience: number;
  public sprites: {};
  public abilities: {};

  constructor(
    id: number,
    name: string,
    height: number,
    weight: number,
    base_experience: number,
    sprites: {},
    abilities: {}
  ) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.base_experience = base_experience;
    this.sprites = sprites;
    this.abilities = abilities;
  }
}
