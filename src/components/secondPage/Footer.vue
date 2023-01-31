<template>
    <footer class="footer">
        <div class="footer_info">
            <div class="get_in_touch">
                <h5 class="get_in_touch_title footer_title">Get in touch</h5>
                <p class="address">Address</p>
                <p class="store">
                    Store & Office 
                    <br>234 Lekki Epe express way
                </p>
                <p class="office">Office Hour</p>
                <p class="hours">
                    Monday - Sunday
                    <br>10.00 - 18.00
                </p>
            </div>
            <div class="service_center">
                <h5 class="service_center_title footer_title">Service Center</h5>
                <p class="number">0811-233-8899</p>
                <h5 class="custom_service_title">Customer Service</h5>
                <p class="number">0811-235-9988</p>
                <img src="../secondPage/assets/social_media.png" alt="" class="social_media">
            </div>
            <div class="useful_links">
                <h5 class="useful_links_title footer_title">Useful Link</h5>
                <ul class="links_list">
                    <li class="links_item" v-for="(item, idx) in links" :key="idx">
                        <a href="#" class="link">{{ item }}</a>
                    </li>
                </ul>            
            </div>
        </div>
        <img src="../secondPage/assets/footer_orange.png" alt="" class="footer_orange">
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                links: ['Reform Juice', 'Order & Shipping', 'Tracking Order', 'About Us', 'Repair', 'Terms', 'FAQ']
            }
        }
    }
</script>

<style scoped>
.footer {
    width: 1440px;
    position: relative;
    margin: 0 auto;
}
.footer_info {
    width: 735px;
    height: 262px;
    display: flex;
    justify-content: space-between;
    margin: 50px auto;
}
.footer_title {
    font-size: 20px;
    font-weight: bold;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: left;
    margin-bottom: 15px;
}
.address {
    font-size: 18px;
    font-weight: bold;
    line-height: 21px;
    letter-spacing: 0.02em;
    text-align: left;
    margin-bottom: 15px;
}
.store {
    font-size: 16px;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0.03em;
    text-align: left;
    margin-bottom: 22px;
}
.office {
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
    letter-spacing: 0.02em;
    text-align: left;
    margin-bottom: 15px;
}
.hours {
    font-size: 16px;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0.02em;
    text-align: left;
}
.number {
    font-size: 16px;
    font-weight: 300;
    line-height: 32px;
    letter-spacing: 0.03em;
    text-align: left;
}
.custom_service_title {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.02em;
    text-align: left;
    margin-top: 38px;
}
.social_media {
    margin-top: 25px;
}
.link {
    font-size: 16px;
    font-weight: 300;
    line-height: 32px;
    letter-spacing: 0.03em;
    text-align: left;
}
.footer_orange {
    position: absolute;
    bottom: 0;
    left: 180px;
}
</style>