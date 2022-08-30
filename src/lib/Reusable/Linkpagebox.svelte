<script>
    export let title = 'no title specified';
    // export let src = 'https://emoji.discadia.com/emojis/a912ec14-e8af-4bd6-9cbd-013c8e1380a5.jpeg';
    // export let alt = 'supplementary image';
    export let anchorText = 'To website';
    export let desc = '';
    export let href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    export let tags = [];
</script>


<div class="Linkbox">
    <h3>{title}</h3>
    <p>{desc}</p>
    <!-- <img {src} {alt}> -->
    <a {href} target="_blank" class="AnchorBox ThirdBoxLink"> {anchorText} </a>
    <p>Tags:</p>
    <div class="tags">
        {#each tags as tag}
            <span class="tag" style="background-color: {tag.color};">{tag.text}</span>
        {/each}    
    </div>
</div>

<style lang="scss">
    $contrast_header: #24313d;
    $grey: #e6e6e6;
    *  {
        font-family: 'Oxygen', sans-serif;
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

        h3 {
            margin: 40px 20px 10px 20px;
            font-size: 1.2em;
            height: 50px;
            text-align: center;
        }

        a {
            margin-top: 50px;
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

            // img {
            //     width: 80px;
            // }

            a {
                margin-top: 40px;
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