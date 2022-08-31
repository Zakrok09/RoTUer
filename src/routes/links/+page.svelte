<script>
    import Linkpagebox from "$lib/Reusable/Linkpagebox.svelte";
	import { slide } from 'svelte/transition';

    export let data;
    let categories = data.links.categories;

    function handleToggle(section) {
        categories[section].show ? categories[section].show = false : categories[section].show = true;
    }

    function handleToggleExtra(section) {
        categories[section].showExtra ? categories[section].showExtra = false : categories[section].showExtra = true;
    }
</script>

{#each categories as cat, i }
    <div class="category">
        <h2>{cat.name}</h2>
        <p>{cat.description}</p>
        
        <div class="center">
            <button class="showmore" on:click={()=> handleToggle(i)}>Show more</button>
        </div>
        {#if cat.show}
            <div class="links" transition:slide={{duration: 500}}>
                {#each cat.links as link }
                    <!-- <a href={link.eng.link}>{link.eng.presName}</a> -->
                    <Linkpagebox desc={link.eng.desc} href={link.eng.link} title={link.name} tags={link.tags}/>
                {/each}    
            </div>
        {/if}
        
        <div class="center">
            <button class="showmore" on:click={()=> handleToggleExtra(i)}>+ Show Extra</button>
        </div>
        {#if cat.showExtra}
            <div class="links" transition:slide={{duration: 500}}>
                {#each cat.extralinks as link }
                    <!-- <a href={link.eng.link}>{link.eng.presName}</a> -->
                    <Linkpagebox desc={link.eng.desc} href={link.eng.link} title={link.name} tags={link.tags}/>
                {/each}    
            </div>
        {/if}
        
            
    </div>
{/each}

<style lang="scss">
    *  {
        font-family: 'Oxygen', sans-serif;
    }

    .center {
        display: flex;
        justify-content: center;
        width: 100%;
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
        margin: 50px;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        gap: 30px;
    }
</style>