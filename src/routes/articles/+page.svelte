<script>
    import HEAD from "$lib/Metadata/HEAD.svelte";
    import {locale} from "$lib/translations/i18n";
    import Article from "$lib/Reusable/Article.svelte";

    export let data;
    const db = data.database;
    const tagsObject = db.tags;
    Article
</script>

<HEAD title="Articles" metadescription="RoTUer - a free, open-source dashboard that students need! RoTUer is a project aimed at helping students by providing them valuable information." />

<main>
    <div class="landingSite">
        <img src="/isometric/logo.svg" alt="The logo of RoTUer">
        <h1 tabindex="0">RoTUer</h1>
        <!-- <a href="/" class="navItem" id="logo">RoTUer</a><i>...is here</i> -->
        <i>Read carefully!</i>
    </div>

    <div class="articles">
        {#each db.articles as article}
            <Article {article} {tagsObject}/>
        {/each}
    </div>
    
</main>

<style lang="scss">
    $contrast_header: #24313d;

    .articles {
        background-color: #24313d;
        padding: 100px 50px;
        display: flex;
        flex-flow: column nowrap;
        gap: 100px;
    }

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