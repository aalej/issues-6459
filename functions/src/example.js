const functions = require("firebase-functions");
const regionalFunctions = functions.region("europe-west1");

const runtimeOpts = {
  memory: "4GB",
};

const handleOnCreate = async (snapshot, context) => {
  // Do some actions..
};

module.exports = function (exports) {
  exports.triggeredCloudFunction = regionalFunctions
    .runWith(runtimeOpts)
    .firestore.document(
      "collection/{documentUID}/subcollection/{subdocumentUID}"
    )
    .onCreate(handleOnCreate);
};
