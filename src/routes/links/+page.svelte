<script>
    import Linkpagebox from "$lib/Reusable/Linkpagebox.svelte";
    import Linklistitem from "$lib/Reusable/Linklistitem.svelte"

    export let data;
    let categories = data.links.categories;
    let boxView = true;
    let buttontext = "📅 Boxes";

    function handleViewToggle() {
        boxView = !boxView;
        
        buttontext = boxView ? '📅 Boxes' : '📄 Compact';
    }

    function handleToggle(section) {
        categories[section].show = !categories[section].show;
    }

    function handleToggleExtra(section) {
        categories[section].showExtra = !categories[section].showExtra;
    }
</script>

<div class="landingSite">
    <img src="/isometric/logo.svg" alt="The logo of RoTUer">
    <h1 tabindex="0">RoTUer</h1>
    <i>Links are finally here yo</i>
</div>
<div class="abovecategories">
    <div class="filterButtons modeChoice">
        <button class="filterButton" on:click={() => handleViewToggle()}>{buttontext}</button>
    </div>
</div>
{#each categories as cat, i }
    <div class="category">
        <h2 class="supplementaryCatText">{cat.name}</h2>
        <p class="supplementaryCatText">{cat.description}</p>
        
        <div class="supplementaryCatText center">
            <button class="showmore" on:click={()=> handleToggle(i)}>Show more</button>
        </div>
        {#if cat.show}
            {#if boxView}
                <div class="links" >
                    {#each cat.links as link }
                        <!-- <a href={link.eng.link}>{link.eng.presName}</a> -->
                        <Linkpagebox desc={link.eng.desc} href={link.eng.link} title={link.name} tags={link.tags}/>
                    {/each}    
                </div>
                {:else}
                <div class="linksCompact" >
                    {#each cat.links as link }
                        <!-- <a href={link.eng.link}>{link.eng.presName}</a> -->
                        <Linklistitem desc={link.eng.desc} href={link.eng.link} title={link.name} tags={link.tags}/>
                    {/each}    
                </div>
            {/if}
        {/if}
        
        <div class="supplementaryCatText center" style="margin-top: 20px;">
            <button class="showmore" on:click={()=> handleToggleExtra(i)}>+ Show Extra</button>
        </div>
        {#if cat.showExtra}
            {#if boxView}
                <div class="links" >
                    {#each cat.extralinks as link }
                        <!-- <a href={link.eng.link}>{link.eng.presName}</a> -->
                        <Linkpagebox desc={link.eng.desc} href={link.eng.link} title={link.name} tags={link.tags}/>
                    {/each}    
                </div>
                {:else}
                <div class="linksCompact" >
                    {#each cat.extralinks as link }
                        <!-- <a href={link.eng.link}>{link.eng.presName}</a> -->
                        <Linklistitem desc={link.eng.desc} href={link.eng.link} title={link.name} tags={link.tags}/>
                    {/each}    
                </div>
            {/if}  
        {/if}
        
            
    </div>
{/each}

<style lang="scss">
    *  {
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

    .abovecategories {
        background-image: url("/bubbleBackground.svg");
        background-size: cover;
        padding: 20px 15vw;
        position: sticky;
        top: 0px;
    }

    .filterButton {
        background: hsla(0, 2%, 100%, 0.827);
        border-radius: 15px;
        border: none;
        color: rgb(0, 0, 0);
        width: 150px;
        font-weight: bold;
        padding: 10px 20px;
        font-size: 1.1rem;
        cursor: pointer;
    }
    .center {
        width: 100%;
        margin: 0px !important;
        display: flex;
        justify-content: center;
    }
    .showmore {
        cursor: pointer;
        font-size: 1rem;
        text-align: center;
        background: #1b252e;
        padding: 10px 20px;
        border: none;
        color: aliceblue;
        margin-bottom: 30px;
    }

    .showmore:hover {
        color: hsl(0, 0%, 77%);
    }

    p {
        font-size: 1.1rem;
        width: 70%;
        color: whitesmoke;
    }

    h2 {
        font-size: 2.5rem;
        color: white;
    }

    .supplementaryCatText {
        margin-left: 15vw;
    }

    .category {
        width: 100%;
        border-top: 1px solid black;
        background-color: rgb(85, 103, 120);
        background-size: cover;
        padding: 0px 0px 40px 0px;
    }

    .links {
        padding: 70px 0px;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        gap: 30px;
        background-color: #1b252e;
    }

    .linksCompact {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }
</style>