<script>
    export let data;
    let categories = data.links.categories;

    import Linkpagebox from "$lib/Reusable/Linkpagebox.svelte";
</script>

{#each categories as cat }
    <div class="category">
        <h2>{cat.name}</h2>
        
        <div class="links">
            {#each cat.links as link }
                <!-- <a href={link.eng.link}>{link.eng.presName}</a> -->
                <Linkpagebox desc={link.eng.desc} href={link.eng.link} title={link.eng.presName} />
            {/each}    
        </div>
            
    </div>
{/each}

<style lang="scss">
    *  {
        font-family: 'Oxygen', sans-serif;
    }

    h2 {
        padding: 20px 50px;
        font-size: 2rem;
    }

    .category {
        width: 100%;
        border-top: 1px solid black;
    }

    .links {
        margin: 50px;
        display: flex;
        flex-flow: row wrap;
        gap: 30px;
    }
</style>