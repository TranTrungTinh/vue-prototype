<template>
    <section class="login" :style="[styles]">
        <sign-up />
        <!-- <login /> -->
    </section>
</template>
<script>
import Login from '@/components/auth/login/Login';
import SignUp from '@/components/auth/signup/Signup';

export default {
    components: { Login, SignUp },
    data () {
        return {
            styles: {
                backgroundImage: `url("${require('@/assets/bg-login.jpg')}")`,
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.login {
    background-size: cover;
    background-position: top;
    position: relative;
    z-index: 1;
    height: 100%;
}
</style>


