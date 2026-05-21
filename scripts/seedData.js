import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Subject from '../models/Subject.js';
import Chapter from '../models/Chapter.js';
import Quiz from '../models/Quiz.js';

import { subjectsData } from './data/subjects.js';
import { mathsData } from './data/maths.js';
import { englishData } from './data/english.js';
import { scienceData } from './data/science.js';
import { sstData } from './data/sst.js';

dotenv.config();

const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/edu-nexus';
        await mongoose.connect(mongoURI);
        console.log('✅ Connected to MongoDB');

        // Note: We are no longer wiping the database. 
        // We will safely upsert data so user progress is kept intact!
        console.log('🔄 Upserting curriculum data safely...');

        // 1. Create/Update Users
        const defaultUsers = [
            { email: 'admin@demo.com', name: 'Admin User', password: 'password123', role: 'admin', avatar: 'Felix', xp: 0, level: 1 },
            { email: 'teacher@demo.com', name: 'Demo Teacher', password: 'password123', role: 'teacher', avatar: 'Felix' },
            { email: 'student@demo.com', name: 'Demo Student', password: 'password123', role: 'student', avatar: 'Felix', classLevel: 10, school: 'Springfield High', xp: 1500, level: 2, streak: 5 }
        ];

        for (const user of defaultUsers) {
            await User.findOneAndUpdate({ email: user.email }, user, { upsert: true, new: true, setDefaultsOnInsert: true });
        }
        console.log('✅ Upserted default users');

        // 2. Create/Update Subjects
        for (const subject of subjectsData) {
            await Subject.findOneAndUpdate({ id: subject.id }, subject, { upsert: true, new: true, setDefaultsOnInsert: true });
        }
        console.log('✅ Upserted subjects');

        // 3. Upsert Chapters and Quizzes
        const datasets = [mathsData, englishData, scienceData, sstData];
        
        let chaptersCount = 0;
        let quizzesCount = 0;

        for (const dataset of datasets) {
            // Upsert Chapters
            if (dataset.chapters) {
                for (const chapter of dataset.chapters) {
                    await Chapter.findOneAndUpdate(
                        { id: chapter.id },
                        { 
                            ...chapter, 
                            isPublished: true, 
                            content: { type: chapter.videoUrl ? 'video' : 'text', body: chapter.description, videoUrl: chapter.videoUrl || '' }
                        },
                        { upsert: true, new: true, setDefaultsOnInsert: true }
                    );
                    chaptersCount++;
                }
            }

            // Upsert Quizzes
            if (dataset.quizzes) {
                for (const quiz of dataset.quizzes) {
                    await Quiz.findOneAndUpdate(
                        { chapterId: quiz.chapterId },
                        { ...quiz, isActive: true },
                        { upsert: true, new: true, setDefaultsOnInsert: true }
                    );
                    quizzesCount++;
                }
            }
        }

        console.log(`✅ Upserted ${chaptersCount} chapters and ${quizzesCount} quizzes.`);
        console.log('🎉 Database seeded safely and successfully!');

        console.log('\n📧 Test Credentials:');
        console.log('Admin: admin@demo.com / password123');
        console.log('Teacher: teacher@demo.com / password123');
        console.log('Student: student@demo.com / password123');
        
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
