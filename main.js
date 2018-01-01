Vue.component('message', {
    template: `
        <article class="message" v-show="visible">
            <div class="message-header">
                <p>Hello World</p>
                <button class="delete" @click="hiddeMessage"></button>
            </div>
            <div class="message-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam unde, quae nihil sequi dolor explicabo aspernatur magnam vel veniam omnis ut atque doloribus ipsa est ipsam modi aliquam a.
            </div>
        </article>
    `,
    data: () => {
        return {
            visible: true
        }
    },
    methods: {
        hiddeMessage: function() {
            this.visible = !this.visible
        }
    }
})

new Vue({
    el: "#app"
})