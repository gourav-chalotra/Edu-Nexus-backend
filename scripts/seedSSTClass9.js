/**
 * Seed Script: Social Science Class 9 - All Chapter & Quiz Content
 *
 * This script ONLY adds/updates Social Science Class 9 content.
 * It does NOT wipe any existing data.
 *
 * Run with: node scripts/seedSSTClass9.js
 *
 * Chapters covered:
 *  ch_sst_9_1  - The French Revolution
 *  ch_sst_9_2  - Socialism in Europe and the Russian Revolution
 *  ch_sst_9_3  - Drainage (Geography)
 *  ch_sst_9_4  - Electoral Politics
 *  ch_sst_9_5  - Poverty as a Challenge
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
const seedSSTClass9 = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/edu-nexus';
        await mongoose.connect(mongoURI);
        console.log('✅ Connected to MongoDB\n');

        // ----------------------------------------------------------------
        // 1. Ensure Social Science subject exists (classes 9 & 10)
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
        // CHAPTER 1 — The French Revolution (History)
        // ================================================================
        console.log('── Chapter 1: The French Revolution ──');
        await upsertChapter({
            id: 'ch_sst_9_1',
            subjectId: sstSubjectId,
            classLevel: '9',
            title: 'History Ch 1: The French Revolution',
            description: 'Covers the causes, events, and outcomes of the French Revolution (1789), including the storming of the Bastille, the Declaration of Rights of Man, the Reign of Terror under Robespierre, and the revolutionary ideals of Liberty, Equality, and Fraternity.',
            topics: [
                'Causes of the French Revolution',
                'Three Estates of French Society',
                'Financial Crisis of France',
                'Storming of the Bastille (1789)',
                'Declaration of Rights of Man and Citizen',
                'Constitutional Monarchy',
                'Jacobins & Reign of Terror',
                'Robespierre',
                'Directory & Napoleon',
                'Legacy: Liberty, Equality, Fraternity'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/PJaUqX9KQW0?si=_kGB6NfAK8Wcqmw5',
                body: 'The French Revolution (1789–1799) was a period of radical political and social transformation in France that overthrew the monarchy, established a republic, and culminated in Napoleon\'s rise to power. Its ideals influenced modern democracies worldwide.'
            },
            teacherNote: 'Use a timeline of key events (1789–1799). The three Estates (clergy, nobility, commoners) and the economic crisis are important causes. The Declaration of Rights of Man is a foundational document — compare with India\'s Fundamental Rights.',
            order: 1,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sstSubjectId,
            chapterId: 'ch_sst_9_1',
            title: 'Quiz: The French Revolution',
            description: 'Test your knowledge of the causes, events, and key figures of the French Revolution.',
            gameType: 'shooter',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: 'French Revolution began in?',
                    options: ['1787', '1789', '1791', '1799'],
                    correctAnswer: '1789',
                    points: 100,
                    explanation: 'The French Revolution began in 1789 with the storming of the Bastille prison on 14 July 1789, now celebrated as Bastille Day.'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'Bastille was a?',
                    options: ['Palace', 'Prison', 'Church', 'Market'],
                    correctAnswer: 'Prison',
                    points: 100,
                    explanation: 'The Bastille was a state prison in Paris. Its storming on 14 July 1789 by revolutionaries became the iconic start of the French Revolution.'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: 'Declaration of Rights of Man was adopted in?',
                    options: ['1789', '1790', '1791', '1795'],
                    correctAnswer: '1789',
                    points: 100,
                    explanation: 'The Declaration of the Rights of Man and of the Citizen was adopted by the National Constituent Assembly on 26 August 1789.'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: 'Jacobins were led by?',
                    options: ['Mirabeau', 'Louis XVI', 'Robespierre', 'Napoleon'],
                    correctAnswer: 'Robespierre',
                    points: 100,
                    explanation: 'Maximilien Robespierre led the Jacobin Club, a radical political group. He was the key figure behind the Reign of Terror (1793–94).'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: '"Liberty, Equality, Fraternity" belongs to?',
                    options: ['American Revolution', 'French Revolution', 'Russian Revolution', 'Indian Independence'],
                    correctAnswer: 'French Revolution',
                    points: 100,
                    explanation: '"Liberté, Égalité, Fraternité" (Liberty, Equality, Fraternity) is the national motto of France, born from the ideals of the French Revolution.'
                }
            ]
        });

        // ================================================================
        // CHAPTER 2 — Socialism in Europe and the Russian Revolution (History)
        // ================================================================
        console.log('\n── Chapter 2: Socialism in Europe and the Russian Revolution ──');
        await upsertChapter({
            id: 'ch_sst_9_2',
            subjectId: sstSubjectId,
            classLevel: '9',
            title: 'History Ch 2: Socialism in Europe and the Russian Revolution',
            description: 'Covers the rise of socialist ideologies in Europe, the conditions in Tsarist Russia, the 1905 Revolution, the February and October Revolutions of 1917, the role of Lenin and the Bolsheviks, and the formation of the USSR.',
            topics: [
                'Liberalism, Conservatism & Radicalism',
                'Socialism & Karl Marx',
                'Tsarist Russia & Tsar Nicholas II',
                'Bloody Sunday & Revolution of 1905',
                'Duma (Russian Parliament)',
                'February Revolution 1917',
                'Lenin & the Bolsheviks',
                'October/Bolshevik Revolution 1917',
                '"Peace, Land, Bread" Slogan',
                'Formation of USSR'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/V1K-bhiaV9w?si=wib0EYfARky0y1bT',
                body: 'The Russian Revolution of 1917 overthrew the Tsar and brought the Bolsheviks (led by Lenin) to power, establishing the world\'s first communist state. It was inspired by socialist ideals and fuelled by war, famine, and social inequality.'
            },
            teacherNote: 'Distinguish clearly between the February Revolution (Tsar overthrown → Provisional Government) and October Revolution (Bolsheviks overthrow Provisional Government). The "Peace, Land, Bread" slogan directly addressed soldiers, peasants, and workers — connect each group to its demand.',
            order: 2,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sstSubjectId,
            chapterId: 'ch_sst_9_2',
            title: 'Quiz: Socialism in Europe and the Russian Revolution',
            description: 'Test your knowledge of the Russian Revolution, Bolsheviks, Lenin, and the Duma.',
            gameType: 'memory',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: 'Russian Revolution took place in?',
                    options: ['1905', '1917', '1918', '1920'],
                    correctAnswer: '1917',
                    points: 100,
                    explanation: 'The Russian Revolution of 1917 had two phases: the February Revolution (Tsar abdicated) and the October/Bolshevik Revolution (Bolsheviks seized power).'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'Bolsheviks were led by?',
                    options: ['Stalin', 'Trotsky', 'Lenin', 'Marx'],
                    correctAnswer: 'Lenin',
                    points: 100,
                    explanation: 'Vladimir Ilyich Lenin led the Bolshevik party and masterminded the October Revolution of 1917, becoming the first head of Soviet Russia.'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: 'The slogan "Peace, Land and Bread" was given by?',
                    options: ['Stalin', 'Lenin', 'Tsar', 'Kerensky'],
                    correctAnswer: 'Lenin',
                    points: 100,
                    explanation: 'Lenin\'s slogan "Peace, Land, Bread" addressed the three major demands: end to WWI (soldiers), land redistribution (peasants), and food supply (workers).'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: 'Duma was?',
                    options: ['Russian army', 'Russian Parliament', 'Secret police', 'Newspaper'],
                    correctAnswer: 'Russian Parliament',
                    points: 100,
                    explanation: 'The Duma was the Russian Parliament established after the 1905 Revolution. Tsar Nicholas II had limited power to dissolve it.'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: 'October Revolution is also called?',
                    options: ['White Revolution', 'Green Revolution', 'Bolshevik Revolution', 'Red Revolution'],
                    correctAnswer: 'Bolshevik Revolution',
                    points: 100,
                    explanation: 'The October Revolution (November 1917 in the Gregorian calendar) is also called the Bolshevik Revolution because the Bolshevik party under Lenin led the uprising.'
                }
            ]
        });

        // ================================================================
        // CHAPTER 3 — Drainage (Geography)
        // ================================================================
        console.log('\n── Chapter 3: Drainage (Geography) ──');
        await upsertChapter({
            id: 'ch_sst_9_3',
            subjectId: sstSubjectId,
            classLevel: '9',
            title: 'Geography Ch 3: Drainage',
            description: 'Covers drainage systems of India including the Himalayan and Peninsular river systems, important rivers (Ganga, Brahmaputra, Narmada, Godavari, Krishna), river basins, lakes, and the role of rivers in India\'s economy and culture.',
            topics: [
                'Drainage Basin & Watershed',
                'Himalayan Rivers (Indus, Ganga, Brahmaputra)',
                'Peninsular Rivers (Narmada, Tapi, Godavari, Krishna, Kaveri)',
                'Ganga River System',
                'Brahmaputra & Its Course',
                'Narmada — West-Flowing River',
                'Seasonal vs Perennial Rivers',
                'Important Lakes (Dal, Wular, Chilika, Vembanad)',
                'River Pollution & Conservation'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/JTVxuCGTxE8?si=nXlkvjy7e-CjmpeT',
                body: 'India\'s drainage system consists of numerous rivers divided into Himalayan rivers (perennial, fed by glaciers and rain) and Peninsular rivers (seasonal, rain-fed). They are vital for agriculture, drinking water, and India\'s cultural heritage.'
            },
            teacherNote: 'Use an outline map of India. Students must know which rivers drain into the Arabian Sea vs Bay of Bengal. West-flowing Peninsular rivers (Narmada, Tapi) vs east-flowing ones is a key distinguishing concept. Wular lake = J&K, Chilika = Odisha, Dal = J&K.',
            order: 3,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sstSubjectId,
            chapterId: 'ch_sst_9_3',
            title: 'Quiz: Drainage (Geography)',
            description: 'Test your knowledge of India\'s river systems, lakes, and drainage patterns.',
            gameType: 'shooter',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: 'Longest river of India?',
                    options: ['Godavari', 'Narmada', 'Ganga', 'Indus'],
                    correctAnswer: 'Ganga',
                    points: 100,
                    explanation: 'The Ganga is the longest river entirely in India (~2525 km). The Indus is longer overall but most of it flows through Pakistan.'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'River Narmada flows into?',
                    options: ['Bay of Bengal', 'Arabian Sea', 'Indian Ocean', 'Gulf of Kutch'],
                    correctAnswer: 'Arabian Sea',
                    points: 100,
                    explanation: 'The Narmada is a west-flowing Peninsular river that drains into the Arabian Sea through the Gulf of Khambhat (Cambay).'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: 'Peninsular rivers are?',
                    options: ['Snow-fed', 'Seasonal/Rain-fed', 'Glacier-fed', 'Both A & C'],
                    correctAnswer: 'Seasonal/Rain-fed',
                    points: 100,
                    explanation: 'Peninsular rivers depend entirely on rainfall (monsoon), making them seasonal. Himalayan rivers are perennial because they are glacier-fed as well.'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: 'Brahmaputra enters India through?',
                    options: ['Arunachal Pradesh', 'Assam', 'Sikkim', 'West Bengal'],
                    correctAnswer: 'Arunachal Pradesh',
                    points: 100,
                    explanation: 'The Brahmaputra (called Tsangpo in Tibet) enters India through Arunachal Pradesh, where it is known as Dihang, before flowing through Assam.'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: 'Wular lake is in?',
                    options: ['Rajasthan', 'Uttar Pradesh', 'Jammu & Kashmir', 'Punjab'],
                    correctAnswer: 'Jammu & Kashmir',
                    points: 100,
                    explanation: 'Wular Lake in Jammu & Kashmir is one of the largest freshwater lakes in Asia, formed in a tectonically-controlled depression.'
                }
            ]
        });

        // ================================================================
        // CHAPTER 4 — Electoral Politics (Political Science)
        // ================================================================
        console.log('\n── Chapter 4: Electoral Politics ──');
        await upsertChapter({
            id: 'ch_sst_9_4',
            subjectId: sstSubjectId,
            classLevel: '9',
            title: 'Political Science Ch 3: Electoral Politics',
            description: 'Covers why we need elections, how Indian elections work, the Election Commission of India, the Model Code of Conduct, Universal Adult Franchise, voting age, NOTA, and a brief history of Indian general elections.',
            topics: [
                'Why Elections Are Needed',
                'Universal Adult Franchise',
                'Election Commission of India (ECI)',
                'Model Code of Conduct',
                'Constituencies & Reserved Seats',
                'Voting Age (18 years)',
                'First Past the Post System',
                'History of Indian General Elections',
                'NOTA (None Of The Above)',
                'Free & Fair Elections'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/py9OGrgUVXo?si=m70VsTWC07ero4VW',
                body: 'Elections are the foundation of democracy. In India, the Election Commission of India (ECI) is an independent constitutional body that conducts free and fair elections. Every citizen above 18 years has the right to vote.'
            },
            teacherNote: 'Connect ECI\'s role to the Indian Constitution (Art. 324). The Model Code of Conduct is enforceable only during election period — a frequent MCQ trap. NOTA was introduced by the Supreme Court in 2013. First General Election (1951-52) details are commonly tested.',
            order: 4,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sstSubjectId,
            chapterId: 'ch_sst_9_4',
            title: 'Quiz: Electoral Politics',
            description: 'Test your knowledge of Indian elections, ECI, voting age, NOTA, and the Model Code of Conduct.',
            gameType: 'memory',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: 'Minimum voting age in India?',
                    options: ['16', '18', '21', '25'],
                    correctAnswer: '18',
                    points: 100,
                    explanation: 'The 61st Constitutional Amendment (1988) lowered the voting age from 21 to 18 years, effective from 1989.'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'ECI stands for?',
                    options: ['Election Commission of India', 'Electoral Code of India', 'Economic Council of India', 'None'],
                    correctAnswer: 'Election Commission of India',
                    points: 100,
                    explanation: 'The Election Commission of India (ECI) is an autonomous constitutional authority established under Article 324. It supervises and controls all elections in India.'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: 'Model Code of Conduct applies during?',
                    options: ['Budget', 'Elections', 'Parliament session', 'Census'],
                    correctAnswer: 'Elections',
                    points: 100,
                    explanation: 'The Model Code of Conduct (MCC) is a set of guidelines issued by the ECI that comes into force as soon as the election schedule is announced and remains in effect until results are declared.'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: 'First General Election in India?',
                    options: ['1947', '1950', '1951-52', '1955'],
                    correctAnswer: '1951-52',
                    points: 100,
                    explanation: 'India\'s first general election was held in 1951-52 (spanning from Oct 1951 to Feb 1952), resulting in the Indian National Congress winning with Jawaharlal Nehru as PM.'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: 'NOTA means?',
                    options: ['Not on Ticket Again', 'None Of The Above', 'No Other Than Allowed', 'None'],
                    correctAnswer: 'None Of The Above',
                    points: 100,
                    explanation: 'NOTA (None Of The Above) was introduced following a Supreme Court judgment in 2013, allowing voters to reject all candidates without spoiling their ballot.'
                }
            ]
        });

        // ================================================================
        // CHAPTER 5 — Poverty as a Challenge (Economics)
        // ================================================================
        console.log('\n── Chapter 5: Poverty as a Challenge ──');
        await upsertChapter({
            id: 'ch_sst_9_5',
            subjectId: sstSubjectId,
            classLevel: '9',
            title: 'Economics Ch 3: Poverty as a Challenge',
            description: 'Covers the concept of poverty, poverty line estimation using calorie intake, absolute and relative poverty, vulnerable groups, inter-state disparities in India, global poverty trends, and government anti-poverty schemes like MNREGA and PMGSY.',
            topics: [
                'Definition of Poverty',
                'Poverty Line (Calorie-based)',
                'Absolute vs Relative Poverty',
                'Poverty in India — State-wise',
                'Social Groups Vulnerable to Poverty',
                'Global Poverty Trends',
                'MNREGA (100 days employment)',
                'PMGSY, Antyodaya Anna Yojana',
                'Human Development Index (HDI)',
                'UNDP & World Bank Measures'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/az3ne9qb25U?si=ZX3Mq2foTdzvx1T7',
                body: 'Poverty is a state where a person is unable to fulfil their basic needs — food, clothing, and shelter. India uses a calorie-based poverty line. Despite economic growth, poverty remains a major challenge with significant inter-state disparities.'
            },
            teacherNote: 'The calorie threshold (2400 kcal rural / 2100 kcal urban) for the poverty line is a standard MCQ. MNREGA = 100 days guaranteed employment. HDI introduced by UNDP (Mahbub ul Haq & Amartya Sen). States with high poverty: Chhattisgarh, Jharkhand, Odisha — ask students to link with mineral wealth paradox.',
            order: 5,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sstSubjectId,
            chapterId: 'ch_sst_9_5',
            title: 'Quiz: Poverty as a Challenge',
            description: 'Test your knowledge of poverty line, MNREGA, HDI, UNDP, and inter-state poverty in India.',
            gameType: 'shooter',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: 'Poverty line is based on?',
                    options: ['Income only', 'Calorie intake', 'Land ownership', 'Education level'],
                    correctAnswer: 'Calorie intake',
                    points: 100,
                    explanation: 'India\'s poverty line is based on calorie intake: 2400 kcal/day (rural) and 2100 kcal/day (urban). Those unable to meet this minimum are considered below the poverty line (BPL).'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'MNREGA guarantees __ days of employment?',
                    options: ['50', '75', '100', '120'],
                    correctAnswer: '100',
                    points: 100,
                    explanation: 'MNREGA (Mahatma Gandhi National Rural Employment Guarantee Act, 2005) guarantees 100 days of wage employment per year to every rural household whose adult members volunteer for unskilled manual work.'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: 'Highest poverty in India is in?',
                    options: ['Goa', 'Kerala', 'Chhattisgarh/Jharkhand', 'Punjab'],
                    correctAnswer: 'Chhattisgarh/Jharkhand',
                    points: 100,
                    explanation: 'States like Chhattisgarh, Jharkhand, and Odisha have the highest poverty rates in India, despite being rich in natural resources — a classic resource curse paradox.'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: 'Relative poverty refers to?',
                    options: ['Absolute lack of income', 'Poverty compared to others', 'Rural poverty only', 'Urban poverty only'],
                    correctAnswer: 'Poverty compared to others',
                    points: 100,
                    explanation: 'Relative poverty measures poverty relative to the economic status of others in the same society. A person may meet basic needs but still be relatively poor compared to the average standard of living.'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: 'HDI was introduced by?',
                    options: ['World Bank', 'IMF', 'UNDP', 'WHO'],
                    correctAnswer: 'UNDP',
                    points: 100,
                    explanation: 'The Human Development Index (HDI) was introduced by UNDP (United Nations Development Programme) in 1990, developed by Pakistani economist Mahbub ul Haq with Amartya Sen. It measures health, education, and income.'
                }
            ]
        });

        // ================================================================
        // Done
        // ================================================================
        console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('🎉 All Social Science Class 9 chapters & quizzes seeded successfully!');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📚 Subject : Social Science (sst_icse) — Class 9');
        console.log('📖 Chapters added/updated:');
        console.log('   ch_sst_9_1  History   : The French Revolution');
        console.log('   ch_sst_9_2  History   : Socialism in Europe & the Russian Revolution');
        console.log('   ch_sst_9_3  Geography : Drainage');
        console.log('   ch_sst_9_4  Pol. Sci. : Electoral Politics');
        console.log('   ch_sst_9_5  Economics : Poverty as a Challenge');
        console.log('🎮 Each chapter has a 5-question MCQ quiz.');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding Social Science Class 9 data:', error.message);
        console.error(error);
        process.exit(1);
    }
};

seedSSTClass9();
