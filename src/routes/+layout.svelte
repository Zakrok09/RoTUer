<script>
    import Header from "../lib/PageComponents/Header.svelte";
    import Footer from "../lib/PageComponents/Footer.svelte";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet"> 
</svelte:head>

<Header />

<slot></slot>

<Footer />
<style>

</style>