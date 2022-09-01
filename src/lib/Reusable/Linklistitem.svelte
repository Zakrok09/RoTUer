<script>
    import {locale} from "$lib/translations/i18n";
    import { createEventDispatcher } from "svelte";

    export let title = 'no title specified';
    export let anchorText = 'To website';
    export let desc = '';
    export let href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    export let tags = [];
    export let tagsObject = {};

    let dispatch = createEventDispatcher();

    const handleClick = clickedTag => {
        let toSend = clickedTag.text;
        dispatch('changeActiveTag', toSend.toLowerCase());
    } 

</script>

<div class="listItem">
    <h3>{title}</h3>
    <p>{desc}</p>
    <div class="tags">
        {#each tags as tag}
            {#if tagsObject[tag]}
                <span on:click={() => handleClick(tagsObject[tag])} class="tag" style="background-color: {tagsObject[tag].color};">{tagsObject[tag].pressNames[$locale.toString()]}</span>
            {/if}
        {/each} 
    </div>
    <a {href} target="_blank">{anchorText}</a>

</div>

<style lang="scss">
    h3, p, a {
        padding: 0px;
        margin: 0px;
    }

    h3 {
        width: 10vw;
    }

    p {
        width: 50vw;
        margin-right: auto;
    }

    a {
        margin-left: auto;
        justify-self: end;

        padding: 15px;
        text-decoration: none;
        border-radius: 5px;
        color: #163b32;
        background-color: #43d3b0;
    }

    .tags {
        display: flex;
        flex-flow: row wrap;
        gap: 10px;
        margin-right: auto;
        width: 20vw;
    }

    .tag {
        cursor: pointer;
        padding: 5px 12px;
        border-radius: 20px;
        color: #030303c2;
        font-size: 0.8rem;
        font-weight: 800;
        font-family: sans-serif;
        -webkit-text-stroke-width: 0.1px;
        -webkit-text-stroke-color: rgb(94, 94, 94);
    }

    .listItem {
        border-top: 5px hsl(208, 26%, 20%) solid;
        padding: 30px;
        width: 100%;
        display: flex;
        justify-content: left;
        gap: 30px;
        align-items: center;
        color: aliceblue;
        background-color: #1b252e;
    }

    @media only screen and (max-width: 950px) {
        .listItem {
            height: auto;
            justify-content: left;
            padding: 0px;
            flex-flow: column;
            align-items: center;
            
            h3 {
                font-size: 1rem;
                height: auto;
                width: auto;
                margin-top: 20px;
            }

            p {
                text-align: center;
                width: 30vw;
                height: auto;
                width: auto;
                margin: 0px 40px;
            }

            a {
                margin-left: 0px;
                width: auto;
                margin-bottom: 20px;
            }

            .tags {
                width: 15vw;
                min-width: 100px;
                flex-flow: column nowrap;
                text-align: center;
                width: auto;
                margin-right: 0px;
            }

            .tag {
                font-size: 0.8rem;
            }
        }
    }

</style>