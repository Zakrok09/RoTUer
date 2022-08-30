<script>
    import Linkbox from "$lib/Reusable/Linkbox.svelte";
</script>

<main>
    <div class="landingSite">
        <img src="/logo.svg" height="100px" alt="The logo of RoTUer">
        <h1 tabindex="0">RoTUer</h1>
        <!-- <a href="/" class="navItem" id="logo">RoTUer</a><i>...is here</i> -->
        <i>Website is still under development and it currently not meant for use! Enter at your own responsibility</i>
    </div>
    <div class="landingSection secondLandingSection">
        <div class="leftSecond">
            <h2>🚀 What is RoTUer?</h2>
            <p>🔗 RoTUer is a project made by (soon-to-be) students of TU Delft. The main goal is to help other students find websites that contain information that they are searching and to generalize all possible things you can make use of in the Uni.</p>
            <p>⚠️ DISCLAIMER: This project is not affiliated by anyway to TU Delft itself. Information here is gathered and presented by us (the team behind the project). <b>TU DELFT IS NOT RESPONSIBLE FOR INACCURACY ON THIS WEBSITE</b>.</p>
            <p>‼️ Although we make sure that every link is secure, <b>make sure to check where the link is leading to before clicking!</b></p>
        </div>
        <div class="rightSecond">
            <div class="SecondBox computer">
                <span>🌹</span>
                <h3>About us</h3>
                <p>We are students from all over Europe who just started working on a project together. We all want to help people. This is why we developed RoTUer.</p>
                <a href="/about/us" class="AnchorBox">About Us</a>
            </div>
            <div class="SecondBox computer">
                <span>🔥</span>
                <h3>About RoTUer</h3>
                <p>RoTUer was made to help people like me who just suddenly find themselves in a place with endless possibilities - you can book books, rooms for teams, printing machines etc. Even now I start forgetting all the other stuff. This is why we wanted to present all this information in a summarized form with links.</p>
                <a href="/about/RoTUer" class="AnchorBox">About RoTUer</a>
            </div>

            <div class="tablet SecondLinks">
                <a href="/about/RoTUer" class="AnchorBox whitebg">About Us</a>
                <a href="/about/RoTUer" class="AnchorBox whitebg">About RoTUer</a>
            </div>
        </div>
    </div>
    <div class="landingSection thirdLandingSection">
        <h2 aria-label="This is the first half of the question. The next are headings in boxes.">🔍 Do you want to...</h2>
        <div class="ThirdBoxesContainer" role="list">
            <Linkbox 
                emoji="📚" 
                title="...book a place to study in peace?" 
                src="https://tudelft.mapiq.net/Content/images/iOSWebApp/apple-touch-icon-144x144.png" 
                alt="Library Logo" 
                href="https://tudelft.mapiq.net" 
                anchorText="TU Delft Library"  />
            <Linkbox 
                emoji="🏀" 
                title="...use the most out of your X?" 
                src="xlogo.png" 
                alt="X Logo" 
                href="https://www.tudelft.nl/en/x/whats-on-offer/timetable"
                anchorText="X Timetable"  />
            <Linkbox 
                emoji="🧑‍🎓" 
                title="...access student portal?" 
                src="https://www.tudelft.nl/typo3conf/ext/tud_styling/Resources/Public/img/apple-touch-icon-144x144.png" 
                alt="TUDelft Logo" 
                href="https://www.tudelft.nl/en/student" 
                anchorText="Student Portal"  />
        </div>
        <a aria-label="This links sends you to our page with links" href="/links" id="moreLinks"><i>More...</i></a>
    </div>
    <div class="landingSection fourthLandingSection">
        <div class="custom-shape-divider-top-1661776277">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
        <div class="centralFourth">
            <h2>Found a missing link?</h2>
            <p>If the link we are missing:</p>
            <ul>
                <li>is a legitimate source of information</li>
                <li>is the official website of e.g. shops for texbooks and</li>
                <li>does not contain any pirated content...</li>
            </ul>

            <div class="linkSuggest">
                <a href="mailto:teampraxidike@protonmail.com?subject=Link Suggestion">Send us an email</a>
                <span>/</span>
                <a href="https://github.com/Zakrok09/RoTUer/issues/new?labels=link">Open an issue</a>
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

        a {
            text-decoration: underline;
            transition: all 0.2s;
        }

        a:hover {
            color: #c7c7c7;
        }
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