Vue.component('modal', {
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
            <!-- Any other Bulma elements you want -->
            </div>
            <button class="modal-close is-large" aria-label="close" @click="$emit('openModal')"></button>
        </div>
    `
})

new Vue({
    el: "#app",
    data: () => {
        return {
            showModal: false
        }
    }
})