          
    //default image and background
    window.onload = function() {
        const body = document.body;
        const defaultGradient = "linear-gradient(179deg, #000 0.77%, #484848 140.19%)"; // Example gradient
        body.style.background = defaultGradient;
    
        const imageContainer = document.getElementById("imageContainer");
        imageContainer.innerHTML = `<img src="assets/default.png" alt="Default Album" class="album-image">`;
        };

    function updateBackground(gradient) {
        const body = document.body
        body.style.background = gradient;
    }

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


    // display a single random album image from the category
    function displayImage() {
        const charInput1 = document.getElementById("charInput1").value.toUpperCase();
        const charInput2 = document.getElementById("charInput2").value.toUpperCase();
        const statusMessage = document.getElementById("status");
        const imageContainer = document.getElementById("imageContainer");
        
        // must be a single A-Z character for both inputs
        if (!/^[A-Z]$/.test(charInput1) || !/^[A-Z]$/.test(charInput2)) {
            imageContainer.innerHTML = `<img src="assets/error1.png" class="album-image" alt="Error: Invalid input">`;
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
                
                document.getElementById('albumTitle').textContent = randomAlbum.album;
                document.getElementById('albumArtist').textContent = randomAlbum.artist;
                document.getElementById('albumYear').textContent = randomAlbum.year;

                // update background
                updateBackground(randomAlbum.gradient);

            } else {
                imageContainer.innerHTML = `<img src="assets/error1.png" class="album-image" alt="No albums found">`;
            }

            updateBackground(randomAlbum.album);
        } else {
            imageContainer.innerHTML = `<img src="assets/error1.png" class="album-image" alt="No albums found">`;
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
                { album: "Combat Rock", artist: "The Clash", year: 1982, image: "assets/1982-combat-rock-the-clash.png", gradient: "linear-gradient(180deg, #634B3B 3.45%, #787E53 96.28%)" },
                { album: "Synchronicity", artist: "The Police", year: 1983, image: "assets/1983-synchronicity-the-police.png", gradient: "linear-gradient(180deg, #B6A452 29.03%, #2A5886 96.28%)" }
              ],
              "Alternative/Indie": [
                { album: "Low-Life", artist: "New Order", year: 1985, image: "assets/1985-low-life-new-order.png", gradient: "linear-gradient(180deg, #161616 29.03%, #383838 96.28%)" },
                { album: "The Queen is Dead", artist: "The Smiths", year: 1986, image: "assets/1986-the-queen-is-dead-the-smiths.png", gradient: "linear-gradient(90deg, #1A473A 33.96%, #B7808C 99.94%)" },
                { album: "Kiss Me, Kiss Me, Kiss Me", artist: "The Cure", year: 1987, image: "assets/1987-kissme-kissme-kissme-the-cure.png", gradient: "linear-gradient(98deg, #B64617 33.22%, #8E131C 93.41%)" },
                { album: "Hats", artist: "The Blue Nile", year: 1989, image: "assets/1989-hats-the-blue-nile.png", gradient: "linear-gradient(180deg, #1A4078 11.51%, #2C1A3E 93.24%)" }
              ],
              "Soul, R&B, & Hip-Hop": [
                { album: "Purple Rain", artist: "Prince", year: 1984, image: "assets/1984-purple-rain-prince.png", gradient: "linear-gradient(180deg, #3A1D4A 29.03%, #1D1D38 96.28%)" },
                { album: "Stronger Than Pride", artist: "Sade", year: 1988, image: "assets/1998-stronger-than-pride-sade.png", gradient: "linear-gradient(118deg, #9D3B37 39.7%, #C6C56F 100.85%)" }
              ]
            },

            "1990s": {
              "Rock": [
                { album: "Nevermind", artist: "Nirvana", year: 1991, image: "assets/1991-nevermind-nirvana.png", gradient: "linear-gradient(180deg, #2F4373 37.34%, #1E7196 116.15%)" },
                { album: "Downward Spiral", artist: "Nine Inch Nails", year: 1994, image: "assets/1994-downward-spiral-nine-inch-nails.png", gradient: "linear-gradient(180deg, #AD9525 43.43%, #2C1F1C 115.53%)" },
                { album: "The Bends", artist: "Radiohead", year: 1995, image: "assets/1995-bends-radiohead.png", gradient: "linear-gradient(180deg, #911C1B 23.88%, #2C1F1C 115.53%)" }
              ],
              "Alternative/Indie": [
                { album: "Heaven or Las Vegas", artist: "Cocteau Twins", year: 1990, image: "assets/1990-heaven-or-las-vegas-cocteau-twins.png", gradient: "linear-gradient(180deg, #341F44 14.34%, #5E2435 55.15%, #BC2521 116.15%)" },
                { album: "Wish", artist: "The Cure", year: 1992, image: "assets/1992-wish-the-cure.png", gradient: "linear-gradient(180deg, #273F6A 14.72%, #964434 106.76%)" },
                { album: "Debut", artist: "Bjork", year: 1993, image: "assets/1993-debut-bjork.png", gradient: "linear-gradient(180deg, #1E1C1D 44.68%, #584F4F 122.53%)" },
                { album: "Tidal", artist: "Fiona Apple", year: 1996, image: "assets/1996-tidal-fiona-apple.png", gradient: "linear-gradient(180deg, #D5BEBC 23.88%, #98AAB1 115.53%)" },
                { album: "Either/Or", artist: "Elliot Smith", year: 1997, image: "assets/1997-either-or-elliot-smith.png", gradient: "linear-gradient(180deg, #AA6D52 23.88%, #C2AF67 115.53%)" }
              ],
              "Soul, R&B, & Hip-Hop": [
                { album: "The Miseducation of Lauryn Hill", artist: "Lauryn Hill", year: 1998, image: "assets/1998-the-miseducation-of-lauryn-hill-lauryn-hill.png", gradient: "linear-gradient(180deg, #26252B 20.33%, #4D4953 98.36%)" },
                { album: "Operation: Doomsday", artist: "MF DOOM", year: 1999, image: "assets/1999-operation-doomsday-MF-doom.png", gradient: "linear-gradient(180deg, #3B5758 20.33%, #474554 98.36%)" }
              ]
            },
            
            "2000s": {
              "Rock": [
                { album: "Is This It", artist: "The Strokes", year: 2001, image: "assets/2001-is-this-it-the-strokes.png", gradient: "linear-gradient(180deg, #8C2D11 7.14%, #B96019 49.49%, #A33313 100%)" },
                { album: "Room on Fire", artist: "The Strokes", year: 2003, image: "assets/2003-room-on-fire-the-strokes.png", gradient: "linear-gradient(180deg, #CE3731 -11.46%, #C89425 55.82%, #CE3531 116.16%)" },
                { album: "Saturday Night Wrist", artist: "Deftones", year: 2006, image: "assets/2006-saturday-night-wrists-deftones.png", gradient: "linear-gradient(116deg, #1F3331 43.67%, #7B764E 97.84%)" },
                { album: "In Rainbows", artist: "Radiohead", year: 2007, image: "assets/2007-in-rainbows-radiohead.png", gradient: "linear-gradient(116deg, #A22225 23.76%, #CE5926 97.84%)" }
              ],
              "Alternative/Indie": [
                { album: "Turn on the Bright Lights", artist: "Interpool", year: 2002, image: "assets/2002-turn-on-the-bright-lights-interpool.png", gradient: "linear-gradient(180deg, #7C1720 28.57%, #E42524 100%)" },
                { album: "Aerial", artist: "Kate Bush", year: 2005, image: "assets/2005-aerial-kate-bush.png", gradient: "linear-gradient(180deg, #DB8E1B -1.84%, #D3C37F 50.34%, #DB8C1C 102.52%)" },
                { album: "Third", artist: "Portishead", year: 2008, image: "assets/2008-thirst-portishead.png", gradient: "linear-gradient(178deg, #095357 27.47%, #438081 100.75%)" },
                { album: "Merriweather Post Pavillion", artist: "Animal Collective", year: 2009, image: "assets/2009-merriweather-post-pavilion-animal-collective.png", gradient: "linear-gradient(116deg, #372B82 24.77%, #86A747 92.95%)" }
              ],
              "Soul, R&B, & Hip-Hop": [
                { album: "Mama's Gun", artist: "Erykah Badu", year: 2000, image: "assets/2000-mamas-gun-erykah-badu_.png", gradient: "linear-gradient(180deg, #4C5915 21.09%, #D87F09 100%)" },
                { album: "Madvillainy", artist: "Madvillain, MF DOOM, & Madlib", year: 2004, image: "assets/2004-madvillainy-madvillain-madlib-MF-doom.png", gradient: "linear-gradient(180deg, #D16828 -11.46%, #C8C8C8 55.82%)" }
              ]
            },

            "2010s": {
              "Rock": [
                { album: "Twin Fantasy", artist: "Car Seat Headrest", year: 2011, image: "assets/2011-twin-fantasy-car-seat-headrest.png", gradient: "linear-gradient(180deg, #6F6F6E 47.64%, #BFBFBA 98.3%)" },
                { album: "French Exit", artist: "TV Girl", year: 2014, image: "assets/2014-french-exit-tv-girl.png", gradient: "linear-gradient(180deg, #6F2821 28.05%, #C63D2C 98.3%)" }
              ],
              "Alternative/Indie": [
                { album: "Teen Dream", artist: "Beach House", year: 2010, image: "assets/2010-teen-dream-beach-house.png", gradient: "linear-gradient(180deg, #A08D57 47.64%, #919190 98.3%)" },
                { album: "A Moon Shaped Pool", artist: "Radiohead", year: 2016, image: "assets/2016-a-moon-shaped-pool-radiohead.png", gradient: "linear-gradient(180deg, #302B31 48.53%, #726772 100%)" },
                { album: "Slowdive", artist: "Slowdive", year: 2017, image: "assets/2017-slowdive-slowdive.png", gradient: "linear-gradient(180deg, #070707 18.15%, #6B1313 100%)" }
              ],
              "Soul, R&B, & Hip-Hop": [
                { album: "Good Kid, M.A.A.D City", artist: "Kendrick Lamar", year: 2012, image: "assets/2012-good-kid-maad-city-kendrick-lamar.png", gradient: "linear-gradient(180deg, #51685A 33%, #305D74 100%)" },
                { album: "Doris", artist: "Earl Sweatshirt", year: 2013, image: "assets/2013-doris-earl-sweatshirt.png", gradient: "linear-gradient(180deg, #B0B051 28.05%, #4E4E4B 98.3%)" },
                { album: "If You're Reading This It's Too Late", artist: "Drake", year: 2015, image: "assets/2015-if-youre-reading-this-its-too-late.png", gradient: "linear-gradient(128deg, #6F7272 33.61%, #BCBCBC 83.41%)" },
                { album: "Die Lit", artist: "Playboi Carti", year: 2018, image: "assets/2018-die-lit-playboi-carti.png", gradient: "linear-gradient(180deg, #060606 18.15%, #1E1E1E 100%)" },
                { album: "When I Get Lost", artist: "Solange", year: 2019, image: "assets/2019-when-i-get-home-solange.png", gradient: "linear-gradient(113deg, #694E48 46.63%, #C8C2AF 94.27%)" }
              ]
            },

            "2020s": {
              "Rock": [
                { album: "Punisher", artist: "Pheobe Bridgers", year: 2020, image: "assets/2020-punisher-pheobe-bridgers.png", gradient: "linear-gradient(112deg, #59101E 40.03%, #0D2233 94.37%)" }
              ],
              "Alternative/Indie": [
                { album: "Cinema", artist: "The Marias", year: 2021, image: "assets/2021-cinema-the-marias.png", gradient: "linear-gradient(180deg, #8E2F1B 28%, #490F12 100%)" },
                { album: "Sunburn", artist: "Dominic Fike", year: 2023, image: "assets/2023-sunburn-dominic-fike.png", gradient: "linear-gradient(118deg, #A63C47 36.87%, #CD9953 86.91%)"},
                { album: "Two Star and the Dream Police", artist: "Mk.gee", year: 2024, image: "assets/2024-two-star-and-the-dream-police-mk.gee.png", gradient: "linear-gradient(180deg, #0B1116 51.54%, #1A3137 100%)" }
              ],
              "Soul, R&B, & Hip-Hop": [
                { album: "Jamie", artist: "Montell Fish", year: 2022, image: "assets/2022-jamie-montell-fish.png", gradient: "linear-gradient(112deg, #083D7A 40.03%, #3F97C9 94.37%)" },
                { album: "$ome $exy $ongs 4 U", artist: "Drake & PARTYNEXTDOOR", year: 2025, image: "assets/2025-sss4u-drake.png", gradient: " linear-gradient(180deg, #0A1C21 43.96%, #0A4546 100%)" }
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
 

    
