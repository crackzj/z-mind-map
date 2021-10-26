import SNode from "../Node"
import Style from "../Style"

export class MindMap{
	protected name: string
	public Node: SNode //node类实例
	public Style: Style
	constructor(name: string)
	draw():void
}
