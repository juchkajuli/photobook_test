<template>
 <div class="list_media">
     <div class="checklist">
     <div v-for="(item, index) in allphotos" :key="index" >
    <img v-bind:src="item.photo"  class="photo__public"> </div>
     </div>
</div>
</template>
<script>


export default {
    name: "PhotoComponent",
    props: {
        id: String
    },
    data: function () {
        return {
            allphotos: [
                {
                id: 1,
                photo: "https://privately.ru/note/uploads/posts/2019-08/privately.ru_obozhaju-kotikov-3.jpg"
                },
                 {
                id: 2,
                photo: "https://i.pinimg.com/736x/8a/d8/8c/8ad88c182a9c399c47a8ffb951cd7ea0.jpg"
                },
                {
                id: 3,
                photo: "https://static.zakon.kz/uploads/posts/2013-12/1386745049_mimimi24.jpg"
                },
                {
                    id: 4,
                    photo: "https://ribalych.ru/wp-content/uploads/2018/06/30-dobryx-i-pozitivnyx-fotografij_001.jpg"
                },
                {
                    id: 5,
                    photo: "https://i.pinimg.com/originals/98/c8/8c/98c88c4b25b44faf651dc81d2d3e38c0.jpg"
                },
                {
                    id: 6,
                    photo: "https://s.mediasole.ru/cache/content/data/images/1210/1210826/original.jpg"
                },
                {
                    id: 7,
                    photo: "https://i.pinimg.com/originals/e7/7f/5c/e77f5cd8e6d07729144a4f88fbc6e82c.jpg"
                },
                {
                    id: 8,
                    photo: "https://i.pinimg.com/736x/f9/74/64/f9746429469699d628d2f67bb575801c.jpg"
                },
                {
                    id: 9,
                    photo: "https://i.pinimg.com/originals/74/0c/58/740c58681a438a2d26ecd4926b2cb489.jpg"
                }

            ]
        }
    } 
}
</script>

