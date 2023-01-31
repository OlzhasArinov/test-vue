<template>
    <section class="story_bg">
        <section class="story container">
            <div class="story_img">
                <img src="../secondPage/assets/story_img.png" alt="female">
            </div>
            <div class="story_text">
                <h5 class="story_title">
                    PRODUCT STORY
                </h5>
                <h5 class="story_question">
                    What is the juice?
                </h5>
                <p class="story_body">
                    100% juice are produced from concentrated process, some of the water from the crushed juice. This way all the minerals and vitamins are concealed in the juice box for your later consumption.
                </p>
                <div class="story_quotes">
                    <p class="story_quote">
                        “Taking reform juice has been very great for me and my family”.
                        <br>
                        <span class="story_author">Joy Philp</span>
                    </p>
                    <p class="story_quote">
                        “Taking reform juice has been very great for me and my family”.
                        <br>
                        <span class="story_author">Joy Philp</span>
                    </p>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.story_bg {
    width: 100%;
    background: #4A9E29;
} 
.story {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.story_img {
    margin-top: -80px;
}
.story_text {
    width: 470px;
    flex-direction: column;
    text-align: left;
    color: #fff;
}
.story_title {
    font-size: 18px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.455em;
    text-align: left;
}
.story_question {
    font-size: 48px;
    font-weight: 500;
    line-height: 75px;
    letter-spacing: 0em;
    text-align: left;
}
.story_body {
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 30px;
    margin-top: 30px;
}
.story_quotes {
    display: flex;
    justify-content: space-between;
    width: 491px;
    height: 72px;
}
.story_quote {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    border-left: 1px solid #FFA40C;
    padding-left: 13px;
    width: 218px;
}
.story_author {
    font-style: italic;
}
</style>