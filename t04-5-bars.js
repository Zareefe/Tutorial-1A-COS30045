const createBarChart = (data) => {
  const viewW = 640, viewH = 420;
  const margin = { top: 20, right: 30, bottom: 30, left: 120 };
  const innerW = viewW - margin.left - margin.right;
  const innerH = viewH - margin.top - margin.bottom;

  const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", `0 0 ${viewW} ${viewH}`)
    .style("width", "100%")
    .style("height", "auto");

  const chart = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // X Scale (linear for counts)
  const xMax = d3.max(data, d => d.count);
  const xScale = d3.scaleLinear()
    .domain([0, xMax])
    .range([0, innerW]);

  // Y Scale (categorical for brands)
  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, innerH])
    .padding(0.2);

  // Bars
  chart.selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", 0)
    .attr("y", d => yScale(d.brand))
    .attr("width", d => xScale(d.count))
    .attr("height", yScale.bandwidth())
    .attr("fill", "steelblue");

  // Axes (for visual reference)
  chart.append("g")
    .call(d3.axisLeft(yScale).tickSize(0).tickPadding(6));

  chart.append("g")
    .attr("transform", `translate(0,${innerH})`)
    .call(d3.axisBottom(xScale).ticks(5));
};
