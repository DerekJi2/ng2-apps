import { IBlock } from './block.interface';
import { EBlockShapeType } from './block-shape.enum';
import { IPosition } from './position.interface';

export abstract class Block implements IBlock {

    public shape = new Array<number>(4);

    public direction = Math.floor(Math.random() * 4) - 1; // 0-3

    constructor(public shapeType: EBlockShapeType) {
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
