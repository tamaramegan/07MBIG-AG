// Import stylesheets
import './style.css';

//Gráfico de columnas. Mi 1o gráfico
var visualization = d3plus.viz()
    .container("#viz1")
    .data([{"year": 1991, "name":"alpha", "value": 15},
          {"year": 1992, "name":"alpha", "value": 20},])
    .type("bar")
    .id("name")
    .x("year")
    .y("value")
    .draw()