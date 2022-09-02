<script>
    import HEAD from "$lib/Metadata/HEAD.svelte";

    
    //{"name":"De Hoven","img":false,"keywords":{"en":["tag","link","de hoven","mall"],"nl":["tag","link","de hoven","mall"],"bg":["таг","линк","de hoven","мол"]},"tags":["mall"],"nl":{"desc":"De Hoven is een winkelcentrum met super veel verschillende winkels voor alles van kleding tot snoep.","link":"https://www.de-hovenpassage.nl/","presName":"Winkelcentrum De Hoven Passage","onlyEng":false},"en":{"desc":"The Hoven is a mall with loads of different shops and products ranging from clothing to candy.","link":"https://www.de-hovenpassage.nl/","presName":"Shoppingcenter De Hoven Passage","onlyNl":true},"bg":{"desc":"The Hoven is a mall with loads of different shops and products ranging from clothing to candy.","link":"https://www.de-hovenpassage.nl/","presName":"Shoppingcenter De Hoven Passage","onlyNl":true}}

    let name = "test";
    let enKeywords = "test";
    let nlKeywords = "test";
    let bgKeywords = "test";
    let tags = "test";
    let text = "test";
    let href = "test";
    
    $:linksArray = [];

    function clear() {
        linksArray = [];
    }

    function makeLinkObject() {
        tags = tags.toString().split(' ');
        enKeywords = enKeywords.toString().split(' ');
        nlKeywords = nlKeywords.toString().split(' ');
        bgKeywords = bgKeywords.toString().split(' ');
        let linkObject = {
            name,
            keywords: {
                en: [...enKeywords],
                nl: [...nlKeywords],
                bg: [...bgKeywords]
            },
            tags,
            text
        }

        linksArray.push(JSON.stringify(linkObject, null, "\t"));
        linksArray = linksArray;
    }
</script>


<HEAD title="Home" metadescription="Making it easier for our database guys and girls!" />

<main>
    <form on:submit|preventDefault={makeLinkObject}>
        <br><br>
        <span>Name:</span>
        <input type="text" bind:value={name}>
        <br><br>
        <span>Keywords (EN) separated by space:</span>
        <input type="text" bind:value={enKeywords}>
        <br><br>
        <span>Keywords (NL) separated by space:</span>
        <input type="text" bind:value={nlKeywords}>
        <br><br>
        <span>Keywords (BG) separated by space:</span>
        <input type="text" bind:value={bgKeywords}>
        <br><br>
        <span>Tags separated by space:</span>
        <input type="text" bind:value={tags}>
        <br><br>
        <span>Text:</span>
        <textarea type="text" bind:value={text}></textarea>
        <br><br>
        <button type="submit">Magic</button>
        <button on:click={clear}>Clear</button>
    </form>

    <h2>Result:</h2>
    {#key linksArray}
        <textarea id="result" name="test" cols="50" rows="100">{linksArray}</textarea>
    {/key}
</main>




<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #result {
        resize: none;
        height: auto;
    }
</style>