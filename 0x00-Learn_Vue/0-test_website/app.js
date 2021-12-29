const app = Vue.createApp({
    data(){
        return {
            url0: 'http://www.example.com',
            url: 'https://www.google.com',
            showBooks: false,
            title0: 'The Adventures of Thiga',
            author0: 'C. M. Mureithi',
            number0: 75,
            x: 0,
            y: 0,
            books: [
                {title: 'The Adventures of Thiga', author: 'C. M. Mureithi', img: '0-test_website/1.jpeg', isFav: 'true'},
                {title: 'Murogi wa Kagogo', author: 'Ngugi wa Thiong\'o,', img: '0-test_website/2.jpeg', isFav: 'false'},
                {title: 'Tajiri Mjanja', author: 'Leo Odera Omolo', img: '0-test_website/3.jpeg', isFav: 'false'},
                {title: 'Goat Matata', author: 'Oxford', img: '0-test_website/4.jpeg', isFav: 'true'},
            ]

        }
    },

    methods: {
        change_title(title) {
            this.title = title
        },
        toggle_show_button() {
            this.showBooks = !showBooks
        },
        handle_mouse_over() {
            console.log('mouse-over event')
        },
        handle_mouse_leave() {
            console.log('mouse-leave event')
        },
        handle_double_click(e, data) {
            console.log(e, e.type) //to demo the event object. The object is created for every event (including the ones above)
            if (data) {
                console.log(data)
            }
        },
        handle_mouse_move (e) {
            console.log('mouse move event')
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggle_fav_status(book){
            book.isFav = !book.isFav
        },
    },

    computed: {
        filtered_books() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')
