<template>
    <div>
        <main class="main">
            <div class="container">
                <div class="content">

                    <!-- Форма для регистрации-->
                    <div class="forma-regist">
                        <h1 class="reg-name"> Регистрация </h1>
                        <h2 class="text_regist"> Введите свои данные: </h2>
                        <form id="forma" @submit="checkForm" action="Account.vue" novalidate="true">
                            <p v-if="errors.length">
                                <b>Пожалуйста исправьте указанные ошибки:</b>
                            <ul>
                                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                            </ul>
                            </p>
                            <div class="name_user" for="name">
                                <label class="names" >
                                    <input type="text" name="name" v-model="name" class="text-forma" placeholder="Имя и Фамилия" maxlength="75">
                                </label>
                            </div>
                            <div class="login-user" for="login">
                                <label class="user-login" >
                                    <input type="text" name="login" v-model="login" class="text-forma" placeholder="Логин" maxlength="35">
                                </label>
                            </div>
                            <div class="user-mail" for="email">
                                <label class="mails" >
                                    <input class="text-forma" type="email" name="email" v-model="email" placeholder="E-mail" maxlength="75">
                                </label>
                            </div>
                            <div class="password-user" for="password">
                                <label class="user_pas" >
                                    <input class="text-forma" name="password" v-model="password" type="password" placeholder="Пароль" maxlength="75">
                                </label>
                            </div>
                            <div class="repeat" for="repeat_password">
                                <label class="rep-pas">
                                    <input class="text-forma" name="repeat_password" v-model="repeat_password" type="password" placeholder="Повторите пароль" maxlength="75">
                                </label>
                            </div>
                            <div class="button_regist">
                                <input type="submit" value="Зарегистрироваться" class="button">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
        <FooterComponent />
    </div>
</template>

<script>
    import FooterComponent from '@/components/footer-component.vue'
    export default {
        name: "Registration",
        components: {
            FooterComponent
        },
        data: function() {
            return {
                errors: [],
                name: null,
                login: null,
                email: null,
                password: null,
                repeat_password: null

            }
        },
        methods: {
            checkForm: function(e) {
                if (this.name && this.login && this.email && this.password && this.repeat_password) {
                    return true;
                }
                this.errors = [];
                if (!this.name) {
                    this.errors.push('Требуется указать имя.');
                }
                if (!this.login) {
                    this.errors.push(' Требуется указать логин.');
                }
                if (!this.email) {
                    this.errors.push('Требуется указать E-mail.');
                } else if (!this.validEmail(this.email)) {
                    this.errors.push('Укажите корректный адрес электронной почты');
                }

                if (!this.password) {
                    this.errors.push('Требуется указать пароль');
                }
                if (!this.repeat_password) {
                    this.errors.push('Повторите пароль');
                }
                e.preventDefault();
            },
            validEmail: function (email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        }
    }

</script>

<style>
    @import "../css/css-3/style.css";
    @import "../css/css-3/reset.css";
</style>