import { SVG } from '@svgdotjs/svg.js'
import SNode from './Node'
import Style from './Style'
class MindMap{
	protected name: string
	public Node: SNode
	public Style: Style
	constructor(name: string){
		this.name = name
		this.Node = new SNode()
		this.Style = new Style()
	}
	draw(){
		let d = SVG().addTo('body').size(300,300)
		d.rect(100,100).attr({fill:'#f06'})
	}
}

export default MindMap
