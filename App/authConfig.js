const msalConfig = {
    auth: {
    clientId: "d47f77e4-ba30-44fb-bd27-15e7911edd8a", 
    authority: "https://ariqtlearning.b2clogin.com/ariqtlearning.onmicrosoft.com/B2C_1_signInandSignUp", 
    knownAuthorities: ["ariqtlearning.b2clogin.com"], 
    redirectUri: "http://localhost:6420",
    },
    cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false, 
    }
};

const loginRequest = {
scopes: ["openid", ...apiConfig.b2cScopes],
};

const tokenRequest = {
scopes: [...apiConfig.b2cScopes],
forceRefresh: false
};