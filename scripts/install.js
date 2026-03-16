#!/usr/bin/env node
/**
 * Academic Writer Skills Installer
 * Selectively installs skills based on profile, component, or module selection.
 * Mirrors the everything-claude-code install-apply.js pattern.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const SKILLS_DIR = path.join(ROOT, 'skills');
const MANIFESTS_DIR = path.join(ROOT, 'manifests');

// Load manifests
const profiles = JSON.parse(fs.readFileSync(path.join(MANIFESTS_DIR, 'install-profiles.json'), 'utf8'));
const modules = JSON.parse(fs.readFileSync(path.join(MANIFESTS_DIR, 'install-modules.json'), 'utf8'));
const components = JSON.parse(fs.readFileSync(path.join(MANIFESTS_DIR, 'install-components.json'), 'utf8'));

function parseArgs() {
  const args = process.argv.slice(2);
  const result = { profile: null, component: null, module: null, skills: [], dryRun: false, help: false };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--help' || args[i] === '-h') result.help = true;
    else if (args[i] === '--dry-run') result.dryRun = true;
    else if (args[i].startsWith('--profile=')) result.profile = args[i].split('=')[1];
    else if (args[i].startsWith('--component=')) result.component = args[i].split('=')[1];
    else if (args[i].startsWith('--module=')) result.module = args[i].split('=')[1];
    else if (args[i].startsWith('--skills=')) result.skills = args[i].split('=')[1].split(',');
  }

  return result;
}

function resolveSkills(args) {
  if (args.profile) {
    const profile = profiles.profiles[args.profile];
    if (!profile) {
      console.error(`Unknown profile: ${args.profile}`);
      console.error(`Available profiles: ${Object.keys(profiles.profiles).join(', ')}`);
      process.exit(1);
    }
    return profile.skills;
  }

  if (args.component) {
    const component = components.components[args.component];
    if (!component) {
      console.error(`Unknown component: ${args.component}`);
      process.exit(1);
    }
    const skills = new Set();
    for (const modName of component.modules) {
      for (const skill of modules.modules[modName].skills) {
        skills.add(skill);
      }
    }
    return [...skills];
  }

  if (args.module) {
    const mod = modules.modules[args.module];
    if (!mod) {
      console.error(`Unknown module: ${args.module}`);
      process.exit(1);
    }
    return mod.skills;
  }

  if (args.skills.length > 0) {
    return args.skills;
  }

  // Default: researcher profile
  console.log('No selection specified. Using --profile=researcher (default)');
  return profiles.profiles.researcher.skills;
}

function getInstallTarget() {
  const home = process.env.HOME || process.env.USERPROFILE;
  // Detect Claude Code skills directory
  const claudeSkillsDir = path.join(home, '.claude', 'skills');
  if (fs.existsSync(path.join(home, '.claude'))) {
    return claudeSkillsDir;
  }
  // Fallback: current directory
  return path.join(process.cwd(), 'installed-skills');
}

function printHelp() {
  console.log(`
Academic Writer Skills Installer v${profiles.version}

Usage:
  node scripts/install.js [options]

Options:
  --profile=<name>       Install a preset profile
  --component=<name>     Install skills for a component
  --module=<name>        Install a specific module
  --skills=a,b,c         Install specific skills by name
  --dry-run              Show what would be installed without installing
  --help                 Show this help

Profiles:
${Object.entries(profiles.profiles).map(([k, v]) => `  ${k.padEnd(15)} ${v.description} (${v.skills.length} skills)`).join('\n')}

Components:
${Object.entries(components.components).map(([k, v]) => `  ${k.padEnd(20)} ${v.description}`).join('\n')}

Modules:
${Object.entries(modules.modules).map(([k, v]) => `  ${k.padEnd(20)} ${v.description} (${v.skills.length} skills)`).join('\n')}

Examples:
  node scripts/install.js --profile=core
  node scripts/install.js --profile=researcher
  node scripts/install.js --profile=full
  node scripts/install.js --component=grant-writer
  node scripts/install.js --skills=grant-proposal,statistical-reporting
  node scripts/install.js --dry-run --profile=full
`);
}

function installSkill(skillName, targetDir, dryRun) {
  const skillSrc = path.join(SKILLS_DIR, skillName, 'SKILL.md');
  const installedDirName = `AW-${skillName}`;
  const skillDestDir = path.join(targetDir, installedDirName);
  const skillDest = path.join(skillDestDir, 'SKILL.md');

  if (!fs.existsSync(skillSrc)) {
    console.warn(`  ⚠ Skill not found: ${skillName} (${skillSrc})`);
    return false;
  }

  if (dryRun) {
    console.log(`  [dry-run] Would create: ${skillDestDir}/SKILL.md (name: ${installedDirName})`);
    return true;
  }

  fs.mkdirSync(skillDestDir, { recursive: true });

  // Copy content and rewrite the name: field to match the install directory name
  let content = fs.readFileSync(skillSrc, 'utf8');
  content = content.replace(/^(name:\s*)[\w-]+/m, `$1${installedDirName}`);
  fs.writeFileSync(skillDest, content, 'utf8');

  console.log(`  ✓ Installed: ${installedDirName}/SKILL.md`);
  return true;
}

function main() {
  const args = parseArgs();

  if (args.help) {
    printHelp();
    process.exit(0);
  }

  const skillsToInstall = resolveSkills(args);
  const target = getInstallTarget();

  console.log(`\nAcademic Writer Skills Installer`);
  console.log(`================================`);
  console.log(`Installing ${skillsToInstall.length} skills to: ${target}`);
  if (args.dryRun) console.log(`(dry-run mode — no files will be written)\n`);
  else console.log('');

  let success = 0;
  let failed = 0;

  for (const skill of skillsToInstall) {
    const ok = installSkill(skill, target, args.dryRun);
    if (ok) success++;
    else failed++;
  }

  console.log(`\nDone: ${success} installed, ${failed} failed`);

  if (!args.dryRun && success > 0) {
    console.log(`\nNext steps:`);
    console.log(`  Skills installed to: ${target}`);
    console.log(`  Reload Claude Code to activate skills.`);
  }
}

main();
