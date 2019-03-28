<template>
<div class="login-form">
  <a-form :form="form" @submit="handleSubmit">
    <div class="login-form--welcome">
      <span></span>
      <h1>Log in</h1>
    </div>
    <a-form-item class="login-form--item">
      <a-input
        v-decorator="[ 'username', { rules: [rules.username] }]"
        placeholder="Username"
      >
        <a-icon slot="prefix" type="user" class="login-form--item__icon"/>
      </a-input>
    </a-form-item>
    <a-form-item class="login-form--item">
      <a-input
        v-decorator="[ 'password', { rules: rules.password }]"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" class="login-form--item__icon"/>
      </a-input>
    </a-form-item>
    <a-form-item class="login-form--item">
      <a-checkbox class="login-form--item__checkbox" v-decorator="[ 'remember', rules.remeber ]">
        Remember me
      </a-checkbox>
      <a class="login-form--item__forgot" href="">Forgot password?</a>
    </a-form-item>
    <a-row type="flex" justify="center">
      <a-col :xs="24">
        <a-button html-type="submit" class="login-form--item__button">
          Login
        </a-button>
      </a-col>
    </a-row>
    <div class="login-form--signup">
      <p>You don't have an account ?</p>
      <a href="">SIGN UP</a>
    </div>
  </a-form>
</div>
</template>

<script>

export default {
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  data () {
      return {
          rules: {
              username: { required: true, message: 'Please input your username!' },
              password: [
                { required: true, message: 'Please input your password !' },
                { min: 8, message: 'Password is not strong !' },
              ],
              remeber: { valuePropName: 'checked', initialValue: false }
          }
      }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.login-form {

  // max-width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  border-radius: 10px;
  overflow: hidden;
  padding: 55px 55px 37px 55px;
  background: #fff;

  &--welcome {
    text-align: center;

    & h1 {
      font-size: 36px;
    }
  }

  &--item {
    &__checkbox {
      color: #000;
    }

    &__forgot {
      color: #000;
      float: right;

      &:hover {
        text-decoration: none;
        color: #a64bf4;
      }
    }

    &__button {
      font-size: 18px;
      color: #fff;
      border-radius: 25px;
      width: 100%;
      height: 50px;
      background: -webkit-linear-gradient(bottom, #7579ff, #b224ef);
      border: none;

      &:hover {
        border: none;
        color: #fff;
        background: -webkit-linear-gradient(top, #7579ff, #b224ef);
      }
    }
  }

  &--signup {
    margin: 50px 0 0 0;
    text-align: center;

    & a {
      color: #333;

      &:hover {
        color: #a64bf4;
      }
    }
  }
}
</style>