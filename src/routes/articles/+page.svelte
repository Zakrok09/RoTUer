<script>
    import HEAD from "$lib/Metadata/HEAD.svelte";
    import LandingSite from "$lib/PageComponents/LandingSite.svelte";
    import Article from "$lib/Reusable/Article.svelte";

    export let data;
    const db = data.database;
    const tagsObject = db.tags;
    Article
</script>

<HEAD title="Articles" metadescription="RoTUer - a free, open-source dashboard that students need! RoTUer is a project aimed at helping students by providing them valuable information." />

<main>
    <LandingSite underheading="Read carefully!" />

    <div class="articles">
        {#each db.articles as article}
            <Article {article} {tagsObject}/>
        {/each}

        <div class="wannaWrite">
            <h2>Wanna make an article?</h2>
            <p>Use the editor and send us the JSON code!</p>
            <a href="https://github.com/Zakrok09/rotuer-tools">RoTUer Tools</a>
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

    @media only screen and (max-width: 700px) {
        .articles {
            padding: 50px 20px;
        }
    }
    
</style>