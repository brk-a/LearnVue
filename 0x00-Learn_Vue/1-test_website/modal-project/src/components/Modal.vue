<template>
    <div class="backdrop" @click.self="close_modal">
        <div class="modal" :class="{sale: theme === 'sale'}">
            <h1>{{ header }}</h1>
            <p>{{ text }}</p>
            <br>
            <slot>Default Content. Is rendered IFF the content at the slot `Modal` is unavailable.</slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
        <div class="modal" :class="{idd: theme === 'idd'}">
            <slot>Content is unavailable; sorry</slot>
            <div class="fatwa">
                <slot name="links2"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: ['header', 'text', 'sale', 'Idd'],
    methods: {
        close_modal () {
            this.$emit('close')
        }
    },
})
</script>


<style scoped>
.modal{
    width: 400px;
    padding: 20px;
    margin: 100 auto;
    background: white;
    border-radius: 10px;
}
.backdrop{
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}
.h1 {
    color: #03cfb4;
    border: none;
    padding: 0;
}
.p {
    font-style: normal;
}
.modal.sale {
    background: crimson;
    color: white;
}
.modal.sale h1 {
    color: white;
}
.modal.actions {
    text-align: center;
    margin: 30px 0 10px 0;
}
.modal.actions a {
    color: 333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;

}
.modal.sale.actions {
    color: white;
}
.modal.sale.actions a {
    color: white;
}
.modal.idd {
    background: green;
    color: white;
}
.modal.idd h1 {
    color: white;
}
.modal.idd p {
    font-style: normal;
}
.modal.idd .fatwa {
     text-align: center;
    margin: 30px 0 10px 0;
}
.modal.idd .fatwa a {
    color: 333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
}
</style>