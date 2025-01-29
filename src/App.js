import React from "react";
import { Amplify } from "aws-amplify";
import awsConfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Dashboard from "./pages/Dashboard";

Amplify.configure(awsConfig);

function App({ signOut, user }) {
    return (
        <div>
            <h1>Welcome, {user.username}!</h1>
            <button onClick={signOut}>Sign Out</button>
            <Dashboard />
        </div>
    );
}

export default withAuthenticator(App);
