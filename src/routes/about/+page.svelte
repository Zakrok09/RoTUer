<script>
    import BigLinkbox from "../../lib/Reusable/BigLinkbox.svelte";
    import { t } from "$lib/translations/i18n";

</script>

<svelte:head>
    <title>About | RoTUer</title>
</svelte:head>

<main> 
    <BigLinkbox src="/prax.png" title={$t("homepage.aboutus")} alt="Praxidike Logo" anchorText={$t("homepage.more")} href="/about/us"/>
    <BigLinkbox background="/stripes2.svg" src="logoR.png" title={$t("homepage.aboutRotuer")} alt="roTUer Logo" anchorText={$t("homepage.more")} href="/about/RoTUer" />
</main>

<style lang="scss">
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        padding-bottom: 200px;
    }

    @media only screen and (max-width: 580px) {
        main {
            flex-flow: column nowrap;
        }
    }
</style>