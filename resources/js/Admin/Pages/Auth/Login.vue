<template>
    <div class="auth-layout">
      <div class="va-card auth-layout_card">
        <img src="/images/logo.svg" class="logo" alt>
        <div>
          <form @submit.prevent="login" @keydown="form.onKeydown($event)">
            <fdiv
              id="input-group-1"
              label-for="input-1"
            >
              <input
                id="input-1"
                v-model="form.name"
                required
                placeholder="Enter Name"
              />
            </fdiv>
  
            <fdiv id="input-group-2" label-for="input-2">
              <input
                id="input-2"
                v-model="form.password"
                required
                placeholder="Enter Password"
                type="password"
                name="password"
                aria-describedby="input-live-help input-live-feedback"
              />
            </fdiv>
            <div style="text-align: left; color: red;">
              {{ error }}
            </div>
            <button type="submit" variant="primary">
              {{ $t("Log In") }}
            </button>
          </form>
        </div>
      </div>
      <router-view />
    </div>
  </template>
  <script>  
  export default {
    data () {
      return {
        form: new Form({
          name: '',
          password: ''
        }),
        error: ''
      }
    },
    methods: {
      async login () {
        const { data } = await this.form.post('/api/admin')
        if (data.status === 'success') {
          localStorage.setItem('adminUser', JSON.stringify(data.name))
          this.$router.push('/dashboard')
        } else {
          this.error = data.error
        }
      }
    }
  }
  </script>
  
  <style scoped>
      .auth-layout {
          min-height: 100vh;
          /* background-image: linear-gradient(to right, white, grey); */
          /* background-image: linear-gradient(to right, #0e4ac4, #002c85); */
          background: radial-gradient(#1e1e2f, #1e1e24);
          display: flex;
          justify-content: center;
          align-items: center;
      }
      .va-card {
          border-radius: 0.375rem;
          border: none;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          -webkit-box-shadow: 0 2px 3px 0 rgba(52, 56, 85, 0.25);
          box-shadow: 0 2px 3px 0 rgba(52, 56, 85, 0.25);
          word-wrap: break-word;
          background-color: #ffffff;
          position: relative;
          overflow: hidden;
      }
      .auth-layout_card {
          width: 100%;
          max-width: 500px;
          text-align: center;
      }
      .logo {
          width: 200px;
          padding-top: 40px;
          padding-bottom: 40px;
      }
      form {
          padding-left: 40px;
          padding-right: 40px;
          padding-bottom: 40px;
      }
  </style>
  