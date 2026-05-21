export const sstData = {
    chapters: [
        // --- Class 6 SST ---
        {
            id: 'ch_sst_6_1', subjectId: 'sst_mid', classLevel: '6',
            title: '1. What, Where, How and When?', description: 'Introduction to History and its sources.',
            topics: ['Sources of History', 'Dates', 'Archaeology'], order: 1, videoUrl: 'https://www.youtube.com/embed/example6sst'
        },
        // --- Class 7 SST ---
        {
            id: 'ch_sst_7_1', subjectId: 'sst_mid', classLevel: '7',
            title: '1. Tracing Changes Through a Thousand Years', description: 'Historical changes and terminology.',
            topics: ['Medieval Period', 'Sources', 'New Social Groups'], order: 1, videoUrl: 'https://www.youtube.com/embed/example7sst'
        },
        // --- Class 8 SST ---
        {
            id: 'ch_sst_8_1', subjectId: 'sst_mid', classLevel: '8',
            title: '1. How, When and Where', description: 'Modern history introduction.',
            topics: ['Periodisation', 'Colonial Rule', 'Official Records'], order: 1, videoUrl: 'https://www.youtube.com/embed/example8sst'
        },

        // --- Class 9 SST ---
        {
            id: 'ch_sst_9_1', subjectId: 'sst_icse', classLevel: '9',
            title: '1. The French Revolution', description: 'Events leading to the revolution and its impact.',
            topics: ['French Society', 'Outbreak', 'Reign of Terror'], order: 1, videoUrl: 'https://www.youtube.com/embed/PJaUqX9KQW0'
        },
        {
            id: 'ch_sst_9_2', subjectId: 'sst_icse', classLevel: '9',
            title: '2. Socialism in Europe and the Russian Revolution', description: 'Russian Revolution and Socialism.',
            topics: ['Russian Revolution', 'Bolsheviks', 'Socialism'], order: 2, videoUrl: 'https://www.youtube.com/embed/V1K-bhiaV9w'
        },
        {
            id: 'ch_sst_9_3', subjectId: 'sst_icse', classLevel: '9',
            title: '3. Drainage (Geography)', description: 'River systems and drainage patterns.',
            topics: ['Himalayan Rivers', 'Peninsular Rivers', 'Lakes'], order: 3, videoUrl: 'https://www.youtube.com/embed/JTVxuCGTxE8'
        },
        {
            id: 'ch_sst_9_4', subjectId: 'sst_icse', classLevel: '9',
            title: '4. Electoral Politics', description: 'Elections in a democracy.',
            topics: ['Elections', 'Voting', 'Election Commission'], order: 4, videoUrl: 'https://www.youtube.com/embed/py9OGrgUVXo'
        },
        {
            id: 'ch_sst_9_5', subjectId: 'sst_icse', classLevel: '9',
            title: '5. Poverty as a Challenge', description: 'Poverty in India and global trends.',
            topics: ['Poverty Line', 'Causes', 'Anti-poverty Measures'], order: 5, videoUrl: 'https://www.youtube.com/embed/az3ne9qb25U'
        },

        // --- Class 10 SST ---
        {
            id: 'ch_sst_10_1', subjectId: 'sst_icse', classLevel: '10',
            title: '1. Nationalism in Europe', description: 'Nationalism and the making of nations.',
            topics: ['French Revolution', 'Making of Germany', 'Visualising the Nation'], order: 1, videoUrl: 'https://www.youtube.com/embed/X7tRkH3UvWA'
        },
        {
            id: 'ch_sst_10_2', subjectId: 'sst_icse', classLevel: '10',
            title: '2. Resources and Development', description: 'Types of resources and sustainable development.',
            topics: ['Resources', 'Soil', 'Sustainable Development'], order: 2, videoUrl: 'https://www.youtube.com/embed/hy7gtSAH52M'
        },
        {
            id: 'ch_sst_10_3', subjectId: 'sst_icse', classLevel: '10',
            title: '3. Power Sharing', description: 'Power sharing in democracy (Belgium and Sri Lanka).',
            topics: ['Belgium', 'Sri Lanka', 'Forms of Power Sharing'], order: 3, videoUrl: 'https://www.youtube.com/embed/Z-DlBZ58JRo'
        },
        {
            id: 'ch_sst_10_4', subjectId: 'sst_icse', classLevel: '10',
            title: '4. Development', description: 'Concept of development, national development.',
            topics: ['Income', 'HDI', 'Sustainability'], order: 4, videoUrl: 'https://www.youtube.com/embed/CPrly1Dp_4o'
        },
        {
            id: 'ch_sst_10_5', subjectId: 'sst_icse', classLevel: '10',
            title: '5. Money and Credit', description: 'Modern forms of money, credit, SHGs.',
            topics: ['Money', 'Credit', 'Self Help Groups'], order: 5, videoUrl: 'https://www.youtube.com/embed/yr--rGEyKac'
        }
    ],

    quizzes: [
        // Class 6
        {
            chapterId: 'ch_sst_6_1', title: 'Quiz: What, Where, How and When?', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'People who study the objects of the past are called:', options: ['Scientists', 'Archaeologists', 'Doctors', 'Farmers'], correctAnswer: 'Archaeologists', points: 100 }
            ]
        },

        // --- Class 9 SST Quizzes ---
        {
            chapterId: 'ch_sst_9_1', title: 'Quiz: The French Revolution', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'French Revolution began in?', options: ['1787', '1789', '1791', '1799'], correctAnswer: '1789', points: 100 },
                { id: 2, type: 'mcq', question: 'Bastille was a?', options: ['Palace', 'Prison', 'Church', 'Market'], correctAnswer: 'Prison', points: 100 },
                { id: 3, type: 'mcq', question: 'Declaration of Rights of Man was adopted in?', options: ['1789', '1790', '1791', '1795'], correctAnswer: '1789', points: 100 },
                { id: 4, type: 'mcq', question: 'Jacobins were led by?', options: ['Mirabeau', 'Louis XVI', 'Robespierre', 'Napoleon'], correctAnswer: 'Robespierre', points: 100 },
                { id: 5, type: 'mcq', question: '\'Liberty, Equality, Fraternity\' belongs to?', options: ['American Revolution', 'French Revolution', 'Russian Revolution', 'Indian Independence'], correctAnswer: 'French Revolution', points: 100 }
            ]
        },
        {
            chapterId: 'ch_sst_9_2', title: 'Quiz: Socialism in Europe and the Russian Revolution', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Russian Revolution took place in?', options: ['1905', '1917', '1918', '1920'], correctAnswer: '1917', points: 100 },
                { id: 2, type: 'mcq', question: 'Bolsheviks were led by?', options: ['Stalin', 'Trotsky', 'Lenin', 'Marx'], correctAnswer: 'Lenin', points: 100 },
                { id: 3, type: 'mcq', question: 'The slogan \'Peace, Land and Bread\' was given by?', options: ['Stalin', 'Lenin', 'Tsar', 'Kerensky'], correctAnswer: 'Lenin', points: 100 },
                { id: 4, type: 'mcq', question: 'Duma was?', options: ['Russian army', 'Russian Parliament', 'Secret police', 'Newspaper'], correctAnswer: 'Russian Parliament', points: 100 },
                { id: 5, type: 'mcq', question: 'October Revolution is also called?', options: ['White Revolution', 'Green Revolution', 'Bolshevik Revolution', 'Red Revolution'], correctAnswer: 'Bolshevik Revolution', points: 100 }
            ]
        },
        {
            chapterId: 'ch_sst_9_3', title: 'Quiz: Drainage', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Longest river of India?', options: ['Godavari', 'Narmada', 'Ganga', 'Indus'], correctAnswer: 'Ganga', points: 100 },
                { id: 2, type: 'mcq', question: 'River Narmada flows into?', options: ['Bay of Bengal', 'Arabian Sea', 'Indian Ocean', 'Gulf of Kutch'], correctAnswer: 'Arabian Sea', points: 100 },
                { id: 3, type: 'mcq', question: 'Peninsular rivers are?', options: ['Snow-fed', 'Seasonal/Rain-fed', 'Glacier-fed', 'Both A & C'], correctAnswer: 'Seasonal/Rain-fed', points: 100 },
                { id: 4, type: 'mcq', question: 'Brahmaputra enters India through?', options: ['Arunachal Pradesh', 'Assam', 'Sikkim', 'West Bengal'], correctAnswer: 'Arunachal Pradesh', points: 100 },
                { id: 5, type: 'mcq', question: 'Wular lake is in?', options: ['Rajasthan', 'Uttar Pradesh', 'Jammu & Kashmir', 'Punjab'], correctAnswer: 'Jammu & Kashmir', points: 100 }
            ]
        },
        {
            chapterId: 'ch_sst_9_4', title: 'Quiz: Electoral Politics', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Minimum voting age in India?', options: ['16', '18', '21', '25'], correctAnswer: '18', points: 100 },
                { id: 2, type: 'mcq', question: 'ECI stands for?', options: ['Election Commission of India', 'Electoral Code of India', 'Economic Council of India', 'None'], correctAnswer: 'Election Commission of India', points: 100 },
                { id: 3, type: 'mcq', question: 'Model Code of Conduct applies during?', options: ['Budget', 'Elections', 'Parliament session', 'Census'], correctAnswer: 'Elections', points: 100 },
                { id: 4, type: 'mcq', question: 'First General Election in India?', options: ['1947', '1950', '1951-52', '1955'], correctAnswer: '1951-52', points: 100 },
                { id: 5, type: 'mcq', question: 'NOTA means?', options: ['Not on Ticket Again', 'None Of The Above', 'No Other Than Allowed', 'None'], correctAnswer: 'None Of The Above', points: 100 }
            ]
        },
        {
            chapterId: 'ch_sst_9_5', title: 'Quiz: Poverty as a Challenge', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Poverty line is based on?', options: ['Income only', 'Calorie intake', 'Land ownership', 'Education level'], correctAnswer: 'Calorie intake', points: 100 },
                { id: 2, type: 'mcq', question: 'MNREGA guarantees _____ days of employment?', options: ['50', '75', '100', '120'], correctAnswer: '100', points: 100 },
                { id: 3, type: 'mcq', question: 'Highest poverty in India is in?', options: ['Goa', 'Kerala', 'Chhattisgarh/Jharkhand', 'Punjab'], correctAnswer: 'Chhattisgarh/Jharkhand', points: 100 },
                { id: 4, type: 'mcq', question: 'Relative poverty refers to?', options: ['Absolute lack of income', 'Poverty compared to others', 'Rural poverty only', 'Urban poverty only'], correctAnswer: 'Poverty compared to others', points: 100 },
                { id: 5, type: 'mcq', question: 'HDI was introduced by?', options: ['World Bank', 'IMF', 'UNDP', 'WHO'], correctAnswer: 'UNDP', points: 100 }
            ]
        },

        // --- Class 10 SST Quizzes ---
        {
            chapterId: 'ch_sst_10_1', title: 'Quiz: Nationalism in Europe', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'German Unification was completed in?', options: ['1848', '1866', '1871', '1870'], correctAnswer: '1871', points: 100 },
                { id: 2, type: 'mcq', question: 'Zollverein was a?', options: ['Military alliance', 'Customs union', 'Political party', 'Treaty'], correctAnswer: 'Customs union', points: 100 },
                { id: 3, type: 'mcq', question: 'Who painted Allegory of Italy?', options: ['Sorrieu', 'Garibaldi', 'Mazzini', 'Bismarck'], correctAnswer: 'Sorrieu', points: 100 },
                { id: 4, type: 'mcq', question: 'Treaty of Vienna signed in?', options: ['1815', '1816', '1820', '1848'], correctAnswer: '1815', points: 100 },
                { id: 5, type: 'mcq', question: 'Who unified Germany?', options: ['Garibaldi', 'Mazzini', 'Bismarck', 'Napoleon'], correctAnswer: 'Bismarck', points: 100 }
            ]
        },
        {
            chapterId: 'ch_sst_10_2', title: 'Quiz: Resources and Development', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Isobar connects points of equal?', options: ['Temperature', 'Pressure', 'Altitude', 'Rainfall'], correctAnswer: 'Pressure', points: 100 },
                { id: 2, type: 'mcq', question: 'Biotic resources are?', options: ['Soil', 'Water', 'Forests', 'Minerals'], correctAnswer: 'Forests', points: 100 },
                { id: 3, type: 'mcq', question: 'Agenda 21 is related to?', options: ['Defence', 'Trade', 'Sustainable Development', 'Space'], correctAnswer: 'Sustainable Development', points: 100 },
                { id: 4, type: 'mcq', question: 'Which soil is best for cotton?', options: ['Red', 'Alluvial', 'Black', 'Laterite'], correctAnswer: 'Black', points: 100 },
                { id: 5, type: 'mcq', question: 'Resource planning was included in which Five Year Plan?', options: ['1st', '2nd', '5th', '6th'], correctAnswer: '1st', points: 100 }
            ]
        },
        {
            chapterId: 'ch_sst_10_3', title: 'Quiz: Power Sharing', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Power sharing is the spirit of?', options: ['Fascism', 'Democracy', 'Monarchy', 'Oligarchy'], correctAnswer: 'Democracy', points: 100 },
                { id: 2, type: 'mcq', question: 'Belgium has how many official languages?', options: ['1', '2', '3', '4'], correctAnswer: '3', points: 100 },
                { id: 3, type: 'mcq', question: 'Sri Lanka\'s dominant religion?', options: ['Hinduism', 'Islam', 'Buddhism', 'Christianity'], correctAnswer: 'Buddhism', points: 100 },
                { id: 4, type: 'mcq', question: 'Majoritarianism can lead to?', options: ['Peace', 'Civil war', 'Prosperity', 'Equality'], correctAnswer: 'Civil war', points: 100 },
                { id: 5, type: 'mcq', question: 'Community government in Belgium is elected by?', options: ['President', 'Language groups', 'Parliament', 'King'], correctAnswer: 'Language groups', points: 100 }
            ]
        },
        {
            chapterId: 'ch_sst_10_4', title: 'Quiz: Development', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'GDP stands for?', options: ['General Domestic Product', 'Gross Domestic Product', 'Growth Domestic Product', 'Global Development Plan'], correctAnswer: 'Gross Domestic Product', points: 100 },
                { id: 2, type: 'mcq', question: 'HDI includes?', options: ['Income only', 'Education only', 'Health, Education, Income', 'Health only'], correctAnswer: 'Health, Education, Income', points: 100 },
                { id: 3, type: 'mcq', question: 'Per capita income = ?', options: ['Total income / area', 'Total income / population', 'GDP / exports', 'None'], correctAnswer: 'Total income / population', points: 100 },
                { id: 4, type: 'mcq', question: 'Infant mortality rate is number of deaths per?', options: ['100 live births', '500 live births', '1000 live births', '10000 live births'], correctAnswer: '1000 live births', points: 100 },
                { id: 5, type: 'mcq', question: 'Which state has highest per capita income in India?', options: ['Bihar', 'Goa', 'Kerala', 'Punjab'], correctAnswer: 'Goa', points: 100 }
            ]
        },
        {
            chapterId: 'ch_sst_10_5', title: 'Quiz: Money and Credit', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'RBI controls money supply through?', options: ['Fiscal policy', 'Monetary policy', 'Trade policy', 'Foreign policy'], correctAnswer: 'Monetary policy', points: 100 },
                { id: 2, type: 'mcq', question: 'Barter system lacks?', options: ['Double coincidence of wants', 'Goods', 'Buyers', 'None'], correctAnswer: 'Double coincidence of wants', points: 100 },
                { id: 3, type: 'mcq', question: 'SHG stands for?', options: ['State Help Group', 'Self Help Group', 'Social Housing Group', 'None'], correctAnswer: 'Self Help Group', points: 100 },
                { id: 4, type: 'mcq', question: 'Collateral means?', options: ['Loan amount', 'Interest rate', 'Asset pledged for loan', 'Bank deposit'], correctAnswer: 'Asset pledged for loan', points: 100 },
                { id: 5, type: 'mcq', question: 'Formal source of credit excludes?', options: ['Banks', 'Cooperatives', 'Moneylenders', 'RBI'], correctAnswer: 'Moneylenders', points: 100 }
            ]
        }
    ]
};
