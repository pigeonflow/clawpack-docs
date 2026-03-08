# clawpack create

Scaffold a new agent project with an interactive wizard or from a template.

## Usage

```bash
clawpack create [name] [options]
```

## Options

| Flag | Description |
|------|-------------|
| `--template <owner/slug>` | Create from an existing published agent |
| `-h, --help` | Show help |

## Interactive Wizard

```bash
clawpack create my-agent
```

Prompts for:
1. Agent name
2. Description
3. Persona type (assistant, coding, sales, support, creative, research, devops, custom)
4. Personality trait (friendly, professional, direct, witty, calm, energetic)
5. Emoji

Generates: `manifest.json`, `SOUL.md`, `AGENTS.md`, `IDENTITY.md`, `README.md`, `skills/`, `memory/`

## From Template

```bash
clawpack create my-agent --template agentebox/shipwright
```

Pulls the template, extracts to `./my-agent/`, resets version to `0.1.0`.

## Examples

```bash
# Interactive wizard
clawpack create my-bot

# From a template
clawpack create support-bot --template agentebox/clawdoctor

# Let wizard ask for name
clawpack create
```

## See Also

- [Create an Agent guide](/guide/create-agent)
- [Templates guide](/guide/templates)
- [`push`](/cli/push) — Publish after creating
