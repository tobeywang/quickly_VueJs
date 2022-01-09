<template>
  <b-card
    title="Card Title"
    sub-title="Card Subtitle"
    style="max-width: 20rem;"
  >
    <b-tabs>
      <b-tab title="Tab 1">
        <b-card-text>{{msg}}</b-card-text>
      </b-tab>
      <b-tab title="Tab 2">
        <b-card-text>Tab 2 Contents</b-card-text>
        <b-button
          size="md"
          variant="primary"
        >
          Button
        </b-button>
      </b-tab>
      <b-tab title="Tab 3" disabled>
        <b-card-text>Tab 3 Contents</b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App 2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
/* @import "bootstrap/dist/css/bootstrap.css";
@import "bootstrap-vue/dist/bootstrap-vue.css"; */
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
