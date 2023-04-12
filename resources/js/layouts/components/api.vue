<!-- <template>
  <div
    v-for="r in result"
    :key="result.id"
  >
    <h1>{{ result.userId }}</h1>
    <h1>{{ result.id }}</h1>
    <h1>{{ result.title }}</h1>
    <h1>{{ result.completed }}</h1>
  </div>
</template>

<script>
export default {
  name:"Api",
  setup() {
    const result = ref(null)

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => result.value = data)

    return { result }
  },

}
</script> -->
