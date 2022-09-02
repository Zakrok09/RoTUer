<script>
    import {locale} from "$lib/translations/i18n";
    import { createEventDispatcher } from "svelte";

    export let title = 'no title specified';
    export let anchorText = 'To website';
    export let desc = '';
    export let href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    export let tags = [];
    export let tagsObject;

    let dispatch = createEventDispatcher();

    const handleClick = clickedTag => {
        let toSend = clickedTag.text;
        dispatch('changeActiveTag', toSend.toLowerCase());
    } 
</script>


<div class="Linkbox">
    <div class="background" style="background-image: url('/background/links/{tagsObject[tags[0]].text}.svg');">
        <h3>{title}</h3>
    </div>
    <p>{desc}</p>
    <a {href} target="_blank" class="AnchorBox">{anchorText}</a>
    <span id="tag">Tags:</span>
    <div class="tags">
        {#each tags as tag}
            {#if tagsObject[tag]}
                <span on:click={() => handleClick(tagsObject[tag])} class="tag" style="background-color: {tagsObject[tag].color};">{tagsObject[tag].pressNames[$locale.toString()]}</span>
            {/if}
        {/each}    
    </div>
</div>

<style lang="scss">
    $contrast_header: #24313d;
    $grey: #e6e6e6;
    *  {
        font-family: 'Oxygen', sans-serif;
    }

    #tag {
        margin: 10px 0px 5px 0px;
    }

    .background {
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        h3 {
            font-size: 1.6em;
            height: 50px;
            margin: 0px 40px;
            color: whitesmoke;
            font-weight: 800;
            text-align: center;
        }
    }

    .tags {
        display: flex;
        flex-flow: row wrap;
        gap: 5px;
        justify-content: center;
        margin-bottom: 20px;
    }

    .tag {
        cursor: pointer;
        padding: 5px 12px;
        border-radius: 20px;
        color: #24313dc3;
        font-size: 0.8rem;
        color: white;
        font-weight: 800;
        -webkit-text-stroke-width: 0.1px;
        -webkit-text-stroke-color: rgb(94, 94, 94);
        
    }
    
    .Linkbox {
        width: 300px;
        border-radius: 5px;
        background: white;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        p {
            height: 100px;
            margin-top: 50px;
            padding: 0px 30px;
        }
    }

    .AnchorBox {
        background-color: $contrast_header;
        padding: 15px 30px;

        color: whitesmoke;
        font-family: 'Oxygen' , sans-serif;
        font-weight: 500;
        text-decoration: none;
        border-radius: 5px;
        transition: all 0.2s;

        justify-self: flex-end;
    }

    .AnchorBox:hover {
            background-color: #374654;
    }

    @media only screen and (max-width: 1200px) {
        .Linkbox {
            width: 250px;

            h3 {
                font-size: 1.1rem;
            }

            a {
                font-size: 0.9rem;
            }

            p {
                font-size: 0.9rem;
            }
        }
    }

    @media only screen and (max-width: 700px) {
        .Linkbox {
            width: 250px;
            border-radius: 20px;

            h3 {
                font-size: 1rem;
                margin: 0px 50px;
                width: auto;
                text-align: center;
            }

            // img {
            //     width: 60px;
            // }

            a {
                margin-top: 25px;
                font-size: 0.8rem;

            }
        }
    }
</style>