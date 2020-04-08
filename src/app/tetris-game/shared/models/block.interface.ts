import { IPosition } from './position.interface';
import { EBlockShapeType } from './block-shape.enum';

export interface IBlock {
    shapeType: EBlockShapeType;

    shape: Array<number>;

    direction: number;

    position: IPosition;

    init(): void;

    rotateLeft(): void;
    rotateRight(): void;

    dropDown(): void;
}
