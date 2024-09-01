const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background-color", "white")
    .style("padding", "5px")
    .style("border-radius", "3px")
    .style("box-shadow", "0px 0px 5px rgba(0, 0, 0, 0.3)")
    .style("font-family", "Arial, sans-serif")
    .style("font-size", "12px")
    .style("color", "#333");

    d3.json("data/data.json").then(function(data) {
        const heightScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)])
            .range([0, 5]);
    
        data.forEach((d, i) => {
            const box = document.createElement('a-box');
            box.setAttribute('position', `${i * 1.5} ${heightScale(d.value) / 2} -5`);
            box.setAttribute('height', heightScale(d.value));
            box.setAttribute('width', 1);
            box.setAttribute('depth', 1);
            box.setAttribute('color', 'steelblue');
            box.setAttribute('data-category', d.category);
            box.setAttribute('data-value', d.value);
    
            // A-Frame attributes to handle click interactions
            box.setAttribute('event-set__click', `color: orange`);
    
            // Click event to update information panel
            box.addEventListener('click', function() {
                console.log(`Clicked on: ${d.category}, Value: ${d.value}`); // Debugging line
                document.getElementById('info-content').innerText = `Category: ${d.category}, Value: ${d.value}`;
            });
    
            document.querySelector('a-scene').appendChild(box);
        });
    });
    
    
    