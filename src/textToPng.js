var fs = require('fs');
var text2png = require('text2png');
var alphabets = require('./utils/alphabets');
var colorBanks = require('./utils/colorBanks');


async function BachProcessing() {
    var text_to_be_converted = alphabets.alphabets;
    var color_bank = colorBanks.colorBanks;
    let j = 1;

    for (let i = 0; i < text_to_be_converted.length; i++) {
        fs.writeFileSync(`PNG/${j}.png`, text2png(`${text_to_be_converted[i]}`, {
            font: '800px Futura',
            // localFontPath: 'fonts/Lobstar-Regular.ttf',
            // localFontName: 'Lobster',
            color: color_bank[122-i],
            backgroundColor: color_bank[i],
            lineSpacing: 20,
            padding: 200
        }));

        j++;
    }
}
BachProcessing();