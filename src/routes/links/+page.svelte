<script>
    import Linkpagebox from "$lib/Reusable/Linkpagebox.svelte";
    import Linklistitem from "$lib/Reusable/Linklistitem.svelte"
    import HEAD from "$lib/Metadata/HEAD.svelte"
    import {t, locale} from "$lib/translations/i18n"
	import { fly } from 'svelte/transition';

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
    const allTag = ['all', {text: 'All tags', color: 'hsla(0, 0%, 100%, 0.951)', pressNames:{nl:"Alle tags",en:"All tags",bg:"All tags"}}];
    const tagsArray = [allTag, ...Object.entries(tagsObject)];
    let activeTag = allTag[0];
    let searchString = '';
    $:searchArray = [''];

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

    function changeActive(e) {
        if (activeTag === e.detail) {
            activeTag = "all"
        } else {
            activeTag = e.detail;
        }
    }
    
    /**
     * This function checks if the chosen tag exists in the links tags. 
     * As a first parametar you should always use the tags array of a link (e.g. link.tags)
     * As a second you must provide the 'text'/'title' of the tag in lower case (e.g. activeTag)
     * @param {array} tagsOfLink Array of tags that a links contain
     * @param {string} chosenTag String, representing the tag to be used for comparison
     */
    function containsTag(tagsOfLink, chosenTag) {
        if (chosenTag === 'all') return true;
        let result = false;
        if (tagsOfLink.some(linkTag => linkTag === chosenTag)) result = true;
        return result;
    }

    function containsKeyword(linkKeywords, searchBoxKeywords) {
        if (searchBoxKeywords.length === 1 && searchBoxKeywords[0] === "" ) return true;
        let result = false;
        if (linkKeywords.some(linkKeyword => searchBoxKeywords.includes(linkKeyword))) return true;
        return result;
    }

    function updateSearchArray() {
        searchArray = searchString.toLocaleLowerCase().split(' ');
    }
</script>

<HEAD title="Links" metadescription="All the links a student needs! We are constantly expanding this section so expect more!" />

<div class="landingSite">
    <img src="/isometric/arrow.svg" alt="The logo of RoTUer">
    <h1 tabindex="0">RoTUer</h1>
    <i>{$t("linkspage.titles.undertitle")}</i>
</div>
<div class="abovecategories">
    <button aria-label="Choose view (compact or box). Compact might be better for screen readers" class="filterButtons modeChoice" on:click={handleViewToggle}>{buttontext}</button>
    <select aria-label="Select active tag when searching" class="filterButtons tagFilter" bind:value={activeTag}>
        <option value="all" selected disabled hidden>Choose a tag</option>
        {#each tagsArray as tagEntry}
            {#if tagEntry[1].pressNames != undefined}
                <option style="background-color: hsla(0, 0%, 100%, 0.951);" value={tagEntry[0]}>{tagEntry[1].pressNames[$locale.toString()]}</option>
            {/if}
        {/each}
    </select>
    <form class="searchForm" on:submit|preventDefault={updateSearchArray}>
        <input type="text" bind:value={searchString} placeholder="Search...">
        <button type="submit">🔎</button>
    </form>
</div>
{#each categories as cat, i}
    <div class="category">
        <h2 class="supplementaryCatText">{cat.name}</h2>
        <p class="supplementaryCatText">{cat.description[$locale.toString()]}</p>
        
        <div class="supplementaryCatText center">
            <button class="showmore" on:click={()=> handleToggle(i)}>{buttonStateText[i].showText}</button>
        </div>
        {#if cat.show}
            {#if boxView}
                <div class="linksBg">
                    <div class="links">
                        {#each cat.links as link}
                            {#if containsTag(link.tags, activeTag) && containsKeyword(link.keywords[$locale.toString()], searchArray)}
                                <div transition:fly="{{ y: 10, duration: 100 }}">
                                    <Linkpagebox on:changeActiveTag={changeActive} desc={link[$locale.toString()].desc} href={link[$locale.toString()].link} title={link.name} tags={link.tags} {tagsObject}/>
                                </div>
                            {/if}
                        {/each}
                    </div>
                    <p>{$t("linkspage.texts.nolinks")}</p>
                </div>
            {:else}
                <div class="linksBg">
                    <div class="linksCompact" >
                        {#each cat.links as link}
                            {#if containsTag(link.tags, activeTag)}
                                <div transition:fly="{{ y: 10, duration: 100 }}">
                                    <Linklistitem on:changeActiveTag={changeActive} desc={link[$locale.toString()].desc} href={link[$locale.toString()].link} title={link.name} tags={link.tags} {tagsObject}/>
                                </div>
                            {/if}
                        {/each}   
                        <p>{$t("linkspage.texts.nolinks")}</p>
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
                            {#if containsTag(link.tags, activeTag)}
                                <div transition:fly="{{ y: 10, duration: 100 }}">
                                    <Linkpagebox on:changeActiveTag={changeActive} desc={link[$locale.toString()].desc} href={link[$locale.toString()].link} title={link.name} tags={link.tags} {tagsObject}/>
                                </div>
                            {/if}
                        {/each}
                    </div>
                    <p>{$t("linkspage.texts.nolinks")}</p>
                </div>
            {:else}
                <div class="linksBg">
                    <div class="linksCompact" >
                        {#each cat.extralinks as link}
                            {#if containsTag(link.tags, activeTag)}
                                <div transition:fly="{{ y: 10, duration: 100 }}">
                                    <Linklistitem on:changeActiveTag={changeActive} desc={link[$locale.toString()].desc} href={link[$locale.toString()].link} title={link.name} tags={link.tags} {tagsObject}/>
                                </div>
                            {/if}
                        {/each}   
                        <p>{$t("linkspage.texts.nolinks")}</p>
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
        height: 40px;
    }

    .tagFilter {
        width: 200px;
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

    .searchForm {
        display: inline-block;
        position: relative;
        padding: 0px;
        width: 200px;

        input {
            width: 190px;
            height: 30px;
            padding: 5px 0px 5px 10px;
            border: none;
            border-radius: 15px;
        }

        button {
            z-index: 1;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            margin: auto 0;
            background-color: #e8e8e8;
            cursor: pointer;
            border: none;
            font-size: 2rem;
            border-radius: 15px;
        }
    }

    @media only screen and (max-width: 550px) {
        .abovecategories {
            display: flex;
            flex-flow: column nowrap;
            gap: 15px;
            align-items: center;
        }

        .filterButtons {
            width: 300px;
            padding: 10px 10px;
            font-size: 0.9rem;
        }

        .searchForm {
            width: 300px;

            input {
                width: 290px;
            }
        }
    }

    @media only screen and (max-height: 600px) {
        .abovecategories {
            display: flex;
            flex-flow: row wrap;
            gap: 5px;
            justify-content: center;
        }

        .filterButtons {
            width: auto;
            padding: 10px 10px;
            font-size: 0.75rem;
        }

        .searchForm {
            width: 200px;

            input {
                font-size: 0.75rem;
                width: 190px;
            }
            button {
                
                font-size: 1.3rem;
            }
        }
    }
</style>