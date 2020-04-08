import { Block } from './block.class';
import { EBlockShapeType } from './block-shape.enum';

/**
 *
 *  O O O O
 */
export class ShapeI extends Block {
  constructor() {
    super(EBlockShapeType.I);

    this.shape = [0xf000, 0x4444, 0xf000, 0x4444];
  }
}
