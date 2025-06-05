// uploadthing.js (backend)
const {
  createUploadthing,
  createRouteHandler,
} = require("uploadthing/express");

// Initialize UploadThing with secret key from environment variables
const f = createUploadthing({
  secret: process.env.UPLOADTHING_TOKEN,
});

// Define your upload endpoints
const fileRouter = {
  imageUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 5 },
  }).onUploadComplete(async ({ file }) => {
    try {
      console.log("Upload complete:", file);
      return { uploaded: true };
    } catch (err) {
      console.error("UploadThing callback error:", err);
      return { uploaded: false };
    }
  }),
};

// Create the express handler for your routes
const uploadthingHandler = createRouteHandler({
  router: fileRouter,
});

module.exports = uploadthingHandler;
