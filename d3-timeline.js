var margin = {top: 30, right: 60, bottom: 30, left: 60},
    width = 400 - margin.left - margin.right,
    width_r = width+6,
    height = 600 - margin.top - margin.bottom;

var dataset = [1,2,3,4,5,6]
var x_pos = 10

var svg = d3.select("#container")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

var circle = svg.selectAll('circle')
                .data(dataset)
                .enter()
                .append('circle')
                .attr('cx',x_pos)
                .attr('cy',function(d) {
                    return d * 90;
                })
                .attr("fill", "teal")
                .attr("r", 10);

nodes = []

for(var i in dataset){
    nodes.push([dataset[i],dataset[i]+1])
}

console.log(nodes)

svg.append("svg:defs").selectAll("marker")
.data(["end"]) // Different link/path types can be defined here
.enter().append("svg:marker") // This section adds in the arrows
.attr("id", String)
.attr("viewBox", "0 0 10 10")
.attr("refX", 15)
.attr("refY", 5)
.attr("markerUnits", "strokeWidth")
.attr("markerWidth", 4)
.attr("markerHeight", 10)
.attr("orient", "auto")
.append("svg:path")
.attr("d", "M 0 0 L 10 5 L 0 10 Z");

svg.selectAll('line')
.data(nodes)
.enter()
.append('line')
.attr('x1',x_pos)
.attr('y1',function(d,i) {
    return d[0] * 90;
})
.attr('x2',x_pos)
.attr('y2',function(d,i) {
    return d[1] * 90;
})
.attr("stroke-width", 2) 
.attr("stroke", "black")
.attr("marker-end", "url(#end)")
