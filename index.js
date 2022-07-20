var width = 400,
        height = 100;

    var data = [10, 15, 20, 25, 30];
    
    // Append SVG 
    var svg = d3.select("body")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

    // Create scale
    var scale = d3.scaleLinear()
                  .domain([d3.min(data), d3.max(data)])
                  .range([0, width - 100]);

    let heightScale = d3.scaleLinear()
                        .domain([d3.min(data), d3.max(data)])
                        .range([height/2, 0])

    let y_axis = d3.axisLeft()
                    .scale(heightScale)



    // Add scales to axis
    var x_axis = d3.axisBottom()
                   .scale(scale);

    //Append group and insert axis
    svg.append("g")
       .call(x_axis);

    svg.append('g')
        .attr('transform', 'translate(50, 10)')
        .call(y_axis)
    