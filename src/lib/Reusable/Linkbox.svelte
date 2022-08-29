<script>
    export let title = 'no title specified';
    export let emoji = '🤔';
    export let src = 'https://emoji.discadia.com/emojis/a912ec14-e8af-4bd6-9cbd-013c8e1380a5.jpeg';
    export let alt = 'supplementary image';
    export let anchorText = 'click me';
    export let href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
</script>


<div class="Linkbox">
    <span>{emoji}</span>
    <h3>{title}</h3>
    <img {src} {alt}>
    <a {href} target="_blank" class="AnchorBox ThirdBoxLink"> {anchorText} </a>
</div>

<style lang="scss">
    $contrast_header: #24313d;
    
    .Linkbox {
        width: 300px;
        border-radius: 5px;
        box-shadow: 2px 2px 10px hsla(0, 0%, 70%, 0.495);
        background: white;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

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
            margin-top: 50px;
            margin-bottom: 20px;
        }

        span {
            margin: 15px 0px;
            font-size: 40px;
        }
    }

    .AnchorBox {
        background-color: $contrast_header;
        padding: 15px 30px;

        color: whitesmoke;
        font-family: 'Oxygen' , sans-serif;
        font-weight: 500;
        text-decoration: none;

        justify-self: flex-end;

    }
</style>