<script>
    import { each } from "svelte/internal";
    import {locale} from "$lib/translations/i18n";
    export let title = "no title specified";
    export let text = "no text provided";
    export let tags = [];
    export let tagsObject;
    // export let relevantLinks = [];
    export let id = 0;

    let checked = false;
    let showDesc = false;
    function handleCheck(){
        showDesc = !showDesc
    }
</script>

{#if checked}
    <div class="greyOut">
        <div class="checkie">
            <input id="checkbox" type="checkbox" class="checkbox" bind:checked={checked}>
            <h3>{title}</h3>
            <div class="tags">
                <span id="tag">Tags:</span>
                {#each tags as tag}
                    {#if tagsObject[tag]}
                        <span class="tag" style="background-color: {tagsObject[tag].color};">{tagsObject[tag].pressNames[$locale.toString()]}</span>
                    {/if}
                {/each}
            </div>
            <button disabled="true" class="showmore" on:click={()=> handleCheck(id)}>Show description</button>
        </div>    
    </div>
{:else}
    <div class="noGreyOut">
        <div class="checkie">
            <input id="checkbox" type="checkbox" class="checkbox" bind:checked={checked}>
            <h3>{title}</h3>
            <div class="tags">
                <span id="tag">Tags:</span>
                {#each tags as tag}
                    {#if tagsObject[tag]}
                        <span class="tag" style="background-color: {tagsObject[tag].color};">{tagsObject[tag].pressNames[$locale.toString()]}</span>
                    {/if}
                {/each}
            </div>
            <button class="showmore" on:click={()=> handleCheck(id)}>Show description</button>
        </div>    
    </div>
{/if}
{#if showDesc && !checked}
    <div class="desc">
        <span>{text}</span>
    </div>
{/if}


<style lang="scss">
    $div_width : "80%";
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
        margin: 10px 0px 5px 0px;
    }

    .checkbox {
        position:relative;
    }

    .showmore {
        font-size: 1rem;
        text-align: center;
        margin-top:30px;
        background: #1b252e;
        padding: 10px 20px;
        border: none;
        color: aliceblue;
        margin-bottom: 30px;
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
        padding: 5px;
        display: flex;
        border-radius: 20px;
        gap: 30px;
        flex-flow: row wrap;
        align-items:center;
        align-self:center;
        color: aliceblue;
        background-color: rgb(85, 103, 120);
        margin: 0 auto;
        width:80%;
    }

    .desc{
        padding: 5px;
        display: flex;
        border-radius: 20px;
        gap: 30px;
        flex-flow: row wrap;
        align-items:center;
        align-self:center;
        color: aliceblue;
        background-color: #1b252e; 
        margin-bottom: 20px;
        margin: 0 auto;
        width:80%;
    }

</style>