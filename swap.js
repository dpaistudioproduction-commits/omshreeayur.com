const fs = require('fs');

const hdFile = 'src/app/conditions/cardiovascular/heart-disease-and-blocks/page.tsx';
const efFile = 'src/app/blog/what-is-ejection-fraction-and-what-does-it-tell-you-about-heart-function/page.tsx';

let hdContent = fs.readFileSync(hdFile, 'utf8');
let efContent = fs.readFileSync(efFile, 'utf8');

// Extract imports
const hdImportsMatch = hdContent.match(/^(import[\s\S]+?)(?=export const metadata)/);
const efImportsMatch = efContent.match(/^(import[\s\S]+?)(?=export const metadata)/);
const hdImports = hdImportsMatch[1];
const efImports = efImportsMatch[1];

// Extract Body (everything from <div className="w-full px-[4%] py-16 md:py-24"> to the end, minus the closing tags of the main container and the component)
// Actually, it's easier to split by <div className="w-full px-[4%] py-16 md:py-24">
const splitStr = '<div className="w-full px-[4%] py-16 md:py-24">';

const hdParts = hdContent.split(splitStr);
const efParts = efContent.split(splitStr);

const hdHero = hdParts[0];
const hdBody = splitStr + hdParts[1]; // This is currently the EF body

const efHero = efParts[0];
const efBody = splitStr + efParts[1]; // This is currently the HD body

// Now reconstruct
// We also need to swap the imports so the lucide-react icons work for the HD body
const newHdContent = efImports + hdHero.replace(hdImports, '') + efBody;
const newEfContent = hdImports + efHero.replace(efImports, '') + hdBody;

fs.writeFileSync(hdFile, newHdContent);
fs.writeFileSync(efFile, newEfContent);

console.log("Swapped successfully");
