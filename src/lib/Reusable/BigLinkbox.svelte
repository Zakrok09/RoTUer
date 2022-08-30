<script>
    export let title = 'no title specified';
    export let src = 'https://emoji.discadia.com/emojis/a912ec14-e8af-4bd6-9cbd-013c8e1380a5.jpeg';
    export let alt = 'supplementary image';
    export let anchorText = 'click me';
    export let href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    export let background = "/stripes1.svg";
</script>

<div class="BigLinkbox" style="background-image: url({background});">
    <img {src} {alt}>
    <h3>{title}</h3>
    <a {href} class="AnchorBox ThirdBoxLink"> {anchorText} </a>
</div>

<style lang="scss">
    $contrast_header: #24313d;
    
    .BigLinkbox {
        width: 300px;
        height: 380px;
        border-radius: 5px;
        box-shadow: 2px 2px 10px hsla(0, 0%, 70%, 0.495);
        background-size: cover;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        font-family: "Oxygen", sans-serif;

        h3 {
            margin: 5px 20px;
            font-size: 1.2em;
            height: 50px;
        }

        img {
            width: 100px;
            border-radius: 10px;
        }

        a {
            margin-bottom: 20px;
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
        .BigLinkbox {
            width: 250px;

            h3 {
                font-size: 1.1rem;
            }

            img {
                width: 80px;
            }

            a {
                margin-top: 40px;
                font-size: 0.9rem;
            }
        }
    }

    @media only screen and (max-width: 700px) {
        .BigLinkbox {
            width: 250px;
            border-radius: 20px;

            h3 {
                font-size: 1rem;
                margin: 0px 50px;
                width: auto;
                text-align: center;
            }

            img {
                width: 60px;
            }

            a {
                margin-top: 25px;
                font-size: 0.8rem;

            }
        }
    }
</style>