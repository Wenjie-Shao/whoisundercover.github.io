<template>
  <v-container>
    <v-alert
      v-model="alert"
      type="success"
      transition="scale-transition"
      class="number-alert"
    >
      游戏人数必须大于卧底数和白板数之和
    </v-alert>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-text-field label="游戏人数" :rules="[rules.required]" v-model="playerNum"></v-text-field>
      </v-flex>

      <v-flex xs12>
        <v-text-field label="卧底数量" v-model="ucNum"></v-text-field>
      </v-flex>

      <v-flex xs12>
        <v-text-field label="白板数量" v-model="emptyNum"></v-text-field>
      </v-flex>

      <v-flex xs12>
        <v-btn round color="primary" dark @click="start">开始游戏</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    alert: false,
    rules: {
      required: value => !!value || "必填",   
    }
  }),
  computed: {
    playerNum: {
      get() {
        return this.$store.state.playerNum;
      },
      set(value) {
        this.$store.commit('setPlayerNum', value)
      }
    },
    ucNum: {
      get() {
        return this.$store.state.ucNum;
      },
      set(value) {
        this.$store.commit('setUcNum', value)
      }
    },
    emptyNum: {
      get() {
        return this.$store.state.emptyNum;
      },
      set(value) {
        this.$store.commit('setEmptyNum', value)
      }
    },
  },
  methods: {
    start() {
      this.alert = false;
      if(this.playerNum < 2 || this.playerNum < this.ucNum + this.emptyNum) {
        this.alert = true;
        return;
      }
      this.$router.push('game');
    }
  }
};
</script>

<style>
</style>
