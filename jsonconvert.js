const fs = require("fs");

const createJson = (artTitle, author, publisher, artBody) => {
    const contentJSON = {
        title: artTitle,
        author: author,
        publisher: publisher,
        artBody: artBody,
      };

    //Converts and creates the json file
    const artFinal = JSON.stringify(contentJSON);
    const filename = artTitle.slice(0, 9).trim() + ".json";
    fs.writeFileSync(filename, artFinal);
}

module.exports = createJson;