<script>
    import BigLinkbox from "../../lib/Reusable/BigLinkbox.svelte";
    import { t } from "$lib/translations/i18n";
    import HEAD from "$lib/Metadata/HEAD.svelte";

</script>

<HEAD title="About" metadescription="Find out about who we are, what our goal is, what RoTUer is & much more! " />

<main> 
    <BigLinkbox background="/background/stripes1.svg" src="/pngs/prax.png" title={$t("homepage.aboutus")} alt="Praxidike Logo" anchorText={$t("homepage.more")} href="/about/us"/>
    <BigLinkbox background="/background/stripes2.svg" src="/pngs/logoR.png" title={$t("homepage.aboutRotuer")} alt="roTUer Logo" anchorText={$t("homepage.more")} href="/about/RoTUer" />
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