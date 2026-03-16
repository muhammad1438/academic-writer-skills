#!/usr/bin/env node
/**
 * Academic Writer Skills Install Planner
 * Shows what would be installed for a given selection without installing.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const MANIFESTS_DIR = path.join(ROOT, 'manifests');

const profiles = JSON.parse(fs.readFileSync(path.join(MANIFESTS_DIR, 'install-profiles.json'), 'utf8'));
const modules = JSON.parse(fs.readFileSync(path.join(MANIFESTS_DIR, 'install-modules.json'), 'utf8'));
const components = JSON.parse(fs.readFileSync(path.join(MANIFESTS_DIR, 'install-components.json'), 'utf8'));

console.log('\n=== Academic Writer Skills — Install Plan ===\n');

console.log('PROFILES:');
for (const [name, profile] of Object.entries(profiles.profiles)) {
  console.log(`  ${name} (${profile.skills.length} skills): ${profile.description}`);
  for (const skill of profile.skills) {
    console.log(`    - ${skill}`);
  }
  console.log('');
}

console.log('MODULES:');
for (const [name, mod] of Object.entries(modules.modules)) {
  console.log(`  ${name} (${mod.skills.length} skills): ${mod.description}`);
  for (const skill of mod.skills) {
    console.log(`    - ${skill}`);
  }
  console.log('');
}

console.log('COMPONENTS:');
for (const [name, comp] of Object.entries(components.components)) {
  const allSkills = new Set();
  for (const modName of comp.modules) {
    for (const skill of modules.modules[modName].skills) {
      allSkills.add(skill);
    }
  }
  console.log(`  ${name} (${allSkills.size} skills): ${comp.description}`);
  console.log('');
}
