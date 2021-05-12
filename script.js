window.addEventListener("load", () => {
    const app = new Vue({
        el: '#vueContainer',
        data: {
            albums: [],
        },
        methods: {

        },
        mounted() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((resp) => {
                    this.albums = resp.data.response;
                })
        }
    })
})
