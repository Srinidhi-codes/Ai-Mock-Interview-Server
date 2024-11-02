const { json, where } = require('sequelize');
const { mockInterviews, userAnswers } = require('../../db/models');

const mockInterviewResolver = {
    Query: {
        async mockInterview(_, args) {
            try {
                const whereConditions = {};
                if (args.createdBy) {
                    whereConditions.createdBy = args.createdBy;
                }

                if (args.mockId) {
                    whereConditions.mockId = args.mockId;
                }

                const mockInterviewData = await mockInterviews.findAll({ where: whereConditions });
                return mockInterviewData;
            } catch (error) {
                console.error(error);
                throw new Error(error.message);
            }
        },

        async mockInterviewFeedback(_, args) {
            try {
                const mockInterviewFeedback = await userAnswers.findAll({ where: { mockIdRef: args.mockId } });
                return mockInterviewFeedback;
            } catch (error) {
                console.error(error);
                throw new Error(error.message);
            }
        }
    },
    Mutation: {
        async createMockInterview(_, { input }) {
            try {
                return await mockInterviews.create({
                    jsonMockResp: input.jsonMockResp,
                    jobPosition: input.jobPosition,
                    jobDesc: input.jobDesc,
                    jobExperience: input.jobExperience,
                    mockId: input.mockId,
                    createdBy: "test",
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
            } catch (error) {
                console.error(error);
                throw new Error(error.message);
            }
        },
        async createMockInterviewFeedback(_, { input }) {
            try {
                return await userAnswers.create({
                    mockIdRef: input.mockIdRef,
                    question: input.question,
                    correctAnswer: input.correctAnswer,
                    userAnswer: input.userAnswer,
                    feedback: input.feedback,
                    rating: input.rating,
                    userEmail: input.userEmail
                })
            } catch (error) {
                console.error(error);
                throw new Error(error.message);
            }
        }
    }
};

module.exports = mockInterviewResolver;