<template>
    <section class="companies_wrapper">
        <div class="companies container">
            <img :src="'/src/components/secondPage/assets/company-' + item + '.png'" alt="" class="company_img" v-for="(item, idx) in companies" :key="idx">
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                companies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        }
    }
</script>

<style scoped>
.companies_wrapper {
    background: #53B72C;
    height: 273px;
    display: flex;
    align-items: center;
}
.companies {
    width: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.company_img {
    width: 100px;
    height: 100px;
    margin-right: 80px;
}
</style>