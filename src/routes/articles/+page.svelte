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

        <div class="wannaWrite">
            <h2>Wanna make an article?</h2>
            <p>Use the editor and send us the JSON code!</p>
            <a href="/teamtools/articlemaker">Article Maker</a>
        </div>
    </div>
    
</main>

<style lang="scss">
    $contrast_header: #24313d;

    .wannaWrite {
        color: #f0f0f0;
        text-align: center;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        a {
            width: 150px;
            color: #f0f0f0;
            text-decoration: none;
            padding: 15px;
            border: 3px solid hsla(0, 0%, 94%, 0.644);
            border-radius: 15px;
            font-size: 1.2rem;
            transition: all 0.2s ease-in; 
        }

        a:hover {
            background-color: #f0f0f0;
            color: #24313d;
        }
    }

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