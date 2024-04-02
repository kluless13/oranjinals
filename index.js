#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
    
function displayOranj() {
    const text1 = 'Oranj';
    const space =''
    const line = '----------------------------------'
    const text2 = 'Whitepaper v0.1 - Oranjinals, by Oranj.'
    const int = 'An introduction to what our gamble is and what technology we believe will provide asymmetrically leveraged solutions.'
    const supply = 'Total Supply: 3,333'
    const free = 'Total Free: 333'
    const mint = 'Mint Price: TBD'
    const intro = 'Oranj Base Pvt. Ltd. is at the forefront of digital asset innovation, transforming these assets into tokenized forms for versatile applications across finance and supply chain sectors. In finance, we are honing in on ESG assets, notably carbon and biodiversity credits, to foster sustainable investments. Our technology enhances supply chain transparency by offering a "proof of process" feature, ensuring the traceability of goods from origin to end. Moreover, our commitment to environmental, social, and governance (ESG) standards is evident in our use of traceability technology for generating reports that comply with IFRS and BRSR standards, and many more! Oranj has even partnered with ESG asset marketplaces as official technology partners! '
    const mission = 'The Oranj Fundamentals.'
    const mission1 = 'Oranj aims to convert traditionally illiquid, non-investible assets into liquid, investible, and tradable in real-time digital assets.'
    const mission2 = 'Oranj has everything to do with digital assets. From the creation to infrastructure development to management and optimization.'
    const mission3 = 'Real World Assets will eventually become digital assets, and this asset class will need a seamless interface to work with, a robust infrastructure to work on and a network of resilient industry champions to work for.'

    console.log(chalk.rgb(255, 165, 0)(figlet.textSync(text1, { font: 'Slant' })));
    console.log(line);
    console.log(space);
    console.log(supply);
    console.log(free);
    console.log(mint);
    console.log(space);
    console.log(int);
    console.log(space);
    console.log(chalk.hex('#FF6107')(text2));
    console.log(space);
    console.log(mission);
    console.log(space);
    console.log(chalk.hex('#FF6107')(mission1));
    console.log(space);
    console.log(chalk.hex('#FF6107')(mission2));
    console.log(space);
    console.log(chalk.hex('#FF6107')(mission3));
    console.log(space);
}

displayOranj();

