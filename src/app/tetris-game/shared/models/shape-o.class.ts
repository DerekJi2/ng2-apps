import { Block } from './block.class';
import { EBlockShapeType } from './block-shape.enum';

/**
 *  O O
 *  O O
 */
export class ShapeO extends Block {
  constructor() {
    super(EBlockShapeType.O);

    this.shape = [0x6600, 0x6600, 0x6600, 0x6600] ;
  }
}
