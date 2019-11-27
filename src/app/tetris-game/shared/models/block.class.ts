import { IBlock } from './block.interface';
import { BlockShape } from './block-shape.enum';
import { IPosition } from './position.interface';

export abstract class Block implements IBlock {

    constructor(public shape: BlockShape) {
        this.init();
    }

    public position: IPosition;

    init(): void {
        
    }


    rotateLeft(): void {

    }

    rotateRight(): void {

    }

    dropDown(): void {

    }
}
