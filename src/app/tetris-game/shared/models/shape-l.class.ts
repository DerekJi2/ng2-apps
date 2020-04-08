import { Block } from './block.class';
import { EBlockShapeType } from './block-shape.enum';

/**
 * O
 * O
 * O O
 */
export class ShapeL extends Block {
  constructor() {
    super(EBlockShapeType.L);

    this.shape = [0xe800, 0x88c0, 0x2e00, 0xc440];
  }
}
