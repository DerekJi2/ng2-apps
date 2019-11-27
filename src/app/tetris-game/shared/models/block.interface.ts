import { IPosition } from './position.interface';
import { BlockShape } from './block-shape.enum';

export interface IBlock {
    shape: BlockShape;

    position: IPosition;

    init(): void;

    rotateLeft(): void;
    rotateRight(): void;

    dropDown(): void;
}
