import { IBlock } from './block.interface';

export abstract class Block implements IBlock {

    constructor(public shape: string) {

    }


    rotateLeft(): void {

    }

    rotateRight(): void {

    }

    dropDown(): void {

    }
}
