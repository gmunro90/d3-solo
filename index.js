//   d3.selectAll('p').style('color', function (d, i) {
//     let text = this.innerText
//     if (text.indexOf('Error') >= 0) {
//       return 'red'
//     } else if (text.indexOf('Warning') >= 0) {
//       return 'orange'
//     }
//   })

// d3.select('p')
// .on("mouseover", function(){
//   d3.select(this)
//     .style("background-color", "orange");

// })
// .on("mouseout", function(){
//   d3.select(this)
//     .style("background-color", "steelblue")
// });


// d3.select('#container')
//   .transition()
//   .duration(2000)
//   .style('background-color', '#545AC4')

// // const data = [4, 1, 6, 2, 8, 9]

// const body = d3.select('body')
//                 .selectAll('span')
//                 .data(data)
//                 .enter().append('span')
//                 .style('color', function(d){
//                   if (d % 2 === 0) {
//                     return 'green'
//                   } else {
//                     return 'red'
//                   }
//                 }).text(function(d){
//                   return d + ' '
//                 })

// // d3.request('./employee.csv')
// //                 .mimeType("text/csv")
// //                 .response(function (xhr) {
// //                   return d3.csvParse(xhr.responseText)
// //                 })
// //                 .get(function(data) {
// //                   console.log(data)
// //                 })

// d3.json('./data/users.json', function(error, data){

//   d3.select('body')
//     .selectAll('p')
//     .data(data)
//     .enter()
//     .append('p')
//     .text(function(d) {
//       return d.name + ', ' + d.location
//     })
// })
//why is it not loading in console?

let data = [5, 10, 20]
let width = 200
scaleFactor = 10
barHeight = 20

const graph = d3.select('body')
                .append('svg')
                .attr('width', width)
                .attr('height', barHeight * data.length)

const bar = graph.selectAll("g") 
                .data(data)
                .enter().append("g")
                .attr("transform", function(d, i) {
                    return "translate(0," + i * barHeight + ")";
                });


  bar.append("rect")
   .attr("width", function(d) {
        return d * scaleFactor;
   })
   .attr("height", barHeight - 1);
   bar.append("text")
   .attr("x", function(d) { return (d * scaleFactor); })
   .attr("y", barHeight / 2)
   .attr("dy", ".65em")
   .text(function(d) { return d; });