<script>
    export let title = 'no title specified';
    export let anchorText = 'To website';
    export let desc = '';
    export let href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    export let tags = [];
    export let tagsObject = {};
    export let language = "en";
</script>

<div class="listItem">
    <h3>{title}</h3>
    <p>{desc}</p>
    <div class="tags">
        {#each tags as tag}
            {#if tagsObject[tag]}
                <span class="tag" style="background-color: {tagsObject[tag].color};">{tagsObject[tag].pressNames[language]}</span>
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

</style>