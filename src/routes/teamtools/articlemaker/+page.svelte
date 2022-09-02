<script>
    import HEAD from "$lib/Metadata/HEAD.svelte";
    import showdown from "showdown";
    import Article from "$lib/Reusable/Article.svelte";

    export let data;
    const db = data.database;
    const tagsObject = db.tags;
    const tagsKeysArray = Object.keys(tagsObject);

    
    
    //{"name":"De Hoven","img":false,"keywords":{"en":["tag","link","de hoven","mall"],"nl":["tag","link","de hoven","mall"],"bg":["таг","линк","de hoven","мол"]},"tags":["mall"],"nl":{"desc":"De Hoven is een winkelcentrum met super veel verschillende winkels voor alles van kleding tot snoep.","link":"https://www.de-hovenpassage.nl/","presName":"Winkelcentrum De Hoven Passage","onlyEng":false},"en":{"desc":"The Hoven is a mall with loads of different shops and products ranging from clothing to candy.","link":"https://www.de-hovenpassage.nl/","presName":"Shoppingcenter De Hoven Passage","onlyNl":true},"bg":{"desc":"The Hoven is a mall with loads of different shops and products ranging from clothing to candy.","link":"https://www.de-hovenpassage.nl/","presName":"Shoppingcenter De Hoven Passage","onlyNl":true}}
    let name = "test";
    let author = 'You';
    let authorlink = 'no one';
    let date = 'dwa';
    let enKeywords = "test";
    let nlKeywords = "test";
    let bgKeywords = "test";
    let tags = "new";
    let text = "test";
    
    $:linksArray = [];

    let converter = new showdown.Converter();

    $:articleArray = [];
    let articleObject = {};

    function clear() {
        linksArray = [];
        articleArray = [];
    }

    function validateTags(tags) {
        let newArray = tags.filter(tag => tagsKeysArray.includes(tag));
        return newArray;
    }

    function makeLinkObject() {
        tags = tags.toString().split(' ');
        tags = validateTags(tags);
        enKeywords = enKeywords.toString().split(' ');
        nlKeywords = nlKeywords.toString().split(' ');
        bgKeywords = bgKeywords.toString().split(' ');
        articleObject = {
            name,
            author: {
                name: author,
                link: authorlink
            },
            date,
            keywords: {
                en: [...enKeywords],
                nl: [...nlKeywords],
                bg: [...bgKeywords]
            },
            tags,
            text: converter.makeHtml(text)
        }

        linksArray.push(JSON.stringify(articleObject, null, "\t"));
        articleArray.push(articleObject);
        linksArray = linksArray;
        articleArray = articleArray;
    }
</script>

<HEAD title="Home" metadescription="Making it easier for our database guys and girls!" />

<main>
    <h1 style="margin-bottom: 100px;">Article generator</h1>
    <form on:submit|preventDefault={makeLinkObject}>
        <div class="top">
            <div class="left">
                <fieldset>
                    <label for="nameInput">Name of the Aricle:</label>
                    <input required id="nameInput" placeholder="Name" type="text" bind:value={name}>
                </fieldset>
                <fieldset>
                    <label for="authorInput">Author:</label>
                    <input required id="authorInput" type="text" bind:value={author}>
                </fieldset>
                <fieldset>
                    <label for='linkInput'>Author Link:</label>
                    <input required type="text" id="linkInput" bind:value={authorlink}>
                </fieldset>
                <fieldset>
                    <label for="date">Date:</label>
                    <input required id="date" placeholder="E.g. September 2nd, 2022" type="text" bind:value={date}>
                </fieldset>
                <fieldset>
                    <label for="keywordsInputEn">Keywords (EN) separated by space:</label>
                    <input required id="keywordsInputEn" type="text" bind:value={enKeywords}>
                </fieldset>
                <fieldset>
                    <label for="keywordsInputNl">Keywords (NL) separated by space:</label>
                    <input required id="keywordsInputNl" type="text" bind:value={nlKeywords}>
                </fieldset>
                <fieldset>
                    <label for="keywordsInputBg">Keywords (BG) separated by space:</label>
                    <input required id="keywordsInputBg" type="text" bind:value={bgKeywords}>
                </fieldset>
                <fieldset>
                    <label for="tags">Tags separated by space:</label>
                    <input required id="tags" type="text" bind:value={tags}>
                </fieldset>
            </div>
            <div class="right">
                <p>Markdown is supported!</p>
                <textarea required id="write" type="text" bind:value={text}></textarea>
            </div>
        </div>
        
        <div class="buttons">
            <button type="submit">Magic</button>
            <button on:click={clear}>Reset</button>
        </div>
    </form>

    <p>if Reset doens't work then press Ctrl + R</p>
</main>

<div class="preview">
    <h2>Preview</h2>
    <p>Here you can see the articles you have written!</p>
    {#key articleArray}
        {#each articleArray as article}
            {#if article.author}
                <Article {tagsObject} {article}/>
            {/if}
        {/each}
    {/key}

    <div class="JSONResult">
        <h2>Result JSON:</h2>
        {#key linksArray}
            <textarea id="result" name="test" cols="50" rows="20" bind:value={linksArray}></textarea>
        {/key}
    </div>
</div>




<style lang="scss">
    .JSONResult{
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    #write {
        width: 98%;
        padding-right: 0px;
        height: 100%;
        resize: none;
    }

    label {
        display: inline-block;
        width: 300px;
        margin: 20px;
        font-size: 1.2rem;
    }

    form {
        border: #161616 1px solid;
        border-radius: 5px;
        background-color: #24313d;
        color: whitesmoke;
    }

    fieldset {
        margin: 0px;
        padding: 0px;
        border: none;
        border-bottom: #161616 1px solid;
    }

    main {
        font-family: 'Oxygen', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        border: none;
        border-radius: 15px;
        padding: 15px;
    }

    .top {
        display: flex;
        width: 70vw;
        height: auto;
    }
    
    .left {
        width: 50%;
    }
    .right {
        width: 50%;
        display: flex;
        flex-flow: column;
    }

    .buttons {
        padding: 20px 0px;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 20px;    
    }

    button {
        background: none;
        color: whitesmoke;
        padding: 15px;
        width: 150px;
        border: 3px solid whitesmoke;
        font-size: 1.1rem;
        border-radius: 25px;
    }

    button:hover {
        background-color: whitesmoke;
        color: black;
        cursor: pointer;
    }

    #result {
        resize: none;
        height: auto;
    }

    .preview {
        margin-top: 100px;
        background-color: #161616;
        padding: 50px;
        display: flex;
        flex-flow: column nowrap;
        gap: 20px;
        font-family: 'Oxygen', sans-serif;
        min-height: 400px;

        h2 {
            color: azure;
            text-align: center;
            font-size: 2rem;
        }

        p {
            text-align: center;
            color: hsl(0, 0%, 59%);
        }
    }
</style>