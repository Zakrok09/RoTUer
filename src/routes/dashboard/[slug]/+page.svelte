<script>
    import { t, locale } from "$lib/translations/i18n";
    import HEAD from "$lib/Metadata/HEAD.svelte";
    import Dashboardlink from "$lib/Reusable/Dashboardlink.svelte"
	import { fly } from 'svelte/transition';
    export let data;
    const faculty = data.faculty;
    const programmeTags = faculty.programmesTags;
    const tags = data.dbTags;
    const programmes = faculty.programmes;
    
    
    let programmeTagsArray = Object.keys(programmeTags);
    let activeProgrammeString = programmeTagsArray[0].toString();
    $: activeProgrammeObject = programmes[activeProgrammeString.toString()];
    let searchString = '';
    $:searchArray = [''];
    $:activeTag = "all";

    function containsTag(tagsOfLink, chosenTag) {
        if (chosenTag === 'all') return true;
        let result = false;
        if (tagsOfLink.some(linkTag => linkTag === chosenTag)) result = true;
        return result;
    }

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

<HEAD title="Dashboard" metadescription="RoTUer - a free, open-source dashboard that students need! RoTUer is a project aimed at helping students by providing them valuable information." />

<main>
    <div class="landingSite">
        <img src="/isometric/logo.svg" alt="The logo of RoTUer">
        <h1 tabindex="0">RoTUer</h1>
        <i>{$t("dashboard.underheading")}</i>
    </div>
    
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
</main>

<style lang="scss">
    $contrast_header: #24313d;

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
        background-image: url("/background/bubbleBackground.svg");
        width: 100vw;
        padding: 5vw;
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

    .landingSite {
        padding-top: 70px;
        padding-bottom: 200px;
        font-family: 'Oxygen', sans-serif;
        text-align: center;

        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        i {
            font-size: 0.9rem;
        }

        img {
            width: 300px;
            display: inline;
        }
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