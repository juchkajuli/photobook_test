<template>
    <div class="input_vue">
          <div class="container"> 
                 <div class="main-content">
                     <div class="content">
                         <div class="mobile_phone">
                            <div class="img_phone"><img src="@/components/img/phones.png" alt="Телефон" class="_phone">
                               <div id="background_mob">
                                  <div class="cart_1"></div>
                                  <div class="cart_2"></div>
                                  <div class="cart_3"></div>
                               </div></div> 
                            </div>
                <!-- Форма ввода для входа-->
                 <div class="right-block">
                    <section class="form-input">
                        <div class="_logo_">
                            <span class="logotype_name"> Photobook </span>
                        </div>
                            <form class="form_" @submit="checkLogin" novalidate="true" action="Account.vue">
                                <p v-if="errors.length">
                                    <b>Пожалуйста исправьте указанные ошибки:</b>
                                <ul>
                                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                                </ul>
                                </p>
                              <div class="login">
                                  <div class="login-field">
                                      <label class="field_log">
                                          <input aria-label="Номер телефона или Логин" aria-required="true"
                                          maxlength="75" name="username" type="text" class="input-login" value=""
                                          placeholder="Номер телефона или Логин" v-model="login">
                                      </label>
                                  </div>
                              </div>
                              <div class="passw">
                                  <div class="password_">
                                      <label class="inp_passw">
                                          <input class="password_log" aria-label="Пароль" aria-required="true"
                                          name="password" type="password" value="" placeholder="Пароль" v-model="password">
                                      </label>
                                  </div>
                              </div>
                              <div class="but_inp">
                                  <input type="submit" class="button_input" value="Войти">


                              </div>
                              <div class="mem_passw">
                                  <a href="#" class="password_memory"> Забыли пароль? </a>
                              </div>
                            </form>
                <!-- Блок регистрация -->
                <div class="block_reg">
                    <div class="pad_block">
                        <p class="reg_ques">Впервые на сайте?</p>
                        <router-link to="/registration" class="regis"> Создай свой аккуант </router-link>
                    </div>
                </div>
            </section>
              </div>
            </div>
              </div>
             </div>
             <FooterComponent />
    </div>
</template>
<script>
import FooterComponent from '@/components/footer-component.vue'
export default {
    name: "Input",
    components: {
        FooterComponent
    },
    data: function () {
        return {
            errors:[],
            login: null,
            password: null
        }
    },
    methods: {
   checkLogin: function (e) {
       if (this.login && this.password) {
           return true;
       }
       this.errors = [];
       if (!this.login) {
           this.errors.push('Требуется указать номер телефона или Логин');
       }
       if (!this.password) {
           this.errors.push('Требуетcя указать пароль');
       }
       e.preventDefault();
   },
        validLogin: function (login) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(login);
        }
    }
}
</script>
<style scoped>
@import "../css/css-1/style.css";
@import "../css/css-1/reset.css";
</style>
