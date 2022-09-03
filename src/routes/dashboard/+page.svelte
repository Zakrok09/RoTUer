<script>
    import { t, locale } from "$lib/translations/i18n";
    import HEAD from "$lib/Metadata/HEAD.svelte";
    export let data;
    const db = data.database;
    const programmeTags = db.programmesTags;
    const tags = db.tags;
    const programmes = db.programmes;
    
    
    let activeProgramme = "common";
    let programmeTagsArray = Object.keys(programmeTags);
    let searchString = '';
    $:searchArray = [''];

    function containsKeyword(linkKeywords, searchBoxKeywords) {
        if (searchBoxKeywords.length === 1 && searchBoxKeywords[0] === "" ) return true;
        let result = false;
        if (linkKeywords.some(linkKeyword => searchBoxKeywords.includes(linkKeyword))) return true;
        return result;
    }

    function updateSearchArray() {
        searchArray = searchString.toLocaleLowerCase().split(' ');
    }

</script>

<HEAD title="Dashboard" metadescription="RoTUer - a free, open-source dashboard that students need! RoTUer is a project aimed at helping students by providing them valuable information." />

<main>
    <div class="landingSite">
        <img src="/isometric/logo.svg" alt="The logo of RoTUer">
        <h1 tabindex="0">RoTUer</h1>
        <!-- <a href="/" class="navItem" id="logo">RoTUer</a><i>...is here</i> -->
        <i>{$t("dashboard.underheading")}</i>
    </div>
    
    <div class="dashboard">
        <div class="filters">
            <select bind:value={activeProgramme}>
                {#each programmeTagsArray as programmeTag}
                    <option value={programmeTag}>{programmeTags[programmeTag].pressNames[$locale.toString()]}</option>
                {/each}
            </select>
            <form class="searchForm" on:submit|preventDefault={updateSearchArray}>
                <input type="text" bind:value={searchString} placeholder="Search...">
                <button type="submit">🔎</button>
            </form>
        </div>
        <div class="displayPanel">
            <!-- {#each programmes as }
                
            {/each} -->
        </div>
    </div>
</main>

<style lang="scss">
    $contrast_header: #24313d;

    * {
        font-family: 'Oxygen', sans-serif;
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

    
</style>