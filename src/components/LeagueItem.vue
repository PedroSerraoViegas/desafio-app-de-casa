<template>
  <li id="league">
    <div id="container">
      <img v-bind:src="logoSource" />
      <h2>
        <strong>{{ name }} - {{ abbreviation }}</strong>
      </h2>
      <button id="standings">Check Standings</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    abbreviation: {
      type: String,
      required: false,
    },
    logoSource: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
#league {
  margin-top: 2rem;
  border-bottom: 1px solid black;
  border-radius: 8px;
  padding: 1.2rem;
}

img {
  width: 80px;
  height: 80px;
  margin-right: 2rem;
}
#container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

#standings {
  max-height: 2rem;
  margin-left: 8rem;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 4px;
  padding: 4px 5px 4px 5px;
  background-color: rgb(223, 206, 183);
}

#standings:hover {
  cursor: pointer;
  background-color: rgb(238, 201, 149);
}
</style>
