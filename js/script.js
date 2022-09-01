"use strict"

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = ['Beck, Glen', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
                'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
                'Bellow, Saul', 'Benchely, Robert', 'Benenson, Peter', 'Ben-gurion, David',
                'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
                'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergam, Ingmar', 'Berio, Luciano',
                'Berle, Milton', 'Berlin, Irving', 'Berne, Erin', 'Bevan, Aneurin', 'Bevel, Ken',
                'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
                'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// Returns a new array containing all elements of the calling array for which the provided filtering function returns true.
// 1. Filter the list of investors for those who were born in the 1500's
let bornInThe1500s = inventors.filter((e) => e.year >= 1500 && e.year <= 1599);
console.group("Inventors from the 1500's");
console.table(bornInThe1500s); // -> Learned today :D
console.groupEnd();

// Array.protorype.map()
// Returns a new array containing the results of invoking a function on every element in the calling array.
// 2. Give us an array of the inventory first and last names
let inventorsFullName = inventors.map((e) => `${e.first} ${e.last}`);
console.group("Inventors full name");
console.table(inventorsFullName);
console.groupEnd();

// Array.prototype.sort()
// Sorts the elements of an array in place and returns the array.
// 3. Sort the inventors by birthdate, oldest to youngest
let descendantBirthdate =  inventors.sort((a, b) => b.year - a.year);
console.group("Descendant birthdate of the inventors");
console.table(descendantBirthdate);
console.groupEnd();

// Array.prototype.reduce()
// Executes a user-supplied "reducer" callback function on each element of the array (from left to right), to reduce it to a single value.
// 4. How many years did all inventors live?
let totalLivedYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0); // We set the 0 at the end bc at the begining total is undefined
console.group("Lived years of the inventros");
console.log(totalLivedYears);
console.groupEnd();

// 5. sort the inventors by years lived
let sortedByLivedYears = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
let livedYears = inventors.map((e) => `${e.first} ${e.last} lived ${e.passed - e.year} years.`)
console.group("Sorted inventros by lived years")
console.table(sortedByLivedYears);
console.table(livedYears);
console.groupEnd();

// 6. Create a list of Boulevards in Paris that contain 'de' wnywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris 
const boulevardsInParisCategory = ['Boulevards of Paris', 'City walls of Paris', 'Thiers wall',  'Wall of Charles V', 'Wall of Philip II Augustus',
                           'City gates of Paris', "Haussmann's renovation of Paris", 'Boulevards of the Marshals', 'Boulevard Auguste-Blanqui',
                           'Boulevard Barbès', 'Boulevard Beaumarchais', "Boulevard de l'Amiral-Bruix", 'Boulevard Mortier', 'Boulevard Poniatowski',
                           'Boulevard Soult', 'Boulevard des Capucines', 'Boulevard de la Chapelle','Boulevard de Clichy','Boulevard du Crime',
                           "Boulevard du Général-d'Armée-Jean-Simon", 'Boulevard Haussmann', "Boulevard de l'Hôpital", 'Boulevard des Italiens', 
                           'Boulevard Lefebvre', 'Boulevard de la Madeleine', 'Boulevard de Magenta', 'Boulevard Malesherbes', 'Boulevard Marguerite-de-Rochechouart', 
                           'Boulevard Montmartre','Boulevard du Montparnasse','Boulevard Raspail','Boulevard Richard-Lenoir','Boulevard Saint-Germain',
                           'Boulevard Saint-Michel','Boulevard de Sébastopol','Boulevard de Strasbourg','Boulevard du Temple','Boulevard Voltaire',
                           'Boulevard de la Zone',];

let boulevardsInParis = boulevardsInParisCategory.filter((e) => e.indexOf('de') != -1);
console.group("List with the Boulevards in Paris that contain 'de' wnywhere in the name");
console.table(boulevardsInParis);