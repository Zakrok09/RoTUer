# Code of this website

This website uses **SvelteKit** and **Sass** (SCSS). There are numbers of components which are loaded onto pages (*found in **/routes***) or other components (*found in ***/lib****). This allows for easier site management (using global [stores](https://svelte.dev/tutorial/writable-stores) and [importable components](https://svelte.dev/tutorial/nested-components))

## SASS

This website uses the SASS compilator to compile **.scss** files. More info can be found [here](https://sass-lang.com/documentation/syntax)

## +layout routes

These routes load on every single page from +layout.svelte (a file which defines the layout of each page) - Header and Footer.

## Loading of links in link tab

```html
<!-- cat stands for category -->
{#if cat.show}
<!-- This if logic switches between compact and box mode -->
    {#if boxView}
        <div class="linksBg">
            <div class="links">
                <!-- Iterate over the links of this category -->
                {#each cat.links as link}
                    <!-- Filter by tag -->
                    {#if containsTag(link.tags, activeTag[0])}
                        <!-- Load the Linkpagebox component -->
                        <Linkpagebox desc={link[$locale.toString()].desc} href={link[$locale.toString()].link} title={link.name} tags={link.tags} {tagsObject}/>
                    {/if}
                {/each}
            </div>
            <p id="noLinks?">{$t("linkspage.texts.nolinks")}</p>
        </div>
    {:else}
        ...
        <!-- load compact component (all the rest is the same as above) -->
    {/if}
{/if}
```

The **containsTag** is available here:

```js
function containsTag(linksTags, chosenTag) {
        if (chosenTag === 'all') return true;
        let result = false;
        if (linksTags.some(linkTag => linkTag.toLowerCase() === chosenTag.toString())) result = true;
        return result;
    }
```

All of this code does the following things:

- Iterate over the links of each category
- Filter out the links which does not have the selected tag
- Load the ```<Linkpagebox />``` component

____

More documentation will be available once changes take place. Stay tuned!
