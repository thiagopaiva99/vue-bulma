Vue.component('message', {
    template: `
        <article class="message">
            <div class="message-header">
                <p>Hello World</p>
                <button class="delete"></button>
            </div>
            <div class="message-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam unde, quae nihil sequi dolor explicabo aspernatur magnam vel veniam omnis ut atque doloribus ipsa est ipsam modi aliquam a.
            </div>
        </article>
    `
})

new Vue({
    el: "#app"
})