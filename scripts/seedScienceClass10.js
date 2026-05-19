/**
 * Seed Script: Science Class 10 - All Chapter & Quiz Content
 *
 * This script ONLY adds/updates Science Class 10 content.
 * It does NOT wipe any existing data.
 *
 * Run with: node scripts/seedScienceClass10.js
 *
 * Chapters covered:
 *  ch_sci_10_1  - Chemical Reactions and Equations
 *  ch_sci_10_2  - Acids, Bases and Salts
 *  ch_sci_10_3  - Metals and Non-Metals
 *  ch_sci_10_4  - Life Processes
 *  ch_sci_10_5  - Light – Reflection and Refraction
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
const seedScienceClass10 = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/edu-nexus';
        await mongoose.connect(mongoURI);
        console.log('✅ Connected to MongoDB\n');

        // ----------------------------------------------------------------
        // 1. Ensure Science subject exists (classes 9 & 10)
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
        // CHAPTER 1 — Chemical Reactions and Equations
        // ================================================================
        console.log('── Chapter 1: Chemical Reactions and Equations ──');
        await upsertChapter({
            id: 'ch_sci_10_1',
            subjectId: sciSubjectId,
            classLevel: '10',
            title: 'Chapter 1: Chemical Reactions and Equations',
            description: 'Covers writing and balancing chemical equations, types of chemical reactions (combination, decomposition, displacement, double displacement, oxidation-reduction), and effects of oxidation in daily life.',
            topics: [
                'Chemical Equations',
                'Balancing Equations',
                'Combination Reactions',
                'Decomposition Reactions',
                'Displacement Reactions',
                'Double Displacement Reactions',
                'Oxidation & Reduction',
                'Exothermic & Endothermic Reactions',
                'Corrosion & Rancidity'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/gQ-X9wV8TXQ?si=Bciv4mJVdoaKUsLJ',
                body: 'A chemical reaction involves the transformation of reactants into products. Chemical equations represent these reactions symbolically. This chapter covers how to write, balance, and classify chemical equations.'
            },
            teacherNote: 'Practise balancing equations by trial-and-error and algebraic methods. The oxidation-reduction concept (OIL RIG) links directly to electrochemistry in higher classes. Rusting, rancidity, and bleaching are great real-world examples.',
            order: 1,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sciSubjectId,
            chapterId: 'ch_sci_10_1',
            title: 'Quiz: Chemical Reactions and Equations',
            description: 'Test your knowledge of types of chemical reactions, balancing equations, oxidation, and endothermic/exothermic reactions.',
            gameType: 'shooter',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: 'A reaction in which one element displaces another is called?',
                    options: ['Combination', 'Decomposition', 'Displacement', 'Redox'],
                    correctAnswer: 'Displacement',
                    points: 100,
                    explanation: 'In a displacement reaction a more reactive element displaces a less reactive element from its compound. Example: Fe + CuSO₄ → FeSO₄ + Cu.'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'Rusting of iron is a __ reaction.',
                    options: ['Reduction', 'Oxidation', 'Neutralization', 'Precipitation'],
                    correctAnswer: 'Oxidation',
                    points: 100,
                    explanation: 'Rusting is the oxidation of iron in the presence of moisture and oxygen: 4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃.'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: 'Photosynthesis is what type of reaction?',
                    options: ['Exothermic', 'Endothermic', 'Displacement', 'Double displacement'],
                    correctAnswer: 'Endothermic',
                    points: 100,
                    explanation: 'Photosynthesis absorbs energy (sunlight) to convert CO₂ and H₂O into glucose, making it endothermic.'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: 'Balanced equation for burning of methane?',
                    options: ['CH₄+O₂→CO₂+H₂O', 'CH₄+2O₂→CO₂+2H₂O', '2CH₄+O₂→CO₂+H₂O', 'None'],
                    correctAnswer: 'CH₄+2O₂→CO₂+2H₂O',
                    points: 100,
                    explanation: 'CH₄ + 2O₂ → CO₂ + 2H₂O. Check: C:1=1 ✔, H:4=4 ✔, O:4=4 ✔.'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: 'Which is a combination reaction?',
                    options: ['CaCO₃→CaO+CO₂', '2H₂+O₂→2H₂O', 'Fe+CuSO₄→FeSO₄+Cu', 'NaOH+HCl→NaCl+H₂O'],
                    correctAnswer: '2H₂+O₂→2H₂O',
                    points: 100,
                    explanation: 'A combination reaction joins two or more substances to form a single product. 2H₂ + O₂ → 2H₂O is a classic example.'
                }
            ]
        });

        // ================================================================
        // CHAPTER 2 — Acids, Bases and Salts
        // ================================================================
        console.log('\n── Chapter 2: Acids, Bases and Salts ──');
        await upsertChapter({
            id: 'ch_sci_10_2',
            subjectId: sciSubjectId,
            classLevel: '10',
            title: 'Chapter 2: Acids, Bases and Salts',
            description: 'Covers properties and examples of acids and bases, the pH scale, indicators, neutralization reactions, salts and their preparation, and important chemicals like baking soda, washing soda, bleaching powder, and Plaster of Paris.',
            topics: [
                'Properties of Acids & Bases',
                'pH Scale',
                'Indicators (Litmus, Phenolphthalein)',
                'Neutralization',
                'Salts & Their Preparation',
                'NaOH Production (Chlor-alkali)',
                'Bleaching Powder',
                'Baking Soda & Washing Soda',
                'Plaster of Paris'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/qKl4mieovu0?si=iSLrgVBRO81jlcmA',
                body: 'Acids taste sour and turn blue litmus red. Bases taste bitter and turn red litmus blue. The pH scale measures acidity and alkalinity from 0 to 14.'
            },
            teacherNote: 'The universal indicator color chart is very visual — have students match pH ranges. Baking soda vs washing soda is a common exam confusion. Bleaching powder formula Ca(OCl)Cl must be memorised.',
            order: 2,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sciSubjectId,
            chapterId: 'ch_sci_10_2',
            title: 'Quiz: Acids, Bases and Salts',
            description: 'Test your knowledge of pH scale, indicators, bleaching powder, baking soda, and salt chemistry.',
            gameType: 'memory',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: 'pH of pure water?',
                    options: ['0', '7', '14', '10'],
                    correctAnswer: '7',
                    points: 100,
                    explanation: 'Pure water is neutral with [H⁺] = [OH⁻] = 10⁻⁷ mol/L, giving pH = 7.'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'Bleaching powder contains?',
                    options: ['NaOH', 'NaCl', 'Ca(OCl)Cl', 'CaCl₂'],
                    correctAnswer: 'Ca(OCl)Cl',
                    points: 100,
                    explanation: 'Bleaching powder is calcium oxychloride, Ca(OCl)Cl, made by passing Cl₂ over dry slaked lime.'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: 'Baking soda is?',
                    options: ['NaCl', 'Na₂CO₃', 'NaHCO₃', 'NaOH'],
                    correctAnswer: 'NaHCO₃',
                    points: 100,
                    explanation: 'Baking soda is sodium hydrogen carbonate (NaHCO₃). It releases CO₂ when heated, making dough rise.'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: 'Strong acid has pH?',
                    options: ['7–14', '0–3', '5–7', 'Equal to 7'],
                    correctAnswer: '0–3',
                    points: 100,
                    explanation: 'Strong acids (HCl, H₂SO₄, HNO₃) fully dissociate, giving very high [H⁺] and pH values of 0–3.'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: 'Litmus is extracted from?',
                    options: ['Turmeric', 'Rose', 'Lichens', 'Grapes'],
                    correctAnswer: 'Lichens',
                    points: 100,
                    explanation: 'Litmus is a natural indicator extracted from lichens (a symbiosis of algae and fungi).'
                }
            ]
        });

        // ================================================================
        // CHAPTER 3 — Metals and Non-Metals
        // ================================================================
        console.log('\n── Chapter 3: Metals and Non-Metals ──');
        await upsertChapter({
            id: 'ch_sci_10_3',
            subjectId: sciSubjectId,
            classLevel: '10',
            title: 'Chapter 3: Metals and Non-Metals',
            description: 'Covers physical and chemical properties of metals and non-metals, reactivity series, extraction of metals (metallurgy), corrosion, alloys, ionic bond formation, and exceptions like graphite (conducting non-metal) and gold (most malleable metal).',
            topics: [
                'Physical Properties of Metals & Non-Metals',
                'Chemical Properties',
                'Reactivity Series',
                'Extraction of Metals',
                'Thermite Reaction',
                'Corrosion & Prevention',
                'Alloys',
                'Ionic Bond Formation',
                'Galvanisation'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/YV1BFWi-AWY?si=CS4q59LwGPCEauFj',
                body: 'Metals are lustrous, malleable, ductile, and good conductors of heat and electricity. Non-metals are generally the opposite. This chapter explores their properties, reactivity, and applications.'
            },
            teacherNote: 'The reactivity series (K Na Ca Mg Al Zn Fe Pb H Cu Hg Ag Au) is essential to memorise. The thermite reaction is dramatic — use video demonstration. Galvanisation vs tinning difference often appears in board exams.',
            order: 3,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sciSubjectId,
            chapterId: 'ch_sci_10_3',
            title: 'Quiz: Metals and Non-Metals',
            description: 'Test your knowledge of metal properties, reactivity series, thermite reaction, and galvanisation.',
            gameType: 'shooter',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: 'Most malleable metal?',
                    options: ['Silver', 'Copper', 'Gold', 'Iron'],
                    correctAnswer: 'Gold',
                    points: 100,
                    explanation: 'Gold is the most malleable metal — 1 g of gold can be beaten into a sheet of about 1 m².'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'Non-metal that conducts electricity?',
                    options: ['Sulfur', 'Graphite', 'Phosphorus', 'Iodine'],
                    correctAnswer: 'Graphite',
                    points: 100,
                    explanation: 'Graphite is an allotrope of carbon with delocalized electrons in its layered structure, allowing it to conduct electricity.'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: 'Thermite reaction uses?',
                    options: ['Al + Fe₂O₃', 'Cu + Al₂O₃', 'Fe + CuO', 'Mg + CuO'],
                    correctAnswer: 'Al + Fe₂O₃',
                    points: 100,
                    explanation: '2Al + Fe₂O₃ → Al₂O₃ + 2Fe + heat. Aluminium (more reactive) displaces iron from its oxide, releasing molten iron.'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: 'Oxide of non-metal is usually?',
                    options: ['Basic', 'Acidic', 'Neutral', 'Amphoteric'],
                    correctAnswer: 'Acidic',
                    points: 100,
                    explanation: 'Non-metal oxides dissolve in water to form acids (e.g., CO₂ + H₂O → H₂CO₃, SO₃ + H₂O → H₂SO₄).'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: 'Galvanisation uses which metal?',
                    options: ['Tin', 'Copper', 'Zinc', 'Silver'],
                    correctAnswer: 'Zinc',
                    points: 100,
                    explanation: 'Galvanisation is the coating of iron/steel with zinc to prevent rusting. Zinc acts as a sacrificial anode.'
                }
            ]
        });

        // ================================================================
        // CHAPTER 4 — Life Processes
        // ================================================================
        console.log('\n── Chapter 4: Life Processes ──');
        await upsertChapter({
            id: 'ch_sci_10_4',
            subjectId: sciSubjectId,
            classLevel: '10',
            title: 'Chapter 6: Life Processes',
            description: 'Covers the fundamental life processes: nutrition (autotrophic & heterotrophic), respiration (aerobic & anaerobic), transportation (blood, lymph, xylem, phloem), and excretion in plants and animals.',
            topics: [
                'Autotrophic Nutrition (Photosynthesis)',
                'Heterotrophic Nutrition',
                'Human Digestive System',
                'Aerobic & Anaerobic Respiration',
                'Human Respiratory System',
                'Transportation in Plants (Xylem & Phloem)',
                'Human Circulatory System',
                'Blood & Blood Groups',
                'Excretion in Humans (Kidney)',
                'Excretion in Plants',
                'Stomata & Transpiration'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/2anxgj0TUgQ?si=fBFg3C5FpHzNqEt0',
                body: 'Life processes are the processes that together constitute living. They include nutrition, respiration, transportation, and excretion. This chapter covers all four in both plants and animals.'
            },
            teacherNote: 'Use flowcharts for the digestive system and kidney nephron. The double circulation concept (pulmonary vs systemic) and dialysis process are frequent board questions. Stomata guard cell mechanism links to Chapter 5 (Cell).',
            order: 4,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sciSubjectId,
            chapterId: 'ch_sci_10_4',
            title: 'Quiz: Life Processes',
            description: 'Test your knowledge of photosynthesis, digestion, respiration, circulation, and excretion.',
            gameType: 'memory',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: 'Site of photosynthesis?',
                    options: ['Mitochondria', 'Ribosome', 'Chloroplast', 'Nucleus'],
                    correctAnswer: 'Chloroplast',
                    points: 100,
                    explanation: 'Chloroplasts contain chlorophyll, the green pigment that captures light energy to drive photosynthesis.'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'Enzyme in saliva?',
                    options: ['Pepsin', 'Lipase', 'Salivary amylase', 'Trypsin'],
                    correctAnswer: 'Salivary amylase',
                    points: 100,
                    explanation: 'Salivary amylase (ptyalin) begins starch digestion in the mouth, breaking it into maltose.'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: 'Normal human RBC count (per mm³)?',
                    options: ['2–3 million', '4–6 million', '7–8 million', '1 million'],
                    correctAnswer: '4–6 million',
                    points: 100,
                    explanation: 'A healthy adult has approximately 4–6 million RBCs per mm³ of blood (slightly higher in males than females).'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: 'Dialysis is related to?',
                    options: ['Heart', 'Lungs', 'Kidney', 'Liver'],
                    correctAnswer: 'Kidney',
                    points: 100,
                    explanation: 'Dialysis is an artificial kidney process that filters waste products from the blood when the kidneys fail to function properly.'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: 'Stomata opens with help of?',
                    options: ['Epidermal cells', 'Guard cells', 'Mesophyll cells', 'Xylem'],
                    correctAnswer: 'Guard cells',
                    points: 100,
                    explanation: 'Guard cells surround each stoma. When they become turgid (absorb water), they curve outward and the stomatal pore opens.'
                }
            ]
        });

        // ================================================================
        // CHAPTER 5 — Light: Reflection and Refraction
        // ================================================================
        console.log('\n── Chapter 5: Light – Reflection and Refraction ──');
        await upsertChapter({
            id: 'ch_sci_10_5',
            subjectId: sciSubjectId,
            classLevel: '10',
            title: 'Chapter 10: Light – Reflection and Refraction',
            description: 'Covers reflection of light (laws of reflection, spherical mirrors, mirror formula, magnification), refraction of light (Snell\'s law, refractive index, lenses, lens formula), and phenomena like rainbow, atmospheric refraction, and dispersion.',
            topics: [
                'Laws of Reflection',
                'Spherical Mirrors (Concave & Convex)',
                'Mirror Formula & Magnification',
                'Refraction & Snell\'s Law',
                'Refractive Index',
                'Total Internal Reflection',
                'Lenses (Concave & Convex)',
                'Lens Formula & Power',
                'Dispersion of Light',
                'Rainbow',
                'Atmospheric Refraction'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/8Rwv2hvdZFo?si=RFrtZbu0X6v8pjHO',
                body: 'Light travels in straight lines. When it hits a surface, it reflects. When it enters a denser or rarer medium, it bends (refracts). This chapter covers the mathematics and applications of both phenomena.'
            },
            teacherNote: 'The sign convention (New Cartesian) must be established early. Mirror vs Lens formula comparison is very effective. Rainbow formation (VIBGYOR order) and the numerical problems on refractive index are very common in board exams.',
            order: 5,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: sciSubjectId,
            chapterId: 'ch_sci_10_5',
            title: 'Quiz: Light – Reflection and Refraction',
            description: 'Test your knowledge of mirror formula, refractive index, laws of reflection, and dispersion of light.',
            gameType: 'shooter',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: 'Mirror formula: 1/f = ?',
                    options: ['1/u + 1/v', '1/u - 1/v', 'u + v', 'u × v'],
                    correctAnswer: '1/u + 1/v',
                    points: 100,
                    explanation: 'The mirror formula is 1/f = 1/v + 1/u, where f = focal length, v = image distance, u = object distance (all with sign convention).'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'Refractive index = ?',
                    options: ['Speed in medium / Speed in vacuum', 'Speed in vacuum / Speed in medium', 'Wavelength ratio', 'None'],
                    correctAnswer: 'Speed in vacuum / Speed in medium',
                    points: 100,
                    explanation: 'Refractive index (n) = speed of light in vacuum (c) / speed of light in medium (v). It is always ≥ 1 for any medium.'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: 'Concave mirror used in?',
                    options: ['Rear-view mirror', 'Dentist mirror', 'Solar furnace', 'Both B and C'],
                    correctAnswer: 'Both B and C',
                    points: 100,
                    explanation: 'Concave mirrors converge light, making them useful as dentist mirrors (magnified view) and in solar furnaces (focusing sunlight). Rear-view mirrors use convex mirrors.'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: 'Angle of incidence equals angle of reflection – this is?',
                    options: ['Snell\'s law', 'Law of reflection', 'Newton\'s law', 'Refraction law'],
                    correctAnswer: 'Law of reflection',
                    points: 100,
                    explanation: 'The first law of reflection states that the angle of incidence (∠i) equals the angle of reflection (∠r), both measured from the normal.'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: 'Rainbow is due to?',
                    options: ['Reflection only', 'Refraction only', 'Dispersion, refraction & reflection', 'Diffraction'],
                    correctAnswer: 'Dispersion, refraction & reflection',
                    points: 100,
                    explanation: 'A rainbow forms when sunlight enters a water droplet (refraction + dispersion into VIBGYOR), reflects internally, and exits (refraction again).'
                }
            ]
        });

        // ================================================================
        // Done
        // ================================================================
        console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('🎉 All Science Class 10 chapters & quizzes seeded successfully!');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📚 Subject : Science (sci_icse) — Class 10');
        console.log('📖 Chapters added/updated:');
        console.log('   ch_sci_10_1  Chemical Reactions and Equations');
        console.log('   ch_sci_10_2  Acids, Bases and Salts');
        console.log('   ch_sci_10_3  Metals and Non-Metals');
        console.log('   ch_sci_10_4  Life Processes');
        console.log('   ch_sci_10_5  Light – Reflection and Refraction');
        console.log('🎮 Each chapter has a 5-question MCQ quiz.');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding Science Class 10 data:', error.message);
        console.error(error);
        process.exit(1);
    }
};

seedScienceClass10();
