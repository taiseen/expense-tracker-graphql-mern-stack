const localhost = "http://localhost:5000";
const endpoint = "/graphql";

const configs = {
    // the URL of our GraphQL server.
    graphqlUrl: import.meta.env.MODE === "development" ? localhost + endpoint : endpoint,
}

export default configs;