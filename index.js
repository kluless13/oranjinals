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
    const val = 'Values'
    const values = "At Oranj, we don't just stay ahead; we define the frontier. Our aim is beyond the cutting edge – it's at the bleeding edge of innovation. We're not here to follow trends. We're here to shatter norms and redefine possibilities. Disruption is in our DNA. Conformity isn't our thing. We thrive on being distinct, embracing our uniqueness as a catalyst for change. Big problems? They're our playground. Where others see challenges, we see opportunities for groundbreaking solutions. Our technology isn't for the faint-hearted. It's designed for those who dare to dive deep into the uncharted territories of tech. These aren't just features; they're our core principles. We engineer for a world where seamless integration, top-tier security, and peak efficiency are the norms. We build not just for today but for infinity. Our infrastructure is designed to withstand the tests of time and trial. We embrace the cypherpunk philosophy – advocating for privacy, security, and freedom in the digital age. Change is constant, but our core remains unshakable. We are committed to immutability in our practices and solutions. Centralization is passé. We champion a decentralized approach, distributing power to where it belongs – with the people. Oranj you glad we’re different? – It's not just a phrase; it's our badge of honor. We celebrate our distinctiveness and invite you to join our unconventional journey."



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
    console.log(val);
    console.log(space);
    console.log(chalk.hex('#FF6107')(values));
}

displayOranj();

