<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-4 mt-5">
        <h1 class="h3 mb-3 font-weight-normal">
        請先登入
        </h1>
        <form id="form" class="form-signin">
          <div class="form-floating mb-3">
            <!--v-model綁定輸入帳號的值，且按下enter時會觸發onclick函式-->
            <input v-model="user.username" @keyup.enter="login" type="email" class="form-control" id="username"
              placeholder="name@example.com" required autofocus>
            <label for="username">Email address</label>
          </div>

          <div class="form-floating">
            <!--v-model綁定輸入密碼的值，且按下enter時會觸發onclick函式-->
            <input v-model="user.password" @keyup.enter="login" type="password" class="form-control" id="password"
              placeholder="Password" required >
            <label for="password">Password</label>
          </div>
          <!--使用@click綁定點擊觸發函式，type需改成button避免傳出表單資料-->
          <button @click="login" class="btn btn-lg btn-primary w-100 mt-3" type="button">
            登入
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.user.username && this.user.password) {
        // 發送 API 至遠端並登入（並儲存 Token）
        const url = 'https://vue3-course-api.hexschool.io/v2/admin/signin'
        this.$axios.post(`${url}`, this.user)
          .then(res => {
            const { token, expired } = res.data
            document.cookie = `hexToken = ${token}; expires=${new Date(expired)};`
            alert('登入成功')
            this.$router.push('/admin')
          })
          .catch(() => {
            alert('請檢查帳號密碼是否有誤')
          })
      } else {
        alert('請填入正確資料')
      }
    }
  },
  mounted () {
    // 取得token，檢查是否已有token紀錄
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1')
    if (token) {
      this.$router.push('/admin') // 有token自動跳轉
    }
  }
}
</script>

<style scoped>
</style>
