<template>
  <body>
  <form @submit.prevent="submit">
    <div id="login-form">
    <h1>Sign Up</h1>
      <div id="txtb">
        <input placeholder="Username" type="text" v-model="userId">
      </div>
      <div id="txtb">
        <input placeholder="Password" type="password" v-model="userPw">
      </div>
      <div id="txtb">
        <input placeholder="Nickname" type="text" v-model="userName">
      </div>
      <button id="logbtn" type="submit"><h3>Register</h3></button>
    </div>
  </form>
  </body>
</template>

<script>
export default {
  name: 'SignUpPage',
  data () {
    return {
      userId: '',
      userName: '',
      userPw: ''
    }
  },
  methods: {
    submit () {
      console.log('this: ' + this.userId +
                  ', ' + this.userName +
                  ', ' + this.userPw)
      const { userId, userName, userPw } = this
      this.$emit('submit', { userId, userName, userPw })
    }
  }
}
</script>

<style scoped>
#logbtn {
  display: block;
  width: 80%;
  height: 45px;
  border: none;
  background: linear-gradient(120deg,#3498db,#8e44ad,#3498db);
  background-size: 200%;
  color: #fff;
  outline: none;
  cursor: pointer;
  transition: .5s;
}
#login-form {
  width: 360px;
  background: #f1f1f1;
  height: 580px;
  padding: 90px 40px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
body {
  min-height: 100vh;
  background-image: linear-gradient(120deg,#3498db,#8e44ad);
}
#bottom-text {
  margin-top: 60px;
  text-align: right;
  font-size: 13px;
}
#txtb {
  border-bottom: 2px solid #adadad;
  position: relative;
  margin: 30px 0;
}
h1 {
  text-align: center;
  margin-bottom: 50px;
}
#txtb input {
  font-size: 15px;
  color: #333;
  border: none;
  width: 100%;
  outline: none;
  background: none;
  padding: 0 5px;
  height: 40px
}
</style>
