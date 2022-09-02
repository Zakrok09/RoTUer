<script>
    import HEAD from "$lib/Metadata/HEAD.svelte";
    import { each } from "svelte/internal";
    import Checkies from "../../lib/Reusable/Checkies.svelte";
    export let data;
    const db = data.database;
    const tags = db.tags;
    const checkies = db.checkies;

    function handleToggle(id){
        
    }
</script>

<HEAD title="Checkies" metadescription="RoTUer - a free, open-source dashboard that students need! RoTUer is a project aimed at helping students by providing them valuable information." />

<main>
    <div class="landingSite">
        <img src="/isometric/logo.svg" alt="The logo of RoTUer">
        <h1 tabindex="0">RoTUer</h1>
        <!-- <a href="/" class="navItem" id="logo">RoTUer</a><i>...is here</i> -->
        <i>We make it simple, people!</i>
    </div>
    <div class="behindCheckies">
        {#each checkies as checkie, id}
            <Checkies title={checkie.name} id={id} tagsObject= {tags} tags={checkie.tags} text={checkie.text} relevantLinks={checkie.relevantLinks} ></Checkies>
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

    .behindCheckies {
        background-image: url("/background/bubbleBackground.svg");
        background-size: cover;
        color: whitesmoke;
    }

    
</style>