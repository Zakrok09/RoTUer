<script>
    import BigLinkbox from "../../lib/Reusable/BigLinkbox.svelte";

</script>

<svelte:head>
    <title>About | RoTUer</title>
</svelte:head>

<main> 
    <BigLinkbox src="/prax.png" title="About Us" alt="Praxidike Logo" anchorText="Read More" href="/about/us"/>
    <BigLinkbox background="/stripes2.svg" src="logoR.png" title="About roTUer" alt="roTUer Logo" anchorText="Read More" href="/about/RoTUer" />
</main>

<style lang="scss">
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        padding-bottom: 100px;
    }

    @media only screen and (max-width: 580px) {
        main {
            flex-flow: column nowrap;
        }
    }
</style>