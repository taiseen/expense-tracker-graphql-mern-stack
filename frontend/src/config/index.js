const localhost = "http://localhost:4000";
const endpoint = "/graphql";

const configs = {
    // the URL of our GraphQL server.
    graphqlUrl: import.meta.env.VITE_NODE_ENV === "development" ? localhost + endpoint : endpoint,
}

export default configs;