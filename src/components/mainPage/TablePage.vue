<template>
    <div class="table">
        <div class="table_header">
            <p>Time</p>
            <p>Temperature</p>
            <p>Humidity</p>
            <p>Windspeed</p>
        </div>
        <div class="table_body">
            <div class="table_row">
                <div class="row" v-for="(item, idx) in weatherInfo.hourly" :key="idx">
                    <h3>{{ item.length++ }}</h3>
                    <div v-for="(i, id) in item" :key="id">
                        {{ i }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
    export default {
        computed: mapGetters(['weatherInfo']),
        methods: mapActions(['getWeatherInfo']),
        async mounted() {
            this.getWeatherInfo();  
        },
    }
</script>

<style scoped>
    .table {
        min-width: 900px;
        margin: 0 auto;
    }
    .table_header {
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #e7e7e7;
    }
    .table_header p {
        flex-basis: 25%;
        text-align-last: center;
    }
    .table_row {
        display: flex;
        justify-content: space-around;
    }
    .row {
        flex-basis: 25%;
        padding: 8px 16px;
        text-align: center;
    }
</style>