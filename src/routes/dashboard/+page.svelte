<script>
    import { t } from "$lib/translations/i18n";
    import HEAD from "$lib/Metadata/HEAD.svelte";
</script>

<HEAD title="Dashboard" metadescription="RoTUer - a free, open-source dashboard that students need! RoTUer is a project aimed at helping students by providing them valuable information." />

<main>
    <div class="landingSite">
        <img src="/isometric/logo.svg" alt="The logo of RoTUer">
        <h1 tabindex="0">RoTUer</h1>
        <!-- <a href="/" class="navItem" id="logo">RoTUer</a><i>...is here</i> -->
        <i>{$t("homepage.underheading")}</i>
    </div>
    
</main>

<style lang="scss">
    $contrast_header: #24313d;

    * {
        font-family: 'Oxygen', sans-serif;
    }

    .landingSite {
        padding-top: 70px;
        padding-bottom: 200px;
        font-family: 'Oxygen', sans-serif;
        text-align: center;

        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        i {
            font-size: 0.9rem;
        }

        img {
            width: 300px;
            display: inline;
        }
    }

    
</style>