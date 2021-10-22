import { required, minLength, email } from 'vuelidate/lib/validators'

export const AuthValidation = {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      type: 'password',
      errComplete: 'Pleas Complete!',
      errAuth: 'Something is warning!'
    }
  },
  validations: {
    fullname: {
      required,
      minLength: minLength(4)
    },
    username: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    },
  },
  methods: {
    checkType() {
      this.type = this.type==='password'?'text':'password';
    },
    login() {
      const data = {
        email: this.email,
        password: this.password
      }
      const message = {
        type: 'SUCCESS',
        message: 'User has been logged successfuly'
      }
      this.$store.dispatch('users/login', data, message)
    },
    register() {
      alert('register')
    },
  }
}