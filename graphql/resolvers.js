let tokens = [
    {
        owner: "0x3f4c15eb41d00500027607e65583153b1bab048c",
        name: "Arima",
        price: "0.3 ETH"
    },
    {
        owner: "0xC38598C02044E87Fa18ac991CE8ac4615B78a16F",
        name: "Aimer",
        price: "0.3 ETH"
    },
    {
        owner: "0x7d649480b26a0ddcb948e157ee3d11cb52e4bf95",
        name: "Taka",
        price: "0.3 ETH"
    },
]
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        token: (_, { owner }) => {
            const index = tokens.findIndex((token) => token.owner === owner);
            console.log(index, tokens[index]);
            if (index >= 0) {
                return { ...tokens[index] }
            }
            else {
                return "have no result";
            }
        },
        tokens: () => {
            try {
                return tokens;
            } catch (error) {
                console.log(error);
            }
        }

    },
    Mutation: {
        addToken: (_, { owner, name, price }) => {
            try {
                tokens = [...tokens, { owner, name, price }]
                return "success";
            } catch (error) {
                return "failed";
            }
        },
        updateToken: (_, { owner, name, price }) => {
            try {
                const index = tokens.findIndex((token) => token.owner === owner);
                tokens[index].owner = owner ? owner : tokens[index].owner;
                tokens[index].name = name ? name : tokens[index].name;
                tokens[index].price = price ? price : tokens[index].price;
                return "success";
            } catch (error) {
                return "failed";
            }
        },
        burnToken: (_, { owner }) => {
            try {
                tokens = tokens.filter((token) => token.owner !== owner);
                return "success";
            } catch (error) {
                return "failed";
            }
        }
    }
};

module.exports = { resolvers };