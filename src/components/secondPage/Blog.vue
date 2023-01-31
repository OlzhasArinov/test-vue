<template>
    <section class="blog_wrapper">
        <div class="blog_list container">
            <h5 class="blog_list_title">From our blog</h5>
            <div class="blogs">
                <div class="blog" v-for="(item, idx) in blogs" :key="idx">
                    <img :src="'/src/components/secondPage/assets/' + item.image" alt="img" class="blog_img">
                    <div class="blog_text">
                        <p class="blog_date">{{ item.date }}</p>
                        <h5 class="blog_title">{{ item.title }}</h5>
                        <p class="blog_body">{{ item.body }}</p>
                        <a href="#" class="blog_read_more">Read more</a>
                    </div>
                </div>
            </div>
        </div>
        <img src="../secondPage/assets/golubika.png" alt="golubika" class="blueberry_img">
    </section> 
</template>

<script>
    export default {
        data() {
            return {
                blogs: [
                    {
                        image: 'blog-1.png',
                        date: '12 0ct, 20021',
                        title: 'All about the orange reme',
                        body: 'You will love every inch of this article, it breaks down the sweetness of orange and its importance.'
                    },
                    {
                        image: 'blog-2.png',
                        date: '12 0ct, 20021',
                        title: 'All about the orange reme',
                        body: 'You will love every inch of this article, it breaks down the sweetness of orange and its importance.'
                    },
                    {
                        image: 'blog-3.png',
                        date: '12 0ct, 20021',
                        title: 'All about the orange reme',
                        body: 'You will love every inch of this article, it breaks down the sweetness of orange and its importance.'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.blog_wrapper {
    background: #EEFFE8;
    padding-block: 50px;
    position: relative;
}
.blog_list_title {
    font-size: 36px;
    font-weight: 600;
    line-height: 75px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 30px;
}
.blogs {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.blog {
    width: 319px;
    height: 561px;
    background: rgba(74, 158, 41, 0.06);
}
.blog_text {
    width: 261px;
    padding-left: 16px;
    padding-top: 24px;
    text-align: left;
}
.blog_date {
    margin-bottom: 19px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
}
.blog_title {
    margin-bottom: 23px;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
}
.blog_body {
    margin-bottom: 25px;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
}
.blog_read_more {
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    color: #53B72C;
}
.blueberry_img {
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>