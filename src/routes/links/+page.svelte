<script>
    import Linkpagebox from "$lib/Reusable/Linkpagebox.svelte";
    import Linklistitem from "$lib/Reusable/Linklistitem.svelte"
	import { slide } from 'svelte/transition';

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

<div class="abovecategories">
    <div class="filterButtons modeChoice">
        <button class="filterButton" on:click={() => handleViewToggle()}>{buttontext}</button>
    </div>
</div>
{#each categories as cat, i }
    <div class="category">
        <h2>{cat.name}</h2>
        <p>{cat.description}</p>
        
        <div class="leftpad">
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
        
        <div class="leftpad" style="margin-top: 20px;">
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

    .abovecategories {
        background-image: url("/background/curvy.svg");
        background-size: cover;
        padding: 20px 50px;
        position: sticky;
        top: 0px;
    }

    .filterButton {
        background: hsla(208, 100%, 97%, 0.827);
        border-radius: 15px;
        color: rgb(0, 0, 0);
        width: 150px;
        font-weight: bold;
        padding: 10px 20px;
        font-size: 1.1rem;
        cursor: pointer;
    }

    .leftpad {
        padding-left: 50px;
    }

    .showmore {
        cursor: pointer;
        font-size: 1.5rem;
        text-align: center;
        background: none;
        border: none;
        color: aliceblue;
        margin-bottom: 30px;
    }

    .showmore:hover {
        color: hsl(0, 0%, 77%);
    }

    p {
        font-size: 1.3rem;
        padding: 0px 0px 20px 50px;
        width: 70%;
        color: whitesmoke;
    }

    h2 {
        padding: 20px 0px 10px 50px;
        font-size: 2.5rem;
        color: white;
    }

    .category {
        width: 100%;
        border-top: 1px solid black;
        background-color: #24313d;
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