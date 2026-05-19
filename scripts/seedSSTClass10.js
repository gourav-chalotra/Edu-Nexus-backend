/**
 * Seed Script: Social Science Class 10 - All Chapter & Quiz Content
 *
 * This script ONLY adds/updates Social Science Class 10 content.
 * It does NOT wipe any existing data.
 *
 * Run with: node scripts/seedSSTClass10.js
 *
 * Chapters covered:
 *  ch_sst_10_1  - Nationalism in Europe          (History)
 *  ch_sst_10_2  - Resources and Development       (Geography)
 *  ch_sst_10_3  - Power Sharing                   (Political Science)
 *  ch_sst_10_4  - Development                     (Economics)
 *  ch_sst_10_5  - Money and Credit                (Economics)
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Subject from '../models/Subject.js';
import Chapter from '../models/Chapter.js';
import Quiz from '../models/Quiz.js';

dotenv.config();

// ----------------------------------------------------------------
// Helper: upsert a chapter (create or update)
// ----------------------------------------------------------------
async function upsertChapter(data) {
    let chapter = await Chapter.findOne({ subjectId: data.subjectId, id: data.id });
    if (chapter) {
        Object.assign(chapter, data);
        await chapter.save();
        console.log(`  ✅ Updated chapter : ${data.title}`);
    } else {
        await Chapter.create(data);
        console.log(`  ✅ Created chapter : ${data.title}`);
    }
}

// ----------------------------------------------------------------
// Helper: upsert a quiz (create or update)
// ----------------------------------------------------------------
async function upsertQuiz(data) {
    let quiz = await Quiz.findOne({ subjectId: data.subjectId, chapterId: data.chapterId });
    if (quiz) {
        Object.assign(quiz, data);
        await quiz.save();
        console.log(`  ✅ Updated quiz    : ${data.title}`);
    } else {
        await Quiz.create(data);
        console.log(`  ✅ Created quiz    : ${data.title}`);
    }
}

// ================================================================
const seedSSTClass10 = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/edu-nexus';
        await mongoose.connect(mongoURI);
        console.log('✅ Connected to MongoDB\n');

        // ----------------------------------------------------------------
        // 1. Ensure Social Science subject exists
        // ----------------------------------------------------------------
        const sstSubjectId = 'sst_icse';

        let sstSubject = await Subject.findOne({ id: sstSubjectId });
        if (!sstSubject) {
            sstSubject = await Subject.create({
                id: sstSubjectId,
                title: 'Social Science',
                description: 'History, Geography, Political Science & Economics for Classes 9-10',
                icon: '🌍',
                classes: ['9', '10'],
                stream: null,
                isActive: true
            });
            console.log('✅ Created Social Science subject\n');
        } else {
            console.log('ℹ️  Social Science subject already exists — skipping creation\n');
        }

        // ================================================================
        // CHAPTER 1 — Nationalism in Europe (History)
        // ================================================================
        console.log('── Chapter 1: Nationalism in Europe ──');
        await upsertChapter({
            id: 'ch_sst_10_1',
            subjectId: sstSubjectId,
            classLevel: '10',
            title: 'History Ch 1: Nationalism in Europe',
            description: 'Covers the rise of nationalism in Europe during the 19th century, the unification of Germany and Italy, the role of key figures like Bismarck, Garibaldi, and Mazzini, the Congress of Vienna (1815), Zollverein, and the concept of a nation-state.',
            topics: [
                'French Revolution & Nationalism',
                'Congress of Vienna (1815)',
                'Age of Revolutions (1830, 1848)',
                'Romantic Nationalism & Folk Culture',
                'Allegory of Nation (Marianne, Germania)',
                'Unification of Germany — Bismarck',
                'Zollverein (Customs Union)',
                'Unification of Italy — Garibaldi & Mazzini',
                'The Balkans & Nationalism',
                'Nation-State Concept'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/X7tRkH3UvWA?si=9R639GnmT1luQP7E',
                body: 'Nationalism swept through Europe in the 19th century, leading to the formation of new nation-states. Germany was unified under Bismarck (1871) and Italy under Garibaldi and Mazzini. The Congress of Vienna (1815) tried to restore the old order but could not suppress nationalist movements.'
            },
            teacherNote: 'Frederic Sorrieu\'s paintings of 1848 are a rich visual aid — use images in class. Bismarck\'s "Blood and Iron" policy vs Mazzini\'s idealism is a great compare-contrast exercise. The allegory figures — Marianne (France), Germania (Germany) — often appear in 1-mark questions.',
            order: 1,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sstSubjectId,
            chapterId: 'ch_sst_10_1',
            title: 'Quiz: Nationalism in Europe',
            description: 'Test your knowledge of German and Italian unification, the Congress of Vienna, Zollverein, and key nationalist figures.',
            gameType: 'shooter',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: 'German Unification was completed in?',
                    options: ['1848', '1866', '1871', '1870'],
                    correctAnswer: '1871',
                    points: 100,
                    explanation: 'German Unification was completed in 1871 when the Prussian King Wilhelm I was proclaimed German Emperor at the Palace of Versailles after the Franco-Prussian War.'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'Zollverein was a?',
                    options: ['Military alliance', 'Customs union', 'Political party', 'Treaty'],
                    correctAnswer: 'Customs union',
                    points: 100,
                    explanation: 'Zollverein (1834) was a customs union formed by Prussia that abolished tariff barriers between German states and unified the German economy — an important step towards political unification.'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: 'Who painted "Allegory of Italy"?',
                    options: ['Sorrieu', 'Garibaldi', 'Mazzini', 'Bismarck'],
                    correctAnswer: 'Sorrieu',
                    points: 100,
                    explanation: 'Frederic Sorrieu, a French artist, created a series of paintings in 1848 visualising a utopian world of democratic and social republics, including the Allegory of Italy (Germania).'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: 'Treaty of Vienna signed in?',
                    options: ['1815', '1816', '1820', '1848'],
                    correctAnswer: '1815',
                    points: 100,
                    explanation: 'The Congress of Vienna (1815) was convened by European powers after Napoleon\'s defeat. The resulting Treaty of Vienna tried to undo the changes made by Napoleon and restore conservative regimes.'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: 'Who unified Germany?',
                    options: ['Garibaldi', 'Mazzini', 'Bismarck', 'Napoleon'],
                    correctAnswer: 'Bismarck',
                    points: 100,
                    explanation: 'Otto von Bismarck, the Chief Minister of Prussia, unified Germany through his "Blood and Iron" policy using a series of wars (with Denmark, Austria, and France) between 1864–1871.'
                }
            ]
        });

        // ================================================================
        // CHAPTER 2 — Resources and Development (Geography)
        // ================================================================
        console.log('\n── Chapter 2: Resources and Development ──');
        await upsertChapter({
            id: 'ch_sst_10_2',
            subjectId: sstSubjectId,
            classLevel: '10',
            title: 'Geography Ch 1: Resources and Development',
            description: 'Covers classification of resources (natural, human, man-made; renewable, non-renewable; biotic, abiotic), resource planning in India, types of soil (alluvial, black, red, laterite), soil erosion, and the concept of sustainable development and Agenda 21.',
            topics: [
                'Classification of Resources',
                'Biotic & Abiotic Resources',
                'Renewable & Non-Renewable Resources',
                'Stock, Reserve, Potential Resources',
                'Resource Planning in India',
                'Five Year Plans & Resources',
                'Types of Soil (Alluvial, Black, Red, Laterite)',
                'Soil Erosion & Conservation',
                'Sustainable Development',
                'Agenda 21'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/hy7gtSAH52M?si=wFOn3mvp0FAGuf-4',
                body: 'Resources are everything available in our environment that can be used to satisfy our needs. Sustainable use of resources ensures their availability for future generations. India\'s diverse soil types make different regions suitable for different crops.'
            },
            teacherNote: 'The soil map of India must be studied — black soil (Deccan Plateau, best for cotton), alluvial soil (Indo-Gangetic plain, most fertile), laterite soil (heavy rainfall areas, poor). Agenda 21 was adopted at the Rio Earth Summit (1992). Resource planning was included in India\'s First Five Year Plan.',
            order: 2,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sstSubjectId,
            chapterId: 'ch_sst_10_2',
            title: 'Quiz: Resources and Development',
            description: 'Test your knowledge of resource types, soil classification, Agenda 21, and resource planning in India.',
            gameType: 'memory',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: 'Isobar connects points of equal?',
                    options: ['Temperature', 'Pressure', 'Altitude', 'Rainfall'],
                    correctAnswer: 'Pressure',
                    points: 100,
                    explanation: 'An isobar is a line on a map connecting places of equal atmospheric pressure. (Isotherm = temperature; Contour = altitude; Isohyet = rainfall.)'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'Biotic resources are?',
                    options: ['Soil', 'Water', 'Forests', 'Minerals'],
                    correctAnswer: 'Forests',
                    points: 100,
                    explanation: 'Biotic resources are obtained from the biosphere (living organisms) — e.g., forests, wildlife, fish. Abiotic resources are non-living — e.g., soil, water, minerals.'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: 'Agenda 21 is related to?',
                    options: ['Defence', 'Trade', 'Sustainable Development', 'Space'],
                    correctAnswer: 'Sustainable Development',
                    points: 100,
                    explanation: 'Agenda 21 is a non-binding UN resolution adopted at the Rio Earth Summit (1992) as a comprehensive plan of action to achieve sustainable development globally.'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: 'Which soil is best for cotton?',
                    options: ['Red', 'Alluvial', 'Black', 'Laterite'],
                    correctAnswer: 'Black',
                    points: 100,
                    explanation: 'Black soil (Regur soil), found in the Deccan Plateau, is ideal for cotton cultivation because it retains moisture for long periods and is rich in calcium carbonate, magnesium, and potash.'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: 'Resource planning was included in which Five Year Plan?',
                    options: ['1st', '2nd', '5th', '6th'],
                    correctAnswer: '1st',
                    points: 100,
                    explanation: 'Resource planning was included in India\'s First Five Year Plan (1951–56), recognising from the very beginning that planned and equitable distribution of resources is essential for national development.'
                }
            ]
        });

        // ================================================================
        // CHAPTER 3 — Power Sharing (Political Science)
        // ================================================================
        console.log('\n── Chapter 3: Power Sharing ──');
        await upsertChapter({
            id: 'ch_sst_10_3',
            subjectId: sstSubjectId,
            classLevel: '10',
            title: 'Political Science Ch 1: Power Sharing',
            description: 'Covers the concept and importance of power sharing in a democracy, the Belgian model of power sharing (linguistic communities), the Sri Lanka model and majoritarianism, the differences between prudential and moral reasons for power sharing, and forms of power sharing.',
            topics: [
                'Why Power Sharing is Needed',
                'Belgium — Linguistic Communities',
                'French & Dutch Speakers in Belgium',
                'Community Government in Belgium',
                'Sri Lanka — Sinhala Majority & Majoritarianism',
                'Ethnic Conflict in Sri Lanka',
                'Prudential Reasons for Power Sharing',
                'Moral Reasons for Power Sharing',
                'Forms of Power Sharing',
                'Federalism & Separation of Powers'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/Z-DlBZ58JRo?si=iFSxE42NwsE4r157',
                body: 'Power sharing means distributing power among different organs of government, different levels of government, and different social groups to prevent concentration of power in any one hand. Belgium successfully avoided civil conflict through accommodation; Sri Lanka\'s majoritarianism led to a civil war.'
            },
            teacherNote: 'Belgium (accommodation) vs Sri Lanka (majoritarianism) is the core compare-contrast of this chapter — use a T-table. Community government in Belgium represents every major linguistic group — this is a unique federal arrangement. Belgium has 3 official languages: Dutch, French, German.',
            order: 3,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sstSubjectId,
            chapterId: 'ch_sst_10_3',
            title: 'Quiz: Power Sharing',
            description: 'Test your knowledge of the Belgium model, Sri Lanka\'s majoritarianism, community government, and forms of power sharing.',
            gameType: 'shooter',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: 'Power sharing is the spirit of?',
                    options: ['Fascism', 'Democracy', 'Monarchy', 'Oligarchy'],
                    correctAnswer: 'Democracy',
                    points: 100,
                    explanation: 'Power sharing is fundamental to democracy. It prevents the concentration of power and ensures that different groups have a voice in governance, reducing the risk of tyranny and conflict.'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'Belgium has how many official languages?',
                    options: ['1', '2', '3', '4'],
                    correctAnswer: '3',
                    points: 100,
                    explanation: 'Belgium recognises three official languages: Dutch (Flemish, spoken in Flanders), French (spoken in Wallonia), and German (spoken in the east). This linguistic diversity shaped its unique power-sharing model.'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: 'Sri Lanka\'s dominant religion?',
                    options: ['Hinduism', 'Islam', 'Buddhism', 'Christianity'],
                    correctAnswer: 'Buddhism',
                    points: 100,
                    explanation: 'Sri Lanka\'s Sinhala majority (74%) is predominantly Buddhist. The Sri Lankan Tamils (18%) are mostly Hindu. The Sinhala Only Act (1956) and other majoritarian policies marginalised Tamils and led to civil conflict.'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: 'Majoritarianism can lead to?',
                    options: ['Peace', 'Civil war', 'Prosperity', 'Equality'],
                    correctAnswer: 'Civil war',
                    points: 100,
                    explanation: 'Sri Lanka\'s majoritarian policies (privileging Sinhala language and Buddhism) led to the marginalisation of Tamils, ultimately resulting in a bitter civil war that lasted nearly 30 years (1983–2009).'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: 'Community government in Belgium is elected by?',
                    options: ['President', 'Language groups', 'Parliament', 'King'],
                    correctAnswer: 'Language groups',
                    points: 100,
                    explanation: 'The community government in Belgium is elected by people belonging to one language community (Dutch, French, or German), regardless of where they live in the country. It has power over cultural, educational, and language matters.'
                }
            ]
        });

        // ================================================================
        // CHAPTER 4 — Development (Economics)
        // ================================================================
        console.log('\n── Chapter 4: Development ──');
        await upsertChapter({
            id: 'ch_sst_10_4',
            subjectId: sstSubjectId,
            classLevel: '10',
            title: 'Economics Ch 1: Development',
            description: 'Covers the concept of development, different development goals of different people, national development, how to compare countries (income, HDI, infant mortality rate, literacy rate), the World Bank\'s development report classification, and Goa having the highest per capita income in India.',
            topics: [
                'Development & Development Goals',
                'Average Income & Per Capita Income',
                'Limitations of Per Capita Income',
                'Human Development Index (HDI)',
                'Health: Infant Mortality Rate (IMR)',
                'Education: Literacy Rate & Net Attendance Ratio',
                'HDI Components: Health, Education, Income',
                'World Bank Classification of Countries',
                'Sustainable Development',
                'Per Capita Income — Indian States (Goa highest)'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/CPrly1Dp_4o?si=VvAL-eDhl3jkMaVe',
                body: 'Development means different things to different people. Economically, countries are compared using per capita income (GDP per person). However, HDI provides a more comprehensive measure by also considering health and education indicators.'
            },
            teacherNote: 'Infant Mortality Rate = deaths of children under 1 year per 1000 live births — this exact definition is tested every year. Goa = highest per capita income in India. HDI uses three dimensions: health (life expectancy), education (mean & expected years), income (GNI per capita). UNDP publishes HDI annually.',
            order: 4,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sstSubjectId,
            chapterId: 'ch_sst_10_4',
            title: 'Quiz: Development',
            description: 'Test your knowledge of GDP, HDI, per capita income, infant mortality rate, and development indicators.',
            gameType: 'memory',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: 'GDP stands for?',
                    options: ['General Domestic Product', 'Gross Domestic Product', 'Growth Domestic Product', 'Global Development Plan'],
                    correctAnswer: 'Gross Domestic Product',
                    points: 100,
                    explanation: 'GDP (Gross Domestic Product) is the total monetary value of all final goods and services produced within a country\'s borders in a specific time period (usually a year).'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'HDI includes?',
                    options: ['Income only', 'Education only', 'Health, Education, Income', 'Health only'],
                    correctAnswer: 'Health, Education, Income',
                    points: 100,
                    explanation: 'The Human Development Index (HDI) measures three dimensions: (1) Health — life expectancy at birth, (2) Education — mean & expected years of schooling, (3) Income — GNI per capita (PPP).'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: 'Per capita income = ?',
                    options: ['Total income / area', 'Total income / population', 'GDP / exports', 'None'],
                    correctAnswer: 'Total income / population',
                    points: 100,
                    explanation: 'Per capita income = Total national income ÷ Total population. It gives the average income per person and is used to compare the standard of living across countries and states.'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: 'Infant mortality rate is number of deaths per?',
                    options: ['100 live births', '500 live births', '1000 live births', '10000 live births'],
                    correctAnswer: '1000 live births',
                    points: 100,
                    explanation: 'Infant Mortality Rate (IMR) = Number of children who die before the age of 1 year per 1000 live births in a given year. It is a key indicator of healthcare quality.'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: 'Which state has highest per capita income in India?',
                    options: ['Bihar', 'Goa', 'Kerala', 'Punjab'],
                    correctAnswer: 'Goa',
                    points: 100,
                    explanation: 'Goa consistently has the highest per capita income among Indian states due to its thriving tourism, mining, and service industries despite being one of India\'s smallest states.'
                }
            ]
        });

        // ================================================================
        // CHAPTER 5 — Money and Credit (Economics)
        // ================================================================
        console.log('\n── Chapter 5: Money and Credit ──');
        await upsertChapter({
            id: 'ch_sst_10_5',
            subjectId: sstSubjectId,
            classLevel: '10',
            title: 'Economics Ch 3: Money and Credit',
            description: 'Covers the barter system and its limitations, functions of money, formal and informal credit sectors in India, the role of the Reserve Bank of India (RBI), Self Help Groups (SHGs), collateral, terms of credit, and the need for formal credit for development.',
            topics: [
                'Barter System & Its Limitations',
                'Double Coincidence of Wants',
                'Functions of Money',
                'Formal Credit: Banks & Cooperatives',
                'Informal Credit: Moneylenders, Landlords',
                'Reserve Bank of India (RBI)',
                'Monetary Policy',
                'Self Help Groups (SHGs)',
                'Collateral',
                'Terms of Credit',
                'Credit & Development'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/yr--rGEyKac?si=bX1iibr46_FuP68l',
                body: 'Money solves the problem of double coincidence of wants in a barter system. Credit (loans) is essential for development, but informal credit (moneylenders) often traps people in debt. Formal credit institutions like banks and SHGs provide affordable credit.'
            },
            teacherNote: 'Formal vs Informal credit sources is the most tested section — students must categorise each source correctly. The RBI controls money supply through monetary policy (repo rate, CRR, SLR). SHGs are mostly formed by rural women — 15–20 members — they save together and lend to each other. Collateral = asset pledged as security for a loan.',
            order: 5,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sstSubjectId,
            chapterId: 'ch_sst_10_5',
            title: 'Quiz: Money and Credit',
            description: 'Test your knowledge of barter system, RBI, SHGs, collateral, and formal vs informal credit.',
            gameType: 'shooter',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: 'RBI controls money supply through?',
                    options: ['Fiscal policy', 'Monetary policy', 'Trade policy', 'Foreign policy'],
                    correctAnswer: 'Monetary policy',
                    points: 100,
                    explanation: 'The Reserve Bank of India (RBI) regulates the money supply and credit flow in the economy through monetary policy tools such as the repo rate, reverse repo rate, CRR (Cash Reserve Ratio), and SLR (Statutory Liquidity Ratio).'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'Barter system lacks?',
                    options: ['Double coincidence of wants', 'Goods', 'Buyers', 'None'],
                    correctAnswer: 'Double coincidence of wants',
                    points: 100,
                    explanation: 'The barter system requires both parties to want exactly what the other has to offer — called double coincidence of wants. This made trade very difficult and inefficient, which is why money was developed.'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: 'SHG stands for?',
                    options: ['State Help Group', 'Self Help Group', 'Social Housing Group', 'None'],
                    correctAnswer: 'Self Help Group',
                    points: 100,
                    explanation: 'Self Help Groups (SHGs) are small groups (usually 15–20 rural women) who save money regularly and lend to each other at low interest. They help rural poor access formal-style credit without collateral.'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: 'Collateral means?',
                    options: ['Loan amount', 'Interest rate', 'Asset pledged for loan', 'Bank deposit'],
                    correctAnswer: 'Asset pledged for loan',
                    points: 100,
                    explanation: 'Collateral is an asset (land, building, vehicle, livestock, savings) that a borrower pledges as security to the lender. If the borrower fails to repay, the lender can sell the collateral to recover the loan.'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: 'Formal source of credit excludes?',
                    options: ['Banks', 'Cooperatives', 'Moneylenders', 'RBI'],
                    correctAnswer: 'Moneylenders',
                    points: 100,
                    explanation: 'Formal sources of credit are regulated by the RBI and include banks, cooperatives, and NBFCs. Moneylenders, landlords, traders, relatives, and friends are informal sources — unregulated and often charge very high interest rates.'
                }
            ]
        });

        // ================================================================
        // Done
        // ================================================================
        console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('🎉 All Social Science Class 10 chapters & quizzes seeded successfully!');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📚 Subject : Social Science (sst_icse) — Class 10');
        console.log('📖 Chapters added/updated:');
        console.log('   ch_sst_10_1  History   : Nationalism in Europe');
        console.log('   ch_sst_10_2  Geography : Resources and Development');
        console.log('   ch_sst_10_3  Pol. Sci. : Power Sharing');
        console.log('   ch_sst_10_4  Economics : Development');
        console.log('   ch_sst_10_5  Economics : Money and Credit');
        console.log('🎮 Each chapter has a 5-question MCQ quiz.');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding Social Science Class 10 data:', error.message);
        console.error(error);
        process.exit(1);
    }
};

seedSSTClass10();
