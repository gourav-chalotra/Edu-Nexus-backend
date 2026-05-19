import Chapter from '../models/Chapter.js';
import Quiz from '../models/Quiz.js';

// @desc    Get all chapters for a subject
// @route   GET /api/chapters/subject/:subjectId
// @access  Private
export const getChaptersBySubject = async (req, res) => {
    try {
        const query = {
            subjectId: req.params.subjectId,
            isPublished: true
        };

        if (req.user && req.user.role === 'student' && req.user.classLevel) {
            query.classLevel = String(req.user.classLevel);
        }

        const chapters = await Chapter.find(query).sort({ order: 1 });

        res.json({
            success: true,
            count: chapters.length,
            data: chapters
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Get single chapter
// @route   GET /api/chapters/:subjectId/:chapterId
// @access  Private
export const getChapter = async (req, res) => {
    try {
        console.log(`[DEBUG] getChapter: subjectId=${req.params.subjectId}, chapterId=${req.params.chapterId}`);
        const query = {
            subjectId: req.params.subjectId,
            id: req.params.chapterId,
            isPublished: true
        };

        if (req.user && req.user.role === 'student' && req.user.classLevel) {
            query.classLevel = String(req.user.classLevel);
        }

        const chapter = await Chapter.findOne(query);
        console.log(`[DEBUG] Found chapter: ${chapter ? chapter.id : 'null'}`);

        if (!chapter) {
            return res.status(404).json({
                success: false,
                message: 'Chapter not found'
            });
        }

        res.json({
            success: true,
            data: chapter
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Create new chapter
// @route   POST /api/chapters
// @access  Private (Teacher/Admin)
export const createChapter = async (req, res) => {
    try {
        const chapter = await Chapter.create({
            ...req.body,
            createdBy: req.user._id
        });

        res.status(201).json({
            success: true,
            data: chapter
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Update chapter
// @route   PUT /api/chapters/:subjectId/:chapterId
// @access  Private (Teacher/Admin)
export const updateChapter = async (req, res) => {
    try {
        const chapter = await Chapter.findOneAndUpdate(
            {
                subjectId: req.params.subjectId,
                id: req.params.chapterId
            },
            req.body,
            { new: true, runValidators: true }
        );

        if (!chapter) {
            return res.status(404).json({
                success: false,
                message: 'Chapter not found'
            });
        }

        res.json({
            success: true,
            data: chapter
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Add video to chapter
// @route   PUT /api/chapters/:subjectId/:chapterId/video
// @access  Private (Teacher/Admin)
export const addVideoToChapter = async (req, res) => {
    try {
        const { videoUrl } = req.body;

        const chapter = await Chapter.findOneAndUpdate(
            {
                subjectId: req.params.subjectId,
                id: req.params.chapterId
            },
            {
                'content.videoUrl': videoUrl,
                'content.type': 'video'
            },
            { new: true }
        );

        if (!chapter) {
            return res.status(404).json({
                success: false,
                message: 'Chapter not found'
            });
        }

        res.json({
            success: true,
            data: chapter
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Add attachment to chapter
// @route   POST /api/chapters/:subjectId/:chapterId/attachments
// @access  Private (Teacher/Admin)
export const addAttachment = async (req, res) => {
    try {
        const { name, url, type } = req.body;

        const chapter = await Chapter.findOneAndUpdate(
            {
                subjectId: req.params.subjectId,
                id: req.params.chapterId
            },
            {
                $push: {
                    attachments: { name, url, type }
                }
            },
            { new: true }
        );

        if (!chapter) {
            return res.status(404).json({
                success: false,
                message: 'Chapter not found'
            });
        }

        res.json({
            success: true,
            data: chapter
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Update teacher note
// @route   PUT /api/chapters/:subjectId/:chapterId/note
// @access  Private (Teacher/Admin)
export const updateTeacherNote = async (req, res) => {
    try {
        const { teacherNote } = req.body;

        const chapter = await Chapter.findOneAndUpdate(
            {
                subjectId: req.params.subjectId,
                id: req.params.chapterId
            },
            { teacherNote },
            { new: true }
        );

        if (!chapter) {
            return res.status(404).json({
                success: false,
                message: 'Chapter not found'
            });
        }

        res.json({
            success: true,
            data: chapter
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Delete attachment from chapter
// @route   DELETE /api/chapters/:subjectId/:chapterId/attachments/:attachmentId
// @access  Private (Teacher/Admin)
export const deleteAttachment = async (req, res) => {
    try {
        const { attachmentId } = req.params;

        const chapter = await Chapter.findOneAndUpdate(
            {
                subjectId: req.params.subjectId,
                id: req.params.chapterId
            },
            {
                $pull: {
                    attachments: { _id: attachmentId }
                }
            },
            { new: true }
        );

        if (!chapter) {
            return res.status(404).json({
                success: false,
                message: 'Chapter not found'
            });
        }

        res.json({
            success: true,
            data: chapter
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// @desc    Fast upload chapter with video and quiz
// @route   POST /api/chapters/fast-upload
// @access  Private (Teacher/Admin)
export const fastUploadContent = async (req, res) => {
    try {
        const { subjectId, chapterId, title, description, classLevel, videoUrl, questions } = req.body;
        
        // 1. Create or Update Chapter
        let chapter = await Chapter.findOne({ subjectId, id: chapterId });
        if (chapter) {
            chapter.title = title;
            chapter.description = description || chapter.description;
            chapter.classLevel = classLevel || chapter.classLevel;
            chapter.content = {
                type: 'video',
                videoUrl: videoUrl || chapter.content.videoUrl,
                body: chapter.content.body
            };
            await chapter.save();
        } else {
            chapter = await Chapter.create({
                id: chapterId,
                subjectId,
                title,
                description: description || 'No description provided',
                classLevel: classLevel || '10',
                content: {
                    type: 'video',
                    videoUrl: videoUrl || ''
                },
                createdBy: req.user._id
            });
        }

        // 2. Create or Update Quiz
        if (questions && questions.length > 0) {
            let quiz = await Quiz.findOne({ subjectId, chapterId });
            
            const formattedQuestions = questions.map((q, i) => ({
                id: i + 1,
                type: 'mcq',
                question: q.question,
                options: q.options,
                correctAnswer: q.correctAnswer,
                points: q.points || 100
            }));

            if (quiz) {
                quiz.title = `${title} Quiz`;
                quiz.questions = formattedQuestions;
                await quiz.save();
            } else {
                quiz = await Quiz.create({
                    subjectId,
                    chapterId,
                    title: `${title} Quiz`,
                    questions: formattedQuestions,
                    createdBy: req.user._id
                });
            }
        }

        res.status(200).json({
            success: true,
            message: 'Content uploaded successfully',
            data: { chapter }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
