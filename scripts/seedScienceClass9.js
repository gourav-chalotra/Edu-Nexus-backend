/**
 * Seed Script: Science Class 9 - All Chapter & Quiz Content
 *
 * This script ONLY adds/updates Science Class 9 content.
 * It does NOT wipe any existing data.
 *
 * Run with: node scripts/seedScienceClass9.js
 *
 * Chapters covered:
 *  ch_sci_9_1  - Matter in Our Surroundings
 *  ch_sci_9_2  - Is Matter Around Us Pure?
 *  ch_sci_9_3  - Atoms and Molecules
 *  ch_sci_9_4  - Structure of the Atom
 *  ch_sci_9_5  - The Fundamental Unit of Life
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Subject from '../models/Subject.js';
import Chapter from '../models/Chapter.js';
import Quiz from '../models/Quiz.js';

dotenv.config();

// ----------------------------------------------------------------
// Helper: upsert a chapter
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
// Helper: upsert a quiz
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
const seedScienceClass9 = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/edu-nexus';
        await mongoose.connect(mongoURI);
        console.log('✅ Connected to MongoDB\n');

        // ----------------------------------------------------------------
        // 1. Ensure Science subject exists
        // ----------------------------------------------------------------
        const sciSubjectId = 'sci_icse';

        let sciSubject = await Subject.findOne({ id: sciSubjectId });
        if (!sciSubject) {
            sciSubject = await Subject.create({
                id: sciSubjectId,
                title: 'Science',
                description: 'Physics, Chemistry & Biology for Classes 9-10 (ICSE/CBSE)',
                icon: '🔬',
                classes: ['9', '10'],
                stream: null,
                isActive: true
            });
            console.log('✅ Created Science subject\n');
        } else {
            console.log('ℹ️  Science subject already exists — skipping creation\n');
        }

        // ================================================================
        // CHAPTER 1 — Matter in Our Surroundings
        // ================================================================
        console.log('── Chapter 1: Matter in Our Surroundings ──');
        await upsertChapter({
            id: 'ch_sci_9_1',
            subjectId: sciSubjectId,
            classLevel: '9',
            title: 'Chapter 1: Matter in Our Surroundings',
            description: 'Understanding the states of matter, their properties, and the interconversion between them. Topics include solid, liquid, gas, evaporation, sublimation, latent heat, and compressibility.',
            topics: ['States of Matter', 'Properties of Solids, Liquids & Gases', 'Interconversion of States', 'Evaporation', 'Sublimation', 'Latent Heat', 'Compressibility'],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/bmzDsWMSCTk?si=1pWitpZRQNUEXae6',
                body: 'Matter is anything that has mass and occupies space. It exists in three common states: solid, liquid, and gas.'
            },
            teacherNote: 'Focus on interconversion diagrams. Ask students to identify everyday examples of sublimation (camphor, dry ice). Use the ice-water heating curve graph for latent heat.',
            order: 1,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sciSubjectId,
            chapterId: 'ch_sci_9_1',
            title: 'Quiz: Matter in Our Surroundings',
            description: 'Test your understanding of states of matter, sublimation, boiling point, latent heat and compressibility.',
            gameType: 'shooter',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                { id: 1, type: 'mcq', question: 'Which state of matter has definite volume but no definite shape?', options: ['Solid', 'Liquid', 'Gas', 'Plasma'], correctAnswer: 'Liquid', points: 100, explanation: 'Liquids have fixed volume but take the shape of their container.' },
                { id: 2, type: 'mcq', question: 'The process of conversion of solid directly to gas is called?', options: ['Evaporation', 'Condensation', 'Sublimation', 'Fusion'], correctAnswer: 'Sublimation', points: 100, explanation: 'Sublimation is the direct solid→vapour transition. Examples: camphor, dry ice.' },
                { id: 3, type: 'mcq', question: 'Boiling point of water at standard pressure is?', options: ['90°C', '95°C', '100°C', '110°C'], correctAnswer: '100°C', points: 100, explanation: 'Water boils at 100°C (373 K) at 1 atm.' },
                { id: 4, type: 'mcq', question: 'Latent heat of vaporisation is used to?', options: ['Increase temperature', 'Change state', 'Decrease density', 'None'], correctAnswer: 'Change state', points: 100, explanation: 'Latent heat changes state at constant temperature.' },
                { id: 5, type: 'mcq', question: 'Which has highest compressibility?', options: ['Solid', 'Liquid', 'Gas', 'All equal'], correctAnswer: 'Gas', points: 100, explanation: 'Gases have large inter-particle spaces, making them highly compressible.' }
            ]
        });

        // ================================================================
        // CHAPTER 2 — Is Matter Around Us Pure?
        // ================================================================
        console.log('\n── Chapter 2: Is Matter Around Us Pure? ──');
        await upsertChapter({
            id: 'ch_sci_9_2',
            subjectId: sciSubjectId,
            classLevel: '9',
            title: 'Chapter 2: Is Matter Around Us Pure?',
            description: 'Explores pure substances and mixtures, types of mixtures (solutions, suspensions, colloids), separation techniques, and the distinction between elements and compounds.',
            topics: ['Pure Substances', 'Mixtures', 'Solutions', 'Suspensions', 'Colloids', 'Tyndall Effect', 'Separation Techniques', 'Elements & Compounds'],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/fDTLrhcIWx0?si=kVwlEwsP-xA0S9LV',
                body: 'Not all matter around us is pure. This chapter distinguishes pure substances from mixtures and teaches various separation methods.'
            },
            teacherNote: 'Demonstrate Tyndall effect using a torch beam through a colloidal solution. Centrifugation is a common practical question — link to cream/milk separation.',
            order: 2,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sciSubjectId,
            chapterId: 'ch_sci_9_2',
            title: 'Quiz: Is Matter Around Us Pure?',
            description: 'Test your knowledge of mixtures, solutions, colloids, Tyndall effect, and separation techniques.',
            gameType: 'shooter',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                { id: 1, type: 'mcq', question: 'A solution is a __ mixture.', options: ['Heterogeneous', 'Homogeneous', 'Colloidal', 'None'], correctAnswer: 'Homogeneous', points: 100, explanation: 'A solution is a homogeneous mixture where solute is uniformly distributed in solvent.' },
                { id: 2, type: 'mcq', question: 'Tyndall effect is shown by?', options: ['Solution', 'Suspension', 'Colloid', 'Pure substance'], correctAnswer: 'Colloid', points: 100, explanation: 'Colloidal particles scatter light, producing the visible Tyndall effect (e.g. milk, fog).' },
                { id: 3, type: 'mcq', question: 'Separation of cream from milk uses?', options: ['Filtration', 'Distillation', 'Centrifugation', 'Sublimation'], correctAnswer: 'Centrifugation', points: 100, explanation: 'High-speed spinning (centrifugation) separates denser components like cream from milk.' },
                { id: 4, type: 'mcq', question: 'An element cannot be broken into simpler substances by?', options: ['Physical means', 'Chemical means', 'Both', 'Neither'], correctAnswer: 'Chemical means', points: 100, explanation: 'Elements are the simplest chemical substances and cannot be broken down by any chemical reaction.' },
                { id: 5, type: 'mcq', question: 'Which is a compound?', options: ['Air', 'Water', 'Milk', 'Brass'], correctAnswer: 'Water', points: 100, explanation: 'Water (H₂O) is a compound made of hydrogen and oxygen in a fixed ratio. Air, Milk, and Brass are mixtures.' }
            ]
        });

        // ================================================================
        // CHAPTER 3 — Atoms and Molecules
        // ================================================================
        console.log('\n── Chapter 3: Atoms and Molecules ──');
        await upsertChapter({
            id: 'ch_sci_9_3',
            subjectId: sciSubjectId,
            classLevel: '9',
            title: 'Chapter 3: Atoms and Molecules',
            description: 'Covers the laws of chemical combination, atomic theory, atomic mass, molecular mass, Avogadro\'s number, the mole concept, and chemical formula writing.',
            topics: ['Law of Conservation of Mass', 'Law of Constant Proportions', 'Dalton\'s Atomic Theory', 'Atomic Mass', 'Molecular Mass', 'Mole Concept', 'Avogadro\'s Number', 'Chemical Formulae'],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/jWSJZEZ3Ym4?si=b4nEKfp0PBxSF0bR',
                body: 'Atoms are the smallest particles of an element. Molecules are formed when atoms combine. This chapter explores the quantitative aspects of chemistry.'
            },
            teacherNote: 'Mole concept is foundational for stoichiometry. Use the "1 mole = 6.022×10²³ entities" analogy with everyday counting (dozen = 12). Practice formula writing using valency tables.',
            order: 3,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sciSubjectId,
            chapterId: 'ch_sci_9_3',
            title: 'Quiz: Atoms and Molecules',
            description: 'Test your knowledge of atomic theory, molecular mass, mole concept, and chemical formulae.',
            gameType: 'memory',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                { id: 1, type: 'mcq', question: 'Atomicity of phosphorus is?', options: ['1', '2', '4', '8'], correctAnswer: '4', points: 100, explanation: 'Phosphorus exists as P₄ molecules, so its atomicity is 4.' },
                { id: 2, type: 'mcq', question: 'Molecular mass of H₂O is?', options: ['16', '17', '18', '20'], correctAnswer: '18', points: 100, explanation: 'H₂O = 2(1) + 16 = 18 u.' },
                { id: 3, type: 'mcq', question: '1 mole = __ atoms (Avogadro\'s number)?', options: ['6.022×10²¹', '6.022×10²³', '6.022×10²⁵', 'None'], correctAnswer: '6.022×10²³', points: 100, explanation: 'Avogadro\'s number NA = 6.022×10²³ entities per mole.' },
                { id: 4, type: 'mcq', question: 'Chemical formula of sodium sulphate?', options: ['NaSO4', 'Na2SO4', 'NaSO3', 'Na2SO3'], correctAnswer: 'Na2SO4', points: 100, explanation: 'Sodium (Na⁺, valency 1) and sulphate (SO₄²⁻, valency 2) → Na₂SO₄.' },
                { id: 5, type: 'mcq', question: 'Law of conservation of mass was given by?', options: ['Dalton', 'Avogadro', 'Lavoisier', 'Mendeleev'], correctAnswer: 'Lavoisier', points: 100, explanation: 'Antoine Lavoisier stated that mass is neither created nor destroyed in a chemical reaction.' }
            ]
        });

        // ================================================================
        // CHAPTER 4 — Structure of the Atom
        // ================================================================
        console.log('\n── Chapter 4: Structure of the Atom ──');
        await upsertChapter({
            id: 'ch_sci_9_4',
            subjectId: sciSubjectId,
            classLevel: '9',
            title: 'Chapter 4: Structure of the Atom',
            description: 'Covers Thomson\'s, Rutherford\'s, and Bohr\'s atomic models, subatomic particles, electronic configuration, valency, atomic number, mass number, isotopes, and isobars.',
            topics: ['Thomson\'s Model', 'Rutherford\'s Model', 'Bohr\'s Model', 'Electrons, Protons, Neutrons', 'Electronic Configuration', 'Valency', 'Atomic Number', 'Mass Number', 'Isotopes', 'Isobars'],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/0UqHoagKXts?si=ciMewfsDZvy5600z',
                body: 'The atom consists of a nucleus (protons + neutrons) surrounded by electrons in shells. Different atomic models evolved over time to explain atomic structure.'
            },
            teacherNote: 'Compare the three atomic models as a timeline activity. Reinforce the 2n² shell-filling rule. Isotopes (same Z, different A) vs Isobars (same A, different Z) is a frequent exam point.',
            order: 4,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sciSubjectId,
            chapterId: 'ch_sci_9_4',
            title: 'Quiz: Structure of the Atom',
            description: 'Test your knowledge of atomic models, subatomic particles, electronic configuration, and isotopes.',
            gameType: 'shooter',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                { id: 1, type: 'mcq', question: 'Nucleus was discovered by?', options: ['Thomson', 'Bohr', 'Rutherford', 'Chadwick'], correctAnswer: 'Rutherford', points: 100, explanation: 'Rutherford\'s gold foil experiment (1911) demonstrated the existence of a dense, positive nucleus.' },
                { id: 2, type: 'mcq', question: 'Valency of carbon is?', options: ['2', '3', '4', '1'], correctAnswer: '4', points: 100, explanation: 'Carbon has 4 electrons in its outermost shell, giving it a valency of 4.' },
                { id: 3, type: 'mcq', question: 'Isotopes have same number of?', options: ['Neutrons', 'Protons', 'Mass number', 'Electrons'], correctAnswer: 'Protons', points: 100, explanation: 'Isotopes are atoms of the same element with the same atomic number (protons) but different mass numbers (neutrons).' },
                { id: 4, type: 'mcq', question: 'Maximum electrons in the 2nd shell?', options: ['2', '4', '8', '18'], correctAnswer: '8', points: 100, explanation: 'By the 2n² rule: 2nd shell (n=2) can hold 2×2² = 8 electrons.' },
                { id: 5, type: 'mcq', question: 'Atomic number of sodium?', options: ['11', '12', '23', '10'], correctAnswer: '11', points: 100, explanation: 'Sodium (Na) has 11 protons, so its atomic number Z = 11.' }
            ]
        });

        // ================================================================
        // CHAPTER 5 — The Fundamental Unit of Life
        // ================================================================
        console.log('\n── Chapter 5: The Fundamental Unit of Life ──');
        await upsertChapter({
            id: 'ch_sci_9_5',
            subjectId: sciSubjectId,
            classLevel: '9',
            title: 'Chapter 5: The Fundamental Unit of Life',
            description: 'Explores the cell as the basic structural and functional unit of life. Covers cell theory, prokaryotic vs eukaryotic cells, cell organelles (nucleus, mitochondria, plastids, vacuole, etc.), and processes like osmosis and diffusion.',
            topics: ['Cell Theory', 'Prokaryotic vs Eukaryotic', 'Cell Membrane', 'Cell Wall', 'Nucleus', 'Mitochondria', 'Plastids', 'Golgi Body', 'Ribosome', 'Lysosome', 'Vacuole', 'Osmosis & Diffusion'],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/3YuuphvXYmo?si=oG4HeNky6Kw36dYa',
                body: 'The cell is the fundamental unit of life. All living organisms are made of cells. This chapter explores cell structure and the functions of various organelles.'
            },
            teacherNote: 'Use labeled cell diagrams for both plant and animal cells. The osmosis experiment (potato/egg in salt water) is a great practical demonstration. Plastids, vacuole size differences, and cell wall presence are key plant vs animal cell distinctions.',
            order: 5,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sciSubjectId,
            chapterId: 'ch_sci_9_5',
            title: 'Quiz: The Fundamental Unit of Life',
            description: 'Test your knowledge of cell structure, organelles, osmosis, and differences between plant and animal cells.',
            gameType: 'memory',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                { id: 1, type: 'mcq', question: 'Cell wall is absent in?', options: ['Plant cell', 'Animal cell', 'Bacterial cell', 'Fungal cell'], correctAnswer: 'Animal cell', points: 100, explanation: 'Animal cells lack a cell wall; they only have a flexible cell membrane.' },
                { id: 2, type: 'mcq', question: 'Powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi body'], correctAnswer: 'Mitochondria', points: 100, explanation: 'Mitochondria produce ATP through cellular respiration, earning the name "powerhouse of the cell".' },
                { id: 3, type: 'mcq', question: 'DNA is found in?', options: ['Ribosome', 'Nucleus', 'Lysosome', 'Vacuole'], correctAnswer: 'Nucleus', points: 100, explanation: 'The nucleus houses chromosomal DNA, which carries genetic information.' },
                { id: 4, type: 'mcq', question: 'Osmosis involves movement of?', options: ['Solute', 'Solvent', 'Both', 'None'], correctAnswer: 'Solvent', points: 100, explanation: 'Osmosis is the movement of solvent (usually water) across a semi-permeable membrane from low to high solute concentration.' },
                { id: 5, type: 'mcq', question: 'Plastids are found in?', options: ['Animal cells', 'Plant cells', 'Both', 'Bacteria'], correctAnswer: 'Plant cells', points: 100, explanation: 'Plastids (chloroplasts, chromoplasts, leucoplasts) are found only in plant cells and are responsible for photosynthesis and pigment storage.' }
            ]
        });

        // ================================================================
        // Done
        // ================================================================
        console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('🎉 All Science Class 9 chapters & quizzes seeded successfully!');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📚 Subject : Science (sci_icse) — Class 9');
        console.log('📖 Chapters added/updated:');
        console.log('   ch_sci_9_1  Matter in Our Surroundings');
        console.log('   ch_sci_9_2  Is Matter Around Us Pure?');
        console.log('   ch_sci_9_3  Atoms and Molecules');
        console.log('   ch_sci_9_4  Structure of the Atom');
        console.log('   ch_sci_9_5  The Fundamental Unit of Life');
        console.log('🎮 Each chapter has a 5-question MCQ quiz.');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding Science Class 9 data:', error.message);
        console.error(error);
        process.exit(1);
    }
};

seedScienceClass9();
