  d3.selectAll('p').style('color', function (d,i) {
    let text = this.innerText
    if (text.indexOf('Error') >= 0) {
      return 'red'
    } else if (text.indexOf('Warning') >= 0) {
      return 'orange'
    }
  })

d3.select('p')
.on("mouseover", function(){
  d3.select(this)
    .style("background-color", "orange");

})
.on("mouseout", function(){
  d3.select(this)
    .style("background-color", "steelblue")
});


d3.select('#container')
  .transition()
  .duration(2000)
  .style('background-color', '#545AC4')

const data = [4, 1, 6, 2, 8, 9]

const body = d3.select('body')
                .selectAll('span')
                .data(data)
                .enter().append('span')
                .style('color', function(d){
                  if (d % 2 === 0) {
                    return 'green'
                  } else {
                    return 'red'
                  }
                }).text(function(d){
                  return d + ' '
                })

d3.csv('/employee.csv', function(d){
  console.log(d)
})