import { Block } from './block.class';
import { EBlockShapeType } from './block-shape.enum';

/**
 * O O
 *   O O
 */
export class ShapeZ extends Block {
  constructor() {
    super(EBlockShapeType.Z);

    this.shape = [0x6c00, 0x4620, 0x6c00, 0x4620];
  }
}
