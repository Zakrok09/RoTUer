<script>
    import Linkpagebox from "$lib/Reusable/Linkpagebox.svelte";
    import {locale} from "$lib/translations/i18n";
    export let title = "no title specified";
    export let text = "no text provided";
    export let tags = [];
    export let tagsObject = [];
    export let linkTagsObject = [];
    export let relevantLinks = [];

    let checked = false;
    let showDesc = false;
    let showVariable = "show";
    let showText = {
        en: "Show More",
        nl: "Toon Meer",
        bg: "Show More"
    }
    let hideText = {
        en: "Show Less",
        nl: "Toon Minder",
        bg: "Show Less"
    }
    function handleCheck(){
        showDesc = !showDesc
        showDesc ? showVariable = "hide" : showVariable = "show"
    }
</script>

{#if checked}
    <div class="greyOut ">
        <div class="checkie show">
            <div class="titleCheck">
                <input id="checkbox" type="checkbox" class="checkbox" bind:checked={checked}>
                <h3>{title}</h3>
            </div>
            <div class="tags">
                <span id="tag">Tags:</span>
                {#each tags as tag}
                    {#if tagsObject[tag]}
                        <span class="tag" style="background-color: {tagsObject[tag].color};">{tagsObject[tag].pressNames[$locale.toString()]}</span>
                    {/if}
                {/each}
            </div>
        </div>    
    </div>
{:else}
    <div class="noGreyOut">
        <div class="checkie {showVariable}">
            <div class="titleCheck">
                <input id="checkbox" type="checkbox" class="checkbox" bind:checked={checked}>
                <h3>{title}</h3>
            </div>
            <div class="tags">
                <span id="tag">Tags:</span>
                {#each tags as tag}
                    {#if tagsObject[tag]}
                        <span class="tag" style="background-color: {tagsObject[tag].color};">{tagsObject[tag].pressNames[$locale.toString()]}</span>
                    {/if}
                {/each}
            </div>
            {#if showDesc}
                <button class="showmore" on:click={()=> handleCheck()}>{hideText[$locale]}</button>
            {:else}
                <button class="showmore" on:click={()=> handleCheck()}>{showText[$locale]}</button>
            {/if}
        </div>    
    </div>
{/if}
{#if showDesc && !checked}
    <div class="desc">
        <div class="left">
            <h3>Checkie description:</h3>
            <span>{text}</span>
        </div>
        <div class="right">
            <h3>Releveant Links:</h3>
            <div class="flexRight">
                {#each relevantLinks as link }
                    <div class="linkeringbox">
                        <Linkpagebox desc={link[$locale.toString()].desc} href={link[$locale.toString()].link} title={link.name} tags={link.tags} tagsObject={linkTagsObject}/>
                    </div>
                {/each}
            </div>
        </div>
    </div>
{/if}


<style lang="scss">
    .linkeringbox {
        min-width: 50px;
    }

    * {
        font-family: 'Oxygen', sans-serif;
    }

    .titleCheck {
        display: flex;
    }

    .tag {
        display: flex;
        cursor: pointer;
        padding: 5px 12px;
        border-radius: 20px;
        color: #030303c2;
        align-items: center;
        align-self: center;
        font-size: 0.8rem;
        font-weight: 800;
        font-family: sans-serif;
        -webkit-text-stroke-width: 0.1px;
        -webkit-text-stroke-color: rgb(94, 94, 94);
    }
    .tags {
        display: flex;
        margin-right: auto;
        align-items: center;
        align-self: center;
    }   

    #tag {
		margin-right: 6px;
    }

    .checkbox {
        position:relative;
    }

    .showmore {
        font-size: 1rem;
        text-align: center;
        background: #1b252e;
        padding: 10px 20px;
        border: none;
        color: aliceblue;
        margin-right: 5px;
    }

    .show {
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    .noGreyOut{

        .showmore{
            cursor: pointer;
        }

        .showmore:hover {
            color: hsl(0, 0%, 77%);
       }
    }
    
    .greyOut{
        opacity: .3;
    }
    
    .checkie {
        border-top: 5px hsl(208, 26%, 20%) solid;
        padding: 5px 10px;
        display: flex;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        gap: 30px;
        flex-flow: row wrap;
        align-items:center;
        color: aliceblue;
        background-color: rgb(85, 103, 120);
        margin: 0 auto;
    }

    .desc{
        padding: 5px;
        display: flex;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        gap: 30px;
        display: flex;
        justify-content: space-between;
        flex-flow: row nowrap;
        align-items:flex-start;
        align-self:center;
        color: aliceblue;
        background-color: #1b252e; 
        margin-bottom: 20px;
        margin: 0 auto;
        
    }

    .left {
        width: 30%;
        padding-left: 30px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
    }

    .right {
        width: 60%;
        color:black;
        padding-right:20px;
    }

    .flexRight {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
    }
    
    h3 {
        display: flex;
        justify-content: center;
        color:whitesmoke;
    }

    @media only screen and (max-width: 1000px){
        .checkie {
            flex-flow: column;
            align-items: center;
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            margin: 0px;
        }

        #tag {
            text-align: center;
            width: 100%;
        }
    }

    @media only screen and (max-width: 820px){
        .desc {
            flex-direction: column;
            align-items: center;
        }

        .left {
            padding: 0px;
            width: 90%;
        }

        .right {
            padding: 0px;
            width: 100%;
        }
        .flexRight {
            flex-wrap: wrap;
        }
    }

</style>