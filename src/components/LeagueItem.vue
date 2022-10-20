<template>
  <q-item clickable v-ripple :to="'/table/' + id">
    <div id="container">
      <img v-bind:src="logoSource" />
      <h5>
        <strong>{{ name }} - {{ abbreviation }}</strong>
      </h5>
    </div>
  </q-item>
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
    id: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
#league {
  display: flex;
  margin-top: 0.8rem;
  border-radius: 4px;
  padding: 0.4rem 0.6rem 0.4rem 0.6rem;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
}

img {
  width: 60px;
  height: 60px;
  margin-right: 1.2rem;
}
#container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
}

#standings {
  justify-self: flex-end;
  text-decoration: none;
  max-height: 2rem;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 4px;
  padding: 4px 5px 4px 5px;
  background-color: rgb(183, 223, 195);
}

#standings:hover {
  cursor: pointer;
  background-color: rgba(82, 212, 121, 0.795);
}
</style>
