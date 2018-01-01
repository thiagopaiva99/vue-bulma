Vue.component('message', {
    template: `
        <article class="message" v-show="visible">
            <div class="message-header">
                <p>{{ title }}</p>
                <button class="delete" @click="hiddeMessage"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `,
    data: () => {
        return {
            visible: true
        }
    },
    props: [
        'title',
        'body'
    ],
    methods: {
        hiddeMessage: function() {
            this.visible = !this.visible
        }
    }
})

new Vue({
    el: "#app"
})