//  Checks if number, is used for heading to sort out the irrelevant headings.
function is_numeric(str){
    return /^\d+$/.test(str);
  }

// Scrapes all the headings with their paragraphs
const getSections = ($) => {
  const sectionTexts = [];

  const artBody = $(".story-body__inner").children();
  
  //    Iterates through all the elements in the article body
  artBody.each((i, element) => {
    //  Fetches next heading
    const heading = $(element).filter("h2");
    //  Fetches all the paragraphs that belong to a certain heading
    const text = $(heading).nextUntil("h2", "p").text().trim();

    // Checks if heading begins with a number and if it is it then adds the 
    //  heading with paragraphs to the array that will be returned.
    if (is_numeric(heading.text().trim().charAt(0))) {
      sectionTexts[i] = {
          heading: heading.text().trim(),
        text: text,
      };  
  }
  });
  
  //    Removes all the empty elements
  return sectionTexts.filter((obj) => obj);
};

module.exports = getSections;