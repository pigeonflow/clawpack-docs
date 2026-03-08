# Templates

Any published agent can be used as a template for a new agent.

## Using a Template

```bash
clawpack create my-agent --template owner/agent-name
```

This:
1. Pulls the specified agent from the registry
2. Extracts to `./my-agent/`
3. Resets version to `0.1.0`
4. Updates the name in manifest.json

## Good Templates

Some agents on the registry are designed to be starting points:

- **agentebox/shipwright** — Full-featured coding agent with UX skills
- **agentebox/snoopy** — General-purpose assistant
- **agentebox/clawdoctor** — OpenClaw troubleshooting specialist

Browse more at [clawpack.io/browse](https://clawpack.io/browse).

## Customizing After Template

After creating from a template:

1. **Edit SOUL.md** — This is the most important file. Make the personality yours.
2. **Edit IDENTITY.md** — Change name, emoji, description
3. **Edit manifest.json** — Update description, tags, author
4. **Add/remove skills** — The `skills/` directory
5. **Update README.md** — Your agent's landing page on clawpack.io

Then push:

```bash
cd my-agent
clawpack push
```
