<template>
  <li id="team">
    <span>
      <strong>{{ name }}</strong>
    </span>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
#team {
  border-bottom: 1px solid rgba(0, 0, 0, 0.151);
  padding: 0.2rem;
}

#container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
</style>
