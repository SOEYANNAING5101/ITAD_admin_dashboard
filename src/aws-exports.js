const awsConfig = {
    API: {
        endpoints: [
            {
                name: "SmartStorageAPI",
                endpoint: "https://sdr10vqtg4.execute-api.us-east-1.amazonaws.com/v1"
            }
        ]
    },
    Auth: {
        region: "us-east-1",
        userPoolId: "us-east-1_Y2f4ah8xY", 
        userPoolWebClientId: "4d75n0a3mjno5rotjbh54nn5t1",
        mandatorySignIn: true,
        authenticationFlowType: "USER_SRP_AUTH" 
    }
};

export default awsConfig;
