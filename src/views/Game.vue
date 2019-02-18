<template>
  <v-stepper v-model="step" vertical>
    <div v-for="card in cards" :key="card.id">
      <v-stepper-step :complete="step > card.id" :step="card.id">
        玩家{{ card.id }}查看
      </v-stepper-step>

      <v-stepper-content :step="card.id">
        <v-card color="grey lighten-1" class="mb-5 card-content" height="200px" @click="showWord(card.id)">
          <span v-if="card.showWord">{{card.content}}</span>
          <span v-else>点击查看</span>
        </v-card>
        <v-btn color="primary" @click="goNext" :disabled="!card.showWord">下一个</v-btn>
      </v-stepper-content>
    </div>
  </v-stepper>
</template>

<script>
import { mapState } from 'vuex';
import CardUtil from '../utils/cardUtil';

export default {
  data() {
    return {
      step: 1,
    };
  },
  computed: mapState({
    playerNum: state => state.playerNum,
    ucNum: state => state.ucNum,
    emptyNum: state => state.emptyNum,
    cards: state => state.cards
  }),
  created() {
    let cards = CardUtil.getCards(this.playerNum, this.ucNum, this.emptyNum);
    this.$store.commit('setCards', cards);
  },
  methods: {
    showWord(index) {
      this.cards[index - 1].showWord = true;
    },
    goNext() {
      this.step ++;
      if(this.step > this.cards.length) {
        this.$router.push('result');
      }
    }
  }
};
</script>

<style>
.card-content {
  text-align: center;
  font-size: 26px;
  padding-top: 40px;
}
</style>

