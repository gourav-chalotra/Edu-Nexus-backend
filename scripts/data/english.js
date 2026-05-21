export const englishData = {
    chapters: [
        // --- Class 6 English ---
        {
            id: 'ch_eng_6_1', subjectId: 'eng_mid', classLevel: '6',
            title: '1. Who Did Patrick\'s Homework?', description: 'A story about a boy who hates homework.',
            topics: ['Magic', 'Homework', 'Responsibility'], order: 1, videoUrl: 'https://www.youtube.com/embed/example61'
        },
        // --- Class 7 English ---
        {
            id: 'ch_eng_7_1', subjectId: 'eng_mid', classLevel: '7',
            title: '1. Three Questions', description: 'A king seeks answers to three important questions.',
            topics: ['Wisdom', 'Time', 'Action'], order: 1, videoUrl: 'https://www.youtube.com/embed/example71'
        },
        // --- Class 8 English ---
        {
            id: 'ch_eng_8_1', subjectId: 'eng_mid', classLevel: '8',
            title: '1. The Best Christmas Present in the World', description: 'A touching story set during World War I.',
            topics: ['War', 'Peace', 'Christmas'], order: 1, videoUrl: 'https://www.youtube.com/embed/example81'
        },

        // --- Class 9 English ---
        {
            id: 'ch_eng_9_1', subjectId: 'eng_icse', classLevel: '9',
            title: '1. The Fun They Had (Beehive Ch.1)', description: 'A story about the future schools and robots.',
            topics: ['Future School', 'Old Schools', 'Robots'], order: 1, videoUrl: 'https://www.youtube.com/embed/A30OuLLUa-g'
        },
        {
            id: 'ch_eng_9_2', subjectId: 'eng_icse', classLevel: '9',
            title: '2. The Sound of Music (Beehive Ch.2)', description: 'Evelyn Glennie and Bismillah Khan.',
            topics: ['Music', 'Determination', 'Shehnai'], order: 2, videoUrl: 'https://youtu.be/W5MpRd5g0uY'
        },
        {
            id: 'ch_eng_9_3', subjectId: 'eng_icse', classLevel: '9',
            title: '3. My Childhood (Beehive Ch.6)', description: 'Childhood of A.P.J Abdul Kalam.',
            topics: ['Childhood', 'APJ Abdul Kalam', 'Inspiration'], order: 3, videoUrl: 'https://www.youtube.com/embed/pj2pnV-Oseg?si=pPZuqbPOl7o0Mo1X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin'
        },
        {
            id: 'ch_eng_9_4', subjectId: 'eng_icse', classLevel: '9',
            title: '4. Grammar – Tenses & Determiners', description: 'Rules of tenses and determiners.',
            topics: ['Grammar', 'Tenses', 'Determiners'], order: 4, videoUrl: 'https://www.youtube.com/embed/GpGycbvrn3o'
        },
        {
            id: 'ch_eng_9_5', subjectId: 'eng_icse', classLevel: '9',
            title: '5. Writing Skills – Formal Letter', description: 'Format and examples of formal letters.',
            topics: ['Writing', 'Formal Letter', 'Format'], order: 5, videoUrl: 'https://www.youtube.com/embed/W3KI2rJm-Sc'
        },

        // --- Class 10 English ---
        {
            id: 'ch_eng_10_1', subjectId: 'eng_icse', classLevel: '10',
            title: '1. A Letter to God (First Flight Ch.1)', description: 'Story of Lencho\'s faith in God.',
            topics: ['Lencho\'s Faith', 'Postmaster\'s Help'], order: 1, videoUrl: 'https://www.youtube.com/embed/SKTTKZ_e468'
        },
        {
            id: 'ch_eng_10_2', subjectId: 'eng_icse', classLevel: '10',
            title: '2. Nelson Mandela – Long Walk to Freedom (Ch.2)', description: 'Apartheid and freedom struggle.',
            topics: ['Apartheid', 'Freedom', 'Mandela'], order: 2, videoUrl: 'https://www.youtube.com/embed/UXpLYES-n3o'
        },
        {
            id: 'ch_eng_10_3', subjectId: 'eng_icse', classLevel: '10',
            title: '3. From the Diary of Anne Frank (Ch.4)', description: 'Life during the Holocaust.',
            topics: ['Anne Frank', 'Holocaust', 'Diary'], order: 3, videoUrl: 'https://www.youtube.com/embed/fc7QwZ_JMyI'
        },
        {
            id: 'ch_eng_10_4', subjectId: 'eng_icse', classLevel: '10',
            title: '4. Grammar – Reported Speech', description: 'Direct to indirect speech rules.',
            topics: ['Grammar', 'Reported Speech', 'Direct Indirect'], order: 4, videoUrl: 'https://www.youtube.com/embed/yfP8EByXrKU'
        },
        {
            id: 'ch_eng_10_5', subjectId: 'eng_icse', classLevel: '10',
            title: '5. Writing – Formal Letter & Notice', description: 'Formats of formal letters and notices.',
            topics: ['Writing', 'Formal Letter', 'Notice'], order: 5, videoUrl: 'https://www.youtube.com/embed/I6alvwOb1po'
        }
    ],

    quizzes: [
        // Class 6
        {
            chapterId: 'ch_eng_6_1', title: 'Quiz: Patrick\'s Homework', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Patrick never did his:', options: ['Chores', 'Homework', 'Exercises', 'Sleeping'], correctAnswer: 'Homework', points: 100 }
            ]
        },

        // --- Class 9 English Quizzes ---
        {
            chapterId: 'ch_eng_9_1', title: 'Quiz: The Fun They Had', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'The story is set in the year?', options: ['2055', '2157', '2158', '3000'], correctAnswer: '2157', points: 100 },
                { id: 2, type: 'mcq', question: 'Tommy found a book in?', options: ['Library', 'Attic', 'School', 'Garden'], correctAnswer: 'Attic', points: 100 },
                { id: 3, type: 'mcq', question: 'Margie\'s teacher was a?', options: ['Human', 'Robot/Machine', 'Hologram', 'Parent'], correctAnswer: 'Robot/Machine', points: 100 },
                { id: 4, type: 'mcq', question: 'What subject did Margie hate?', options: ['History', 'English', 'Geography', 'Arithmetic'], correctAnswer: 'Arithmetic', points: 100 },
                { id: 5, type: 'mcq', question: 'The old school had?', options: ['Same teacher for all', 'Online classes', 'Children of same neighbourhood', 'No homework'], correctAnswer: 'Children of same neighbourhood', points: 100 }
            ]
        },
        {
            chapterId: 'ch_eng_9_2', title: 'Quiz: The Sound of Music', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Evelyn Glennie is a?', options: ['Singer', 'Percussionist', 'Pianist', 'Violinist'], correctAnswer: 'Percussionist', points: 100 },
                { id: 2, type: 'mcq', question: 'Evelyn lost her hearing by age?', options: ['8', '10', '12', '6'], correctAnswer: '12', points: 100 },
                { id: 3, type: 'mcq', question: 'Bismillah Khan played?', options: ['Sitar', 'Tabla', 'Shehnai', 'Flute'], correctAnswer: 'Shehnai', points: 100 },
                { id: 4, type: 'mcq', question: 'Bismillah Khan performed at Red Fort on?', options: ['Republic Day', 'Gandhi Jayanti', 'Independence Day 1947', 'Diwali'], correctAnswer: 'Independence Day 1947', points: 100 },
                { id: 5, type: 'mcq', question: 'Evelyn felt music through?', options: ['Ears only', 'Eyes', 'Body vibrations', 'Touch'], correctAnswer: 'Body vibrations', points: 100 }
            ]
        },
        {
            chapterId: 'ch_eng_9_3', title: 'Quiz: My Childhood', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: '\'My Childhood\' is written by?', options: ['Nehru', 'A.P.J Abdul Kalam', 'Gandhi', 'Tagore'], correctAnswer: 'A.P.J Abdul Kalam', points: 100 },
                { id: 2, type: 'mcq', question: 'Kalam was born in?', options: ['Madurai', 'Chennai', 'Rameswaram', 'Coimbatore'], correctAnswer: 'Rameswaram', points: 100 },
                { id: 3, type: 'mcq', question: 'Kalam\'s father\'s name?', options: ['Jainulabdeen', 'Ibrahim', 'Ahmed', 'Salam'], correctAnswer: 'Jainulabdeen', points: 100 },
                { id: 4, type: 'mcq', question: 'Sivasubramania Iyer was Kalam\'s?', options: ['Father', 'Teacher', 'Friend', 'Principal'], correctAnswer: 'Teacher', points: 100 },
                { id: 5, type: 'mcq', question: 'First Newspaper to Rameswaram was brought by?', options: ['Kalam\'s father', 'Samsuddin (Kalam\'s cousin)', 'The teacher', 'Postman'], correctAnswer: 'Samsuddin (Kalam\'s cousin)', points: 100 }
            ]
        },
        {
            chapterId: 'ch_eng_9_4', title: 'Quiz: Grammar – Tenses & Determiners', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: '\'A\', \'An\', \'The\' are called?', options: ['Prepositions', 'Articles', 'Conjunctions', 'Pronouns'], correctAnswer: 'Articles', points: 100 },
                { id: 2, type: 'mcq', question: 'Use \'an\' before?', options: ['Consonant sounds', 'Vowel sounds', 'All nouns', 'Proper nouns'], correctAnswer: 'Vowel sounds', points: 100 },
                { id: 3, type: 'mcq', question: 'Past continuous tense uses?', options: ['was/were + V-ing', 'had + V3', 'will + V1', 'has + V3'], correctAnswer: 'was/were + V-ing', points: 100 },
                { id: 4, type: 'mcq', question: 'Which is the past tense of \'go\'?', options: ['Goed', 'Goes', 'Gone', 'Went'], correctAnswer: 'Went', points: 100 },
                { id: 5, type: 'mcq', question: '\'The\' is used before?', options: ['Common nouns only', 'Specific/known nouns', 'Plural only', 'Singular only'], correctAnswer: 'Specific/known nouns', points: 100 }
            ]
        },
        {
            chapterId: 'ch_eng_9_5', title: 'Quiz: Formal Letter', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'A formal letter always includes?', options: ['Sender\'s address', 'Casual language', 'Emojis', 'No subject line'], correctAnswer: 'Sender\'s address', points: 100 },
                { id: 2, type: 'mcq', question: 'Subject line in formal letter comes?', options: ['Before salutation', 'After salutation', 'At end', 'No fixed position'], correctAnswer: 'After salutation', points: 100 },
                { id: 3, type: 'mcq', question: 'Letter to editor is published in?', options: ['Book', 'Newspaper', 'Diary', 'Notice board'], correctAnswer: 'Newspaper', points: 100 },
                { id: 4, type: 'mcq', question: 'Subscription in formal letter: correct option?', options: ['Yours lovingly', 'Yours faithfully/sincerely', 'With regards', 'Bye'], correctAnswer: 'Yours faithfully/sincerely', points: 100 },
                { id: 5, type: 'mcq', question: 'Informal letter is written to?', options: ['Bank manager', 'Principal', 'Friend/relative', 'Government officer'], correctAnswer: 'Friend/relative', points: 100 }
            ]
        },

        // --- Class 10 English Quizzes ---
        {
            chapterId: 'ch_eng_10_1', title: 'Quiz: A Letter to God', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Author of \'A Letter to God\'?', options: ['Guy de Maupassant', 'G.L. Fuentes', 'Ruskin Bond', 'Anton Chekhov'], correctAnswer: 'G.L. Fuentes', points: 100 },
                { id: 2, type: 'mcq', question: 'Lencho\'s crop was destroyed by?', options: ['Flood', 'Drought', 'Hailstorm', 'Fire'], correctAnswer: 'Hailstorm', points: 100 },
                { id: 3, type: 'mcq', question: 'Lencho wrote letter to?', options: ['Government', 'God', 'Bank', 'Neighbour'], correctAnswer: 'God', points: 100 },
                { id: 4, type: 'mcq', question: 'Amount Lencho received from post office?', options: ['100 pesos', '70 pesos', '50 pesos', '80 pesos'], correctAnswer: '70 pesos', points: 100 },
                { id: 5, type: 'mcq', question: 'Lencho called post office employees?', options: ['Angels', 'Thieves', 'Fools', 'Honest men'], correctAnswer: 'Thieves', points: 100 }
            ]
        },
        {
            chapterId: 'ch_eng_10_2', title: 'Quiz: Nelson Mandela', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Nelson Mandela became President of South Africa in?', options: ['1990', '1994', '1998', '1991'], correctAnswer: '1994', points: 100 },
                { id: 2, type: 'mcq', question: 'Apartheid means?', options: ['Equal rights', 'Racial discrimination', 'Freedom', 'Democracy'], correctAnswer: 'Racial discrimination', points: 100 },
                { id: 3, type: 'mcq', question: 'Mandela was imprisoned for?', options: ['17 years', '27 years', '30 years', '10 years'], correctAnswer: '27 years', points: 100 },
                { id: 4, type: 'mcq', question: 'Mandela was jailed in?', options: ['Cape Town', 'Johannesburg', 'Robben Island', 'Durban'], correctAnswer: 'Robben Island', points: 100 },
                { id: 5, type: 'mcq', question: 'ANC stands for?', options: ['African National Congress', 'African Nations Club', 'All Nations Congress', 'None'], correctAnswer: 'African National Congress', points: 100 }
            ]
        },
        {
            chapterId: 'ch_eng_10_3', title: 'Quiz: From the Diary of Anne Frank', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Anne Frank was from?', options: ['France', 'Germany', 'Poland', 'Netherlands'], correctAnswer: 'Germany', points: 100 },
                { id: 2, type: 'mcq', question: 'Anne\'s diary was named?', options: ['Kitty', 'Mary', 'Diary of a Girl', 'Hidden Life'], correctAnswer: 'Kitty', points: 100 },
                { id: 3, type: 'mcq', question: 'Anne and her family hid from?', options: ['British', 'Nazis', 'Soviet army', 'French'], correctAnswer: 'Nazis', points: 100 },
                { id: 4, type: 'mcq', question: 'Anne Frank died in?', options: ['1943', '1945', '1944', '1946'], correctAnswer: '1945', points: 100 },
                { id: 5, type: 'mcq', question: 'Anne\'s diary was published by her?', options: ['Mother', 'Father', 'Brother', 'Friend'], correctAnswer: 'Father', points: 100 }
            ]
        },
        {
            chapterId: 'ch_eng_10_4', title: 'Quiz: Reported Speech', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: '\'He said, "I am happy"\' → Reported speech?', options: ['He said he is happy', 'He said he was happy', 'He said I am happy', 'He said he were happy'], correctAnswer: 'He said he was happy', points: 100 },
                { id: 2, type: 'mcq', question: '\'Will\' changes to _____ in reported speech.', options: ['shall', 'would', 'could', 'may'], correctAnswer: 'would', points: 100 },
                { id: 3, type: 'mcq', question: 'Reporting verb for questions is?', options: ['said', 'told', 'asked', 'spoke'], correctAnswer: 'asked', points: 100 },
                { id: 4, type: 'mcq', question: '\'Now\' in direct speech becomes _____ in reported speech.', options: ['here', 'then', 'there', 'today'], correctAnswer: 'then', points: 100 },
                { id: 5, type: 'mcq', question: '\'She said, "I will come"\' → ?', options: ['She said she will come', 'She said she would come', 'She said she comes', 'She said she came'], correctAnswer: 'She said she would come', points: 100 }
            ]
        },
        {
            chapterId: 'ch_eng_10_5', title: 'Quiz: Formal Letter & Notice', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'A notice is written in?', options: ['First person', 'Third person / passive voice', 'Second person', 'Any'], correctAnswer: 'Third person / passive voice', points: 100 },
                { id: 2, type: 'mcq', question: 'Notice should be?', options: ['Lengthy', 'Brief and informative', 'Informal', 'Without date'], correctAnswer: 'Brief and informative', points: 100 },
                { id: 3, type: 'mcq', question: 'Complaint letter is addressed to?', options: ['Friend', 'Relevant authority', 'Self', 'Parents'], correctAnswer: 'Relevant authority', points: 100 },
                { id: 4, type: 'mcq', question: 'Word limit for a notice generally?', options: ['200 words', '500 words', '50-60 words', '100 words'], correctAnswer: '50-60 words', points: 100 },
                { id: 5, type: 'mcq', question: 'Formal letter ends with?', options: ['Yours lovingly', 'Yours faithfully/sincerely', 'See you soon', 'Thanks'], correctAnswer: 'Yours faithfully/sincerely', points: 100 }
            ]
        }
    ]
};
