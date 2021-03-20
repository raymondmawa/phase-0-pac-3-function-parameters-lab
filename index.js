//Calls function introduction with paramenter name w return displayin the paramenter  name
function introduction (name) {
    return `Hi, my name is ${name}.`;
  }
console.log(introduction("Josh"));

//Calls function introductionWithLanguage w two paramenters name an language w return displayin the paramenter name an language
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguage("Josh", "Ember.js"));

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguageOptional("Gracie", "JavaScript"));
