import { Block } from './block.class';
import { EBlockShapeType } from './block-shape.enum';

/**
 *   O
 *   O
 * O O
 */
export class ShapeJ extends Block {
  constructor() {
    super(EBlockShapeType.J);

    this.shape = [0x8e00, 0x44c0, 0xe200, 0xc880];

    const binstr = hex2binstr(this.shape[0], 16);
    const unitArray = [binstr.substr(0, 4),
      binstr.substr(4, 4),
      binstr.substr(8, 4),
      binstr.substr(12, 4)];
  }
}
