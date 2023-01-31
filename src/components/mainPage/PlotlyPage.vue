<template>
    <div>
        <div id='myDiv'>{{ getGraph() }}</div>
    </div>
</template>

<script>
import axios from 'axios'
import Plotly from 'plotly.js-dist-min'

    export default {
        name: 'GraphInfo',
        methods: {
            getGraph() {
                axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&past_days=10&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
                .then(res => {
                    this.time = res.data.hourly.time
                    this.temperature = res.data.hourly.temperature_2m
                    this.humidity = res.data.hourly.relativehumidity_2m
                    this.windspeed = res.data.hourly.windspeed_10m
                var data = [
                    {
                        name: 'Temperature',
                        x: this.time,
                        y: this.temperature,
                        type: 'scatter',
                        mode: "lines",
                        line: {color: '#7F7F7F'}
                    },
                    {
                        name: 'Windspeed',
                        x: this.time,
                        y: this.windspeed,
                        type: 'scatter',
                        mode: "lines",
                        line: {color: '#17BECF'}
                    },
                    {
                        name: 'Humidity',
                        x: this.time,
                        y: this.humidity,
                        type: 'scatter',
                        mode: "lines",
                        line: {color: '#5DCC29'}
                    }
                ];
                var layout = {
                    title: 'Weather'
                };

                    Plotly.newPlot('myDiv', data, layout);
                })
                .catch(err => console.log(err))
                }

            }
        }
</script>

<style scoped>

</style>