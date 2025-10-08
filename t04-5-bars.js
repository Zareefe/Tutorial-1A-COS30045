// t04-5-bars.js
const createBarChart = (data) => {
  // Step 1: Use a viewBox (to demonstrate scaling) and set display size
  const viewW = 500;   // narrow on purpose (forces x scaling)
  const viewH = 1600;  // tall logical space for many bars
  const displayW = 640; // physical display width
  const displayH = 420; // physical display height

  // Create the SVG container
  const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", `0 0 ${viewW} ${viewH}`) // logical coords
    .attr("width", displayW)                   // actual rendered size
    .attr("height", displayH)                  // actual rendered size
    .style("border", "1px solid black");

  // Step 2: Add linear x-scale (fit widths to viewBox)
  const xMax = d3.max(data, d => d.count); // numeric data for bar length
  const xScale = d3.scaleLinear()
    .domain([0, xMax]) // input domain
    .range([0, viewW]); // output range (in logical pixels)

  // Step 3: Add band y-scale (space bars evenly)
  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand)) // categorical axis
    .range([0, viewH]) // tall logical space
    .paddingInner(0.2)
    .paddingOuter(0.1);

  // Step 4: Draw bars
  svg.selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => `bar bar-${d.count}`)
    .attr("x", 0)
    .attr("y", d => yScale(d.brand))
    .attr("width", d => xScale(d.count))
    .attr("height", yScale.bandwidth())
    .attr("fill", "steelblue");
};
