          var subcategory = {
			Arts: ["Anime Club", "Art Club", "Art History Club", "Calligraphy Club", "Film Club", "Origami Club", "Photography Club", "Sculpture Club"],
            History: ["Ancient History Club", "Archeology Club", "Asian History Club", "Civil War Club", "European History Club", "Genealogy Club", "Medieval History Club", "National History Club", "Political History Club", "Renaissance Club", "U.S. History Club", "World History Club", "World War 2 Club"],
			Language: ["Arabic Club", "Chinese Club", "Classical Languages Club", "German Club", "Italian Club", "Japanese Club", "Latin Club", "Spanish Club", "Spanish Honor Society"],
			Literature: ["Book Club", "Classics Club", "Creative Writing Club", "Foreign Book Club", "Journaling Club", "Scrabble Club", "Shakespear Club"],
			Mathematics: ["Economics Club", "Engineering Club", "Math Homework Club", "Math Honor Society", "Physics Club", "PI Club", "Quiz Bowl"],
			Science: ["Astronomy Club", "Chemistry Club", "Computer Programming Club", "Environmental Club", "Robotics", "Forensics Club", "Marine Biology Club", "Science Bowl", "Science Club", "Science National Honor Society", "Science Olympiad", "Vex Robotics"],
			Music: ["Acapella Club", "Dance Club", "DJ Club", "Drummers Club", "Ballroom Dance Club", "Band", "Choir", "Guitar Club", "Hip-Hop Club", "Music Honor Society", "Orchestra"],
			Drama: ["Directing Club", "Drama Club", "Comedy Improv Club", "Screenwriting Club", "Theater Club", "Thespian Society"],	
			Hobby: ["Adventure Club", "Anime Club", "Board Games Club", "Chess Club", "Cooking Club", "Democrats Club", "Fishing Club", "Geocaching Club", "Independence Club", "Ping Pong Club", "Republicans Club", "Scrapbooking Club", "Skiing Club", "Stock Market Club", "Video Games Club"],
			Fitness: ["Bodybuilding Club", "Circus Arts Club", "Martial Arts Club", "Pilates Club", "Running Club", "Self Defense Club", "Walking Club", "Weightlifting Club", "Yoga Club"]
        }

        function makeSubmenu(value) {
            if (value.length == 0) document.getElementById("clubSelect").innerHTML = "<option></option>";
            else {
                var subOptions = "";
                for (categoryId in subcategory[value]) {
                    subOptions += "<option>" + subcategory[value][categoryId] + "</option>";
                }
                document.getElementById("clubSelect").innerHTML = subOptions;
            }
        }

        function displaySelected() {
            var category = document.getElementById("category").value;
            var subcategory = document.getElementById("clubSelect").value;
			
			alert("Added: \n" + category + ", " + subcategory);
        }

        function resetSelection() {
            document.getElementById("category").selectedIndex = 0;
            document.getElementById("clubSelect").selectedIndex = 0;
        }