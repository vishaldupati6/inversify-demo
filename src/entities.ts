import { injectable, inject } from 'inversify';

import { Weapon, ThrowableWeapon, Warrior } from './interfaces';
import { TYPES } from './identifiers';

@injectable()
export class Katana implements Weapon {
    public hit() {
        return 'hitting with Katana';
    }
}

@injectable()
export class Shuriken implements ThrowableWeapon {
    public throw() {
        return 'throwing with Shuriken';
    }
}

@injectable()
export class Ninja implements Warrior {
    constructor(
        @inject(TYPES.Weapon) private _katana: Weapon,
        @inject(TYPES.ThrowableWeapon) private _shuriken: ThrowableWeapon
    ) { }

    public fight() {
        return this._katana.hit();
    }

    public sneak() {
        return this._shuriken.throw();
    }
}

