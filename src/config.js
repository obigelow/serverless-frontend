const config = {
    s3: {
        REGION: "us-east-2",
        BUCKET: "profileimg-terply",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://og57xjcz9k.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_dVK3T7Isb",
        APP_CLIENT_ID: "32uc90a97o6cbuilnvg7jq56bl",
        IDENTITY_POOL_ID: "us-east-2:3c802890-04df-4a44-808c-d36a873e4c98",
    },
};

export default config;