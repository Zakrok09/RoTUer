<script>
    export let article;
    export let tagsObject;
    import {locale} from "$lib/translations/i18n";
    export let untrustedSource = false;
</script>

<article>
    <div class="articleTop">
        <h2>{article.name}</h2>
        <div class="metaData">
            <div class="author">
                <span>Author: </span><a href={article.author.link}>{article.author.name}</a>
            </div>
            <div class="tags">
                <span>Tags:</span>
                {#each article.tags as tag}
                    <span class="tag" style="background-color: {tagsObject[tag].color};">{tagsObject[tag].pressNames[$locale.toString()]}</span>
                {/each}
            </div>
            <div class="date">
                <span>Written on: </span><span id="date">{article.date}</span>
            </div>
        </div>
    </div>
    <div class="articleContent">
        {#if untrustedSource}
            {article.text}
        {:else}
            {@html article.text}
        {/if}
    </div>
</article>

<style lang="scss">

    article {
        background-color: #f0f0f0;
        box-shadow: 0px 5px 0px gray;
        border-radius: 15px;
        padding: 10px 30px;
        position: relative;
    }

    h2 {
        font-size: 1.9rem;
        margin-bottom: 0px;
    }

    .metaData {
        display: flex;
        gap: 15px;
        flex-flow: row wrap;
        font-size: 0.8rem;
        color:#5e5e5e;

        div {
            display: flex;
            align-items: center;
        }
    }

    .author {
        a {
            text-decoration: none;
            margin: 0px;
            padding: 5px 0px 5px 9px;
            border-radius: 20px;
        }
    }

    .date {
        gap: 5px;
    }

    .articleContent {
        margin: 50px 20px;
    }

    #date {
        color: #161616;
    }


    .tags {
        gap: 5px;
    }

    .tag {
        padding: 5px 9px;
        border-radius: 20px;
        color: white;
        font-weight: 800;
        font-size: 0.7rem;
        -webkit-text-stroke-width: 0.1px;
        -webkit-text-stroke-color: rgb(94, 94, 94);
        
    }

    @media only screen and (max-width: 700px) {

        h2 {
            font-size: 1.3rem;
        }

        .metaData {
            margin-top: 10px;
            font-size: 0.7rem;
        }

        .articleContent {
            margin: 30px 0px;
        }
    }
</style>