<script>
    import Linkpagebox from "$lib/Reusable/Linkpagebox.svelte";
    import Linklistitem from "$lib/Reusable/Linklistitem.svelte"
    import {locale} from "$lib/translations/i18n"

    export let data;
    let categories = data.links.categories;
    let buttonStateText=[]
    for(let i=0; i<categories.length;i++){
        buttonStateText.push({
            show:true,
            showText:"Show More",
            showExtra:true,
            showExtraText:"+ Show More Extras"
        })
    }
    let boxView = true;
    let buttontext = "📅 Boxes";
    let tagsObject = data.links.tags;
    const tagsArray = [['all', {text: 'All tags', color: 'hsla(0, 0%, 100%, 0.951)'}], ...Object.entries(tagsObject)];
    let activeTag = 'all'; 

    function handleViewToggle() {
        boxView = !boxView;
        
        buttontext = boxView ? '📅 Boxes' : '📄 Compact';
    }

    function handleToggle(section) {
        categories[section].show = !categories[section].show;
        buttonStateText[section].show = !buttonStateText[section].show;
        buttonStateText[section].showText = buttonStateText[section].show ? 'Show More' : 'Show Less';
    }

    function handleToggleExtra(section) {
        categories[section].showExtra = !categories[section].showExtra;
        buttonStateText[section].showExtra = !buttonStateText[section].showExtra;
        buttonStateText[section].showExtraText = buttonStateText[section].showExtra ? '+ Show More Extras' : '+ Show Less Extras';
    }
    
    /**
     * This function checks if the chosen tag exists in the links tags. 
     * As a first parametar you should always use the tags array of a link (e.g. link.tags)
     * @param {array} linksTags Array of tags that a links contain
     * @param {string} chosenTag String, representing the tag to be used for comparison
     */
    function containsTag(linksTags, chosenTag) {
        if (chosenTag === 'all') return true;
        let result = false;
        if (linksTags.some(linkTag => linkTag.toLowerCase() === chosenTag.toString())) result = true;
        return result;
    }
</script>

<svelte:head>
    <title>Links | RoTUer</title>
</svelte:head>

<div class="landingSite">
    <img src="/isometric/logo.svg" alt="The logo of RoTUer">
    <h1 tabindex="0">RoTUer</h1>
    <i>Links are finally here</i>
</div>
<div class="abovecategories">
    <button class="filterButtons modeChoice" on:click={handleViewToggle}>{buttontext}</button>
    <select class="filterButtons tagFilter" style="background-color: {activeTag[1].color};" bind:value={activeTag}>
        <option value="all" selected disabled hidden>Choose a tag</option>
        {#each tagsArray as tagEntry}
            <option style="background-color: hsla(0, 0%, 100%, 0.951);" value={tagEntry}>{tagEntry[1].text}</option>
        {/each}
    </select>
</div>
{#each categories as cat, i}
    <div class="category">
        <h2 class="supplementaryCatText">{cat.name}</h2>
        <p class="supplementaryCatText">{cat.description}</p>
        
        <div class="supplementaryCatText center">
            <button class="showmore" on:click={()=> handleToggle(i)}>{buttonStateText[i].showText}</button>
        </div>
        {#if cat.show}
            {#if boxView}
                <div class="linksBg">
                    <div class="links">
                        {#each cat.links as link}
                            {#if containsTag(link.tags, activeTag[0])}
                                <Linkpagebox desc={link[$locale.toString()].desc} href={link[$locale.toString()].link} title={link.name} tags={link.tags} {tagsObject}/>
                            {/if}
                        {/each}
                    </div>
                    <p id="noLinks?">No links? Maybe you have filtered a tag that no link from this category has. Check other categories</p>
                </div>
            {:else}
                <div class="linksBg">
                    <div class="linksCompact" >
                        {#each cat.links as link}
                            {#if containsTag(link.tags, activeTag[0])}
                                <Linklistitem desc={link[$locale.toString()].desc} href={link[$locale.toString()].link} title={link.name} tags={link.tags} {tagsObject}/>
                            {/if}
                        {/each}   
                        <p id="noLinks?">No links? Maybe you have filtered a tag that no link from this category has. Check other categories</p>
                    </div>
                </div>
            {/if}
        {/if}
        
        <div class="supplementaryCatText center" style="margin-top: 20px;">
            <button class="showmore" on:click={()=> handleToggleExtra(i)}>{buttonStateText[i].showExtraText}</button>
        </div>
        {#if cat.showExtra}
            {#if boxView}
                <div class="linksBg">
                    <div class="links">
                        {#each cat.extralinks as link}
                            {#if containsTag(link.tags, activeTag[0])}
                                <Linkpagebox desc={link[$locale.toString()].desc} href={link[$locale.toString()].link} title={link.name} tags={link.tags} {tagsObject}/>
                            {/if}
                        {/each}
                    </div>
                    <p id="noLinks?">No links? Maybe you have filtered a tag that no link from this category has. Check other categories</p>
                </div>
            {:else}
                <div class="linksBg">
                    <div class="linksCompact" >
                        {#each cat.extralinks as link}
                            {#if containsTag(link.tags, activeTag[0])}
                                <Linklistitem desc={link[$locale.toString()].desc} href={link[$locale.toString()].link} title={link.name} tags={link.tags} {tagsObject}/>
                            {/if}
                        {/each}   
                        <p id="noLinks?">No links? Maybe you have filtered a tag that no link from this category has. Check other categories</p>
                    </div>
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
        background-image: url("/background/bubbleBackground.svg");
        background-size: cover;
        padding: 20px 15vw;
        position: sticky;
        top: 0px;
    }

    .filterButtons {
        border-radius: 15px;
        border: none;
        color: rgb(0, 0, 0);
        width: 170px;
        font-weight: bold;
        padding: 10px 20px;
        font-size: 1.1rem;
        cursor: pointer;
    }

    .modeChoice {
        background: hsla(0, 0%, 100%, 0.951);
        text-align: left;
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
        margin-top:30px;
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
    }

    .linksBg {
        background-color: #1b252e;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 40px;
    }

    .linksCompact {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }
</style>