// STEP 1 - Include Dependencies
// Include react
import React from 'react';
// import ReactDOM from 'react-dom'; no lo ocupo

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
// import Column2D from 'fusioncharts/fusioncharts.charts';
import Chart from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({ data }) => {
   const chartConfigs = {
      type: 'doughnut2d', // The chart type
      width: '100%', // Width of the chart (lo cambio a 100% pa q ocupe todo el parent)
      height: '400', // Height of the chart
      dataFormat: 'json', // Data type
      dataSource: {
         // Chart Configuration
         chart: {
            caption: 'Stars Per Language',
            decimals: 0, // sin decimales, ( 1 => con decimales )
            doughnutRadius: '45%', // pal tamaño
            showPercentValues: 0, // pa q muestre el valor y NO el porcentaje
            theme: 'candy', // pa ocuparlo solo cambie la direccion desde donde se importa ( al final se le pone candy )
         },
         // Chart Data
         data,
      },
   };

   return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
