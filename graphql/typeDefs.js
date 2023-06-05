import { gql } from "apollo-server";

export default gql`
type User{
    name:String
    description:String
    createdAt:String
    thumbsUp:Int
    thumbsDown:Int
}

input UserInput{
    name:String
    description:String
}

input EditUser{
    name:String
    thumbsUp:Int
}

type Query{
   user(ID:ID!):User!
   getUsers(amount:Int):[User]
}

type Mutation{
    createUser(userInput:UserInput):User!
    deleteUser(ID:ID!):User!
    editUser(ID:ID!,editUser:EditUser):User!
}
`