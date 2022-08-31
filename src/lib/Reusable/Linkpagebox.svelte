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
    <!-- <div class="blackbar"></div> -->
    <div class="background" style="background-image: url('/background/links/{tags[0].text}.svg');">
        <h3>{title}</h3>
    </div>
    <p>{desc}</p>
    <!-- <img {src} {alt}> -->
    <a {href} target="_blank" class="AnchorBox ThirdBoxLink">{anchorText}</a>
    <span id="tag">Tags:</span>
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

    #tag {
        margin: 30px 0px 5px 0px;
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
            color: whitesmoke;
            font-weight: 800;
            text-align: center;
        }
    }

    // .blackbar {
    //     background-image: url("/background/curvy.svg");
    //     background-size: cover;
    //     width: 100%;
    //     height: 50px;
    //     border-top-left-radius: 5px;
    //     border-top-right-radius: 5px;
        
    // }

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

        a {
            margin-top: 20px;
        }

        p {
            height: 40px;
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