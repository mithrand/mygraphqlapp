const graphql = require('graphql');
const _ = require('lodash');

const users = [
    {"id":"23", "firstName":"Bill", "age":20},
    {"id":"40", "firstName":"Alex", "age":40}
];

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

const userType = new GraphQLObjectType({
    name:'User',
    fields:{
        id:{ type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
    }
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        user: {
            type: userType,
            args: { id: GraphQLString },
            resolve(parentValue,args){
                _.find(users,{id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});