import Amplify from "aws-amplify";

const awsConfig = {
    API: {
        endpoints: [
            {
                name: "SmartStorageAPI",
                endpoint: "https://sdr10vqtg4.execute-api.us-east-1.amazonaws.com/v1"
            }
        ]
    }
};
Amplify.configure({
    Auth: {
        region: "us-east-1",
        userPoolId: "us-east-1_y1XDrS9Mn",
        userPoolWebClientId: "61o3bsc60468ft1ac1ak3kr1gp",
        authenticationFlowType: "USER_PASSWORD_AUTH"
    }
});



export default awsConfig;
