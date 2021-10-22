<template>
  <b-nav-item-dropdown right>
    <!-- Using 'button-content' slot -->
    <template #button-content>
        <em>{{initialState.user.username}}</em>
    </template>
    <div @click="setLoader">
      <b-dropdown-item>
        <b-icon icon="person-fill" size="1"></b-icon>
        Profile
      </b-dropdown-item>
    </div>
    
    <div @click="getSetting">
      <b-dropdown-item>
        <b-icon icon="gear-fill" size="1"></b-icon>
        Setting
      </b-dropdown-item>
    </div>

    <b-dropdown-item @click="logout">
      <b-icon icon="box-arrow-left" size="1"></b-icon>
      Logout
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'NavUserItem',
    computed: {
      ...mapState('users',[
        'initialState'
      ])
    },
    methods: {
      logout() {
        this.$store.dispatch('users/logout')
          .then(()=> this.$router.push({ name: 'Login' }))
      },
      setLoader() {
        this.$store.commit('tools/SET_LOADER', true)
        this.$router.push({ 
          name: 'Profile',
          params: { id: this.initialState.user.id }
        })
      },
      getSetting() {
        this.$store.commit('tools/SET_LOADER', true)
        this.$router.push({ 
          name: 'Setting',
        })
      }
    }      
  }
</script>