import { container } from './inversify.config';
import { TYPES } from './identifiers';
import { Warrior } from './interfaces';

const ninja = container.get<Warrior>(TYPES.Warrior);

console.log('Ninja is', ninja.sneak());
console.log('Ninja is', ninja.fight());
