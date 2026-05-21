export const mathsData = {
    chapters: [
        // --- Class 6 Maths ---
        {
            id: 'ch_math_6_1', subjectId: 'math_mid', classLevel: '6',
            title: '1. Knowing Our Numbers', description: 'Introduction to numbers, large numbers, and estimation.',
            topics: ['Number System', 'Estimation', 'Roman Numerals'], order: 1, videoUrl: 'https://www.youtube.com/embed/5F2-b8r4A98'
        },
        // --- Class 7 Maths ---
        {
            id: 'ch_math_7_1', subjectId: 'math_mid', classLevel: '7',
            title: '1. Integers', description: 'Addition, subtraction, multiplication, and division of integers.',
            topics: ['Integers', 'Operations', 'Properties'], order: 1, videoUrl: 'https://www.youtube.com/embed/4G5b8r4A98'
        },
        // --- Class 8 Maths ---
        {
            id: 'ch_math_8_1', subjectId: 'math_mid', classLevel: '8',
            title: '1. Rational Numbers', description: 'Properties and representation of rational numbers on a number line.',
            topics: ['Rational Numbers', 'Properties', 'Number Line'], order: 1, videoUrl: 'https://www.youtube.com/embed/1H2b8r4A98'
        },

        // --- Class 9 Maths ---
        {
            id: 'ch_math_9_1', subjectId: 'math_icse', classLevel: '9',
            title: '1. Number Systems', description: 'Real numbers, rational and irrational numbers.',
            topics: ['Rational Numbers', 'Irrational Numbers', 'Real Numbers'], order: 1, videoUrl: 'https://www.youtube.com/embed/IMnSIaPcqiE'
        },
        {
            id: 'ch_math_9_2', subjectId: 'math_icse', classLevel: '9',
            title: '2. Polynomials', description: 'Polynomials in one variable, zeroes, remainder theorem.',
            topics: ['Polynomials', 'Zeroes', 'Factorization'], order: 2, videoUrl: 'https://www.youtube.com/embed/4VHrvMutJQw'
        },
        {
            id: 'ch_math_9_3', subjectId: 'math_icse', classLevel: '9',
            title: '3. Coordinate Geometry', description: 'Cartesian system, plotting points.',
            topics: ['Cartesian System', 'Plotting Points'], order: 3, videoUrl: 'https://www.youtube.com/embed/3MIZUl6bWxY'
        },
        {
            id: 'ch_math_9_4', subjectId: 'math_icse', classLevel: '9',
            title: '4. Linear Equations in Two Variables', description: 'Linear equations, graph of linear equations.',
            topics: ['Linear Equations', 'Graphing'], order: 4, videoUrl: 'https://www.youtube.com/embed/rnudiJxVXxM'
        },
        {
            id: 'ch_math_9_5', subjectId: 'math_icse', classLevel: '9',
            title: '5. Triangles', description: 'Congruence of triangles, properties of triangles.',
            topics: ['Congruence', 'Properties of Triangles'], order: 5, videoUrl: 'https://www.youtube.com/embed/wIeiqvdVCJI'
        },

        // --- Class 10 Maths ---
        {
            id: 'ch_math_10_1', subjectId: 'math_icse', classLevel: '10',
            title: '1. Real Numbers', description: 'Fundamental Theorem of Arithmetic, Irrational Numbers.',
            topics: ['Euclid Division Lemma', 'Fundamental Theorem of Arithmetic', 'Irrational Numbers'], order: 1, videoUrl: 'https://www.youtube.com/embed/-UdHmSTmQtw'
        },
        {
            id: 'ch_math_10_2', subjectId: 'math_icse', classLevel: '10',
            title: '2. Polynomials (Class 10)', description: 'Zeros of a polynomial, Relationship between zeros and coefficients.',
            topics: ['Geometrical Meaning of Zeros', 'Zeros and Coefficients', 'Division Algorithm'], order: 2, videoUrl: 'https://www.youtube.com/embed/e-ldF73jG9E'
        },
        {
            id: 'ch_math_10_3', subjectId: 'math_icse', classLevel: '10',
            title: '3. Quadratic Equations', description: 'Roots of quadratic equations, Discriminant.',
            topics: ['Quadratic Formula', 'Discriminant'], order: 3, videoUrl: 'https://www.youtube.com/embed/t8fUmrKnvEM'
        },
        {
            id: 'ch_math_10_4', subjectId: 'math_icse', classLevel: '10',
            title: '4. Arithmetic Progressions', description: 'nth term, sum of n terms of an AP.',
            topics: ['Arithmetic Progressions', 'nth Term', 'Sum of n Terms'], order: 4, videoUrl: 'https://www.youtube.com/embed/OwuymRwsoUo'
        },
        {
            id: 'ch_math_10_5', subjectId: 'math_icse', classLevel: '10',
            title: '5. Trigonometry', description: 'Trigonometric ratios, values, identities.',
            topics: ['Trigonometric Ratios', 'Identities'], order: 5, videoUrl: 'https://www.youtube.com/embed/ubO1PcrN2b4'
        }
    ],

    quizzes: [
        // Class 6
        {
            chapterId: 'ch_math_6_1', title: 'Quiz: Knowing Our Numbers', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'What is the greatest 4-digit number?', options: ['9999', '1000', '9000', '9990'], correctAnswer: '9999', points: 100 }
            ]
        },
        // Class 7
        {
            chapterId: 'ch_math_7_1', title: 'Quiz: Integers', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: '(-3) × (-4) = ?', options: ['-12', '12', '-7', '7'], correctAnswer: '12', points: 100 }
            ]
        },
        // Class 8
        {
            chapterId: 'ch_math_8_1', title: 'Quiz: Rational Numbers', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'What is the multiplicative identity for rational numbers?', options: ['0', '1', '-1', '2'], correctAnswer: '1', points: 100 }
            ]
        },

        // --- Class 9 Maths Quizzes ---
        {
            chapterId: 'ch_math_9_1', title: 'Quiz: Number Systems', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: '√2 is?', options: ['Rational', 'Irrational', 'Integer', 'Natural'], correctAnswer: 'Irrational', points: 100 },
                { id: 2, type: 'mcq', question: 'HCF of 12 and 18?', options: ['6', '4', '3', '9'], correctAnswer: '6', points: 100 },
                { id: 3, type: 'mcq', question: '0.333... is?', options: ['Irrational', 'Rational', 'Integer', 'None'], correctAnswer: 'Rational', points: 100 },
                { id: 4, type: 'mcq', question: '(2³)² = ?', options: ['2^5', '2^6', '2^8', '2^9'], correctAnswer: '2^6', points: 100 },
                { id: 5, type: 'mcq', question: 'Decimal expansion of 1/7 is?', options: ['Terminating', 'Non-terminating repeating', 'Non-terminating non-repeating', 'Integer'], correctAnswer: 'Non-terminating repeating', points: 100 }
            ]
        },
        {
            chapterId: 'ch_math_9_2', title: 'Quiz: Polynomials', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Degree of 5x³ + 2x – 1?', options: ['1', '2', '3', '0'], correctAnswer: '3', points: 100 },
                { id: 2, type: 'mcq', question: 'Zero of p(x) = 2x + 4?', options: ['2', '-2', '4', '-4'], correctAnswer: '-2', points: 100 },
                { id: 3, type: 'mcq', question: 'Factor of x² – 4 is?', options: ['x+2', 'x-4', '(x+2)(x-2)', 'x+4'], correctAnswer: '(x+2)(x-2)', points: 100 },
                { id: 4, type: 'mcq', question: 'Remainder when x³+1 is divided by (x+1)?', options: ['0', '1', '2', '-1'], correctAnswer: '0', points: 100 },
                { id: 5, type: 'mcq', question: 'If p(x) = x² + 3x + 2, then p(-1) = ?', options: ['0', '6', '2', '-2'], correctAnswer: '0', points: 100 }
            ]
        },
        {
            chapterId: 'ch_math_9_3', title: 'Quiz: Coordinate Geometry', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Point (0, 5) lies on?', options: ['X-axis', 'Y-axis', 'Origin', 'Quadrant I'], correctAnswer: 'Y-axis', points: 100 },
                { id: 2, type: 'mcq', question: 'Quadrant of (-3, -2)?', options: ['I', 'II', 'III', 'IV'], correctAnswer: 'III', points: 100 },
                { id: 3, type: 'mcq', question: 'Distance from origin to (3, 4)?', options: ['3', '4', '5', '7'], correctAnswer: '5', points: 100 },
                { id: 4, type: 'mcq', question: 'Coordinates of origin?', options: ['(1,1)', '(0,1)', '(1,0)', '(0,0)'], correctAnswer: '(0,0)', points: 100 },
                { id: 5, type: 'mcq', question: 'Point (-2, 3) is in which quadrant?', options: ['I', 'II', 'III', 'IV'], correctAnswer: 'II', points: 100 }
            ]
        },
        {
            chapterId: 'ch_math_9_4', title: 'Quiz: Linear Equations in Two Variables', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: '2x + 3y = 6; if x=0, y = ?', options: ['2', '3', '6', '0'], correctAnswer: '2', points: 100 },
                { id: 2, type: 'mcq', question: 'How many solutions does 2x+y=5 have?', options: ['One', 'Two', 'Infinitely many', 'No solution'], correctAnswer: 'Infinitely many', points: 100 },
                { id: 3, type: 'mcq', question: 'x = 3 is a line parallel to?', options: ['X-axis', 'Y-axis', 'Both axes', 'None'], correctAnswer: 'Y-axis', points: 100 },
                { id: 4, type: 'mcq', question: 'y = 0 represents?', options: ['Y-axis', 'X-axis', 'Origin', 'Z-axis'], correctAnswer: 'X-axis', points: 100 },
                { id: 5, type: 'mcq', question: 'If 3x – y = 7 and x=2, then y = ?', options: ['1', '-1', '13', '7'], correctAnswer: '-1', points: 100 }
            ]
        },
        {
            chapterId: 'ch_math_9_5', title: 'Quiz: Triangles', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'SAS congruence rule requires?', options: ['Two sides and included angle', 'Three sides', 'Two angles and a side', 'None'], correctAnswer: 'Two sides and included angle', points: 100 },
                { id: 2, type: 'mcq', question: 'In a triangle, sum of all angles?', options: ['90°', '180°', '270°', '360°'], correctAnswer: '180°', points: 100 },
                { id: 3, type: 'mcq', question: 'Equilateral triangle has all sides?', options: ['Different', 'Two equal', 'All equal', 'None'], correctAnswer: 'All equal', points: 100 },
                { id: 4, type: 'mcq', question: 'Pythagorean triplet from (3,4,?)?', options: ['6', '5', '7', '8'], correctAnswer: '5', points: 100 },
                { id: 5, type: 'mcq', question: 'Median divides triangle into?', options: ['Two equal areas', 'Two unequal areas', 'Three parts', 'None'], correctAnswer: 'Two equal areas', points: 100 }
            ]
        },

        // --- Class 10 Maths Quizzes ---
        {
            chapterId: 'ch_math_10_1', title: 'Quiz: Real Numbers', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'HCF × LCM = ?', options: ['Sum of numbers', 'Product of numbers', 'Difference', 'Quotient'], correctAnswer: 'Product of numbers', points: 100 },
                { id: 2, type: 'mcq', question: 'Euclid\'s division lemma: a = ?', options: ['bq + r', 'b+q+r', 'bqr', 'b-q+r'], correctAnswer: 'bq + r', points: 100 },
                { id: 3, type: 'mcq', question: '√3 is?', options: ['Rational', 'Integer', 'Irrational', 'Natural'], correctAnswer: 'Irrational', points: 100 },
                { id: 4, type: 'mcq', question: 'Terminating decimal: which denominator?', options: ['Only 2\'s and 5\'s', 'Only 3\'s', 'Any prime', '7'], correctAnswer: 'Only 2\'s and 5\'s', points: 100 },
                { id: 5, type: 'mcq', question: 'LCM of 12 and 15?', options: ['30', '45', '60', '3'], correctAnswer: '60', points: 100 }
            ]
        },
        {
            chapterId: 'ch_math_10_2', title: 'Quiz: Polynomials', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Sum of zeroes of ax²+bx+c?', options: ['c/a', '-b/a', 'b/a', '-c/a'], correctAnswer: '-b/a', points: 100 },
                { id: 2, type: 'mcq', question: 'Product of zeroes of ax²+bx+c?', options: ['b/a', '-b/a', 'c/a', '-c/a'], correctAnswer: 'c/a', points: 100 },
                { id: 3, type: 'mcq', question: 'If zeroes are 2 and 3, polynomial is?', options: ['x²-5x+6', 'x²+5x+6', 'x²-5x-6', 'x²+6'], correctAnswer: 'x²-5x+6', points: 100 },
                { id: 4, type: 'mcq', question: 'Degree of a linear polynomial?', options: ['0', '1', '2', '3'], correctAnswer: '1', points: 100 },
                { id: 5, type: 'mcq', question: 'Number of zeroes of a cubic polynomial?', options: ['At most 2', 'At most 3', 'Exactly 3', 'At most 1'], correctAnswer: 'At most 3', points: 100 }
            ]
        },
        {
            chapterId: 'ch_math_10_3', title: 'Quiz: Quadratic Equations', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Discriminant = 0 means?', options: ['No real roots', 'Two distinct roots', 'Two equal real roots', 'Irrational roots'], correctAnswer: 'Two equal real roots', points: 100 },
                { id: 2, type: 'mcq', question: 'Roots of x²-5x+6=0?', options: ['2, 3', '-2,-3', '1,6', '2,-3'], correctAnswer: '2, 3', points: 100 },
                { id: 3, type: 'mcq', question: 'Quadratic formula: x = ?', options: ['(-b±√(b²-4ac))/2a', '(b±√(b²-4ac))/2a', '(-b±√(b²+4ac))/2a', 'None'], correctAnswer: '(-b±√(b²-4ac))/2a', points: 100 },
                { id: 4, type: 'mcq', question: 'If D < 0, roots are?', options: ['Real', 'Equal', 'Not real', 'Rational'], correctAnswer: 'Not real', points: 100 },
                { id: 5, type: 'mcq', question: 'x² + 1 = 0 has?', options: ['2 real roots', '1 real root', 'No real roots', 'Infinite roots'], correctAnswer: 'No real roots', points: 100 }
            ]
        },
        {
            chapterId: 'ch_math_10_4', title: 'Quiz: Arithmetic Progressions', gameType: 'memory', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'Common difference of 2, 5, 8, 11...?', options: ['2', '3', '4', '5'], correctAnswer: '3', points: 100 },
                { id: 2, type: 'mcq', question: 'nth term formula?', options: ['a+(n-1)d', 'a+(n+1)d', 'a-nd', 'a+nd'], correctAnswer: 'a+(n-1)d', points: 100 },
                { id: 3, type: 'mcq', question: 'Sum of n terms: Sn = ?', options: ['n/2(2a+(n-1)d)', 'n(a+l)', 'Both A & B', 'n/2(a+l)'], correctAnswer: 'Both A & B', points: 100 },
                { id: 4, type: 'mcq', question: '4th term of AP 3,7,11...?', options: ['13', '15', '17', '12'], correctAnswer: '15', points: 100 },
                { id: 5, type: 'mcq', question: 'Sum of first 10 natural numbers?', options: ['45', '50', '55', '60'], correctAnswer: '55', points: 100 }
            ]
        },
        {
            chapterId: 'ch_math_10_5', title: 'Quiz: Trigonometry', gameType: 'shooter', timeLimit: 30, passingScore: 50,
            questions: [
                { id: 1, type: 'mcq', question: 'sin 30° = ?', options: ['√3/2', '1/2', '1/√2', '1'], correctAnswer: '1/2', points: 100 },
                { id: 2, type: 'mcq', question: 'tan 45° = ?', options: ['0', '1/√2', '1', '√3'], correctAnswer: '1', points: 100 },
                { id: 3, type: 'mcq', question: 'sin²θ + cos²θ = ?', options: ['0', '2', '1', '-1'], correctAnswer: '1', points: 100 },
                { id: 4, type: 'mcq', question: 'sec²θ – tan²θ = ?', options: ['0', '2', '1', '-1'], correctAnswer: '1', points: 100 },
                { id: 5, type: 'mcq', question: 'cos 0° = ?', options: ['0', '1', '1/2', '√3/2'], correctAnswer: '1', points: 100 }
            ]
        }
    ]
};
