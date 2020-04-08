import { Block } from './block.class';
import { EBlockShapeType } from './block-shape.enum';

/**
 *    O
 *  O O O
 */
export class ShapeT extends Block {
  constructor() {
    super(EBlockShapeType.T);

    this.shape = [0xe400, 0x8c80, 0x4e00, 0x4c40];
  }
}
