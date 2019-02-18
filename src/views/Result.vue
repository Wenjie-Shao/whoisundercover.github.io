<template>
  <v-container>
    <v-list>
      <v-list-tile v-for="card in cards" :key="card.id">
        <v-list-tile-avatar>
          <v-icon>person</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content @click="showIdentity(card.id)">
          <v-list-tile-title>
            <span v-if="card.showIdentity">{{ card.identity }}</span>
            <span v-else>玩家{{ card.id }}</span>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-alert v-if="gameresult == 0" :value="true" type="success">平民获胜</v-alert>
    <v-alert v-if="gameresult == 1" :value="true" type="error">卧底获胜</v-alert>
    <v-btn v-if="gameover" round color="primary" dark @click="restart">重新开始</v-btn>
    <v-btn v-if="gameover" round dark @click="gohome">回到首页</v-btn>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      existPlayer: 0,
      existUc: 0,
      existEmpty: 0,
      gameover: false,
      gameresult: -1
    };
  },
  computed: mapState({
    playerNum: state => state.playerNum,
    ucNum: state => state.ucNum,
    emptyNum: state => state.emptyNum,
    cards: state => state.cards,
  }),
  created() {
    this.existPlayer = this.playerNum;
    this.existUc = this.ucNum;
    this.existEmpty = this.emptyNum;
  },
  methods: {
    showIdentity(index) {
      let card = this.cards[index - 1];
      if (card.showIdentity) {
        return;
      }
      card.showIdentity = true;
      if (card.identity == "卧底") {
        this.existUc--;
      } else if (card.identity == "白板") {
        this.existEmpty--;
      }
      this.existPlayer--;
      if(this.gameover) {
        return;
      }
      if (this.existUc == 0 && this.existEmpty == 0) {
        this.gameover = true;
        this.gameresult = 0;
      } else if (this.existPlayer <= 3) {
        this.gameover = true;
        this.gameresult = 1;
      }
    },
    restart() {
      this.$store.commit("reset");
      this.$router.push("game");
    },
    gohome() {
      this.$store.commit("reset");
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>
