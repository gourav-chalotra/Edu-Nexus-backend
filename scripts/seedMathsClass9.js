/**
 * Seed Script: Mathematics Class 9 - All Chapter & Quiz Content
 *
 * This script ONLY adds/updates Maths Class 9 content.
 * It does NOT wipe any existing data.
 *
 * Run with: node scripts/seedMathsClass9.js
 *
 * Chapters covered:
 *  ch_math_9_1  - Number Systems
 *  ch_math_9_2  - Polynomials
 *  ch_math_9_3  - Coordinate Geometry
 *  ch_math_9_4  - Linear Equations in Two Variables
 *  ch_math_9_5  - Triangles
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
const seedMathsClass9 = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/edu-nexus';
        await mongoose.connect(mongoURI);
        console.log('✅ Connected to MongoDB\n');

        // ----------------------------------------------------------------
        // 1. Ensure Maths subject exists (classes 9 & 10)
        // ----------------------------------------------------------------
        const mathSubjectId = 'math_icse';

        let mathSubject = await Subject.findOne({ id: mathSubjectId });
        if (!mathSubject) {
            mathSubject = await Subject.create({
                id: mathSubjectId,
                title: 'Mathematics',
                description: 'Mathematics for Classes 9-10 (ICSE/CBSE)',
                icon: '📐',
                classes: ['9', '10'],
                stream: null,
                isActive: true
            });
            console.log('✅ Created Mathematics subject\n');
        } else {
            console.log('ℹ️  Mathematics subject already exists — skipping creation\n');
        }

        // ================================================================
        // CHAPTER 1 — Number Systems
        // ================================================================
        console.log('── Chapter 1: Number Systems ──');
        await upsertChapter({
            id: 'ch_math_9_1',
            subjectId: mathSubjectId,
            classLevel: '9',
            title: 'Chapter 1: Number Systems',
            description: 'Covers the real number line, rational and irrational numbers, decimal expansions, operations on real numbers, laws of exponents, and the relationship between different types of numbers (natural, whole, integer, rational, irrational, real).',
            topics: [
                'Natural Numbers, Whole Numbers, Integers',
                'Rational Numbers & Decimal Expansion',
                'Irrational Numbers',
                'Real Numbers on Number Line',
                'Operations on Real Numbers',
                'Laws of Exponents for Real Numbers',
                'HCF and LCM'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/IMnSIaPcqiE?si=NiSiyt1nDpJLZ-uJ',
                body: 'Number systems form the foundation of mathematics. This chapter explores the hierarchy of numbers from natural numbers to real numbers, introduces irrational numbers, and covers the laws of exponents.'
            },
            teacherNote: 'Use the Venn-diagram representation of number sets (N ⊂ W ⊂ Z ⊂ Q ⊂ R). The non-terminating non-repeating decimal ↔ irrational link is a very frequent exam question. Practise (2³)² = 2⁶ type exponent laws thoroughly.',
            order: 1,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: mathSubjectId,
            chapterId: 'ch_math_9_1',
            title: 'Quiz: Number Systems',
            description: 'Test your knowledge of rational and irrational numbers, HCF, decimal expansions, and laws of exponents.',
            gameType: 'shooter',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: '√2 is?',
                    options: ['Rational', 'Irrational', 'Integer', 'Natural'],
                    correctAnswer: 'Irrational',
                    points: 100,
                    explanation: '√2 = 1.41421356… Its decimal expansion is non-terminating and non-repeating, so it is irrational.'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'HCF of 12 and 18?',
                    options: ['6', '4', '3', '9'],
                    correctAnswer: '6',
                    points: 100,
                    explanation: '12 = 2² × 3, 18 = 2 × 3². HCF = 2¹ × 3¹ = 6.'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: '0.333... is?',
                    options: ['Irrational', 'Rational', 'Integer', 'None'],
                    correctAnswer: 'Rational',
                    points: 100,
                    explanation: '0.333… = 1/3, which can be expressed as p/q (p, q ∈ Z, q ≠ 0), so it is rational.'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: '(2³)² = ?',
                    options: ['2⁵', '2⁶', '2⁹', '2⁸'],
                    correctAnswer: '2⁶',
                    points: 100,
                    explanation: 'By the power-of-a-power law: (aᵐ)ⁿ = aᵐⁿ. So (2³)² = 2^(3×2) = 2⁶ = 64.'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: 'Decimal expansion of 1/7 is?',
                    options: ['Terminating', 'Non-terminating repeating', 'Non-terminating non-repeating', 'Integer'],
                    correctAnswer: 'Non-terminating repeating',
                    points: 100,
                    explanation: '1/7 = 0.142857142857… The digits repeat in a block of 6, so it is non-terminating repeating (rational).'
                }
            ]
        });

        // ================================================================
        // CHAPTER 2 — Polynomials
        // ================================================================
        console.log('\n── Chapter 2: Polynomials ──');
        await upsertChapter({
            id: 'ch_math_9_2',
            subjectId: mathSubjectId,
            classLevel: '9',
            title: 'Chapter 2: Polynomials',
            description: 'Covers definition and types of polynomials (monomial, binomial, trinomial), degree of a polynomial, zeroes of a polynomial, Remainder Theorem, Factor Theorem, and algebraic identities.',
            topics: [
                'Definition & Types of Polynomials',
                'Degree of a Polynomial',
                'Zeroes of a Polynomial',
                'Remainder Theorem',
                'Factor Theorem',
                'Algebraic Identities',
                'Factorisation of Polynomials'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/4VHrvMutJQw?si=yVwasDvsnWiyUFli',
                body: 'A polynomial is an expression with variables and coefficients using addition, subtraction, and multiplication. This chapter covers how to find zeroes, apply the Remainder and Factor Theorems, and use algebraic identities.'
            },
            teacherNote: 'Remainder Theorem: when p(x) is divided by (x – a), remainder = p(a). Factor Theorem: (x – a) is a factor of p(x) iff p(a) = 0. Algebraic identities (a+b)² , (a-b)² , a²-b² must be memorised.',
            order: 2,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: mathSubjectId,
            chapterId: 'ch_math_9_2',
            title: 'Quiz: Polynomials',
            description: 'Test your knowledge of degree, zeroes, Remainder Theorem, Factor Theorem, and algebraic identities.',
            gameType: 'memory',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: 'Degree of 5x³ + 2x – 1?',
                    options: ['1', '2', '3', '0'],
                    correctAnswer: '3',
                    points: 100,
                    explanation: 'The degree of a polynomial is the highest power of the variable. Here, the highest power is x³, so the degree is 3.'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'Zero of p(x) = 2x + 4?',
                    options: ['2', '-2', '4', '-4'],
                    correctAnswer: '-2',
                    points: 100,
                    explanation: 'Set 2x + 4 = 0 → 2x = -4 → x = -2. So the zero of the polynomial is -2.'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: 'Factor of x² – 4 is?',
                    options: ['x + 2', 'x - 4', '(x+2)(x-2)', 'x + 4'],
                    correctAnswer: '(x+2)(x-2)',
                    points: 100,
                    explanation: 'x² – 4 = x² – 2² = (x+2)(x-2), using the identity a² – b² = (a+b)(a-b).'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: 'Remainder when x³ + 1 is divided by (x + 1)?',
                    options: ['0', '1', '2', '-1'],
                    correctAnswer: '0',
                    points: 100,
                    explanation: 'By Remainder Theorem, substitute x = -1: (-1)³ + 1 = -1 + 1 = 0. So the remainder is 0 (and x+1 is a factor).'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: 'If p(x) = x² + 3x + 2, then p(-1) = ?',
                    options: ['0', '6', '2', '-2'],
                    correctAnswer: '0',
                    points: 100,
                    explanation: 'p(-1) = (-1)² + 3(-1) + 2 = 1 - 3 + 2 = 0. So x = -1 is a zero of p(x).'
                }
            ]
        });

        // ================================================================
        // CHAPTER 3 — Coordinate Geometry
        // ================================================================
        console.log('\n── Chapter 3: Coordinate Geometry ──');
        await upsertChapter({
            id: 'ch_math_9_3',
            subjectId: mathSubjectId,
            classLevel: '9',
            title: 'Chapter 3: Coordinate Geometry',
            description: 'Introduces the Cartesian coordinate system: x-axis, y-axis, origin, four quadrants, plotting points, and determining the quadrant of a given point. Also covers the distance formula from origin.',
            topics: [
                'Cartesian Plane & Coordinate Axes',
                'Origin & Quadrants',
                'Plotting Points in the Plane',
                'Abscissa & Ordinate',
                'Points on Axes',
                'Distance from Origin'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/3MIZUl6bWxY?si=5ZNTIDfKRnHrYoAA',
                body: 'The Cartesian coordinate system uses two perpendicular number lines (x-axis and y-axis) to locate any point in a plane using an ordered pair (x, y).'
            },
            teacherNote: 'Use a large graph on the board and have students come up and plot points. Signs of coordinates in each quadrant (++, -+, --, +-) is the most tested concept. Distance from origin = √(x² + y²).',
            order: 3,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: mathSubjectId,
            chapterId: 'ch_math_9_3',
            title: 'Quiz: Coordinate Geometry',
            description: 'Test your knowledge of the Cartesian plane, quadrants, axes, and distance from origin.',
            gameType: 'shooter',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: 'Point (0, 5) lies on?',
                    options: ['X-axis', 'Y-axis', 'Origin', 'Quadrant I'],
                    correctAnswer: 'Y-axis',
                    points: 100,
                    explanation: 'Any point with x-coordinate = 0 lies on the Y-axis. So (0, 5) is on the Y-axis.'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'Quadrant of (-3, -2)?',
                    options: ['I', 'II', 'III', 'IV'],
                    correctAnswer: 'III',
                    points: 100,
                    explanation: 'Quadrant III has both x < 0 and y < 0. Since -3 < 0 and -2 < 0, the point (-3, -2) lies in Quadrant III.'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: 'Distance from origin to (3, 4)?',
                    options: ['3', '4', '5', '7'],
                    correctAnswer: '5',
                    points: 100,
                    explanation: 'Distance = √(3² + 4²) = √(9 + 16) = √25 = 5. This is a classic 3-4-5 Pythagorean triplet.'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: 'Coordinates of origin?',
                    options: ['(1,1)', '(0,1)', '(1,0)', '(0,0)'],
                    correctAnswer: '(0,0)',
                    points: 100,
                    explanation: 'The origin is the intersection of the x-axis and y-axis. Its coordinates are (0, 0).'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: 'Point (-2, 3) is in which quadrant?',
                    options: ['I', 'II', 'III', 'IV'],
                    correctAnswer: 'II',
                    points: 100,
                    explanation: 'Quadrant II has x < 0 and y > 0. Since -2 < 0 and 3 > 0, the point (-2, 3) is in Quadrant II.'
                }
            ]
        });

        // ================================================================
        // CHAPTER 4 — Linear Equations in Two Variables
        // ================================================================
        console.log('\n── Chapter 4: Linear Equations in Two Variables ──');
        await upsertChapter({
            id: 'ch_math_9_4',
            subjectId: mathSubjectId,
            classLevel: '9',
            title: 'Chapter 4: Linear Equations in Two Variables',
            description: 'Covers linear equations of the form ax + by + c = 0, solutions as ordered pairs, graphical representation as a straight line, equations of lines parallel to axes, and the concept of infinitely many solutions.',
            topics: [
                'Linear Equation in Two Variables (ax + by + c = 0)',
                'Solutions as Ordered Pairs',
                'Graphical Representation',
                'Lines Parallel to X-axis & Y-axis',
                'Equations of X-axis and Y-axis',
                'Infinitely Many Solutions'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/rnudiJxVXxM?si=goWpQoP6NTyrVZ9f',
                body: 'A linear equation in two variables has infinitely many solutions. Each solution is an ordered pair (x, y) that satisfies the equation. These solutions form a straight line when plotted on the Cartesian plane.'
            },
            teacherNote: 'Emphasise that a linear equation in two variables has infinitely many solutions (not one or two). Graphing equations of the form x = k (vertical line) vs y = k (horizontal line) is a common source of confusion.',
            order: 4,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: mathSubjectId,
            chapterId: 'ch_math_9_4',
            title: 'Quiz: Linear Equations in Two Variables',
            description: 'Test your knowledge of solving linear equations, graphical representation, and lines parallel to axes.',
            gameType: 'memory',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: '2x + 3y = 6; if x = 0, y = ?',
                    options: ['2', '3', '6', '0'],
                    correctAnswer: '2',
                    points: 100,
                    explanation: 'Substituting x = 0: 2(0) + 3y = 6 → 3y = 6 → y = 2.'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'How many solutions does 2x + y = 5 have?',
                    options: ['One', 'Two', 'Infinitely many', 'No solution'],
                    correctAnswer: 'Infinitely many',
                    points: 100,
                    explanation: 'A linear equation in two variables represents a straight line with infinitely many points, each being a solution.'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: 'x = 3 is a line parallel to?',
                    options: ['X-axis', 'Y-axis', 'Both axes', 'None'],
                    correctAnswer: 'Y-axis',
                    points: 100,
                    explanation: 'x = 3 is a vertical line, parallel to the Y-axis, passing through (3, 0).'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: 'y = 0 represents?',
                    options: ['Y-axis', 'X-axis', 'Origin', 'Z-axis'],
                    correctAnswer: 'X-axis',
                    points: 100,
                    explanation: 'y = 0 is the equation of the X-axis (all points where y-coordinate is zero).'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: 'If 3x – y = 7 and x = 2, then y = ?',
                    options: ['1', '-1', '13', '7'],
                    correctAnswer: '-1',
                    points: 100,
                    explanation: 'Substituting x = 2: 3(2) – y = 7 → 6 – y = 7 → y = 6 – 7 = -1.'
                }
            ]
        });

        // ================================================================
        // CHAPTER 5 — Introduction to Euclid's Geometry
        // ================================================================
        console.log('\n── Chapter 5: Introduction to Euclid\'s Geometry ──');
        await upsertChapter({
            id: 'ch_math_9_5',
            subjectId: mathSubjectId,
            classLevel: '9',
            title: 'Chapter 5: Introduction to Euclid\'s Geometry',
            description: 'Covers Euclid\'s definitions, axioms, and postulates, concepts of point, line, and plane, and the foundational principles of geometry as established by Euclid.',
            topics: [
                'Euclid\'s Definitions',
                'Euclid\'s Axioms',
                'Euclid\'s Postulates',
                'Point, Line, and Plane',
                'Line Segment and Ray',
                'Incidence Axioms',
                'Equivalent Versions of Euclid\'s Fifth Postulate'
            ],
            content: {
                type: 'video',
                videoUrl: 'https://youtu.be/mxeXcTjQiuM',
                body: 'Euclid\'s geometry is based on definitions, axioms, and postulates. A point has position only, a line has no endpoints, and things equal to the same thing are equal to one another.'
            },
            teacherNote: 'Distinguish between axioms (universal truths) and postulates (geometry-specific assumptions). Euclid\'s 5th postulate and its equivalent versions are frequently tested. Use visual diagrams to explain points, lines, and planes.',
            order: 5,
            isPublished: true
        });

        await upsertQuiz({
            subjectId: mathSubjectId,
            chapterId: 'ch_math_9_5',
            title: 'Quiz: Introduction to Euclid\'s Geometry',
            description: 'Test your knowledge of Euclid\'s axioms, postulates, and foundational geometry concepts.',
            gameType: 'shooter',
            timeLimit: 30,
            passingScore: 60,
            isActive: true,
            questions: [
                {
                    id: 1,
                    type: 'mcq',
                    question: 'Euclid was a mathematician from:',
                    options: ['India', 'Greece', 'China', 'Rome'],
                    correctAnswer: 'Greece',
                    points: 100,
                    explanation: 'Euclid was an ancient Greek mathematician, often referred to as the "Father of Geometry". He lived in Alexandria, Egypt around 300 BC.'
                },
                {
                    id: 2,
                    type: 'mcq',
                    question: 'A point has:',
                    options: ['Length only', 'Breadth only', 'Position only', 'Length and breadth'],
                    correctAnswer: 'Position only',
                    points: 100,
                    explanation: 'According to Euclid, a point is that which has no part — it has only position, no length, breadth, or thickness.'
                },
                {
                    id: 3,
                    type: 'mcq',
                    question: 'A line has:',
                    options: ['One endpoint', 'Two endpoints', 'No endpoints', 'Three endpoints'],
                    correctAnswer: 'No endpoints',
                    points: 100,
                    explanation: 'A line extends infinitely in both directions and has no endpoints. A line segment has two endpoints, and a ray has one.'
                },
                {
                    id: 4,
                    type: 'mcq',
                    question: 'Euclid\'s geometry is based on:',
                    options: ['Theorems only', 'Definitions, axioms, and postulates', 'Formulas only', 'Algebra'],
                    correctAnswer: 'Definitions, axioms, and postulates',
                    points: 100,
                    explanation: 'Euclid\'s geometry is built on a foundation of definitions (explaining terms), axioms (self-evident truths), and postulates (assumptions specific to geometry).'
                },
                {
                    id: 5,
                    type: 'mcq',
                    question: 'Things equal to the same thing are equal to one another is:',
                    options: ['Definition', 'Axiom', 'Postulate', 'Formula'],
                    correctAnswer: 'Axiom',
                    points: 100,
                    explanation: 'This is Euclid\'s first axiom. Axioms are universal truths not specific to geometry, unlike postulates which are geometry-specific.'
                }
            ]
        });

        // ================================================================
        // Done
        // ================================================================
        console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('🎉 All Mathematics Class 9 chapters & quizzes seeded successfully!');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📚 Subject : Mathematics (math_icse) — Class 9');
        console.log('📖 Chapters added/updated:');
        console.log('   ch_math_9_1  Number Systems');
        console.log('   ch_math_9_2  Polynomials');
        console.log('   ch_math_9_3  Coordinate Geometry');
        console.log('   ch_math_9_4  Linear Equations in Two Variables');
        console.log('   ch_math_9_5  Introduction to Euclid\'s Geometry');
        console.log('🎮 Each chapter has a 5-question MCQ quiz.');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding Maths Class 9 data:', error.message);
        console.error(error);
        process.exit(1);
    }
};

seedMathsClass9();
