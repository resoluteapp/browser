<script>
  let count = 0;
</script>

<h1 class="text-2xl mb-5">{count}</h1>

<div class="flex gap-3 items-center">
  <button on:click={() => count++} class="btn">+</button>
  <button on:click={() => count--} class="btn">-</button>
</div>
