const awsConfig = {
    Auth: {
        region: "us-east-1", 
        userPoolId: "us-east-1_fsYCUz224", 
        userPoolWebClientId: "6q2mev8kjuco3v3hgjnifslcv4", 
        mandatorySignIn: true, 
        authenticationFlowType: "USER_SRP_AUTH" 
    },
    API: {
        endpoints: [
            {
                name: "SmartStorageAPI",
                endpoint: "https://sdr10vqtg4.execute-api.us-east-1.amazonaws.com/v1"
            }
        ]
    }
};

export default awsConfig;
