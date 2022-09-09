<script>
    import HEAD from "$lib/Metadata/HEAD.svelte";
    import LandingSite from "$lib/PageComponents/LandingSite.svelte";
    import Checkies from "$lib/Reusable/Checkies.svelte";
    export let data;
    const db = data.database;
    const tags = db.tags;
    const checkies = db.checkies;
    const links = data.links
    let relevantLink = [];
    let relevantLinksDataPart = [];    
    let relevantLinksData = [];
    for(let checkie of checkies){
        relevantLinksDataPart = [];
        for(let checkieLink of checkie.relevantLinks){
            for(let categorie of links.categories){
                relevantLink = categorie.links.filter(link => link.name==checkieLink)
                for(let link of relevantLink){
                    relevantLinksDataPart.push(link)
                }
            }
        }
        relevantLinksData.push(relevantLinksDataPart)
    }
</script>

<HEAD title="Checkies" metadescription="RoTUer - a free, open-source dashboard that students need! RoTUer is a project aimed at helping students by providing them valuable information." />

<main>
    <LandingSite src="/isometric/arrow.svg" underheading="We make it simple, people!" />

    <h1>CHECKIS IS BEING MIGRATED TO THE NEWER VERSION OF ROTUER</h1>
    <!-- <div class="behindCheckies">
        <h2>Checkies:</h2>
        {#each checkies as checkie, i}
            <Checkies title={checkie.name} tagsObject={tags} linkTagsObject={links.tags} tags={checkie.tags} text={checkie.text} relevantLinks={relevantLinksData[i]} ></Checkies>
        {/each}
    </div> -->
</main>

<style lang="scss">
    $contrast_header: #24313d;

    * {
        font-family: 'Oxygen', sans-serif;
    }

    // .behindCheckies {
    //     padding: 50px 100px;
    //     background-image: url("/background/curvy3.svg");
    //     background-size: cover;
    //     color: whitesmoke;

    //     h2 {
    //         text-align: center;
    //     }
    // }

    // @media only screen and (max-width: 1000px){
    //     .behindCheckies {
    //         padding: 50px 30px;
    //     }
    // }

    // @media only screen and (max-width: 600px){
    //     .behindCheckies {
    //         padding: 50px 5px;
    //     }
    // }

    
</style>