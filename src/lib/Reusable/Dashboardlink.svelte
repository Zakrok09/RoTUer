<script>
    import {locale} from "$lib/translations/i18n";
    import { createEventDispatcher } from "svelte";

    export let title = 'no title specified';
    export let anchorText = 'To website';
    export let desc = '';
    export let href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    export let tags = [];

    let dispatch = createEventDispatcher();

    const handleClick = clickedTag => {
        let toSend = clickedTag;
        dispatch('changeActiveTag', toSend);
    } 
</script>


<div class="Linkbox">
    <div class="topStripe" style="background-color: {tags[0].attributes.color};"></div>
    <h3>{title}</h3>
    <p>{desc}</p>
    <a {href} target="_blank" class="AnchorBox">{anchorText}</a>
    <span id="tag">Tags:</span>
    <div class="tags">
        {#each tags as tag}
            <span on:click={() => handleClick(tag.attributes)} class="tag" style="background-color: {tag.attributes.color};">{tag.attributes.displayText}</span>
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

    .topStripe {
        width: 100%;
        height: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    h3 {
        font-size: 1.3rem;
        height: 30px;
        margin: 20px 0px;
        color: Black;
        font-weight: 800;
        text-align: center;
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
        box-shadow: 0px 5px 3px #818182;

        p {
            height: 100px;
            margin: 0px;
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
                margin: 20px 50px;
                height: auto;
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