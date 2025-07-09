#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the input file
const inputFile = path.join(__dirname, 'training-transcript.json');
const outputFile = path.join(__dirname, 'dave-transcript.json');

try {
  // Read and parse the JSON file
  const data = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
  
  // Filter only Speaker 2's entries and transform them
  const daveTranscript = data
    .filter(entry => entry.speaker_id === 1) // speaker 2 has id 1
    .map(entry => ({
      sentence: entry.sentence
    }));
  
  // Write the filtered data to a new file
  fs.writeFileSync(outputFile, JSON.stringify(daveTranscript, null, 2));
  
  console.log(`Successfully extracted ${daveTranscript.length} entries from Dave (Speaker 2)`);
  console.log(`Output written to: ${outputFile}`);
  
} catch (error) {
  console.error('Error processing transcript:', error.message);
  process.exit(1);
}