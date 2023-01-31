<template>
    <section class="product_list container">
        <h5 class="product_title">
            Our product range
        </h5>
        <div class="product_types">
            <p class="product_type" v-for="item in productTypes" :key="item">{{ item }}</p>
        </div>
        <div class="products">
            <div class="card" v-for="(item, idx) in products" :key="idx">
                <img :src="'/src/components/secondPage/assets/' + item.image" alt="img">
                <p class="card_title">{{ item.title }}</p>
            </div>
        </div>
        <button class="product_btn">Shop Now</button>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                productTypes: ['Featured', 'Latest', 'Best seller'],
                products: [
                    {
                        image: 'milk.png',
                        title: 'Tiger Nut Milk'
                    },
                    {
                        image: 'juice-orange.png',
                        title: 'Juice Orange'
                    },
                    {
                        image: 'orange.png',
                        title: 'Orange Dreamer Smoothie'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
.product_list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px auto;
    height: 662px;
}
.product_title {
    font-size: 36px;
    font-weight: 500;
    line-height: 75px;
    letter-spacing: 0em;
    text-align: center;
}
.product_types {
    display: flex;
    justify-content: space-between;
    width: 542px;
}
.product_type {
    font-size: 24px;
    font-weight: 400;
    line-height: 75px;
    letter-spacing: 0em;
    text-align: center;
}
.product_type:hover {
    color: #4A9E29;
    cursor: pointer;
}
.products {
    display: flex;
    justify-content: space-between;
    width: 1120px;
    margin-bottom: 50px;
}
.card {
    width: 335px;
    height: 478px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: rgba(213, 173, 120, 0.15);
}
.juices {
    background: #EEFFE8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.card_title {
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
}
.product_btn {
    font-size: 14px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    color: #4A9E29;
    border: 1px solid #4A9E29;
    border-radius: 5px;
    width: 191px;
    height: 42px;
    background: inherit;
    cursor: pointer;
}
</style>