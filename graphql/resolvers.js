import { User } from "../model/user.js"

export default {
    Query: {
        async user(_, { ID }) {
            try {
                return await User.findById(ID)
            } catch (error) {
                if (error.name === 'CastError') {
                    return {
                        success: false,
                        message: 'Invalid user ID provided',
                    };
                }
            }

        },
        async getUsers(_, { amount }) {
            return await User.find().sort({ createdAt: -1 }).limit(amount)
        }
    },
    Mutation: {
        async createUser(_, { userInput: { name, description } }) {
            const createUser = await User.create({
                name: name,
                description: description,
                createdAt: new Date().toISOString(),
                thumbsUp: 0,
                thumbsDown: 0
            })
            console.log(createUser)
            return {
                id: createUser.id,
                ...createUser._doc
            }
        },

        async deleteUser(_, { ID }) {
            return await User.findByIdAndDelete(ID, { new: true })
        },
        async editUser(_, { ID, editUser: { name, thumbsUp } }) {
            return await User.findByIdAndUpdate(ID, { name: name, thumbsUp: thumbsUp }, { new: true })
        }
    }
}