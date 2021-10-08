 // javascript
        var margin = 50
        var svgWidth = 500, svgHeight = 300, barPadding = 5;
        var barWidth = (svgWidth / dataset.length);

        var svg = d3.select("svg")
            attr("width",svgWidth) - margin,
            attr("height"svgWidth) - margin

        var xScale = d3.scaleBand().range ([0, width]).padding(0.4),
            yScale = d3.scaleLinear().range ([height, 0]);

        var g = svg.append("g")
                .attr("transform", "translate(" + 100 + "," + 100 + ")");

        var dataset = d3.csv("testdata.csv", function(data){
                        console.log(data)
});

        xScale.domain(data.map(function(d) { return d.RpYr; }));
        yScale.domain([0, d3.max(data, function(d) { return d.Value; })]);

        g.append("g")
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(xScale));

        g.append("g")
         .call(d3.axisLeft(yScale).tickFormat(function(d){
             return "$" + d;
         }).ticks(8))
         .append("text")
         .attr("y", 6)
         .attr("dy", "0.71em")
         .attr("text-anchor", "end")
         .text("value");

         g.selectAll(".bar")
         .data(data)
         .enter().append("rect")
         .attr("class", "bar")
         .attr("x", function(d) { return xScale(d.RpYr); })
         .attr("y", function(d) { return yScale(d.Value); })
         .attr("width", xScale.bandwidth())
         .attr("height", function(d) { return height - yScale(d.Value); });
    
