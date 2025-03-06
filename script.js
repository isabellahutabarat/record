          
    ///find the corresponding decade and genre
    function getDecadeGenre(input1, input2) {
        let selectedDecade = "";
        let selectedGenre = "";

        for (let decade in decadeGroups) {
            if (decadeGroups[decade].includes(input1)) {
                selectedDecade = decade;
                break;
            }
        }

        for (let genre in genreGroups) {
            if (genreGroups[genre].includes(input2)) {
                selectedGenre = genre;
                break;
            }
        }

        return { selectedDecade, selectedGenre };
    }

    function updateBackground(gradient) {
        const body = document.body
        body.style.background = gradient;
    }


    // display a single random album image from the category
    function displayImage() {
        const charInput1 = document.getElementById("charInput1").value.toUpperCase();
        const charInput2 = document.getElementById("charInput2").value.toUpperCase();
        const statusMessage = document.getElementById("status");
        const imageContainer = document.getElementById("imageContainer");
        
        // must be a single A-Z character for both inputs
        if (!/^[A-Z]$/.test(charInput1) || !/^[A-Z]$/.test(charInput2)) {
            imageContainer.innerHTML = `<img src="assets/error.png" class="album-image" alt="Error: Invalid input">`;
            statusMessage.textContent = "No Music Found";
            return;
        }

        const { selectedDecade, selectedGenre } = getDecadeGenre(charInput1, charInput2);

        if (selectedDecade && selectedGenre) {
            const albums = albumData[selectedDecade]?.[selectedGenre];

            if (albums && albums.length > 0) {
                // album from the matching group
                const randomAlbum = albums[Math.floor(Math.random() * albums.length)];

                // only one random album
                imageContainer.innerHTML = `<img src="${randomAlbum.image}" alt="${randomAlbum.album} by ${randomAlbum.artist}" class="album-image">`;
                statusMessage.textContent = "Now Playing";
                
                // update background
                updateBackground(randomAlbum.gradient);

            } else {
                imageContainer.innerHTML = `<img src="assets/error.png" class="album-image" alt="No albums found">`;
            }

            updateBackground(randomAlbum.album);
        } else {
            imageContainer.innerHTML = `<img src="assets/error.png" class="album-image" alt="No albums found">`;
        }
       
        }    
          

          const albumData = {
            "1970s": {
              "Rock": [
                { album: "Fun House", artist: "The Stooges", year: 1970, image: "assets/1970-fun-house-the-stooges.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)"},
                { album: "Sticky Fingers", artist: "The Rolling Stones", year: 1971, image: "assets/1971-sticky-fingers-the-rolling-stones.png", gradient: "linear-gradient(180deg, #CE1A21 23.47%, #521013 100%)" },
                { album: "Quadrophenia", artist: "The Who", year: 1973, image: "assets/1973-quadrophenia–the-who.png", gradient: "linear-gradient(180deg, #464646 46.79%, #A4A4A4 100%)" },
                { album: "Hearts", artist: "America", year: 1975, image: "assets/1975-hearts-america.png", gradient: "linear-gradient(180deg, #B74958 50.59%, #6884BE 100%)" },
                { album: "Hotel California", artist: "Eagles", year: 1976, image: "assets/1976-hotel-california-eagles.png", gradient: "linear-gradient(119deg, #AF5B25 18.58%, #433798 93.52%)" },
                { album: "Rumours", artist: "Fleetwood Mac", year: 1977, image: "assets/1977-rumours-fleetwood-mac.png", gradient: "linear-gradient(180deg, #4D4C48 8%, #B3B0A8 100%)" }
              ],
              "Alternative/Indie": [
                { album: "Parallel Lines", artist: "Blondie", year: 1978, image: "assets/1978-parallel-lines-blondie.png", gradient: "linear-gradient(151deg, #BB393B 35.9%, #1E1E1F 102.98%)" },
                { album: "Waves", artist: "Patti Smith", year: 1979, image: "assets/1979-wave-patti-smith.png", gradient: "inear-gradient(180deg, #607E89 31.61%, #852E36 122.07%)" }
              ],
              "Soul, R&B, & Hip-Hop": [
                { album: "Young, Gifted, and Black", artist: "Aretha Franklin", year: 1972, image: "assets/1972-young-gifted-and-black-aretha-franklin.png", gradient: "linear-gradient(180deg, #2B3164 24.32%, #8E1918 83.47%)" },
                { album: "Fire", artist: "Ohio Players", year: 1974, image: "assets/1974-fire-ohio-players.png", gradient: "linear-gradient(180deg, #893126 30.86%, #DBBB6E 100%)" }
              ]
            },

            "1980s": {
              "Rock": [
                { album: "Remain in Light", artist: "Talking Heads", year: 1980, image: "assets/1980-remain-in-light-talking-heads.png", gradient: "linear-gradient(133deg, #A81525 28.73%, #DE4250 89.24%)" },
                { album: "Pleasant Dreams", artist: "Ramones", year: 1981, image: "assets/1981-pleasant-dreams-ramones.png", gradient: "linear-gradient(140deg, #E7DC12 -21.55%, #CC1F27 75.06%)" },
                { album: "Combat Rock", artist: "The Clash", year: 1982, image: "assets/1982-combat-rock-the-clash.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Synchronicity", artist: "The Police", year: 1983, image: "assets/1983-synchronicity-the-police.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" }
              ],
              "Alternative/Indie": [
                { album: "Low-Life", artist: "New Order", year: 1985, image: "assets/1985-low-life-new-order.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "The Queen is Dead", artist: "The Smiths", year: 1986, image: "assets/1986-the-queen-is-dead-the-smiths.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Kiss Me, Kiss Me, Kiss Me", artist: "The Cure", year: 1987, image: "assets/1987-kissme-kissme-kissme-the-cure.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Hats", artist: "The Blue Nile", year: 1989, image: "assets/1989-hats-the-blue-nile.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" }
              ],
              "Soul, R&B, & Hip-Hop": [
                { album: "Purple Rain", artist: "Prince", year: 1984, image: "assets/1984-purple-rain-prince.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Stronger Than Pride", artist: "Sade", year: 1988, image: "assets/1998-stronger-than-pride-sade.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" }
              ]
            },

            "1990s": {
              "Rock": [
                { album: "Nevermind", artist: "Nirvana", year: 1991, image: "assets/1991-nevermind-nirvana.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Downward Spiral", artist: "Nine Inch Nails", year: 1994, image: "assets/1994-downward-spiral-nine-inch-nails.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "The Bends", artist: "Radiohead", year: 1995, image: "assets/1995-bends-radiohead.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" }
              ],
              "Alternative/Indie": [
                { album: "Heaven or Las Vegas", artist: "Cocteau Twins", year: 1990, image: "assets/1990-heaven-or-las-vegas-cocteau-twins.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Wish", artist: "The Cure", year: 1992, image: "assets/1992-wish-the-cure.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Debut", artist: "Bjork", year: 1993, image: "assets/1993-debut-bjork.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Tidal", artist: "Fiona Apple", year: 1996, image: "assets/1996-tidal-fiona-apple.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Either/Or", artist: "Elliot Smith", year: 1997, image: "assets/1997-either-or-elliot-smith.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" }
              ],
              "Soul, R&B, & Hip-Hop": [
                { album: "The Miseducation of Lauryn Hill", artist: "Lauryn Hill", year: 1998, image: "assets/1998-the-miseducation-of-lauryn-hill-lauryn-hill.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Operation: Doomsday", artist: "MF DOOM", year: 1999, image: "assets/1999-operation-doomsday-MF-doom.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" }
              ]
            },
            
            "2000s": {
              "Rock": [
                { album: "Is This It", artist: "The Strokes", year: 2001, image: "assets/2001-is-this-it-the-strokes.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Room on Fire", artist: "The Strokes", year: 2003, image: "assets/2003-room-on-fire-the-strokes.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Saturday Night Wrist", artist: "Deftones", year: 2006, image: "assets/2006-saturday-night-wrists-deftones.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "In Rainbows", artist: "Radiohead", year: 2007, image: "assets/2007-in-rainbows-radiohead.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" }
              ],
              "Alternative/Indie": [
                { album: "Turn on the Bright Lights", artist: "Interpool", year: 2002, image: "assets/2002-turn-on-the-bright-lights-interpool.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Aerial", artist: "Kate Bush", year: 2005, image: "assets/2005-aerial-kate-bush.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Third", artist: "Portishead", year: 2008, image: "assets/2008-thirst-portishead.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Merriweather Post Pavillion", artist: "Animal Collective", year: 2009, image: "assets/2009-merriweather-post-pavilion-animal-collective.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" }
              ],
              "Soul, R&B, & Hip-Hop": [
                { album: "Mama's Gun", artist: "Erykah Badu", year: 2000, image: "assets/2000-mamas-gun-erykah-badu_.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Madvillainy", artist: "Madvillain, MF DOOM, & Madlib", year: 2004, image: "assets/2004-madvillainy-madvillain-madlib-MF-doom.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" }
              ]
            },

            "2010s": {
              "Rock": [
                { album: "Twin Fantasy", artist: "Car Seat Headrest", year: 2011, image: "assets/2011-twin-fantasy-car-seat-headrest.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "French Exit", artist: "TV Girl", year: 2014, image: "assets/2014-french-exit-tv-girl.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" }
              ],
              "Alternative/Indie": [
                { album: "Teen Dream", artist: "Beach House", year: 2010, image: "assets/2010-teen-dream-beach-house.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "A Moon Shaped Pool", artist: "Radiohead", year: 2016, image: "assets/2016-a-moon-shaped-pool-radiohead.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Slowdive", artist: "Slowdive", year: 2017, image: "assets/2017-slowdive-slowdive.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" }
              ],
              "Soul, R&B, & Hip-Hop": [
                { album: "Good Kid, M.A.A.D City", artist: "Kendrick Lamar", year: 2012, image: "assets/2012-good-kid-maad-city-kendrick-lamar.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Doris", artist: "Earl Sweatshirt", year: 2013, image: "assets/2013-doris-earl-sweatshirt.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "If You're Reading This It's Too Late", artist: "Drake", year: 2015, image: "assets/2015-if-youre-reading-this-its-too-late.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Die Lit", artist: "Playboi Carti", year: 2018, image: "assets/2018-die-lit-playboi-carti.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "When I Get Lost", artist: "Solange", year: 2019, image: "assets/2018-die-lit-playboi-carti.pngg", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" }
              ]
            },

            "2020s": {
              "Rock": [
                { album: "Punisher", artist: "Pheobe Bridgers", year: 2020, image: "assets/2020-punisher-pheobe-bridgers.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" }
              ],
              "Alternative/Indie": [
                { album: "Cinema", artist: "The Marias", year: 2021, image: "assets/2021-cinema-the-marias.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "Sunburn", artist: "Dominic Fike", year: 2023, image: "assets/2023-sunburn-dominic-fike.png" },
                { album: "Two Star and the Dream Police", artist: "Mk.gee", year: 2024, image: "assets/2024-two-star-and-the-dream-police-mk.gee.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" }
              ],
              "Soul, R&B, & Hip-Hop": [
                { album: "Jamie", artist: "Montell Fish", year: 2022, image: "assets/2019-when-i-get-home-solange.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" },
                { album: "$ome $exy $ongs 4 U", artist: "Drake & PARTYNEXTDOOR", year: 2025, image: "assets/2018-die-lit-playboi-carti.png", gradient: "linear-gradient(180deg, #CCA125 10.73%, #BE2B31 100%)" }
              ]
            }
        };
          
        const decadeGroups = {
            "1970s": ['A', 'B', 'C', 'D', 'E'],
            "1980s": ['F', 'G', 'H', 'I', 'J'],
            "1990s": ['K', 'L', 'M', 'N'],
            "2000s": ['O', 'P', 'Q', 'R'],
            "2010s": ['S', 'T', 'U', 'V'],
            "2020s": ['W', 'X', 'Y', 'Z'],
        };
          
        const genreGroups = {
           "Rock": ['A', 'B', 'C', 'D', 'E', 'O', 'P', 'Q', 'R', 'W'],
           "Alternative/Indie": ['F', 'G', 'H', 'I', 'J', 'T', 'U', 'V'],
           "Soul, R&B, & Hip-Hop": ['K', 'L', 'M', 'N', 'S', 'X', 'Y', 'Z'],
        };
 

    
