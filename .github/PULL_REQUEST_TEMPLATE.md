## Description

<!-- Describe what this PR does and why -->

## Type of Change

- [ ] New skill
- [ ] Skill update/expansion
- [ ] Bug fix
- [ ] Documentation update
- [ ] CI/tooling change
- [ ] Other: ___

## Skill Checklist (if adding/modifying a skill)

- [ ] Skill file is at `skills/{name}/SKILL.md`
- [ ] Skill name in directory matches name in `plugin.json`
- [ ] Added `"path": "skills/{name}/SKILL.md"` in `plugin.json`
- [ ] `marketplace.json` synced to match `plugin.json`
- [ ] Skill added to appropriate module(s) in `manifests/install-modules.json`
- [ ] Skill in `manifests/install-profiles.json` full profile (if new skill)
- [ ] Minimum 200 lines of substantive content
- [ ] At least 5 concrete usage examples
- [ ] Integration with other skills documented

## Documentation Checklist

- [ ] `CHANGELOG.md` updated with this change
- [ ] `README.md` updated if skill count or features changed
- [ ] No `.log` or `.zip` files committed

## Testing

- [ ] `node scripts/install.js --profile=full --dry-run` runs without error
- [ ] All skill paths validate: `node -e "const f=require('fs'),p=JSON.parse(f.readFileSync('.claude-plugin/plugin.json','utf8')); p.skills.forEach(s=>{if(!f.existsSync(s.path||'skills/'+s.name+'/SKILL.md'))throw new Error('Missing: '+s.name);}); console.log('All OK');"`
- [ ] `plugin.json` and `marketplace.json` are identical

## Additional Notes

<!-- Any other context, screenshots, or information -->
