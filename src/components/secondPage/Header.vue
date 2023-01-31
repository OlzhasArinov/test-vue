<template>
    <header class="header container">
        <img src="../secondPage/assets/logo.png" alt="logo" class="logo">
        <ul class="menu_list">
            <li class="menu_item" v-for="(item, id) in menuList" :key="id" @click="showPage(id)">
                <a href="#" class="menu_link">{{ item }}</a>
            </li>
        </ul>
        <button class="sign_in_btn">Sign In</button>
        <router-link to="/">Go to Main Page</router-link>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                menuList: ['Shop', 'Blog', 'Products']
            }
        },
        methods: {
            showPage(i) {
                alert(this.menuList[i])
            }
        }
    }
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.menu_list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 500px;
}
.menu_link {
    font-size: 20px;
    line-height: 75px;
    letter-spacing: 0em;
    font-weight: 400;
}
.menu_link:focus, .menu_link:hover {
    font-weight: 800;
}

.shop_menu {
    width: 240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.shop_link {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.price {
    margin-left: 10px;
}
.sign_in_btn {
    width: 120px;
    height: 42px;
    background: #4A9E29;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    cursor: pointer;
}
.logo {
    width: 89px;
    height: 31px;
}
</style>