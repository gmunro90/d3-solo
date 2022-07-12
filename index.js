// d3.select('body').append('p').text('this is the new paragraph')
// d3.select('body').append('div').insert('h3').text('testing')
// d3.select("body").append("p").text("Hello World!"); 
// d3.select("body")
//   .append("p")
//   .text("Third paragraph");

  // let data = [100, 200, 300];

  // let paragraph = d3.select("body")
  // .selectAll("p")
  // .data(data)
  // .text(function (d, i) {
  //     console.log("data: " + d);
  //     console.log("i: " + i);
  //     console.log("this: " + this);

  //     return d;

      //this returns the data, 
      //index and html element for each iteration of data
  // });

  d3.selectAll('p').style('color', function (d,i) {
    let text = this.innerText
    if (text.indexOf('Error') >= 0) {
      return 'red'
    } else if (text.indexOf('Warning') >= 0) {
      return 'yellow'
    }
  })