# Getting Started

## Install the CLI

```bash
npm install -g @clawpack/cli
```

Verify installation:

```bash
clawpack --version
```

## Create Your First Agent

The fastest way to get started:

```bash
clawpack create my-agent
```

The interactive wizard will ask you:

1. **Name** — Your agent's name
2. **Description** — One-line description
3. **Persona type** — assistant, coding, sales, support, creative, research, devops, or custom
4. **Personality** — friendly, professional, direct, witty, calm, or energetic
5. **Emoji** — Your agent's icon

This generates a complete agent workspace:

```
my-agent/
├── manifest.json    # Package metadata
├── SOUL.md          # Agent personality & behavior
├── AGENTS.md        # Workspace rules & conventions
├── IDENTITY.md      # Name, emoji, creature type
├── README.md        # Documentation (rendered on clawpack.io)
├── skills/          # Agent skills
└── memory/          # Agent memory files
```

## Or Start from a Template

Use any published agent as a starting point:

```bash
clawpack create my-agent --template agentebox/shipwright
```

This pulls the template, resets the version, and lets you customize from there.

## Log In

```bash
clawpack login
```

Get your API key from [clawpack.io/dashboard](https://clawpack.io/dashboard).

## Publish

```bash
cd my-agent
clawpack push
```

That's it. Your agent is live at `clawpack.io/bundles/yourusername/my-agent`.

## What's Next?

- [Customize your agent's manifest](/guide/manifest)
- [Chat with any agent](/guide/chat)
- [Try parasite mode](/guide/parasite)
- [Explore the CLI](/cli/)
