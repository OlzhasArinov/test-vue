<template>
    <section class="promo_wrapper">
        <div class="promo container">
            <div class="promo_text">
                <p class="promo_title">
                    REFORM JUICE
                </p>
                <p class="promo_text">
                    A Natural healthy way to support your immune system
                </p>
                <button class="promo_btn">
                    Shop Now
                </button>
            </div>
            <div class="promo_img">
                <img src="../secondPage/assets/fruit_juice.png" alt="promo img">
            </div>
        </div>
        <div class="vectors">
            <img src="../secondPage/assets/vector_1.png" alt="vc1" class="vector_1">
            <img src="../secondPage/assets/vector_2.png" alt="vc2" class="vector_2">
            <img src="../secondPage/assets/vector_3.png" alt="vc3" class="vector_3">
            <img src="../secondPage/assets/vector_4.png" alt="vc4" class="vector_4">
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.promo_wrapper {
    width: 1440px;
    height: 968px;
    position: relative;
    margin: 0 auto;
}
.promo {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.promo_title {
    font-size: 18px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0.455em;
    text-align: left;

}
.promo_text {
    font-size: 48px;
    font-weight: 500;
    line-height: 57px;
    letter-spacing: 0em;
    text-align: left;

}
.promo_btn {
    width: 191px;
    height: 42px;
    background: #4A9E29;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;

}
.vector_1 {
    position: absolute;
    top: 260px;
    left: 160px;
}
.vector_2 {
    position: absolute;
    top: 650px;
    left: 650px;
}
.vector_3 {
    position: absolute;
    top: 0;
    right: 0;
}
.vector_4 {
    position: absolute;
    bottom: 17px;
    left: 0;
}
</style>