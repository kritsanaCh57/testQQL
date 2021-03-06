const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql;

const users = [
  { id: '23', firstName: 'Bill', age: 20},
  { id: '24', firstName: 'Bill1', age: 21},
  { id: '25', firstName: 'Bill2', age: 22},
  { id: '26', firstName: 'Bill3', age: 23},

];

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields : {
    user : {
      type : UserType,
      args : {
        id : {
          type : GraphQLString
        }
      },
      resolve(parentValue, args) {
        return _.find(users, { id:args.id });
      }
    }
  }
});

module.exprots = new GraphQLSchema({
  query: RootQuery
});
