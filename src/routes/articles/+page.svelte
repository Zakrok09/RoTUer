<script>
    import HEAD from "$lib/Metadata/HEAD.svelte";
    import {locale} from "$lib/translations/i18n";

    export let data;
    const db = data.database;
    const tagsObject = db.tags;
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
            <article>
                <h2>{article.name}</h2>
                {#each article.tags as tag}
                    {console.log(tagsObject[tag])}
                    <!-- <span class="tag" style="background-color: {tagsObject[tag].color};">{tagsObject[tag].pressNames[$locale.toString()]}</span> -->
                {/each}

            </article>
        {/each}
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