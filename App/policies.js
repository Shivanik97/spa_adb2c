const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_signInandSignUp",
        editProfile: "B2C_1_editProfile"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://ariqtlearning.b2clogin.com/ariqtlearning.onmicrosoft.com/B2C_1_signInandSignUp",
        },
        editProfile: {
            authority: "https://ariqtlearning.b2clogin.com/ariqtlearning.onmicrosoft.com/B2C_1_editProfile"
        }
    },
    authorityDomain: "ariqtlearning.b2clogin.com"
}