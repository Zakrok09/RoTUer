<script>
    export let article;
    export let tagsObject;
    import {locale} from "$lib/translations/i18n";
</script>

<article>
    <h2>{article.name}</h2>
    <div class="tags">
        {#each article.tags as tag}
            <span class="tag" style="background-color: {tagsObject[tag].color};">{tagsObject[tag].pressNames[$locale.toString()]}</span>
        {/each}
    </div>
    <p>{article.text}</p>
</article>

<style lang="scss">

    article {
        background-color: #f0f0f0;
        box-shadow: 0px 5px 0px gray;
        border-radius: 15px;
        padding: 10px 30px;
    }


    .tags {
        display: flex;
        gap: 5px;
    }

    .tag {
        padding: 5px 12px;
        border-radius: 20px;
        color: white;
        font-size: 0.8rem;
        font-weight: 800;
        -webkit-text-stroke-width: 0.1px;
        -webkit-text-stroke-color: rgb(94, 94, 94);
        
    }
</style>