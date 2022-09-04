<script>
    import { t, locale } from "$lib/translations/i18n";
    import HEAD from "$lib/Metadata/HEAD.svelte";
    import Dashboardlink from "$lib/Reusable/Dashboardlink.svelte"
	import { fly } from 'svelte/transition';
    /**
     * A faculty fetched from the dashboard.json file
     * @typedef {Object} Faculty
     * @property {string} name - Full name of the faculty
     * @property {string} abbr - Abbreviation of the faculty
     * @property {Object} programmesTags - An (array-like) object, where each key is the lowercase shortname/id of the faculty (used when choosing an active program)
     * @property {Object} programmes - An (array-like) object, where each key-value is: lowercase shorname/id of the faculty - a Programme Object
     */

    export let data;

    /**
     * A faculty fetched from the dashboard.json file
     * @type {Faculty}
     */
    const faculty = data.faculty;

    /**
     * Holds the programmesTags object of the faculty - the array-like object, where each key is the lowercase shortname/id of the faculty (used when choosing an active program) 
     * @type {object}
     */
    const programmeTags = faculty.programmesTags;
    const facultiesArray = data.faculties;

    /**
     * Holds the (array-like) object where each key is the lowercase shortname/id (used when choosing an active program)
     * @type {Object}
     */
    const tags = data.dbTags;

    /**
     * Holds the study programs object for the fetched faculty.
     * @type {{name: string, abbr: string, links: object[]}}
     */
    const programmes = faculty.programmes;

    /**
     * A string holds the shortname/id of the currently chosen program.
     * 
     * By default it holds the first study program for the fetched faculty - in that case it is "common". 
     * 
     * @type {String}
     */
    let activeProgrammeString = "common";

    /**
     * An object that is used in dashboard pages to determine the selected study program.
     * 
     * It gets updated reactively when the user chooses an option to filter by study program (from the select tag)
     * @type {object}
     */
    $: activeProgrammeObject = programmes[activeProgrammeString.toString()];
    
    /**
     * An array that contains all the programmeTags (programme names/ids) from the fetched faculty.
     * 
     * Make sure you fetch it as Object.keys(TAGSOBJECT) - where TAGSOBJECT is the fetched programmeTags object for each faculty.
     * 
     * e.g. let programmeTagsArray = Object.keys(faculty.programmesTags); 
     * @type {Array<string>}
    */
    let programmeTagsArray = Object.keys(programmeTags);

    /**
     * A string that holds the text (string) typed in the searchbox
     * @type {string}
     */
    let searchString = '';

    /**
     * An array that splits the seatchString into an array of the words search.
     * 
     * This will be used to filter out links that don't have any keywords matching with the search
     * @type {string[]}
     */
    $:searchArray = [''];

    /**
     * A string holds the shortname/id of the currently chosen tag.
     * 
     * This will be used to filter out links that don't have the selected tag in their tags array
     * @type {string}
     */
    $:activeTag = "all";

    /**
     * This function filters out links that don't have the selected tag in their tags array.
     * 
     * This works by checking if an element (string) of the tags array of the link is the same (has the same text) as the chosenTag (String)
     * @param {string[]} tagsOfLink - the array that holds the tags of the link
     * @param {string} chosenTag - the tag will be used for sorting
     */
    function containsTag(tagsOfLink, chosenTag) {
        if (chosenTag === 'all') return true;
        let result = false;
        if (tagsOfLink.some(linkTag => linkTag === chosenTag)) result = true;
        return result;
    }

    /**
     * This function filters out links that don't have any keywords matching with the searchBoxKeywords array.
     * 
     * This works by checking if an element (string) of the keywords array of the link is the same (has the same text) as any element of the search box words array
     * @param {string[]} linkKeywords - the array that holds the keywords of the link
     * @param {string[]} searchBoxKeywords - the array that holds the keywords of the searchbox
     */
    function containsKeyword(linkKeywords, searchBoxKeywords) {
        if (searchBoxKeywords.length === 1 && searchBoxKeywords[0] === "" ) return true;
        let result = false;
        if (linkKeywords.some(linkKeyword => searchBoxKeywords.includes(linkKeyword))) return true;
        return result;
    }

    function updateSearchArray() {
        searchArray = searchString.toLocaleLowerCase().split(' ');
    }

    function changeActive(e) {
        if (activeTag === e.detail) {
            activeTag = "all"
        } else {
            activeTag = e.detail;
        }
    }
</script>

<svelte:head>
    <style>
        body {
            background-color: black;
        }
    </style>
</svelte:head>

<HEAD title="Dashboard" metadescription="The dashboard is that cool place where you have quick access to all the links related to your study program! Come to read or contribute!" />

<main>
    
    <div class="restOfPage">
        <div class="dashboardBg">
            <div class="dashboard">
                <div class="filters">
                    <select class="filterButtons" bind:value={activeProgrammeString}>
                        {#each programmeTagsArray as programmeTag}
                            <option value={programmeTag}>{programmeTags[programmeTag].pressNames[$locale.toString()]}</option>
                        {/each}
                    </select>
                    <form class="filterButtons searchForm" on:submit|preventDefault={updateSearchArray}>
                        <input type="text" bind:value={searchString} placeholder="Search...">
                        <button type="submit">🔎</button>
                    </form>
                </div>
                <div class="displayPanel">
                    <div class="panelHead">
                        <h2>{activeProgrammeObject.name}</h2>
                        <p>Showing links for {activeProgrammeObject.abbr}</p>
                        {#if activeTag !== "all"}    
                            <p in:fly>Selected tag is: <span on:click={() => activeTag = "all"} class="tag" style="background-color: {tags[activeTag].color};">{tags[activeTag].pressNames[$locale.toString()]}</span></p>
                        {:else}
                            <p in:fly>Selected tag is: none. <i>Click on a Tag to select it!</i></p>
                        {/if}
                    </div>
                    <div class="links">
                        {#each activeProgrammeObject.links as link}
                            {#if containsTag(link.tags, activeTag) && containsKeyword(link.keywords[$locale.toString()], searchArray)}
                                <div transition:fly="{{ y: 10, duration: 100 }}">
                                    <Dashboardlink on:changeActiveTag={changeActive} desc={link[$locale.toString()].desc} href={link[$locale.toString()].link} title={link.name} tags={link.tags} tagsObject={tags}/>
                                </div>
                            {/if}
                        {/each}
                    </div>
                </div>
            </div>
        </div>
        <div class="underDashBg">
            <div class="linkToFaculties">
                <h2>Need something related to your faculty?</h2>
                <p>Currently available faculties:</p>
                <div class="facultyLinks">
                    {#each facultiesArray as faculty}
                        {#if faculty !== "tudelft"}
                            <a class="linkToFaculty" href="/dashboard/{faculty}">{faculty}</a>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
    </div>
</main>

<style lang="scss">
    $contrast_header: #24313d;

    .restOfPage {
        background-image: url("/background/dashboard.svg");
        background-size: cover;
    }

    .facultyLinks {
        display: flex;
        flex-flow: row wrap;
        width: 60vw;
        gap: 20px;
    }

    .linkToFaculty {
        margin-top: 50px;
        color: whitesmoke;
        font-size: 1.2rem;
        text-decoration: none;
        text-transform: uppercase;
        border: 1px whitesmoke solid;
        padding: 20px;
        text-align: center;
        width: 70px;
        border-radius: 5px;
        transition: all 0.1s ease-in-out;
    }

    .linkToFaculty:hover {
        background-color: whitesmoke;
        color: black;
    }

    .underDashBg {
        position: relative;
        margin-top: -1px;
        background-size: cover;
    }

    .linkToFaculties {
        padding: 100px 0px;
        text-align: center;
        display: flex;
        flex-flow: column;
        align-items: center;

        p, h2 {
            color: white;
        }
        
        h2 {
            text-shadow: 1px 1px 2px black;
            margin: 0px;
            font-size: 1.8rem;
        }
    }

    .panelHead {
        h2, p {
            color: #24313d;
            text-align: center;
        }
        border-bottom: 2px solid hsla(209, 26%, 19%, 0.353);
    }

    .links {
        padding: 50px;
        display: flex;
        flex-flow: row wrap;
        gap: 20px;
        justify-content: center;
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

    .dashboardBg {
        width: 100vw;
        padding-top: 20px;
        display: flex;
        justify-content: center;
        position: relative; 
    }

    .searchForm {
        display: flex;
        position: relative;
        padding: 0px;
        width: 200px !important;

        input {
            flex-grow: 1;
            width: auto;
            height: 30px;
            padding: 5px 0px 5px 10px;
            border: none;
            border-radius: 15px;
        }
    }

    button {
        background-color: #e8e8e8;
        cursor: pointer;
        border: none;
        font-size: 2rem;
        border-radius: 15px;
    }

    .dashboard {
        width: 90vw;
        background-color: white;
        border-radius: 15px;
    }

    .filters {
        padding: 20px 25px;
        display: flex;
        align-items: center;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        background-color: #c9c9c9;
    }

    * {
        font-family: 'Oxygen', sans-serif;
    }

    .filterButtons {
        border-radius: 15px;
        border: none;
        color: rgb(0, 0, 0);
        width: 170px;
        font-weight: bold;
        padding: 5px 10px;
        font-size: 0.8rem;
        cursor: pointer;
        height: 40px;
    }

    

    @media only screen and (max-width: 550px) {
        .filters {
            display: flex;
            flex-flow: column nowrap;
            gap: 15px;
            align-items: center;
        }

        .filterButtons {
            width: 300px;
            padding: 10px 10px;
            font-size: 0.9rem;
        }

        .searchForm {
            width: 300px;

            input {
                width: 290px;
            }
        }
    }

    @media only screen and (max-height: 600px) {
        .filters {
            display: flex;
            flex-flow: row wrap;
            gap: 5px;
            justify-content: center;
        }

        .filterButtons {
            width: auto;
            padding: 10px 10px;
            font-size: 0.75rem;
        }

        .searchForm {
            width: 200px;

            input {
                font-size: 0.75rem;
                width: 190px;
            }
            button {
                
                font-size: 1.3rem;
            }
        }
    }
</style>