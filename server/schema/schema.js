const graphql = require("graphql");
const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema} = graphql;

const books = [
    {id: 1, name: "Tippo and Friends", genre: "Children's Fiction"},
    {id: 2, name: "1984", genre: "Adult Fiction"},
    {id: 3, name: "The C programming Language", genre: "Educational"},
];

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => {return {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
    }},
});

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => {return {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
    }},
});

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        book: {
            type: BookType,
            args: {
                id: {type: GraphQLID},
            },
            resolve: function(parent, args) {
                return (books.filter(
                                (book) => {return book.id === Number(args.id);})[0]
                        );
            },
        },
        author: {
            type: AuthorType,
            args: {
                id: {type: GraphQLID},
                name: {type: GraphQLString},
            },
            resolve: function(parent, args) {

            },
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
})