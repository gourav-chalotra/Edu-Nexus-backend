export const scienceData = {
    chapters: [
        // --- Class 6 Science ---
        {
            id: 'ch_sci_6_1', subjectId: 'sci_mid', classLevel: '6',
            title: '1. Food: Where Does It Come From?', description: 'Sources of food, plant parts and animal products as food.',
            topics: ['Food Sources', 'Plant Parts', 'Carnivores/Herbivores'], order: 1, videoUrl: 'https://www.youtube.com/embed/example6sci'
        },
        // --- Class 7 Science ---
        {
            id: 'ch_sci_7_1', subjectId: 'sci_mid', classLevel: '7',
            title: '1. Nutrition in Plants', description: 'Photosynthesis, other modes of nutrition in plants.',
            topics: ['Photosynthesis', 'Autotrophs', 'Heterotrophs'], order: 1, videoUrl: 'https://www.youtube.com/embed/example7sci'
        },
        // --- Class 8 Science ---
        {
            id: 'ch_sci_8_1', subjectId: 'sci_mid', classLevel: '8',
            title: '1. Crop Production and Management', description: 'Agricultural practices, basic practices of crop production.',
            topics: ['Agriculture', 'Crops', 'Irrigation'], order: 1, videoUrl: 'https://www.youtube.com/embed/example8sci'
        },

        // --- Class 9 Science ---
        {
            id: 'ch_sci_9_1', subjectId: 'sci_icse', classLevel: '9',
            title: '1. Matter in Our Surroundings', description: 'Physical nature of matter, states of matter.',
            topics: ['States of Matter', 'Evaporation', 'Particles'], order: 1, videoUrl: 'https://www.youtube.com/embed/bmzDsWMSCTk'
        },
        {
            id: 'ch_sci_9_2', subjectId: 'sci_icse', classLevel: '9',
            title: '2. Is Matter Around Us Pure?', description: 'Mixtures, solutions, compounds.',
            topics: ['Solutions', 'Colloids', 'Separation Techniques'], order: 2, videoUrl: 'https://www.youtube.com/embed/fDTLrhcIWx0'
        },
        {
            id: 'ch_sci_9_3', subjectId: 'sci_icse', classLevel: '9',
            title: '3. Atoms and Molecules', description: 'Laws of chemical combination, atoms, molecules, ions.',
            topics: ['Atomic Mass', 'Molecular Mass', 'Mole Concept'], order: 3, videoUrl: 'https://www.youtube.com/embed/jWSJZEZ3Ym4'
        },
        {
            id: 'ch_sci_9_4', subjectId: 'sci_icse', classLevel: '9',
            title: '4. Structure of the Atom', description: 'Charged particles in matter, models of atom.',
            topics: ['Thomson Model', 'Rutherford Model', 'Bohr Model'], order: 4, videoUrl: 'https://www.youtube.com/embed/0UqHoagKXts'
        },
        {
            id: 'ch_sci_9_5', subjectId: 'sci_icse', classLevel: '9',
            title: '5. The Fundamental Unit of Life', description: 'Cell structure, plasma membrane, nucleus.',
            topics: ['Cell Wall', 'Nucleus', 'Organelles'], order: 5, videoUrl: 'https://www.youtube.com/embed/3YuuphvXYmo'
        },

        // --- Class 10 Science ---
        {
            id: 'ch_sci_10_1', subjectId: 'sci_icse', classLevel: '10',
            title: '1. Chemical Reactions and Equations', description: 'Types of chemical reactions, balancing equations.',
            topics: ['Chemical Equations', 'Balancing', 'Reactions'], order: 1, videoUrl: 'https://www.youtube.com/embed/gQ-X9wV8TXQ'
        },
        {
            id: 'ch_sci_10_2', subjectId: 'sci_icse', classLevel: '10',
            title: '2. Acids, Bases and Salts', description: 'Chemical properties of acids and bases.',
            topics: ['pH Scale', 'Salts', 'Acids vs Bases'], order: 2, videoUrl: 'https://www.youtube.com/embed/qKl4mieovu0'
        },
        {
            id: 'ch_sci_10_3', subjectId: 'sci_icse', classLevel: '10',
            title: '3. Metals and Non-Metals', description: 'Physical and chemical properties of metals and non-metals.',
            topics: ['Properties', 'Reactivity Series', 'Extraction'], order: 3, videoUrl: 'https://www.youtube.com/embed/YV1BFWi-AWY'
        },
        {
            id: 'ch_sci_10_4', subjectId: 'sci_icse', classLevel: '10',
            title: '4. Life Processes', description: 'Nutrition, respiration, transportation, excretion.',
            topics: ['Nutrition', 'Respiration', 'Transportation'], order: 4, videoUrl: 'https://www.youtube.com/embed/2anxgj0TUgQ'
        },
        {
            id: 'ch_sci_10_5', subjectId: 'sci_icse', classLevel: '10',
            title: '5. Light – Reflection and Refraction', description: 'Reflection of light, spherical mirrors, refraction.',
            topics: ['Reflection', 'Refraction', 'Lenses'], order: 5, videoUrl: 'https://www.youtube.com/embed/8Rwv2hvdZFo'
        }
    ],

    quizzes: [
        // Class 6
        {
            chapterId: 'ch_sci_6_1', title: 'Quiz: Food Sources', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Animals which eat only plants are called:', options: ['Herbivores', 'Carnivores', 'Omnivores', 'Insectivores'], correctAnswer: 'Herbivores', points: 100 }
            ]
        },

        // --- Class 9 Science Quizzes ---
        {
            chapterId: 'ch_sci_9_1', title: 'Quiz: Matter in Our Surroundings', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Which state of matter has definite volume but no definite shape?', options: ['Solid', 'Liquid', 'Gas', 'Plasma'], correctAnswer: 'Liquid', points: 100 },
                { id: 2, type: 'mcq', question: 'The process of conversion of solid directly to gas is called?', options: ['Evaporation', 'Condensation', 'Sublimation', 'Fusion'], correctAnswer: 'Sublimation', points: 100 },
                { id: 3, type: 'mcq', question: 'Boiling point of water at standard pressure is?', options: ['90°C', '95°C', '100°C', '110°C'], correctAnswer: '100°C', points: 100 },
                { id: 4, type: 'mcq', question: 'Latent heat of vaporisation is used to?', options: ['Increase temperature', 'Change state', 'Decrease density', 'None'], correctAnswer: 'Change state', points: 100 },
                { id: 5, type: 'mcq', question: 'Which has highest compressibility?', options: ['Solid', 'Liquid', 'Gas', 'All equal'], correctAnswer: 'Gas', points: 100 }
            ]
        },
        {
            chapterId: 'ch_sci_9_2', title: 'Quiz: Is Matter Around Us Pure?', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'A solution is a _____ mixture.', options: ['Heterogeneous', 'Homogeneous', 'Colloidal', 'None'], correctAnswer: 'Homogeneous', points: 100 },
                { id: 2, type: 'mcq', question: 'Tyndall effect is shown by?', options: ['Solution', 'Suspension', 'Colloid', 'Pure substance'], correctAnswer: 'Colloid', points: 100 },
                { id: 3, type: 'mcq', question: 'Separation of cream from milk uses?', options: ['Filtration', 'Distillation', 'Centrifugation', 'Sublimation'], correctAnswer: 'Centrifugation', points: 100 },
                { id: 4, type: 'mcq', question: 'An element cannot be broken into simpler substances by?', options: ['Physical means', 'Chemical means', 'Both', 'Neither'], correctAnswer: 'Chemical means', points: 100 },
                { id: 5, type: 'mcq', question: 'Which is a compound?', options: ['Air', 'Water', 'Milk', 'Brass'], correctAnswer: 'Water', points: 100 }
            ]
        },
        {
            chapterId: 'ch_sci_9_3', title: 'Quiz: Atoms and Molecules', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Atomicity of phosphorus is?', options: ['1', '2', '4', '8'], correctAnswer: '4', points: 100 },
                { id: 2, type: 'mcq', question: 'Molecular mass of H2O is?', options: ['16', '17', '18', '20'], correctAnswer: '18', points: 100 },
                { id: 3, type: 'mcq', question: '1 mole = _____ atoms (Avogadro\'s number)?', options: ['6.022×10²¹', '6.022×10²³', '6.022×10²²', 'None'], correctAnswer: '6.022×10²³', points: 100 },
                { id: 4, type: 'mcq', question: 'Chemical formula of sodium sulphate?', options: ['NaSO4', 'Na2SO4', 'NaSO3', 'Na2SO3'], correctAnswer: 'Na2SO4', points: 100 },
                { id: 5, type: 'mcq', question: 'Law of conservation of mass was given by?', options: ['Dalton', 'Avogadro', 'Lavoisier', 'Mendeleev'], correctAnswer: 'Lavoisier', points: 100 }
            ]
        },
        {
            chapterId: 'ch_sci_9_4', title: 'Quiz: Structure of the Atom', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Nucleus was discovered by?', options: ['Thomson', 'Bohr', 'Rutherford', 'Chadwick'], correctAnswer: 'Rutherford', points: 100 },
                { id: 2, type: 'mcq', question: 'Valency of carbon is?', options: ['2', '3', '4', '1'], correctAnswer: '4', points: 100 },
                { id: 3, type: 'mcq', question: 'Isotopes have same number of?', options: ['Neutrons', 'Protons', 'Mass number', 'Electrons'], correctAnswer: 'Protons', points: 100 },
                { id: 4, type: 'mcq', question: 'Maximum electrons in 2nd shell?', options: ['2', '4', '8', '18'], correctAnswer: '8', points: 100 },
                { id: 5, type: 'mcq', question: 'Atomic number of sodium?', options: ['11', '12', '23', '10'], correctAnswer: '11', points: 100 }
            ]
        },
        {
            chapterId: 'ch_sci_9_5', title: 'Quiz: The Fundamental Unit of Life', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Cell wall is absent in?', options: ['Plant cell', 'Animal cell', 'Bacterial cell', 'Fungal cell'], correctAnswer: 'Animal cell', points: 100 },
                { id: 2, type: 'mcq', question: 'Powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi body'], correctAnswer: 'Mitochondria', points: 100 },
                { id: 3, type: 'mcq', question: 'DNA is found in?', options: ['Ribosome', 'Nucleus', 'Lysosome', 'Vacuole'], correctAnswer: 'Nucleus', points: 100 },
                { id: 4, type: 'mcq', question: 'Osmosis involves movement of?', options: ['Solute', 'Solvent', 'Both', 'None'], correctAnswer: 'Solvent', points: 100 },
                { id: 5, type: 'mcq', question: 'Plastids are found in?', options: ['Animal cells', 'Plant cells', 'Both', 'Bacteria'], correctAnswer: 'Plant cells', points: 100 }
            ]
        },

        // --- Class 10 Science Quizzes ---
        {
            chapterId: 'ch_sci_10_1', title: 'Quiz: Chemical Reactions and Equations', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'A reaction in which one element displaces another is called?', options: ['Combination', 'Decomposition', 'Displacement', 'Redox'], correctAnswer: 'Displacement', points: 100 },
                { id: 2, type: 'mcq', question: 'Rusting of iron is a _____ reaction.', options: ['Reduction', 'Oxidation', 'Neutralization', 'Precipitation'], correctAnswer: 'Oxidation', points: 100 },
                { id: 3, type: 'mcq', question: 'Photosynthesis is what type of reaction?', options: ['Exothermic', 'Endothermic', 'Displacement', 'Double displacement'], correctAnswer: 'Endothermic', points: 100 },
                { id: 4, type: 'mcq', question: 'Balanced equation for burning of methane?', options: ['CH4+O2→CO2+H2O', 'CH4+2O2→CO2+2H2O', '2CH4+O2→CO2+H2O', 'None'], correctAnswer: 'CH4+2O2→CO2+2H2O', points: 100 },
                { id: 5, type: 'mcq', question: 'Which is a combination reaction?', options: ['CaCO3→CaO+CO2', '2H2+O2→2H2O', 'Fe+CuSO4→FeSO4+Cu', 'NaOH+HCl→NaCl+H2O'], correctAnswer: '2H2+O2→2H2O', points: 100 }
            ]
        },
        {
            chapterId: 'ch_sci_10_2', title: 'Quiz: Acids, Bases and Salts', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'pH of pure water?', options: ['0', '7', '14', '10'], correctAnswer: '7', points: 100 },
                { id: 2, type: 'mcq', question: 'Bleaching powder contains?', options: ['NaOH', 'NaCl', 'Ca(OCl)Cl', 'CaCl2'], correctAnswer: 'Ca(OCl)Cl', points: 100 },
                { id: 3, type: 'mcq', question: 'Baking soda is?', options: ['NaCl', 'Na2CO3', 'NaHCO3', 'NaOH'], correctAnswer: 'NaHCO3', points: 100 },
                { id: 4, type: 'mcq', question: 'Strong acid has pH?', options: ['7–14', '0–3', '5–7', 'Equal to 7'], correctAnswer: '0–3', points: 100 },
                { id: 5, type: 'mcq', question: 'Litmus is extracted from?', options: ['Turmeric', 'Rose', 'Lichens', 'Grapes'], correctAnswer: 'Lichens', points: 100 }
            ]
        },
        {
            chapterId: 'ch_sci_10_3', title: 'Quiz: Metals and Non-Metals', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Most malleable metal?', options: ['Silver', 'Copper', 'Gold', 'Iron'], correctAnswer: 'Gold', points: 100 },
                { id: 2, type: 'mcq', question: 'Non-metal that conducts electricity?', options: ['Sulfur', 'Graphite', 'Phosphorus', 'Iodine'], correctAnswer: 'Graphite', points: 100 },
                { id: 3, type: 'mcq', question: 'Thermite reaction uses?', options: ['Al + Fe2O3', 'Cu + Al2O3', 'Fe + CuO', 'Mg + CuO'], correctAnswer: 'Al + Fe2O3', points: 100 },
                { id: 4, type: 'mcq', question: 'Oxide of non-metal is usually?', options: ['Basic', 'Acidic', 'Neutral', 'Amphoteric'], correctAnswer: 'Acidic', points: 100 },
                { id: 5, type: 'mcq', question: 'Galvanisation uses which metal?', options: ['Tin', 'Copper', 'Zinc', 'Silver'], correctAnswer: 'Zinc', points: 100 }
            ]
        },
        {
            chapterId: 'ch_sci_10_4', title: 'Quiz: Life Processes', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Site of photosynthesis?', options: ['Mitochondria', 'Ribosome', 'Chloroplast', 'Nucleus'], correctAnswer: 'Chloroplast', points: 100 },
                { id: 2, type: 'mcq', question: 'Enzyme in saliva?', options: ['Pepsin', 'Lipase', 'Salivary amylase', 'Trypsin'], correctAnswer: 'Salivary amylase', points: 100 },
                { id: 3, type: 'mcq', question: 'Normal human RBC count (per mm³)?', options: ['2–3 million', '4–6 million', '7–8 million', '1 million'], correctAnswer: '4–6 million', points: 100 },
                { id: 4, type: 'mcq', question: 'Dialysis is related to?', options: ['Heart', 'Lungs', 'Kidney', 'Liver'], correctAnswer: 'Kidney', points: 100 },
                { id: 5, type: 'mcq', question: 'Stomata opens with help of?', options: ['Epidermal cells', 'Guard cells', 'Mesophyll cells', 'Xylem'], correctAnswer: 'Guard cells', points: 100 }
            ]
        },
        {
            chapterId: 'ch_sci_10_5', title: 'Quiz: Light – Reflection and Refraction', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Mirror formula: 1/f = ?', options: ['1/u + 1/v', '1/u - 1/v', 'u+v', 'u×v'], correctAnswer: '1/u + 1/v', points: 100 },
                { id: 2, type: 'mcq', question: 'Refractive index = ?', options: ['Speed in medium / Speed in vacuum', 'Speed in vacuum / Speed in medium', 'wavelength ratio', 'None'], correctAnswer: 'Speed in vacuum / Speed in medium', points: 100 },
                { id: 3, type: 'mcq', question: 'Concave mirror used in?', options: ['Rear-view mirror', 'Dentist mirror', 'Solar furnace', 'Both B and C'], correctAnswer: 'Both B and C', points: 100 },
                { id: 4, type: 'mcq', question: 'Angle of incidence equals angle of reflection – this is?', options: ['Snell\'s law', 'Law of reflection', 'Newton\'s law', 'Refraction law'], correctAnswer: 'Law of reflection', points: 100 },
                { id: 5, type: 'mcq', question: 'Rainbow is due to?', options: ['Reflection only', 'Refraction only', 'Dispersion, refraction & reflection', 'Diffraction'], correctAnswer: 'Dispersion, refraction & reflection', points: 100 }
            ]
        }
    ]
};
