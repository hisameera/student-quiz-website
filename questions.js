// Quiz questions database organized by topics
const quizQuestions = {
    science: [
        {
            question: "What is the center of our solar system?",
            options: ["Earth", "The Sun", "The Moon", "Mars"],
            correct: 1
        },
        {
            question: "What gas do plants absorb from the air during photosynthesis?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            correct: 2
        },
        {
            question: "How many bones are there in an adult human body?",
            options: ["186", "206", "226", "246"],
            correct: 1
        },
        {
            question: "What is the fastest land animal?",
            options: ["Lion", "Horse", "Cheetah", "Kangaroo"],
            correct: 2
        },
        {
            question: "What is water made of?",
            options: ["1 Hydrogen, 1 Oxygen", "2 Hydrogen, 1 Oxygen", "1 Hydrogen, 2 Oxygen", "3 Hydrogen, 1 Oxygen"],
            correct: 1
        },
        {
            question: "Which planet is known as the 'Red Planet'?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1
        },
        {
            question: "What force keeps us on the ground?",
            options: ["Magnetism", "Electricity", "Gravity", "Friction"],
            correct: 2
        },
        {
            question: "How many chambers does a human heart have?",
            options: ["2", "3", "4", "5"],
            correct: 2
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Silver"],
            correct: 2
        },
        {
            question: "Which organ in the human body produces insulin?",
            options: ["Liver", "Kidney", "Pancreas", "Heart"],
            correct: 2
        },
        {
            question: "What type of animal is a dolphin?",
            options: ["Fish", "Mammal", "Reptile", "Amphibian"],
            correct: 1
        },
        {
            question: "How many legs does a spider have?",
            options: ["6", "8", "10", "12"],
            correct: 1
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Saturn", "Jupiter", "Neptune", "Earth"],
            correct: 1
        },
        {
            question: "What do we call animals that eat only plants?",
            options: ["Carnivores", "Omnivores", "Herbivores", "Predators"],
            correct: 2
        },
        {
            question: "At what temperature does water freeze?",
            options: ["0°C", "32°C", "100°C", "-10°C"],
            correct: 0
        },
        {
            question: "Which blood type is known as the universal donor?",
            options: ["A", "B", "AB", "O"],
            correct: 3
        },
        {
            question: "What is the smallest unit of matter?",
            options: ["Molecule", "Atom", "Cell", "Electron"],
            correct: 1
        },
        {
            question: "How long does it take for light from the Sun to reach Earth?",
            options: ["8 minutes", "1 hour", "1 day", "1 week"],
            correct: 0
        },
        {
            question: "What is the most abundant gas in Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
            correct: 2
        },
        {
            question: "Which part of the plant conducts photosynthesis?",
            options: ["Roots", "Stem", "Leaves", "Flowers"],
            correct: 2
        },
        // Additional Science Questions (20 more)
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Au", "Ag", "Gd"],
            correct: 1
        },
        {
            question: "How many teeth does an adult human typically have?",
            options: ["28", "30", "32", "34"],
            correct: 2
        },
        {
            question: "What is the fastest flying bird?",
            options: ["Eagle", "Falcon", "Peregrine Falcon", "Hawk"],
            correct: 2
        },
        {
            question: "Which planet is closest to the Sun?",
            options: ["Venus", "Earth", "Mercury", "Mars"],
            correct: 2
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Brain", "Liver", "Lungs", "Skin"],
            correct: 3
        },
        {
            question: "How many Earth days does it take for the Moon to orbit Earth?",
            options: ["27", "28", "29", "30"],
            correct: 0
        },
        {
            question: "What gas makes up about 78% of Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correct: 2
        },
        {
            question: "Which scientist developed the theory of evolution?",
            options: ["Albert Einstein", "Isaac Newton", "Charles Darwin", "Galileo"],
            correct: 2
        },
        {
            question: "What is the main component of the Sun?",
            options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
            correct: 1
        },
        {
            question: "How many wings does a bee have?",
            options: ["2", "4", "6", "8"],
            correct: 1
        },
        {
            question: "What is the study of earthquakes called?",
            options: ["Geology", "Seismology", "Meteorology", "Biology"],
            correct: 1
        },
        {
            question: "Which vitamin is produced when skin is exposed to sunlight?",
            options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            correct: 3
        },
        {
            question: "What is the smallest bone in the human body?",
            options: ["Stapes (in the ear)", "Toe bone", "Finger bone", "Rib"],
            correct: 0
        },
        {
            question: "How many hearts does an octopus have?",
            options: ["1", "2", "3", "4"],
            correct: 2
        },
        {
            question: "What is the chemical formula for salt?",
            options: ["NaCl", "H2O", "CO2", "O2"],
            correct: 0
        },
        {
            question: "Which planet has the most moons?",
            options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
            correct: 1
        },
        {
            question: "What is the speed of light in vacuum?",
            options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
            correct: 0
        },
        {
            question: "Which animal can change its color to match its surroundings?",
            options: ["Elephant", "Chameleon", "Tiger", "Penguin"],
            correct: 1
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"],
            correct: 1
        },
        {
            question: "How many bones are babies born with approximately?",
            options: ["206", "270", "300", "350"],
            correct: 2
        },
        // Additional Science Questions (60 more to reach 100 total)
        {
            question: "What is the process by which plants make their own food?",
            options: ["Respiration", "Photosynthesis", "Digestion", "Absorption"],
            correct: 1
        },
        {
            question: "What is the unit of measurement for electric current?",
            options: ["Volt", "Watt", "Ampere", "Ohm"],
            correct: 2
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            options: ["Osmium", "Oxygen", "Ozone", "Oxidane"],
            correct: 1
        },
        {
            question: "What is the Earth's natural satellite called?",
            options: ["Sun", "Moon", "Mars", "Venus"],
            correct: 1
        },
        {
            question: "How many chambers does a fish heart have?",
            options: ["1", "2", "3", "4"],
            correct: 1
        },
        {
            question: "What is the study of stars and planets called?",
            options: ["Geology", "Biology", "Astronomy", "Chemistry"],
            correct: 2
        },
        {
            question: "Which part of the cell controls its activities?",
            options: ["Cytoplasm", "Nucleus", "Cell wall", "Cell membrane"],
            correct: 1
        },
        {
            question: "What gas do humans breathe out?",
            options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
            correct: 2
        },
        {
            question: "How many bones are in a giraffe's neck?",
            options: ["5", "7", "10", "15"],
            correct: 1
        },
        {
            question: "What is the smallest particle of an element?",
            options: ["Molecule", "Atom", "Electron", "Proton"],
            correct: 1
        },
        {
            question: "Which planet is known as the 'Blue Planet'?",
            options: ["Neptune", "Uranus", "Earth", "Venus"],
            correct: 2
        },
        {
            question: "What is the process of water changing from liquid to gas?",
            options: ["Condensation", "Freezing", "Evaporation", "Melting"],
            correct: 2
        },
        {
            question: "How many pairs of chromosomes do humans have?",
            options: ["22", "23", "24", "25"],
            correct: 1
        },
        {
            question: "What is the largest internal organ in the human body?",
            options: ["Brain", "Liver", "Lungs", "Heart"],
            correct: 1
        },
        {
            question: "Which scientist is famous for the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
            correct: 1
        },
        {
            question: "What is the chemical formula for carbon dioxide?",
            options: ["CO", "CO2", "C2O", "C2O2"],
            correct: 1
        },
        {
            question: "How many Earth years does it take Neptune to orbit the Sun?",
            options: ["84 years", "165 years", "248 years", "11 years"],
            correct: 1
        },
        {
            question: "What is the study of living things called?",
            options: ["Physics", "Chemistry", "Biology", "Geology"],
            correct: 2
        },
        {
            question: "Which blood cells help fight infection?",
            options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
            correct: 1
        },
        {
            question: "What is the chemical symbol for sodium?",
            options: ["S", "So", "Na", "Sn"],
            correct: 2
        },
        {
            question: "How many phases of the moon are there?",
            options: ["6", "7", "8", "9"],
            correct: 2
        },
        {
            question: "What is the process by which rocks are broken down?",
            options: ["Erosion", "Weathering", "Sedimentation", "Crystallization"],
            correct: 1
        },
        {
            question: "Which organ removes waste from the blood?",
            options: ["Heart", "Liver", "Kidney", "Lung"],
            correct: 2
        },
        {
            question: "What is the atomic number of carbon?",
            options: ["4", "6", "8", "12"],
            correct: 1
        },
        {
            question: "How many moons does Mars have?",
            options: ["1", "2", "3", "4"],
            correct: 1
        },
        {
            question: "What is the hardest mineral on Earth?",
            options: ["Quartz", "Topaz", "Diamond", "Corundum"],
            correct: 2
        },
        {
            question: "Which part of the brain controls balance?",
            options: ["Cerebrum", "Cerebellum", "Brain stem", "Medulla"],
            correct: 1
        },
        {
            question: "What is the chemical formula for methane?",
            options: ["CH3", "CH4", "C2H4", "C2H6"],
            correct: 1
        },
        {
            question: "How long does it take for the Moon to orbit Earth?",
            options: ["24 hours", "7 days", "28 days", "365 days"],
            correct: 2
        },
        {
            question: "What is the study of earthquakes called?",
            options: ["Volcanology", "Seismology", "Meteorology", "Oceanography"],
            correct: 1
        },
        {
            question: "Which vitamin helps blood clot?",
            options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
            correct: 3
        },
        {
            question: "What is the chemical symbol for calcium?",
            options: ["C", "Ca", "Cl", "Cr"],
            correct: 1
        },
        {
            question: "How many teeth does a typical adult shark have?",
            options: ["About 50", "About 300", "About 3000", "About 30000"],
            correct: 2
        },
        {
            question: "What is the process of cell division called?",
            options: ["Mitosis", "Meiosis", "Both mitosis and meiosis", "Photosynthesis"],
            correct: 2
        },
        {
            question: "Which planet has the shortest day?",
            options: ["Mercury", "Venus", "Earth", "Jupiter"],
            correct: 3
        },
        {
            question: "What is the pH of pure water?",
            options: ["6", "7", "8", "9"],
            correct: 1
        },
        {
            question: "How many ribs does a human have on each side?",
            options: ["10", "11", "12", "13"],
            correct: 2
        },
        {
            question: "What is the study of weather called?",
            options: ["Geology", "Meteorology", "Oceanography", "Astronomy"],
            correct: 1
        },
        {
            question: "Which element is essential for thyroid function?",
            options: ["Iron", "Calcium", "Iodine", "Zinc"],
            correct: 2
        },
        {
            question: "What is the chemical symbol for helium?",
            options: ["H", "He", "Hl", "Hm"],
            correct: 1
        },
        {
            question: "How many chambers does a bird's heart have?",
            options: ["2", "3", "4", "5"],
            correct: 2
        },
        {
            question: "What is the process of water changing from gas to liquid?",
            options: ["Evaporation", "Condensation", "Sublimation", "Precipitation"],
            correct: 1
        },
        {
            question: "Which planet has the most eccentric orbit?",
            options: ["Mercury", "Venus", "Mars", "Pluto"],
            correct: 3
        },
        {
            question: "What is the study of fossils called?",
            options: ["Archaeology", "Paleontology", "Geology", "Anthropology"],
            correct: 1
        },
        {
            question: "How many chromosomes does a human sperm cell have?",
            options: ["23", "46", "92", "12"],
            correct: 0
        },
        {
            question: "What is the chemical formula for ammonia?",
            options: ["NH3", "NH4", "N2H4", "N2H6"],
            correct: 0
        },
        {
            question: "Which organ produces red blood cells?",
            options: ["Heart", "Liver", "Kidney", "Bone marrow"],
            correct: 3
        },
        {
            question: "What is the hottest layer of the Earth?",
            options: ["Crust", "Mantle", "Outer core", "Inner core"],
            correct: 3
        },
        {
            question: "How many valves does the human heart have?",
            options: ["2", "3", "4", "5"],
            correct: 2
        },
        {
            question: "What is the chemical symbol for lead?",
            options: ["L", "Le", "Pb", "Ld"],
            correct: 2
        },
        {
            question: "Which gas is most abundant in the Sun?",
            options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Helium"],
            correct: 2
        },
        {
            question: "What is the study of fungi called?",
            options: ["Botany", "Zoology", "Mycology", "Ecology"],
            correct: 2
        },
        {
            question: "How many amino acids are essential for humans?",
            options: ["8", "9", "10", "20"],
            correct: 1
        },
        {
            question: "What is the chemical formula for glucose?",
            options: ["C6H12O6", "C12H22O11", "C2H6O", "C3H8O3"],
            correct: 0
        },
        {
            question: "Which planet rotates on its side?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            correct: 2
        },
        {
            question: "What is the smallest unit of life?",
            options: ["Atom", "Molecule", "Cell", "Organ"],
            correct: 2
        },
        {
            question: "How many bones are in a human foot?",
            options: ["24", "26", "28", "30"],
            correct: 1
        },
        {
            question: "What is the chemical symbol for silver?",
            options: ["S", "Si", "Ag", "Al"],
            correct: 2
        },
        {
            question: "Which part of the eye controls the amount of light entering?",
            options: ["Cornea", "Lens", "Pupil", "Retina"],
            correct: 2
        },
        {
            question: "What is the study of heredity called?",
            options: ["Genetics", "Evolution", "Ecology", "Taxonomy"],
            correct: 0
        }
    ],
    math: [
        {
            question: "What is 15 × 8?",
            options: ["110", "120", "130", "140"],
            correct: 1
        },
        {
            question: "What is the value of π (pi) rounded to two decimal places?",
            options: ["3.12", "3.14", "3.16", "3.18"],
            correct: 1
        },
        {
            question: "If a triangle has angles of 60°, 60°, and 60°, what type of triangle is it?",
            options: ["Right triangle", "Scalene triangle", "Equilateral triangle", "Obtuse triangle"],
            correct: 2
        },
        {
            question: "What is 144 ÷ 12?",
            options: ["11", "12", "13", "14"],
            correct: 1
        },
        {
            question: "What is the square root of 64?",
            options: ["6", "7", "8", "9"],
            correct: 2
        },
        {
            question: "How many sides does a hexagon have?",
            options: ["5", "6", "7", "8"],
            correct: 1
        },
        {
            question: "What is 25% of 80?",
            options: ["15", "20", "25", "30"],
            correct: 1
        },
        {
            question: "If you have 3 dozen eggs, how many eggs do you have?",
            options: ["24", "30", "36", "42"],
            correct: 2
        },
        {
            question: "What is the area of a square with side length 5 cm?",
            options: ["20 cm²", "25 cm²", "30 cm²", "35 cm²"],
            correct: 1
        },
        {
            question: "What is 7 × 9?",
            options: ["56", "63", "72", "81"],
            correct: 1
        },
        {
            question: "How many minutes are in 2.5 hours?",
            options: ["120", "130", "140", "150"],
            correct: 3
        },
        {
            question: "What is the perimeter of a rectangle with length 8 cm and width 5 cm?",
            options: ["13 cm", "26 cm", "40 cm", "65 cm"],
            correct: 1
        },
        {
            question: "If you buy 4 items for $3 each, how much do you spend?",
            options: ["$10", "$11", "$12", "$13"],
            correct: 2
        },
        {
            question: "What is 100 - 37?",
            options: ["63", "67", "73", "77"],
            correct: 0
        },
        {
            question: "How many degrees are in a circle?",
            options: ["180°", "270°", "360°", "450°"],
            correct: 2
        },
        {
            question: "What is 6²?",
            options: ["12", "24", "36", "48"],
            correct: 2
        },
        {
            question: "If a pizza is cut into 8 equal slices and you eat 3 slices, what fraction did you eat?",
            options: ["3/5", "3/8", "5/8", "3/3"],
            correct: 1
        },
        {
            question: "What is the next number in the sequence: 2, 4, 8, 16, ?",
            options: ["24", "28", "32", "36"],
            correct: 2
        },
        {
            question: "How many cm are in 1 meter?",
            options: ["10", "100", "1000", "10000"],
            correct: 1
        },
        {
            question: "What is 0.5 as a percentage?",
            options: ["5%", "50%", "0.5%", "500%"],
            correct: 1
        },
        // Additional Math Questions (25 more)
        {
            question: "What is 12 × 11?",
            options: ["120", "132", "144", "156"],
            correct: 1
        },
        {
            question: "What is the square root of 81?",
            options: ["7", "8", "9", "10"],
            correct: 2
        },
        {
            question: "If a car travels 60 km in 1 hour, how far does it travel in 3 hours?",
            options: ["120 km", "150 km", "180 km", "200 km"],
            correct: 2
        },
        {
            question: "What is 3/4 as a decimal?",
            options: ["0.34", "0.75", "0.43", "0.57"],
            correct: 1
        },
        {
            question: "How many sides does an octagon have?",
            options: ["6", "7", "8", "9"],
            correct: 2
        },
        {
            question: "What is 20% of 150?",
            options: ["20", "25", "30", "35"],
            correct: 2
        },
        {
            question: "If you start with 100 and subtract 25, then multiply by 2, what's the result?",
            options: ["150", "125", "100", "175"],
            correct: 0
        },
        {
            question: "What is the least common multiple of 4 and 6?",
            options: ["10", "12", "16", "24"],
            correct: 1
        },
        {
            question: "How many faces does a cube have?",
            options: ["4", "5", "6", "8"],
            correct: 2
        },
        {
            question: "What is 9 × 7?",
            options: ["56", "63", "72", "81"],
            correct: 1
        },
        {
            question: "If a book costs $8 and you pay with a $20 bill, how much change do you get?",
            options: ["$10", "$11", "$12", "$13"],
            correct: 2
        },
        {
            question: "What is the greatest common factor of 12 and 18?",
            options: ["3", "4", "6", "9"],
            correct: 2
        },
        {
            question: "How many vertices does a triangular pyramid have?",
            options: ["3", "4", "5", "6"],
            correct: 1
        },
        {
            question: "What is 2/3 + 1/3?",
            options: ["2/6", "3/6", "1", "4/3"],
            correct: 2
        },
        {
            question: "If a pattern goes 5, 10, 15, 20, what comes next?",
            options: ["23", "25", "27", "30"],
            correct: 1
        },
        {
            question: "What is the area of a triangle with base 6 cm and height 4 cm?",
            options: ["10 cm²", "12 cm²", "20 cm²", "24 cm²"],
            correct: 1
        },
        {
            question: "How many millimeters are in 5 centimeters?",
            options: ["5", "50", "500", "5000"],
            correct: 1
        },
        {
            question: "What is 8³ (8 cubed)?",
            options: ["24", "64", "256", "512"],
            correct: 3
        },
        {
            question: "If you flip a fair coin, what's the probability of getting heads?",
            options: ["1/4", "1/3", "1/2", "2/3"],
            correct: 2
        },
        {
            question: "What is the sum of angles in a triangle?",
            options: ["90°", "180°", "270°", "360°"],
            correct: 1
        },
        {
            question: "If 5x = 35, what is x?",
            options: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            question: "What is 1/4 of 100?",
            options: ["20", "25", "30", "40"],
            correct: 1
        },
        {
            question: "How many edges does a rectangular prism have?",
            options: ["8", "10", "12", "14"],
            correct: 2
        },
        {
            question: "What is the median of: 3, 7, 2, 9, 5?",
            options: ["3", "5", "7", "9"],
            correct: 1
        },
        {
            question: "If you double 15 and then add 10, what's the result?",
            options: ["35", "40", "45", "50"],
            correct: 1
        },
        // Additional Math Questions (55 more to reach 100 total)
        {
            question: "What is 16 × 12?",
            options: ["182", "192", "202", "212"],
            correct: 1
        },
        {
            question: "What is the square root of 144?",
            options: ["11", "12", "13", "14"],
            correct: 1
        },
        {
            question: "If a rectangle has length 12 cm and width 8 cm, what is its area?",
            options: ["86 cm²", "96 cm²", "106 cm²", "116 cm²"],
            correct: 1
        },
        {
            question: "What is 7/8 as a decimal?",
            options: ["0.775", "0.825", "0.875", "0.925"],
            correct: 2
        },
        {
            question: "How many sides does a pentagon have?",
            options: ["4", "5", "6", "7"],
            correct: 1
        },
        {
            question: "What is 40% of 250?",
            options: ["90", "100", "110", "120"],
            correct: 1
        },
        {
            question: "If you start with 200, subtract 75, then divide by 5, what's the result?",
            options: ["20", "25", "30", "35"],
            correct: 1
        },
        {
            question: "What is the least common multiple of 6 and 8?",
            options: ["24", "28", "32", "48"],
            correct: 0
        },
        {
            question: "How many faces does a triangular prism have?",
            options: ["3", "4", "5", "6"],
            correct: 2
        },
        {
            question: "What is 11 × 9?",
            options: ["89", "99", "109", "119"],
            correct: 1
        },
        {
            question: "If a shirt costs $15 and you get a 20% discount, how much do you pay?",
            options: ["$10", "$11", "$12", "$13"],
            correct: 2
        },
        {
            question: "What is the greatest common factor of 24 and 36?",
            options: ["6", "8", "12", "18"],
            correct: 2
        },
        {
            question: "How many edges does a square pyramid have?",
            options: ["6", "7", "8", "9"],
            correct: 2
        },
        {
            question: "What is 5/6 + 1/6?",
            options: ["6/12", "6/6", "1", "7/6"],
            correct: 2
        },
        {
            question: "If a pattern goes 3, 6, 12, 24, what comes next?",
            options: ["36", "40", "48", "50"],
            correct: 2
        },
        {
            question: "What is the area of a circle with radius 5 cm? (Use π = 3.14)",
            options: ["78.5 cm²", "31.4 cm²", "15.7 cm²", "62.8 cm²"],
            correct: 0
        },
        {
            question: "How many centimeters are in 2.5 meters?",
            options: ["25", "250", "2500", "25000"],
            correct: 1
        },
        {
            question: "What is 9⁴ (9 to the power of 4)?",
            options: ["6561", "729", "81", "36"],
            correct: 0
        },
        {
            question: "If you roll two dice, what's the probability of getting a sum of 7?",
            options: ["1/6", "1/8", "1/12", "5/36"],
            correct: 0
        },
        {
            question: "What is the sum of interior angles in a pentagon?",
            options: ["360°", "450°", "540°", "630°"],
            correct: 2
        },
        {
            question: "If 3x + 7 = 22, what is x?",
            options: ["3", "4", "5", "6"],
            correct: 2
        },
        {
            question: "What is 3/8 of 64?",
            options: ["18", "21", "24", "27"],
            correct: 2
        },
        {
            question: "How many vertices does a hexagonal prism have?",
            options: ["10", "12", "14", "16"],
            correct: 1
        },
        {
            question: "What is the range of: 15, 23, 8, 31, 12?",
            options: ["19", "21", "23", "25"],
            correct: 2
        },
        {
            question: "If you triple 18 and then subtract 20, what's the result?",
            options: ["32", "34", "36", "38"],
            correct: 1
        },
        {
            question: "What is 0.25 as a fraction in lowest terms?",
            options: ["1/2", "1/3", "1/4", "1/5"],
            correct: 2
        },
        {
            question: "How many diagonals does a hexagon have?",
            options: ["6", "7", "8", "9"],
            correct: 3
        },
        {
            question: "What is 15% of 320?",
            options: ["42", "46", "48", "52"],
            correct: 2
        },
        {
            question: "If a train travels 180 km in 2 hours, what is its speed?",
            options: ["80 km/h", "85 km/h", "90 km/h", "95 km/h"],
            correct: 2
        },
        {
            question: "What is the volume of a cube with side length 4 cm?",
            options: ["16 cm³", "32 cm³", "48 cm³", "64 cm³"],
            correct: 3
        },
        {
            question: "How many grams are in 2.3 kilograms?",
            options: ["230", "2300", "23000", "0.23"],
            correct: 1
        },
        {
            question: "What is 7² - 3²?",
            options: ["38", "40", "42", "44"],
            correct: 1
        },
        {
            question: "If you have a 30-60-90 triangle, what type of triangle is it?",
            options: ["Equilateral", "Isosceles", "Scalene", "Right"],
            correct: 3
        },
        {
            question: "What is the circumference of a circle with diameter 14 cm? (Use π = 22/7)",
            options: ["42 cm", "44 cm", "46 cm", "48 cm"],
            correct: 1
        },
        {
            question: "If 4y - 3 = 17, what is y?",
            options: ["4", "5", "6", "7"],
            correct: 1
        },
        {
            question: "What is 5/12 + 7/12?",
            options: ["12/24", "12/12", "1", "Both 12/12 and 1"],
            correct: 3
        },
        {
            question: "How many faces does an octahedron have?",
            options: ["6", "7", "8", "10"],
            correct: 2
        },
        {
            question: "What is the mode of: 7, 3, 7, 9, 3, 7, 5?",
            options: ["3", "5", "7", "9"],
            correct: 2
        },
        {
            question: "If you quadruple 12 and then divide by 6, what's the result?",
            options: ["6", "7", "8", "9"],
            correct: 2
        },
        {
            question: "What is 0.6 as a percentage?",
            options: ["6%", "60%", "0.6%", "600%"],
            correct: 1
        },
        {
            question: "How many right angles are in a square?",
            options: ["2", "3", "4", "8"],
            correct: 2
        },
        {
            question: "What is 72 ÷ 8?",
            options: ["8", "9", "10", "11"],
            correct: 1
        },
        {
            question: "If a circle has radius 7 cm, what is its diameter?",
            options: ["14 cm", "21 cm", "28 cm", "35 cm"],
            correct: 0
        },
        {
            question: "What is the next prime number after 17?",
            options: ["18", "19", "20", "21"],
            correct: 1
        },
        {
            question: "How many milliliters are in 1.5 liters?",
            options: ["15", "150", "1500", "15000"],
            correct: 2
        },
        {
            question: "What is 4! (4 factorial)?",
            options: ["16", "20", "24", "32"],
            correct: 2
        },
        {
            question: "If you decrease 80 by 25%, what do you get?",
            options: ["55", "60", "65", "70"],
            correct: 1
        },
        {
            question: "What is the slope of a line that goes up 3 units for every 2 units right?",
            options: ["2/3", "3/2", "5", "6"],
            correct: 1
        },
        {
            question: "How many degrees are in each interior angle of a regular hexagon?",
            options: ["108°", "120°", "135°", "150°"],
            correct: 1
        },
        {
            question: "What is 13 × 13?",
            options: ["159", "169", "179", "189"],
            correct: 1
        },
        {
            question: "If a recipe calls for 2.5 cups of flour and you want to make half the recipe, how much flour do you need?",
            options: ["1 cup", "1.25 cups", "1.5 cups", "2 cups"],
            correct: 1
        },
        {
            question: "What is the surface area of a cube with side length 3 cm?",
            options: ["18 cm²", "27 cm²", "54 cm²", "81 cm²"],
            correct: 2
        },
        {
            question: "How many seconds are in 5 minutes?",
            options: ["250", "300", "350", "400"],
            correct: 1
        },
        {
            question: "What is 10² + 5²?",
            options: ["105", "115", "125", "135"],
            correct: 2
        },
        {
            question: "If you increase 40 by 150%, what do you get?",
            options: ["90", "100", "110", "120"],
            correct: 1
        }
    ],
    history: [
        {
            question: "In which year did World War II end?",
            options: ["1944", "1945", "1946", "1947"],
            correct: 1
        },
        {
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
            correct: 2
        },
        {
            question: "Which ancient wonder of the world was located in Egypt?",
            options: ["Hanging Gardens", "Colossus of Rhodes", "Great Pyramid of Giza", "Lighthouse of Alexandria"],
            correct: 2
        },
        {
            question: "In which year did the Titanic sink?",
            options: ["1910", "1911", "1912", "1913"],
            correct: 2
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Michelangelo", "Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
            correct: 1
        },
        {
            question: "Which empire was ruled by Julius Caesar?",
            options: ["Greek Empire", "Roman Empire", "Egyptian Empire", "Persian Empire"],
            correct: 1
        },
        {
            question: "In which year did humans first land on the Moon?",
            options: ["1967", "1968", "1969", "1970"],
            correct: 2
        },
        {
            question: "Who invented the telephone?",
            options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Benjamin Franklin"],
            correct: 1
        },
        {
            question: "Which wall was built to separate East and West Berlin?",
            options: ["Great Wall", "Berlin Wall", "Hadrian's Wall", "Wall of China"],
            correct: 1
        },
        {
            question: "Who was known as the 'Iron Lady'?",
            options: ["Queen Elizabeth II", "Margaret Thatcher", "Princess Diana", "Mother Teresa"],
            correct: 1
        },
        {
            question: "In which country did the Renaissance begin?",
            options: ["France", "Germany", "Italy", "Spain"],
            correct: 2
        },
        {
            question: "Who was the ancient Egyptian queen known for her beauty?",
            options: ["Nefertiti", "Hatshepsut", "Cleopatra", "Ankhesenamun"],
            correct: 2
        },
        {
            question: "Which ship did Christopher Columbus use for his first voyage to America?",
            options: ["Santa Maria", "Mayflower", "Titanic", "Queen Mary"],
            correct: 0
        },
        {
            question: "In which year did the Berlin Wall fall?",
            options: ["1987", "1988", "1989", "1990"],
            correct: 2
        },
        {
            question: "Who wrote the Declaration of Independence?",
            options: ["George Washington", "Benjamin Franklin", "John Adams", "Thomas Jefferson"],
            correct: 3
        },
        {
            question: "Which volcano destroyed the city of Pompeii?",
            options: ["Mount Etna", "Mount Vesuvius", "Mount Stromboli", "Mount Olympus"],
            correct: 1
        },
        {
            question: "In which war did the Battle of Gettysburg take place?",
            options: ["World War I", "American Civil War", "Revolutionary War", "War of 1812"],
            correct: 1
        },
        {
            question: "Who was the first person to circumnavigate the globe?",
            options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "James Cook"],
            correct: 2
        },
        {
            question: "Which ancient civilization built Machu Picchu?",
            options: ["Aztecs", "Mayans", "Incas", "Olmecs"],
            correct: 2
        },
        {
            question: "In which year did India gain independence?",
            options: ["1945", "1946", "1947", "1948"],
            correct: 2
        },
        // Additional History Questions (80 more to reach 100 total)
        {
            question: "Who was the first emperor of Rome?",
            options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
            correct: 1
        },
        {
            question: "In which year did the American Civil War begin?",
            options: ["1860", "1861", "1862", "1863"],
            correct: 1
        },
        {
            question: "Which dynasty built the Forbidden City in China?",
            options: ["Tang", "Song", "Ming", "Qing"],
            correct: 2
        },
        {
            question: "Who was the British Prime Minister during most of World War II?",
            options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Anthony Eden"],
            correct: 1
        },
        {
            question: "In which year did the French Revolution begin?",
            options: ["1789", "1790", "1791", "1792"],
            correct: 0
        },
        {
            question: "Which ancient Greek city-state was known for its military prowess?",
            options: ["Athens", "Sparta", "Corinth", "Thebes"],
            correct: 1
        },
        {
            question: "Who wrote the Communist Manifesto?",
            options: ["Vladimir Lenin", "Karl Marx", "Friedrich Engels", "Both Karl Marx and Friedrich Engels"],
            correct: 3
        },
        {
            question: "In which year did World War I begin?",
            options: ["1912", "1913", "1914", "1915"],
            correct: 2
        },
        {
            question: "Which empire did Genghis Khan found?",
            options: ["Ottoman Empire", "Mongol Empire", "Persian Empire", "Byzantine Empire"],
            correct: 1
        },
        {
            question: "Who was the first person to fly solo across the Atlantic Ocean?",
            options: ["Amelia Earhart", "Charles Lindbergh", "Orville Wright", "Howard Hughes"],
            correct: 1
        },
        {
            question: "In which city was President John F. Kennedy assassinated?",
            options: ["New York", "Washington D.C.", "Dallas", "Los Angeles"],
            correct: 2
        },
        {
            question: "Which ancient wonder was located in Alexandria, Egypt?",
            options: ["Great Pyramid", "Lighthouse of Alexandria", "Hanging Gardens", "Colossus"],
            correct: 1
        },
        {
            question: "Who was the last Tsar of Russia?",
            options: ["Alexander III", "Nicholas II", "Alexander II", "Peter the Great"],
            correct: 1
        },
        {
            question: "In which year did the Stock Market Crash occur, leading to the Great Depression?",
            options: ["1927", "1928", "1929", "1930"],
            correct: 2
        },
        {
            question: "Which ancient civilization invented the wheel?",
            options: ["Egyptians", "Greeks", "Sumerians", "Romans"],
            correct: 2
        },
        {
            question: "Who was the leader of Nazi Germany during World War II?",
            options: ["Heinrich Himmler", "Adolf Hitler", "Joseph Goebbels", "Hermann Göring"],
            correct: 1
        },
        {
            question: "In which year did the Mexican-American War end?",
            options: ["1846", "1847", "1848", "1849"],
            correct: 2
        },
        {
            question: "Which explorer is credited with discovering America in 1492?",
            options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Amerigo Vespucci"],
            correct: 1
        },
        {
            question: "Who was the Egyptian queen who aligned with Julius Caesar and Mark Antony?",
            options: ["Nefertiti", "Hatshepsut", "Cleopatra VII", "Ankhesenamun"],
            correct: 2
        },
        {
            question: "In which year did the Boston Tea Party occur?",
            options: ["1771", "1772", "1773", "1774"],
            correct: 2
        },
        {
            question: "Which emperor built the Colosseum in Rome?",
            options: ["Augustus", "Vespasian", "Trajan", "Hadrian"],
            correct: 1
        },
        {
            question: "Who was the first woman to win a Nobel Prize?",
            options: ["Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin", "Lise Meitner"],
            correct: 0
        },
        {
            question: "In which year did the Cold War officially end?",
            options: ["1989", "1990", "1991", "1992"],
            correct: 2
        },
        {
            question: "Which ancient trade route connected Europe and Asia?",
            options: ["Spice Route", "Silk Road", "Amber Road", "Salt Route"],
            correct: 1
        },
        {
            question: "Who was the first black President of South Africa?",
            options: ["Nelson Mandela", "Steve Biko", "Desmond Tutu", "Oliver Tambo"],
            correct: 0
        },
        {
            question: "In which year did the Wright brothers make their first flight?",
            options: ["1901", "1902", "1903", "1904"],
            correct: 2
        },
        {
            question: "Which medieval plague killed about one-third of Europe's population?",
            options: ["Yellow Fever", "Cholera", "Black Death", "Smallpox"],
            correct: 2
        },
        {
            question: "Who founded the Mongol Empire?",
            options: ["Kublai Khan", "Genghis Khan", "Ögedei Khan", "Möngke Khan"],
            correct: 1
        },
        {
            question: "In which year did the Vietnam War officially end?",
            options: ["1973", "1974", "1975", "1976"],
            correct: 2
        },
        {
            question: "Which ancient city was destroyed by Mount Vesuvius in 79 AD?",
            options: ["Herculaneum", "Pompeii", "Both Pompeii and Herculaneum", "Naples"],
            correct: 2
        },
        {
            question: "Who was the first Secretary-General of the United Nations?",
            options: ["Dag Hammarskjöld", "Trygve Lie", "U Thant", "Kurt Waldheim"],
            correct: 1
        },
        {
            question: "In which year was the United States Constitution signed?",
            options: ["1786", "1787", "1788", "1789"],
            correct: 1
        },
        {
            question: "Which empire was ruled by Charlemagne?",
            options: ["Roman Empire", "Byzantine Empire", "Carolingian Empire", "Holy Roman Empire"],
            correct: 2
        },
        {
            question: "Who invented the printing press?",
            options: ["Johannes Gutenberg", "William Caxton", "Aldus Manutius", "Nicolas Jenson"],
            correct: 0
        },
        {
            question: "In which year did Alaska become a U.S. state?",
            options: ["1957", "1958", "1959", "1960"],
            correct: 2
        },
        {
            question: "Which ancient civilization built Stonehenge?",
            options: ["Celts", "Druids", "Prehistoric Britons", "Romans"],
            correct: 2
        },
        {
            question: "Who was the first person to reach the South Pole?",
            options: ["Ernest Shackleton", "Roald Amundsen", "Robert Falcon Scott", "Richard Byrd"],
            correct: 1
        },
        {
            question: "In which year did the Chernobyl nuclear disaster occur?",
            options: ["1984", "1985", "1986", "1987"],
            correct: 2
        },
        {
            question: "Which war was fought between England and France from 1337 to 1453?",
            options: ["War of Roses", "Hundred Years' War", "Napoleonic Wars", "Seven Years' War"],
            correct: 1
        },
        {
            question: "Who was the founder of Buddhism?",
            options: ["Confucius", "Lao Tzu", "Siddhartha Gautama", "Mahavira"],
            correct: 2
        },
        {
            question: "In which year did the Spanish Armada attempt to invade England?",
            options: ["1586", "1587", "1588", "1589"],
            correct: 2
        },
        {
            question: "Which ancient wonder was in the city of Babylon?",
            options: ["Colossus of Rhodes", "Hanging Gardens", "Lighthouse of Alexandria", "Statue of Zeus"],
            correct: 1
        },
        {
            question: "Who was the first emperor of China?",
            options: ["Qin Shi Huang", "Emperor Wu", "Emperor Kangxi", "Emperor Ming"],
            correct: 0
        },
        {
            question: "In which year did Hawaii become a U.S. state?",
            options: ["1957", "1958", "1959", "1960"],
            correct: 2
        },
        {
            question: "Which civilization created the first known writing system?",
            options: ["Egyptians", "Sumerians", "Greeks", "Phoenicians"],
            correct: 1
        },
        {
            question: "Who led the Indian independence movement with non-violent resistance?",
            options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
            correct: 1
        },
        {
            question: "In which year did the Russian Revolution occur?",
            options: ["1916", "1917", "1918", "1919"],
            correct: 1
        },
        {
            question: "Which ancient Greek philosopher taught Alexander the Great?",
            options: ["Socrates", "Plato", "Aristotle", "Diogenes"],
            correct: 2
        },
        {
            question: "Who was the first human to journey into space?",
            options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
            correct: 2
        },
        {
            question: "In which year did the Protestant Reformation begin?",
            options: ["1515", "1516", "1517", "1518"],
            correct: 2
        },
        {
            question: "Which ancient empire was centered in modern-day Iran?",
            options: ["Babylonian Empire", "Assyrian Empire", "Persian Empire", "Median Empire"],
            correct: 2
        },
        {
            question: "Who wrote the 95 Theses that sparked the Protestant Reformation?",
            options: ["John Calvin", "Martin Luther", "John Wycliffe", "Jan Hus"],
            correct: 1
        },
        {
            question: "In which year did the Great Wall of China construction begin?",
            options: ["7th century BC", "6th century BC", "5th century BC", "4th century BC"],
            correct: 0
        },
        {
            question: "Which explorer led the first expedition to circumnavigate the globe?",
            options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "James Cook"],
            correct: 2
        },
        {
            question: "Who was the Roman general who crossed the Rubicon?",
            options: ["Pompey", "Julius Caesar", "Mark Antony", "Octavian"],
            correct: 1
        },
        {
            question: "In which year did women gain the right to vote in the United States?",
            options: ["1918", "1919", "1920", "1921"],
            correct: 2
        },
        {
            question: "Which ancient library was considered the greatest in the world?",
            options: ["Library of Alexandria", "Library of Pergamon", "Library of Nineveh", "Library of Athens"],
            correct: 0
        },
        {
            question: "Who was the Aztec emperor when the Spanish conquered Mexico?",
            options: ["Moctezuma I", "Moctezuma II", "Huitzilihuitl", "Axayacatl"],
            correct: 1
        },
        {
            question: "In which year did the Cuban Missile Crisis occur?",
            options: ["1960", "1961", "1962", "1963"],
            correct: 2
        },
        {
            question: "Which ancient Roman road connected Rome to southeast Italy?",
            options: ["Via Aurelia", "Via Flaminia", "Via Appia", "Via Salaria"],
            correct: 2
        },
        {
            question: "Who was the first person to climb Mount Everest?",
            options: ["George Mallory", "Edmund Hillary", "Tenzing Norgay", "Both Edmund Hillary and Tenzing Norgay"],
            correct: 3
        },
        {
            question: "In which year did the Korean War begin?",
            options: ["1949", "1950", "1951", "1952"],
            correct: 1
        },
        {
            question: "Which medieval institution preserved much classical knowledge in Europe?",
            options: ["Universities", "Monasteries", "Royal Courts", "Guilds"],
            correct: 1
        },
        {
            question: "Who was the first person to use the term 'Iron Curtain'?",
            options: ["Franklin D. Roosevelt", "Winston Churchill", "Harry Truman", "Joseph Stalin"],
            correct: 1
        },
        {
            question: "In which year did the Black Death reach Europe?",
            options: ["1346", "1347", "1348", "1349"],
            correct: 1
        },
        {
            question: "Which ancient civilization built the city of Petra?",
            options: ["Romans", "Greeks", "Nabataeans", "Persians"],
            correct: 2
        },
        {
            question: "Who was the first woman to fly solo across the Atlantic Ocean?",
            options: ["Amelia Earhart", "Bessie Coleman", "Jacqueline Cochran", "Harriet Quimby"],
            correct: 0
        },
        {
            question: "In which year did the Suez Canal open?",
            options: ["1867", "1868", "1869", "1870"],
            correct: 2
        },
        {
            question: "Which ancient philosopher founded the Academy in Athens?",
            options: ["Socrates", "Plato", "Aristotle", "Epicurus"],
            correct: 1
        },
        {
            question: "Who was the first African American to serve on the U.S. Supreme Court?",
            options: ["Thurgood Marshall", "Clarence Thomas", "Constance Baker Motley", "Robert Carter"],
            correct: 0
        },
        {
            question: "In which year did the Ottoman Empire fall?",
            options: ["1920", "1921", "1922", "1923"],
            correct: 2
        },
        {
            question: "Which ancient battle marked the end of the Persian Wars?",
            options: ["Battle of Marathon", "Battle of Thermopylae", "Battle of Salamis", "Battle of Plataea"],
            correct: 3
        },
        {
            question: "Who was the first person to break the sound barrier?",
            options: ["Chuck Yeager", "Scott Crossfield", "Neil Armstrong", "John Glenn"],
            correct: 0
        },
        {
            question: "In which year did the United Nations officially begin?",
            options: ["1944", "1945", "1946", "1947"],
            correct: 1
        },
        {
            question: "Which ancient city was the center of the Minoan civilization?",
            options: ["Athens", "Sparta", "Knossos", "Troy"],
            correct: 2
        },
        {
            question: "Who was the first person to reach the North Pole?",
            options: ["Robert Peary", "Frederick Cook", "Roald Amundsen", "Ernest Shackleton"],
            correct: 0
        },
        {
            question: "In which year did the Treaty of Versailles end World War I?",
            options: ["1918", "1919", "1920", "1921"],
            correct: 1
        },
        {
            question: "Which ancient wonder was located on the island of Rhodes?",
            options: ["Lighthouse of Alexandria", "Colossus of Rhodes", "Mausoleum of Halicarnassus", "Statue of Zeus"],
            correct: 1
        },
        {
            question: "Who founded the religion of Islam?",
            options: ["Jesus", "Muhammad", "Buddha", "Abraham"],
            correct: 1
        },
        {
            question: "In which year did the Space Shuttle Challenger disaster occur?",
            options: ["1984", "1985", "1986", "1987"],
            correct: 2
        }
    ],
    geography: [
        {
            question: "What is the largest continent?",
            options: ["Africa", "Asia", "North America", "Europe"],
            correct: 1
        },
        {
            question: "Which river is the longest in the world?",
            options: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
            correct: 1
        },
        {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Perth"],
            correct: 2
        },
        {
            question: "Which mountain range contains Mount Everest?",
            options: ["Rockies", "Andes", "Alps", "Himalayas"],
            correct: 3
        },
        {
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            correct: 1
        },
        {
            question: "Which ocean is the largest?",
            options: ["Atlantic", "Indian", "Pacific", "Arctic"],
            correct: 2
        },
        {
            question: "What is the capital of Canada?",
            options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
            correct: 3
        },
        {
            question: "Which desert is the largest in the world?",
            options: ["Sahara", "Gobi", "Antarctic", "Arabian"],
            correct: 2
        },
        {
            question: "In which country would you find Machu Picchu?",
            options: ["Brazil", "Chile", "Peru", "Argentina"],
            correct: 2
        },
        {
            question: "What is the deepest ocean trench?",
            options: ["Puerto Rico Trench", "Java Trench", "Mariana Trench", "Peru-Chile Trench"],
            correct: 2
        },
        {
            question: "Which country has the most time zones?",
            options: ["Russia", "USA", "China", "Canada"],
            correct: 0
        },
        {
            question: "What is the capital of Brazil?",
            options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
            correct: 2
        },
        {
            question: "Which strait separates Europe and Africa?",
            options: ["Strait of Gibraltar", "Bosphorus", "Strait of Hormuz", "Dover Strait"],
            correct: 0
        },
        {
            question: "What is the highest waterfall in the world?",
            options: ["Niagara Falls", "Angel Falls", "Victoria Falls", "Iguazu Falls"],
            correct: 1
        },
        {
            question: "Which lake is the largest by surface area?",
            options: ["Lake Superior", "Caspian Sea", "Lake Victoria", "Lake Huron"],
            correct: 1
        },
        {
            question: "In which hemisphere is Australia located?",
            options: ["Northern", "Southern", "Eastern", "Western"],
            correct: 1
        },
        {
            question: "What is the capital of Egypt?",
            options: ["Alexandria", "Cairo", "Luxor", "Aswan"],
            correct: 1
        },
        {
            question: "Which island is the largest in the world?",
            options: ["Madagascar", "Greenland", "New Guinea", "Borneo"],
            correct: 1
        },
        {
            question: "What is the driest place on Earth?",
            options: ["Sahara Desert", "Death Valley", "Atacama Desert", "Antarctic Desert"],
            correct: 2
        },
        {
            question: "Which country is both in Europe and Asia?",
            options: ["Russia", "Turkey", "Kazakhstan", "Georgia"],
            correct: 0
        },
        // Additional Geography Questions (80 more to reach 100 total)
        {
            question: "What is the capital of Norway?",
            options: ["Stockholm", "Oslo", "Copenhagen", "Helsinki"],
            correct: 1
        },
        {
            question: "Which African country has three capital cities?",
            options: ["Nigeria", "Kenya", "South Africa", "Ghana"],
            correct: 2
        },
        {
            question: "What is the longest mountain range in the world?",
            options: ["Himalayas", "Rocky Mountains", "Andes", "Alps"],
            correct: 2
        },
        {
            question: "Which country has the most natural lakes?",
            options: ["Finland", "Canada", "Russia", "Sweden"],
            correct: 1
        },
        {
            question: "What is the capital of New Zealand?",
            options: ["Auckland", "Christchurch", "Wellington", "Hamilton"],
            correct: 2
        },
        {
            question: "Which sea separates Korea and Japan?",
            options: ["Yellow Sea", "East China Sea", "Sea of Japan", "Philippine Sea"],
            correct: 2
        },
        {
            question: "What is the highest mountain in Africa?",
            options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Elgon", "Mount Meru"],
            correct: 1
        },
        {
            question: "Which country is completely surrounded by South Africa?",
            options: ["Swaziland", "Lesotho", "Botswana", "Namibia"],
            correct: 1
        },
        {
            question: "What is the capital of Thailand?",
            options: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya"],
            correct: 0
        },
        {
            question: "Which river flows through Paris?",
            options: ["Loire", "Rhine", "Seine", "Rhone"],
            correct: 2
        },
        {
            question: "What is the largest country in South America?",
            options: ["Argentina", "Brazil", "Colombia", "Peru"],
            correct: 1
        },
        {
            question: "Which strait connects the Atlantic and Pacific Oceans at the southern tip of South America?",
            options: ["Drake Passage", "Strait of Magellan", "Beagle Channel", "Strait of Gibraltar"],
            correct: 1
        },
        {
            question: "What is the capital of Morocco?",
            options: ["Casablanca", "Marrakech", "Rabat", "Fez"],
            correct: 2
        },
        {
            question: "Which European country has the most volcanoes?",
            options: ["Italy", "Iceland", "Greece", "Spain"],
            correct: 1
        },
        {
            question: "What is the smallest state in the United States by area?",
            options: ["Delaware", "Rhode Island", "Connecticut", "New Hampshire"],
            correct: 1
        },
        {
            question: "Which mountain range separates Europe from Asia?",
            options: ["Carpathians", "Urals", "Caucasus", "Alps"],
            correct: 1
        },
        {
            question: "What is the capital of Argentina?",
            options: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
            correct: 0
        },
        {
            question: "Which country has the longest coastline in the world?",
            options: ["Russia", "Canada", "Norway", "Australia"],
            correct: 1
        },
        {
            question: "What is the largest island in the Mediterranean Sea?",
            options: ["Sardinia", "Cyprus", "Sicily", "Corsica"],
            correct: 2
        },
        {
            question: "Which African river is the longest?",
            options: ["Congo River", "Niger River", "Zambezi River", "Nile River"],
            correct: 3
        },
        {
            question: "What is the capital of Chile?",
            options: ["Valparaíso", "Santiago", "Concepción", "La Serena"],
            correct: 1
        },
        {
            question: "Which country is known as the 'Land of Fire and Ice'?",
            options: ["Norway", "Iceland", "Finland", "Greenland"],
            correct: 1
        },
        {
            question: "What is the deepest lake in the world?",
            options: ["Lake Superior", "Lake Baikal", "Caspian Sea", "Lake Tanganyika"],
            correct: 1
        },
        {
            question: "Which city is located on two continents?",
            options: ["Cairo", "Istanbul", "Moscow", "Tehran"],
            correct: 1
        },
        {
            question: "What is the capital of Vietnam?",
            options: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Hue"],
            correct: 1
        },
        {
            question: "Which country has the most pyramids?",
            options: ["Egypt", "Sudan", "Mexico", "Peru"],
            correct: 1
        },
        {
            question: "What is the largest state in the United States by area?",
            options: ["Texas", "California", "Alaska", "Montana"],
            correct: 2
        },
        {
            question: "Which river forms part of the border between Mexico and the United States?",
            options: ["Colorado River", "Rio Grande", "Mississippi River", "Columbia River"],
            correct: 1
        },
        {
            question: "What is the capital of South Korea?",
            options: ["Busan", "Seoul", "Incheon", "Daegu"],
            correct: 1
        },
        {
            question: "Which country is home to Machu Picchu?",
            options: ["Bolivia", "Ecuador", "Peru", "Colombia"],
            correct: 2
        },
        {
            question: "What is the largest desert in Asia?",
            options: ["Thar Desert", "Karakum Desert", "Gobi Desert", "Taklamakan Desert"],
            correct: 2
        },
        {
            question: "Which European capital is known as the 'Pearl of the Danube'?",
            options: ["Vienna", "Budapest", "Prague", "Bratislava"],
            correct: 1
        },
        {
            question: "What is the capital of Kenya?",
            options: ["Mombasa", "Nairobi", "Kisumu", "Nakuru"],
            correct: 1
        },
        {
            question: "Which country has the most UNESCO World Heritage Sites?",
            options: ["China", "Italy", "Spain", "France"],
            correct: 1
        },
        {
            question: "What is the highest capital city in the world?",
            options: ["Quito", "La Paz", "Bogotá", "Addis Ababa"],
            correct: 1
        },
        {
            question: "Which sea is between Italy and the Balkans?",
            options: ["Tyrrhenian Sea", "Ionian Sea", "Adriatic Sea", "Aegean Sea"],
            correct: 2
        },
        {
            question: "What is the capital of Bangladesh?",
            options: ["Chittagong", "Dhaka", "Sylhet", "Khulna"],
            correct: 1
        },
        {
            question: "Which island nation is located southeast of India?",
            options: ["Maldives", "Sri Lanka", "Mauritius", "Seychelles"],
            correct: 1
        },
        {
            question: "What is the largest city in Africa by population?",
            options: ["Cairo", "Lagos", "Kinshasa", "Johannesburg"],
            correct: 1
        },
        {
            question: "Which country is known as the 'Roof of the World'?",
            options: ["Nepal", "Tibet", "Bhutan", "Afghanistan"],
            correct: 1
        },
        {
            question: "What is the capital of Finland?",
            options: ["Tampere", "Turku", "Helsinki", "Espoo"],
            correct: 2
        },
        {
            question: "Which river is the longest in Europe?",
            options: ["Danube", "Rhine", "Volga", "Dnieper"],
            correct: 2
        },
        {
            question: "What is the smallest country in Africa?",
            options: ["Gambia", "Djibouti", "Seychelles", "Sao Tome and Principe"],
            correct: 2
        },
        {
            question: "Which mountain range runs along the western coast of South America?",
            options: ["Sierra Madre", "Andes", "Appalachians", "Brazilian Highlands"],
            correct: 1
        },
        {
            question: "What is the capital of Poland?",
            options: ["Krakow", "Gdansk", "Warsaw", "Wroclaw"],
            correct: 2
        },
        {
            question: "Which country has the most time zones?",
            options: ["United States", "Russia", "China", "Canada"],
            correct: 1
        },
        {
            question: "What is the largest country in Africa by area?",
            options: ["Libya", "Chad", "Niger", "Algeria"],
            correct: 3
        },
        {
            question: "Which sea is the saltiest natural body of water?",
            options: ["Red Sea", "Dead Sea", "Great Salt Lake", "Salton Sea"],
            correct: 1
        },
        {
            question: "What is the capital of Switzerland?",
            options: ["Zurich", "Geneva", "Bern", "Basel"],
            correct: 2
        },
        {
            question: "Which country is shaped like a boot?",
            options: ["Greece", "Spain", "Italy", "Portugal"],
            correct: 2
        },
        {
            question: "What is the largest archipelago in the world?",
            options: ["Philippines", "Indonesia", "Japan", "Greece"],
            correct: 1
        },
        {
            question: "Which river flows through London?",
            options: ["Severn", "Thames", "Trent", "Mersey"],
            correct: 1
        },
        {
            question: "What is the capital of Pakistan?",
            options: ["Karachi", "Lahore", "Islamabad", "Faisalabad"],
            correct: 2
        },
        {
            question: "Which country is home to the ancient city of Petra?",
            options: ["Syria", "Jordan", "Lebanon", "Israel"],
            correct: 1
        },
        {
            question: "What is the highest mountain in North America?",
            options: ["Mount McKinley", "Mount Whitney", "Mount Elbert", "Mount Rainier"],
            correct: 0
        },
        {
            question: "Which continent has the most countries?",
            options: ["Asia", "Europe", "Africa", "South America"],
            correct: 2
        },
        {
            question: "What is the capital of Malaysia?",
            options: ["Kuala Lumpur", "Johor Bahru", "Penang", "Malacca"],
            correct: 0
        },
        {
            question: "Which country is closest to the North Pole?",
            options: ["Canada", "Russia", "Greenland", "Norway"],
            correct: 2
        },
        {
            question: "What is the largest lake in Africa?",
            options: ["Lake Tanganyika", "Lake Malawi", "Lake Victoria", "Lake Turkana"],
            correct: 2
        },
        {
            question: "Which country has the longest railway system?",
            options: ["China", "United States", "Russia", "India"],
            correct: 2
        },
        {
            question: "What is the capital of Indonesia?",
            options: ["Surabaya", "Bandung", "Jakarta", "Medan"],
            correct: 2
        },
        {
            question: "Which European country is known for its fjords?",
            options: ["Sweden", "Denmark", "Norway", "Finland"],
            correct: 2
        },
        {
            question: "What is the largest island in the world?",
            options: ["Madagascar", "Borneo", "Greenland", "New Guinea"],
            correct: 2
        },
        {
            question: "Which country has the most active volcanoes?",
            options: ["Japan", "Indonesia", "Philippines", "United States"],
            correct: 1
        },
        {
            question: "What is the capital of Nigeria?",
            options: ["Lagos", "Kano", "Abuja", "Port Harcourt"],
            correct: 2
        },
        {
            question: "Which mountain range forms the border between France and Spain?",
            options: ["Alps", "Pyrenees", "Carpathians", "Apennines"],
            correct: 1
        },
        {
            question: "What is the driest continent?",
            options: ["Africa", "Australia", "Antarctica", "Asia"],
            correct: 2
        },
        {
            question: "Which country is home to the world's largest coral reef system?",
            options: ["Philippines", "Indonesia", "Australia", "Maldives"],
            correct: 2
        },
        {
            question: "What is the capital of Colombia?",
            options: ["Medellín", "Cali", "Bogotá", "Cartagena"],
            correct: 2
        },
        {
            question: "Which country has the most neighbors?",
            options: ["Russia", "China", "Brazil", "Germany"],
            correct: 1
        },
        {
            question: "What is the largest city in India by population?",
            options: ["Delhi", "Mumbai", "Kolkata", "Bangalore"],
            correct: 1
        },
        {
            question: "Which country occupies most of the Iberian Peninsula?",
            options: ["Portugal", "Spain", "France", "Andorra"],
            correct: 1
        },
        {
            question: "What is the capital of the Philippines?",
            options: ["Cebu", "Davao", "Manila", "Quezon City"],
            correct: 2
        },
        {
            question: "Which ocean surrounds Antarctica?",
            options: ["Pacific", "Atlantic", "Indian", "Southern"],
            correct: 3
        },
        {
            question: "What is the largest country in Central America?",
            options: ["Guatemala", "Honduras", "Nicaragua", "Costa Rica"],
            correct: 2
        },
        {
            question: "Which African country was formerly known as Abyssinia?",
            options: ["Sudan", "Ethiopia", "Somalia", "Eritrea"],
            correct: 1
        },
        {
            question: "What is the capital of Peru?",
            options: ["Cusco", "Lima", "Arequipa", "Trujillo"],
            correct: 1
        },
        {
            question: "Which country has the most UNESCO Biosphere Reserves?",
            options: ["United States", "Spain", "Russia", "Mexico"],
            correct: 1
        },
        {
            question: "What is the smallest country in South America?",
            options: ["Uruguay", "Suriname", "French Guiana", "Guyana"],
            correct: 1
        },
        {
            question: "Which mountain range separates Europe from Asia?",
            options: ["Caucasus Mountains", "Ural Mountains", "Alps", "Himalayas"],
            correct: 1
        }
    ],
    english: [
        {
            question: "What is the plural of 'child'?",
            options: ["childs", "children", "childes", "child"],
            correct: 1
        },
        {
            question: "Which word is a synonym for 'happy'?",
            options: ["sad", "angry", "joyful", "tired"],
            correct: 2
        },
        {
            question: "What type of word is 'quickly'?",
            options: ["noun", "verb", "adjective", "adverb"],
            correct: 3
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
            correct: 1
        },
        {
            question: "What is the past tense of 'go'?",
            options: ["goed", "went", "gone", "going"],
            correct: 1
        },
        {
            question: "Which sentence uses correct punctuation?",
            options: ["Hello, how are you.", "Hello how are you?", "Hello, how are you?", "Hello. how are you?"],
            correct: 2
        },
        {
            question: "What is an antonym for 'hot'?",
            options: ["warm", "cold", "cool", "freezing"],
            correct: 1
        },
        {
            question: "Which word is spelled correctly?",
            options: ["recieve", "receive", "receve", "receiv"],
            correct: 1
        },
        {
            question: "What is the subject of this sentence: 'The cat ran quickly.'?",
            options: ["cat", "ran", "quickly", "the"],
            correct: 0
        },
        {
            question: "Which is a proper noun?",
            options: ["city", "London", "building", "person"],
            correct: 1
        },
        {
            question: "What type of story is a 'fable'?",
            options: ["A true story", "A story with a moral lesson", "A love story", "A scary story"],
            correct: 1
        },
        {
            question: "Which word rhymes with 'cat'?",
            options: ["dog", "hat", "mouse", "bird"],
            correct: 1
        },
        {
            question: "What is the comparative form of 'good'?",
            options: ["gooder", "better", "best", "more good"],
            correct: 1
        },
        {
            question: "Which sentence is in passive voice?",
            options: ["John ate the apple.", "The apple was eaten by John.", "John is eating an apple.", "John will eat the apple."],
            correct: 1
        },
        {
            question: "What is a metaphor?",
            options: ["A comparison using 'like' or 'as'", "A direct comparison", "A question", "An exclamation"],
            correct: 1
        },
        {
            question: "Which word is a conjunction?",
            options: ["run", "and", "beautiful", "quickly"],
            correct: 1
        },
        {
            question: "What is the superlative form of 'tall'?",
            options: ["taller", "tallest", "more tall", "most tall"],
            correct: 1
        },
        {
            question: "Which sentence has correct subject-verb agreement?",
            options: ["The dogs runs fast.", "The dog run fast.", "The dogs run fast.", "The dog are running."],
            correct: 2
        },
        {
            question: "What is an onomatopoeia?",
            options: ["A word that sounds like what it describes", "A type of poem", "A character in a story", "A type of sentence"],
            correct: 0
        },
        {
            question: "Which word is an interjection?",
            options: ["beautiful", "wow", "running", "table"],
            correct: 1
        },
        // Additional English Questions (80 more to reach 100 total)
        {
            question: "What is the plural of 'mouse'?",
            options: ["mouses", "mice", "mouse", "meese"],
            correct: 1
        },
        {
            question: "Which word is a homophone for 'there'?",
            options: ["here", "their", "where", "were"],
            correct: 1
        },
        {
            question: "What is the past participle of 'swim'?",
            options: ["swam", "swum", "swimmed", "swimming"],
            correct: 1
        },
        {
            question: "Which sentence contains a simile?",
            options: ["The sun is bright.", "She runs like the wind.", "He is tall.", "The book is heavy."],
            correct: 1
        },
        {
            question: "What type of word describes a noun?",
            options: ["Verb", "Adverb", "Adjective", "Preposition"],
            correct: 2
        },
        {
            question: "Which word is spelled incorrectly?",
            options: ["necessary", "separate", "definately", "beginning"],
            correct: 2
        },
        {
            question: "What is a group of words that expresses a complete thought?",
            options: ["Phrase", "Clause", "Sentence", "Fragment"],
            correct: 2
        },
        {
            question: "Which word is a preposition?",
            options: ["under", "quickly", "beautiful", "run"],
            correct: 0
        },
        {
            question: "What is the superlative form of 'bad'?",
            options: ["badder", "worse", "worst", "more bad"],
            correct: 2
        },
        {
            question: "Which punctuation mark shows possession?",
            options: ["Period", "Comma", "Apostrophe", "Semicolon"],
            correct: 2
        },
        {
            question: "What is the opposite of 'ancient'?",
            options: ["old", "modern", "historic", "vintage"],
            correct: 1
        },
        {
            question: "Which word is a synonym for 'big'?",
            options: ["small", "large", "tiny", "little"],
            correct: 1
        },
        {
            question: "What is the past tense of 'bring'?",
            options: ["brang", "brought", "bringed", "bring"],
            correct: 1
        },
        {
            question: "Which word is a collective noun?",
            options: ["dog", "team", "running", "quickly"],
            correct: 1
        },
        {
            question: "What type of sentence asks a question?",
            options: ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
            correct: 1
        },
        {
            question: "Which word contains a prefix?",
            options: ["happy", "unhappy", "happiness", "happily"],
            correct: 1
        },
        {
            question: "What is the plural of 'foot'?",
            options: ["foots", "feet", "feets", "foot"],
            correct: 1
        },
        {
            question: "Which word is an abstract noun?",
            options: ["chair", "happiness", "dog", "book"],
            correct: 1
        },
        {
            question: "What is the comparative form of 'little'?",
            options: ["littler", "less", "least", "more little"],
            correct: 1
        },
        {
            question: "Which sentence is written in first person?",
            options: ["You are happy.", "She is happy.", "I am happy.", "They are happy."],
            correct: 2
        },
        {
            question: "What is a word that sounds the same as another but has different meaning?",
            options: ["Synonym", "Antonym", "Homophone", "Rhyme"],
            correct: 2
        },
        {
            question: "Which word is a contraction?",
            options: ["cannot", "can't", "will not", "do not"],
            correct: 1
        },
        {
            question: "What is the past tense of 'catch'?",
            options: ["catched", "caught", "catches", "catching"],
            correct: 1
        },
        {
            question: "Which word is a common noun?",
            options: ["London", "dog", "Monday", "Christmas"],
            correct: 1
        },
        {
            question: "What type of writing tells a story?",
            options: ["Expository", "Persuasive", "Narrative", "Descriptive"],
            correct: 2
        },
        {
            question: "Which word contains a suffix?",
            options: ["teacher", "teach", "teaching", "All of these"],
            correct: 3
        },
        {
            question: "What is the plural of 'goose'?",
            options: ["gooses", "geese", "goose", "geeses"],
            correct: 1
        },
        {
            question: "Which word is an adverb?",
            options: ["quick", "quickly", "quickness", "quicker"],
            correct: 1
        },
        {
            question: "What is a sentence that gives a command?",
            options: ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
            correct: 2
        },
        {
            question: "Which word is spelled correctly?",
            options: ["acheive", "achieve", "acheeve", "achive"],
            correct: 1
        },
        {
            question: "What is the subject in: 'The big dog barked loudly'?",
            options: ["big", "dog", "barked", "loudly"],
            correct: 1
        },
        {
            question: "Which word is a possessive pronoun?",
            options: ["I", "me", "mine", "myself"],
            correct: 2
        },
        {
            question: "What is the past tense of 'think'?",
            options: ["thinked", "thought", "thinks", "thinking"],
            correct: 1
        },
        {
            question: "Which punctuation mark ends an exclamatory sentence?",
            options: ["Period", "Question mark", "Exclamation point", "Comma"],
            correct: 2
        },
        {
            question: "What is a word that modifies a verb?",
            options: ["Noun", "Adjective", "Adverb", "Preposition"],
            correct: 2
        },
        {
            question: "Which word is a proper adjective?",
            options: ["big", "American", "happy", "fast"],
            correct: 1
        },
        {
            question: "What is the plural of 'deer'?",
            options: ["deers", "deer", "deeres", "deeries"],
            correct: 1
        },
        {
            question: "Which word is a reflexive pronoun?",
            options: ["he", "him", "himself", "his"],
            correct: 2
        },
        {
            question: "What type of poem has 14 lines?",
            options: ["Haiku", "Limerick", "Sonnet", "Ballad"],
            correct: 2
        },
        {
            question: "Which word contains an apostrophe for possession?",
            options: ["its", "it's", "dogs", "dog's"],
            correct: 3
        },
        {
            question: "What is the past tense of 'fly'?",
            options: ["flyed", "flew", "flown", "flying"],
            correct: 1
        },
        {
            question: "Which sentence contains alliteration?",
            options: ["The cat sat.", "Peter picked peppers.", "She is happy.", "I love books."],
            correct: 1
        },
        {
            question: "What is a group of lines in a poem called?",
            options: ["Verse", "Stanza", "Chorus", "Refrain"],
            correct: 1
        },
        {
            question: "Which word is a demonstrative pronoun?",
            options: ["I", "you", "this", "we"],
            correct: 2
        },
        {
            question: "What is the comparative form of 'far'?",
            options: ["farer", "further", "farthest", "more far"],
            correct: 1
        },
        {
            question: "Which word is a linking verb?",
            options: ["run", "jump", "seems", "throw"],
            correct: 2
        },
        {
            question: "What is personification?",
            options: ["Comparing two things", "Giving human qualities to non-human things", "Exaggerating", "Repeating sounds"],
            correct: 1
        },
        {
            question: "Which word is an irregular verb?",
            options: ["walk", "talk", "go", "play"],
            correct: 2
        },
        {
            question: "What is the plural of 'fish'?",
            options: ["fishes", "fish", "fishs", "Both fish and fishes"],
            correct: 3
        },
        {
            question: "Which sentence contains a compound subject?",
            options: ["John runs fast.", "John and Mary run fast.", "John runs and jumps.", "The fast runner won."],
            correct: 1
        },
        {
            question: "What is hyperbole?",
            options: ["Understatement", "Exaggeration", "Comparison", "Question"],
            correct: 1
        },
        {
            question: "Which word is a coordinating conjunction?",
            options: ["although", "because", "and", "when"],
            correct: 2
        },
        {
            question: "What is the past participle of 'eat'?",
            options: ["ate", "eaten", "eated", "eating"],
            correct: 1
        },
        {
            question: "Which word is a subordinating conjunction?",
            options: ["and", "but", "because", "or"],
            correct: 2
        },
        {
            question: "What is the object in: 'She threw the ball'?",
            options: ["She", "threw", "ball", "the"],
            correct: 2
        },
        {
            question: "Which word is an indefinite pronoun?",
            options: ["he", "she", "everyone", "they"],
            correct: 2
        },
        {
            question: "What is alliteration?",
            options: ["Rhyming words", "Repeating consonant sounds", "Comparing things", "Exaggerating"],
            correct: 1
        },
        {
            question: "Which sentence is in future tense?",
            options: ["I walked yesterday.", "I am walking now.", "I will walk tomorrow.", "I walk daily."],
            correct: 2
        },
        {
            question: "What is the possessive form of 'children'?",
            options: ["childrens", "children's", "childrens'", "childern's"],
            correct: 1
        },
        {
            question: "Which word is a transitive verb?",
            options: ["sleep", "run", "read", "exist"],
            correct: 2
        },
        {
            question: "What is onomatopoeia?",
            options: ["A type of rhyme", "Words that imitate sounds", "A comparison", "A type of poem"],
            correct: 1
        },
        {
            question: "Which sentence contains a prepositional phrase?",
            options: ["Dogs bark loudly.", "The book on the table is mine.", "She runs fast.", "We are happy."],
            correct: 1
        },
        {
            question: "What is the past tense of 'sing'?",
            options: ["singed", "sang", "sung", "singing"],
            correct: 1
        },
        {
            question: "Which word is a gerund?",
            options: ["running", "ran", "runs", "runner"],
            correct: 0
        },
        {
            question: "What is irony?",
            options: ["Saying exactly what you mean", "The opposite of what is expected", "A comparison", "A type of poem"],
            correct: 1
        },
        {
            question: "Which word is a participle?",
            options: ["walking", "walked", "walks", "All of these"],
            correct: 3
        },
        {
            question: "What is the plural of 'ox'?",
            options: ["oxs", "oxes", "oxen", "ox"],
            correct: 2
        },
        {
            question: "Which sentence contains an appositive?",
            options: ["My friend John is tall.", "John is my friend.", "I have a friend.", "Friends are nice."],
            correct: 0
        },
        {
            question: "What is symbolism?",
            options: ["Using symbols to represent ideas", "Describing something", "Telling a story", "Asking questions"],
            correct: 0
        },
        {
            question: "Which word is an intensive pronoun?",
            options: ["he", "him", "himself", "his"],
            correct: 2
        },
        {
            question: "What is the past tense of 'choose'?",
            options: ["choosed", "chose", "chosen", "choosing"],
            correct: 1
        },
        {
            question: "Which word is a modal verb?",
            options: ["run", "can", "happy", "book"],
            correct: 1
        },
        {
            question: "What is the difference between 'affect' and 'effect'?",
            options: ["They mean the same thing", "Affect is a verb, effect is a noun", "Effect is a verb, affect is a noun", "There is no difference"],
            correct: 1
        },
        {
            question: "Which sentence contains a dangling modifier?",
            options: ["Walking to school, the rain started.", "I walked to school in the rain.", "The rain started while walking.", "Walking in rain is wet."],
            correct: 0
        },
        {
            question: "What is the past participle of 'drive'?",
            options: ["drove", "driven", "drived", "driving"],
            correct: 1
        },
        {
            question: "Which word is an article?",
            options: ["and", "the", "but", "very"],
            correct: 1
        },
        {
            question: "What is euphemism?",
            options: ["A harsh truth", "A polite way of saying something unpleasant", "A type of poem", "A comparison"],
            correct: 1
        },
        {
            question: "Which word is correctly capitalized?",
            options: ["tuesday", "Tuesday", "TUESDAY", "tuEsday"],
            correct: 1
        },
        {
            question: "What is the difference between 'who' and 'whom'?",
            options: ["No difference", "Who is subject, whom is object", "Whom is subject, who is object", "Who is formal, whom is informal"],
            correct: 1
        },
        {
            question: "What type of word is 'quickly' in the sentence 'She ran quickly'?",
            options: ["Noun", "Verb", "Adjective", "Adverb"],
            correct: 3
        }
    ],
    general: [
        {
            question: "How many colors are in a rainbow?",
            options: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            question: "What is the largest mammal in the world?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            correct: 1
        },
        {
            question: "Which instrument has 88 keys?",
            options: ["Guitar", "Violin", "Piano", "Flute"],
            correct: 2
        },
        {
            question: "What do bees make?",
            options: ["Milk", "Honey", "Butter", "Cheese"],
            correct: 1
        },
        {
            question: "How many days are there in a leap year?",
            options: ["365", "366", "367", "364"],
            correct: 1
        },
        {
            question: "What is the fastest bird?",
            options: ["Eagle", "Falcon", "Peregrine Falcon", "Hawk"],
            correct: 2
        },
        {
            question: "Which vitamin is produced when skin is exposed to sunlight?",
            options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            correct: 3
        },
        {
            question: "What is the currency of Japan?",
            options: ["Yuan", "Won", "Yen", "Peso"],
            correct: 2
        },
        {
            question: "How many sides does a triangle have?",
            options: ["2", "3", "4", "5"],
            correct: 1
        },
        {
            question: "What is the main ingredient in bread?",
            options: ["Rice", "Flour", "Sugar", "Salt"],
            correct: 1
        },
        {
            question: "Which sport is played at Wimbledon?",
            options: ["Football", "Cricket", "Tennis", "Golf"],
            correct: 2
        },
        {
            question: "How many strings does a standard guitar have?",
            options: ["4", "5", "6", "7"],
            correct: 2
        },
        {
            question: "What is the first letter of the Greek alphabet?",
            options: ["Beta", "Alpha", "Gamma", "Delta"],
            correct: 1
        },
        {
            question: "Which season comes after spring?",
            options: ["Winter", "Autumn", "Summer", "Fall"],
            correct: 2
        },
        {
            question: "What do pandas mainly eat?",
            options: ["Fish", "Meat", "Bamboo", "Fruits"],
            correct: 2
        },
        {
            question: "How many minutes are in an hour?",
            options: ["50", "60", "70", "80"],
            correct: 1
        },
        {
            question: "What is the opposite of 'entrance'?",
            options: ["door", "exit", "window", "gate"],
            correct: 1
        },
        {
            question: "Which chess piece can only move diagonally?",
            options: ["Rook", "Knight", "Bishop", "Queen"],
            correct: 2
        },
        {
            question: "What is the baby of a kangaroo called?",
            options: ["Cub", "Pup", "Joey", "Kit"],
            correct: 2
        },
        {
            question: "How many months have 31 days?",
            options: ["6", "7", "8", "9"],
            correct: 1
        },
        // Additional General Knowledge Questions (80 more to reach 100 total)
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Platinum"],
            correct: 2
        },
        {
            question: "Which planet is known as the 'Evening Star'?",
            options: ["Mars", "Venus", "Jupiter", "Mercury"],
            correct: 1
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "NaCl", "O2"],
            correct: 0
        },
        {
            question: "How many legs does an octopus have?",
            options: ["6", "8", "10", "12"],
            correct: 1
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Jupiter", "Saturn", "Neptune"],
            correct: 1
        },
        {
            question: "Which blood type is known as the universal donor?",
            options: ["A", "B", "AB", "O"],
            correct: 3
        },
        {
            question: "What do you call a baby horse?",
            options: ["Colt", "Foal", "Pony", "Filly"],
            correct: 1
        },
        {
            question: "How many bones are in an adult human body?",
            options: ["196", "206", "216", "226"],
            correct: 1
        },
        {
            question: "What is the fastest land animal?",
            options: ["Lion", "Cheetah", "Horse", "Leopard"],
            correct: 1
        },
        {
            question: "Which organ produces insulin in the human body?",
            options: ["Liver", "Kidney", "Pancreas", "Heart"],
            correct: 2
        },
        {
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            correct: 1
        },
        {
            question: "How many chambers does a human heart have?",
            options: ["2", "3", "4", "5"],
            correct: 2
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Au", "Ag", "Gd"],
            correct: 1
        },
        {
            question: "Which is the longest river in the world?",
            options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
            correct: 1
        },
        {
            question: "What do bees collect from flowers?",
            options: ["Pollen", "Nectar", "Both pollen and nectar", "Seeds"],
            correct: 2
        },
        {
            question: "How many teeth does an adult human typically have?",
            options: ["28", "30", "32", "34"],
            correct: 2
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic", "Indian", "Pacific", "Arctic"],
            correct: 2
        },
        {
            question: "Which gas makes up most of Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correct: 2
        },
        {
            question: "What is the speed of light?",
            options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
            correct: 0
        },
        {
            question: "How many wings does a butterfly have?",
            options: ["2", "4", "6", "8"],
            correct: 1
        },
        {
            question: "What is the smallest bone in the human body?",
            options: ["Stapes", "Malleus", "Incus", "Femur"],
            correct: 0
        },
        {
            question: "Which vitamin is produced when skin is exposed to sunlight?",
            options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
            correct: 2
        },
        {
            question: "What is the largest mammal in the ocean?",
            options: ["Shark", "Blue Whale", "Dolphin", "Orca"],
            correct: 1
        },
        {
            question: "How many continents are there?",
            options: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            question: "What is the chemical formula for table salt?",
            options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
            correct: 0
        },
        {
            question: "Which bird is known for its beautiful tail feathers?",
            options: ["Eagle", "Peacock", "Swan", "Flamingo"],
            correct: 1
        },
        {
            question: "What is the boiling point of water at sea level?",
            options: ["90°C", "95°C", "100°C", "105°C"],
            correct: 2
        },
        {
            question: "How many sides does a hexagon have?",
            options: ["5", "6", "7", "8"],
            correct: 1
        },
        {
            question: "What is the largest land animal?",
            options: ["Rhino", "Hippo", "Elephant", "Giraffe"],
            correct: 2
        },
        {
            question: "Which planet is closest to the Sun?",
            options: ["Venus", "Earth", "Mercury", "Mars"],
            correct: 2
        },
        {
            question: "What do you call a female deer?",
            options: ["Doe", "Ewe", "Mare", "Cow"],
            correct: 0
        },
        {
            question: "How many days does it take for the Earth to orbit the Sun?",
            options: ["364", "365", "366", "367"],
            correct: 1
        },
        {
            question: "What is the main gas that plants absorb from the air?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            correct: 2
        },
        {
            question: "Which animal is known as the 'King of the Jungle'?",
            options: ["Tiger", "Elephant", "Lion", "Leopard"],
            correct: 2
        },
        {
            question: "How many eyes does a bee have?",
            options: ["2", "3", "4", "5"],
            correct: 4
        },
        {
            question: "What is the freezing point of water?",
            options: ["-1°C", "0°C", "1°C", "2°C"],
            correct: 1
        },
        {
            question: "Which is the tallest mountain in the world?",
            options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
            correct: 2
        },
        {
            question: "What do you call a group of fish?",
            options: ["Flock", "Herd", "School", "Pack"],
            correct: 2
        },
        {
            question: "How many legs does a spider have?",
            options: ["6", "8", "10", "12"],
            correct: 1
        },
        {
            question: "What is the largest desert in the world?",
            options: ["Sahara", "Gobi", "Antarctic", "Arabian"],
            correct: 2
        },
        {
            question: "Which metal is liquid at room temperature?",
            options: ["Lead", "Mercury", "Tin", "Zinc"],
            correct: 1
        },
        {
            question: "How many hearts does an octopus have?",
            options: ["1", "2", "3", "4"],
            correct: 2
        },
        {
            question: "What is the currency of the United Kingdom?",
            options: ["Euro", "Dollar", "Pound", "Franc"],
            correct: 2
        },
        {
            question: "Which animal can change its color to match surroundings?",
            options: ["Lizard", "Chameleon", "Snake", "Turtle"],
            correct: 1
        },
        {
            question: "How many stomachs does a cow have?",
            options: ["1", "2", "3", "4"],
            correct: 3
        },
        {
            question: "What is the smallest unit of matter?",
            options: ["Molecule", "Atom", "Electron", "Proton"],
            correct: 1
        },
        {
            question: "Which fruit is known as the 'King of Fruits'?",
            options: ["Mango", "Durian", "Pineapple", "Orange"],
            correct: 1
        },
        {
            question: "How many minutes are in a full day?",
            options: ["1440", "1400", "1480", "1500"],
            correct: 0
        },
        {
            question: "What is the hardest part of the human body?",
            options: ["Bone", "Tooth enamel", "Cartilage", "Nail"],
            correct: 1
        },
        {
            question: "Which animal is known for having a pouch?",
            options: ["Koala", "Kangaroo", "Wombat", "All of these"],
            correct: 3
        },
        {
            question: "How many zeros are in one million?",
            options: ["5", "6", "7", "8"],
            correct: 1
        },
        {
            question: "What is the most spoken language in the world?",
            options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
            correct: 2
        },
        {
            question: "Which organ is responsible for pumping blood?",
            options: ["Lungs", "Heart", "Liver", "Kidney"],
            correct: 1
        },
        {
            question: "How many bones does a shark have?",
            options: ["0", "50", "100", "200"],
            correct: 0
        },
        {
            question: "What is the largest bird in the world?",
            options: ["Eagle", "Albatross", "Ostrich", "Penguin"],
            correct: 2
        },
        {
            question: "Which planet has rings around it?",
            options: ["Mars", "Jupiter", "Saturn", "All of these"],
            correct: 3
        },
        {
            question: "How many seconds are in one hour?",
            options: ["3600", "3500", "3700", "3800"],
            correct: 0
        },
        {
            question: "What do you call a baby cow?",
            options: ["Foal", "Calf", "Kid", "Lamb"],
            correct: 1
        },
        {
            question: "Which is the hottest planet in our solar system?",
            options: ["Mercury", "Venus", "Mars", "Jupiter"],
            correct: 1
        },
        {
            question: "How many lungs do humans have?",
            options: ["1", "2", "3", "4"],
            correct: 1
        },
        {
            question: "What is the main ingredient in chocolate?",
            options: ["Sugar", "Milk", "Cocoa", "Vanilla"],
            correct: 2
        },
        {
            question: "Which animal is known for its black and white stripes?",
            options: ["Horse", "Zebra", "Cow", "Tiger"],
            correct: 1
        },
        {
            question: "How many weeks are in a year?",
            options: ["50", "51", "52", "53"],
            correct: 2
        },
        {
            question: "What is the chemical symbol for iron?",
            options: ["Ir", "Fe", "In", "I"],
            correct: 1
        },
        {
            question: "Which animal is known for building dams?",
            options: ["Otter", "Beaver", "Muskrat", "Seal"],
            correct: 1
        },
        {
            question: "How many players are on a basketball team on the court?",
            options: ["4", "5", "6", "7"],
            correct: 1
        },
        {
            question: "What is the largest country in the world by area?",
            options: ["Canada", "China", "Russia", "United States"],
            correct: 2
        },
        {
            question: "Which bird cannot fly?",
            options: ["Penguin", "Ostrich", "Emu", "All of these"],
            correct: 3
        },
        {
            question: "How many teeth do most adults have including wisdom teeth?",
            options: ["28", "30", "32", "34"],
            correct: 2
        },
        {
            question: "What is the most abundant element in the universe?",
            options: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
            correct: 2
        },
        {
            question: "Which animal is known for its long neck?",
            options: ["Elephant", "Giraffe", "Horse", "Camel"],
            correct: 1
        },
        {
            question: "How many sides does a triangle have?",
            options: ["2", "3", "4", "5"],
            correct: 1
        },
        {
            question: "What is the smallest planet in our solar system?",
            options: ["Mercury", "Venus", "Mars", "Pluto"],
            correct: 0
        },
        {
            question: "Which animal is known for its excellent memory?",
            options: ["Dog", "Cat", "Elephant", "Horse"],
            correct: 2
        },
        {
            question: "How many muscles are in the human body?",
            options: ["Over 600", "About 400", "Around 200", "Exactly 500"],
            correct: 0
        },
        {
            question: "What is the deepest part of the ocean called?",
            options: ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Tonga Trench"],
            correct: 0
        },
        {
            question: "Which animal hibernates in winter?",
            options: ["Rabbit", "Bear", "Deer", "Wolf"],
            correct: 1
        },
        {
            question: "How many ribs do humans have?",
            options: ["22", "24", "26", "28"],
            correct: 1
        },
        {
            question: "What is the most spoken language in the world?",
            options: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
            correct: 1
        },
        {
            question: "How many time zones are there in the world?",
            options: ["24", "25", "23", "26"],
            correct: 0
        }
    ]
};

// Function to get random questions from a topic
async function getRandomQuestions(topic, count = 20) {
    console.log('getRandomQuestions called with:', topic, count);

    // Small delay to show loading animation
    await new Promise(resolve => setTimeout(resolve, 200));

    const questions = quizQuestions[topic];
    console.log('Questions found for', topic, ':', questions ? questions.length : 'none');

    if (!questions || questions.length === 0) {
        console.error(`No questions found for topic: ${topic}`);
        return [];
    }

    // Create a copy and shuffle using Fisher-Yates algorithm for better randomization
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Return requested number of questions (or all if fewer available)
    const result = shuffled.slice(0, Math.min(count, shuffled.length));
    console.log('Returning', result.length, 'questions');
    return result;
}

// Function to get question statistics
function getTopicStats() {
    const stats = {};
    Object.keys(quizQuestions).forEach(topic => {
        stats[topic] = {
            totalQuestions: quizQuestions[topic].length,
            availableForQuiz: Math.min(20, quizQuestions[topic].length)
        };
    });
    return stats;
}

// Function to check if we have enough questions for a complete quiz
function hasEnoughQuestions(topic, requiredCount = 20) {
    return quizQuestions[topic] && quizQuestions[topic].length >= requiredCount;
}
