<script>
    import Linkbox from "$lib/Reusable/Linkbox.svelte";
</script>

<main>
    <div class="landingSite">
        <img src="/logo.svg" height="100px" alt="The logo of RoTUer">
        <h1>RoTUer</h1>
        <!-- <a href="/" class="navItem" id="logo">RoTUer</a><i>...is here</i> -->
        <i>Website is nog in ontwikkeling en is momenteel niet bedoeld voor gebruik! Betreden op eigen risico</i>
    </div>
    <div class="landingSection secondLandingSection">
        <div class="leftSecond">
            <h2>🚀 Wat is RoTUer?</h2>
            <p>🔗 RoTUer is een project gemaakt door (aanstaande) studenten van de TU Delft. Het belangrijkste doel is om andere studenten te helpen websites te vinden die informatie bevatten die ze zoeken en om alle mogelijke dingen op een rijtje te zetten die je in de Uni kunt gebruiken.</p>
            <p>⚠️ DISCLAIMER: Dit project is hoe dan ook niet gebonden aan de TU Delft zelf. Informatie wordt hier verzameld en gepresenteerd door ons (het team achter het project).<b>TU DELFT IS NIET VERANTWOORDELIJK VOOR ONNAUWKEURIGHEID OP DEZE WEBSITE</b>.</p>
            <p>‼️ Hoewel we ervoor zorgen dat elke link veilig is, <b>zorg ervoor dat u controleert waar de link naartoe leidt voordat u klikt!</b></p>
        </div>
        <div class="rightSecond">
            <div class="SecondBox computer">
                <span>🌹</span>
                <h3>Over ons</h3>
                <p>Wij zijn studenten uit heel Europa die net samen aan een project zijn begonnen. We willen allemaal mensen helpen. Daarom hebben we RoTUer ontwikkeld.</p>
                <a href="/" class="AnchorBox">Lees verder</a>
            </div>
            <div class="SecondBox computer">
                <span>🔥</span>
                <h3>Over RoTUer</h3>
                <p>RoTUer is gemaakt om mensen zoals ik te helpen die zich plotseling op een plek bevinden met eindeloze mogelijkheden - zo kan je onderandere boeken, werkruimtes, drukmachines en nog veel meer boeken. Zelfs nu begin ik al andere dingen te vergeten. Daarom wilden we al deze informatie in een samengevatte vorm met links presenteren.</p>
                <a href="/" class="AnchorBox">Lees verder</a>
            </div>

            <div class="tablet SecondLinks">
                <a href="/about/RoTUer" class="AnchorBox whitebg">About Us</a>
                <a href="/about/RoTUer" class="AnchorBox whitebg">About RoTUer</a>
            </div>
        </div>
    </div>
    <div class="landingSection thirdLandingSection">
        <h2>🔍 Wil je...</h2>
        <div class="ThirdBoxesContainer">
            <Linkbox 
                emoji="📚" 
                title="...een plek boeken om in alle rust te studeren?" 
                src="https://tudelft.mapiq.net/Content/images/iOSWebApp/apple-touch-icon-144x144.png" 
                alt="Library Logo" 
                href="https://tudelft.mapiq.net" 
                anchorText="TU Delft Bibliotheek"  />
            <Linkbox 
                emoji="🏀" 
                title="...het meeste halen uit je X abonnement?" 
                src="xlogo.png" 
                alt="X Logo" 
                href="https://www.tudelft.nl/x/aanbod/rooster"
                anchorText="X Rooster"  />
            <Linkbox 
                emoji="🧑‍🎓" 
                title="...toegang tot het studentenportaal?" 
                src="https://www.tudelft.nl/typo3conf/ext/tud_styling/Resources/Public/img/apple-touch-icon-144x144.png" 
                alt="TUDelft Logo" 
                href="https://www.tudelft.nl/studenten" 
                anchorText="Studenten Portaal"  />
        </div>
        <a href="/links" id="moreLinks"><i>Meer...</i></a>
    </div>
    <div class="landingSection fourthLandingSection">
        <div class="custom-shape-divider-top-1661776277">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
        <div class="centralFourth">
            <h2>Een website link gevonden die we moeten toevoegen?</h2>
            <p>We zullen deze link toevoegen als het:</p>
            <ul>
                <li>een betrouwbare bron van informatie is</li>
                <li>een officiële website van b.v. winkels voor schoolboeken is en</li>
                <li>geen illegale inhoud bevat...</li>
            </ul>

            <div class="linkSuggest">
                <a href="mailto:teampraxidike@protonmail.com?subject=Link Suggestion">Stuur ons een e-mail</a>
                <span>/</span>
                <a href="https://github.com/Zakrok09/RoTUer/issues">Of creer een probleem of github (met het label Links)</a>    
            </div>
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

        i {
            font-size: 0.9rem;
        }
    }

    h1 {
        font-size: 1.6em;
        color: #4e5166;
    }

    // #logo {
    //     font-size: 5em;
    //     text-decoration: none;
    //     color: black;
    // }

    .secondLandingSection {
        background-image: url("/bubbleBackground.svg");
        background-size: cover;
        display: flex;
        justify-content: space-between;
        flex-flow: row nowrap;
        color: whitesmoke;
    }

    .leftSecond {
        width: 30%;
        padding: 100px 80px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: end;

        h2 {
            font-size: 2.9rem;
        }

        p {
            color: whitesmoke;
            font-size: 1.1rem;
        }
    }

    .rightSecond {
        width: 60%;
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }

    .SecondBox {
        width: 300px;
        height: 350px;
        border-radius: 10px;
        background-color: whitesmoke;
        color: black;
        display: flex;
        flex-flow: column nowrap;
        justify-content: baseline;
        align-items: center;

        span {
            margin-top: 30px;
            font-size: 2em;
        }

        h3 {
            margin-top: 5px;
            text-align: center;
            font-size: 1.3rem;
        }

        p {
            text-align: center;
            padding: 10px 30px;
            font-size: 0.9em;
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

    .thirdLandingSection {
        display: flex;
        flex-flow: column;
        align-items: center;
        background-image: url("/stripesBackground.svg");

        h2 {
            margin-top: 200px;
            width: 70%;
            font-size: 3em;  
            text-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
        }
    }

    .ThirdBoxesContainer {
        display: flex;
        flex-flow: row wrap;
        gap: 5vw;
    }

    #moreLinks {
        margin-top: 20px;
        color: #24313d;
        margin-bottom: 50px;
    }

    .fourthLandingSection {
        background-image: url("/bubbleBackground.svg");
        background-size: cover;
        display: flex;
        justify-content: space-between;
        flex-flow: column nowrap;
        color: whitesmoke;
        position: relative;
    }

    .centralFourth {
        padding: 160px 80px 80px 80px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: end;
        text-align: center;

        h2 {
            font-size: 3rem;
        }

        ul {
            margin: 10px 0px 30px 0px;
            padding: 0px;
        }

        li {
            list-style-type: none;
            margin: 0px;
            margin-bottom: 5px;
            
            font-size: 0.9rem !important;
        }

        p {
            color: whitesmoke;
            font-size: 1.4em;
        }

        a {
            font-size: 2em;
            color: #FBFBFB;
            text-decoration: none;
            margin: 0px;
            padding: 0%;
        }

        span {
            font-size: 2em;
        }
    }

    .linkSuggest {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 20px;
    }

    .custom-shape-divider-top-1661776277 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }

    .custom-shape-divider-top-1661776277 svg {
        position: relative;
        display: block;
        width: calc(137% + 1.3px);
        height: 131px;
    }

    .custom-shape-divider-top-1661776277 .shape-fill {
        fill: #FBFBFB;
    }

    .tablet {
        display: none;
    }

    @media only screen and (max-width: 1200px) {
        .tablet {
            display: block;
        }

        .computer {
            display: none;
        }

        .secondLandingSection {
            flex-flow: column;
            align-items: center;

            .leftSecond {
                width: 70%;
                padding-bottom: 50px;

                h2 {
                    font-size: 2.3rem;
                }

                p {
                    font-size: 1.1rem;
                }
            }
        }

        .SecondLinks {
            display: flex;
            gap: 20px;
            .whitebg {
                background-color: white;
                color: #24313d;
                display: inline-block;
                width: 100px;
                text-align: center;
                border-radius: 5px;
                transition: all 0.2s;
            }

            .whitebg:hover {
                background-color: rgb(225, 225, 225);
            }

            padding-bottom: 100px;
        }

        .thirdLandingSection {
            h2 {
                display: inline-block;
                width: auto;
                font-size: 2rem;
            }
        }

        .ThirdBoxesContainer {
            flex-flow: row wrap;
            justify-content: center;
            padding: 0px 50px;
        }

        .centralFourth {
            h2 {
                font-size: 2rem;
            }

            p, li {
                font-size: 1.1rem;
            }
        }

        .linkSuggest {
            a, span {
                font-size: 1.4rem;
            }
        }
    }

    @media only screen and (max-width: 700px) {
        .secondLandingSection {
            .leftSecond {
                width: 80%;
                padding-bottom: 50px;

                h2 {
                    font-size: 2.2rem;
                }

                p {
                    font-size: 0.9rem;
                }
            }
        }

        .SecondLinks {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }

        .thirdLandingSection {
            h2 {
                margin: 100px 0px 60px 0px;
                display: inline-block;
                width: auto;
                font-size: 2rem;
            }
        }

        .ThirdBoxesContainer {
            flex-flow: row wrap;
            justify-content: center;
            padding: 0px 50px;
        }

        .centralFourth {
            padding: 150px 30px 50px 30px;
        }

        .centralFourth {
            h2 {
                font-size: 2rem;
            }

            p, li {
                font-size: 1.1rem;
            }
        }

        .linkSuggest {
            flex-flow: column;
            align-items: center;
            a {
                font-size: 1.3rem;
            }

            span {
                display: none;
            }
        }

        
    }
</style>