<template>
  <div class="home">
    <div class="container">
      <div class="main-content">
        <!-- Левая часть-->
    <div class="left_block">
      <!-- Публикация 1-->
      <div class="public__photo">
      <ContentComponent />
      <div class="publication">
        <img src="https://avatars.mds.yandex.net/get-zen_doc/1648379/pub_5d691818aad43600ad82cc7f_5d6919ff92414d00aeba9cd6/scale_1200" class="photo">
      </div>
      <CommentComponent />
       <AddComment />
      </div>
      <!--Публикация 2-->
      <div class="public__photo">
       <ContentComponent />
      <div class="publication">
        <img src="https://i.pinimg.com/originals/77/a9/bc/77a9bc62ed2c421f66023aded6eee116.jpg" class="photo">
      </div>
      <CommentComponent />
       <AddComment />
      </div>
      <!--Публикация 3-->
       <div class="public__photo">
       <ContentComponent />
      <div class="publication">
        <img src="https://i.pinimg.com/736x/5d/0e/e6/5d0ee6e8054d5eca27d6f4b8e1fae501.jpg" class="photo">
      </div>
      <CommentComponent />
       <AddComment />
      </div>
  </div>   

  <!-- Правая часть-->
  <div class="right_block">
    <div class="img-user-recom">
          <router-link to="/account" class="user-link"> <img src="@/components/img/avatar1.svg" alt="Аватар" class="user-avatar"></router-link> 
          <router-link to="/account" class="name-friends"> Логин </router-link> 
        <p class="img-name-user"> Имя пользователя </p>  
        </div>
        <!-- Статичные блоки -->
        <!-- Блок №1 -->
     <div class="list-friends"> 
         <div class="word-friend">
             <p class="word-friends"> Подписки </p>
         </div>
         <FriendLink />
         <FriendLink />
         <FriendLink />
         <FriendLink />
         <FriendLink />
         </div>
           <!-- Блок №2 -->
          <div class="recommend-block">
          <div class="word-recommend">
              <div class="word-recommends"> Рекомендации 
                <button class="all-rec-but" type="button"> Все </button> </div>
          <RecommendLink /> 
          <RecommendLink /> 
          <RecommendLink /> 
          </div>
          </div>   
          <div class="footer-content">
                    <nav class="footer-menu">
                        <ul class="list-footer">
                            <li class="li-footer"><a href="#" class="footer-link"> О нас </a></li>
                            <li class="li-footer"><a href="#" class="footer-link"> Помощь </a></li>
                            <li class="li-footer"><a href="#" class="footer-link"> Конфиденциальность </a></li>
                            <li class="li-footer"><a href="#" class="footer-link"> Условия </a></li>
                            <li class="li-footer"><a href="#" class="footer-link"> Реклама </a></li>
                        </ul>
                    </nav>
                </div>
  </div> 
  </div>
   </div>
  </div>
</template>

 <script>
import ContentComponent from '@/components/content-component.vue'
import CommentComponent from '@/components/comment-component.vue'
import AddComment from '@/components/add-comment.vue'
import FriendLink from '@/components/friend-link.vue'
import RecommendLink from '@/components/recommend-link.vue'
export default {
  name: 'Home',
  components: {
    ContentComponent,
    CommentComponent,
    AddComment,
    FriendLink,
    RecommendLink
  }
} 
</script> 

<style>
@import "../css/style.css";
@import "../css/reset.css";
</style>
