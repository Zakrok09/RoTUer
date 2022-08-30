<script>
    let number1;
    let number2;

    $:num3 = Number.parseInt(number1) + Number.parseInt(number2);
</script>

<svelte:head>
    <title>About | RoTUer</title>
</svelte:head>

<div class="felx">
    <input type="text" bind:value={number1}>
    <input type="text" bind:value={number2}>
    <p>{num3}</p>
</div>

<p>nothing hre bro</p>

<style lang="scss">
</style>