<template>
           <div class="container">
               <div class="main_content">
                   <section class="inform_login">
                       <!-- top section -->
                     <div class="top_section">
                        <div class="img__login">
                           <img src="@/components/img/avatar_woman.svg" alt="avatar-user" id="image_user">
                           <div class="media__add">

                                 <label id="file-input"> Добавить фото или видео </label>
                                 <img class="icon_plus" src="@/components/img/plus_icon.svg"> </div>

                        </div>

                         <div class="user__description">
                           <div class="user_info">
                              <h2 class="_login_"> juchkajuli </h2>
                               <a href="#" class="link_redact">
                               <router-link to="/setting">  <button class="button_redact"> Редактировать профиль </button> </router-link>
                               </a>
                               <button class="but_set" @click="showModal = true"> <img class="user_setting" src="@/components/img/setting.svg"></button>
                               <WindowModal v-if="showModal" @close="showModal = false" />


                         <!--   <router-link to="/setting">  <button class="but_set"> <img class="user_setting" src="@/components/img/setting.svg"></button> </router-link> -->
                            </div>
                          <ul class="user_number_info"> 
                            <li class="inform"> <p class="number_info"> 10 публикаций</p> </li>
                            <li class="inform"> <p class="number_info"> 50 подписчиков</p></li>
                            <li class="inform"> <p class="number_info"> 35 подписок </p> </li>
                          </ul>
                            <div class="info-user">
                             <h1 id="name-account"> Юлия Симонова </h1> 
                             <span class="user_desc"> Описание </span>
                            </div>
                          </div>
                     </div>

                   </section>
                   <!-- section publication -->
                    <section class="publication_user">
                   <PhotoComponent />
                    </section>
               </div>
           </div>
</template>

<script>
    import PhotoComponent from '@/components/public-component.vue'
    import WindowModal from "@/components/modal-window.vue"

    export default {
    name: "Account",
    components: {
        WindowModal,
        PhotoComponent
    },
        data: function () {
            return {
                showModal: false
            }
        }
}
</script>
<style>
    @import "../css/css-4/style.css";
    @import "../css/css-4/reset.css";

    .media__add {
        display: flex;
        align-items: center;
    }
    #file-input {
        font-size: 16px;
        font-family: 'Lato', sans-serif;
    }
</style>