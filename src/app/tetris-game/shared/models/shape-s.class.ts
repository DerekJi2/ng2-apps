import { Block } from './block.class';
import { EBlockShapeType } from './block-shape.enum';

/**
 *   O O
 * O O
 */
export class ShapeS extends Block {
  constructor() {
    super(EBlockShapeType.S);

    this.shape = [0xc600, 0x2640, 0xc600, 0x2640];
  }
}
