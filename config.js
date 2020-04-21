//We are defining our ENV variables here. 
//At the time of running our Express server, the values of these variables will be use to connect to the different Autodesk Forge services we will need.

// Autodesk Forge configuration
module.exports = {
    // Set environment variables or hard-code here
    credentials: {
        // client_id: process.env.FORGE_CLIENT_ID,
        // client_secret: process.env.FORGE_CLIENT_SECRET,
        // callback_url: process.env.FORGE_CALLBACK_URL
         client_id: "ToERIyAfr2sXGStanFLZmYa91A03U0e5",
         client_secret: "T47ET1B1zLR6Igm0",
         callback_url: "http://localhost:3000/api/forge/callback/oauth"
    },
    scopes: {
        // Required scopes for the server-side application
        internal: ['bucket:create', 'bucket:read', 'data:read', 'data:create', 'data:write'],
        // Required scope for the client-side viewer
        public: ['viewables:read']
    }
};