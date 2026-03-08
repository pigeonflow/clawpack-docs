# Parasite Mode

Parasite mode lets you hot-swap any ClawPack agent onto an existing agent's channels. The parasite takes over message handling while preserving the host's configuration.

## Quick Start

```bash
clawpack parasite owner/agent-name
```

This pulls the agent and installs it as a parasite on your main agent. All incoming messages now go to the parasite instead of your main agent.

### Options

```bash
# Target a specific host agent
clawpack parasite owner/agent-name --host my-other-agent

# Set auth
clawpack parasite owner/agent-name --provider anthropic --api-key sk-ant-...

# Override model
clawpack parasite owner/agent-name --model opus

# Use an already-linked agent (skip pull)
clawpack parasite --no-pull

# List active parasites
clawpack parasite --list

# Restore the host (remove parasite)
clawpack parasite --restore

# Restore a specific parasite
clawpack parasite --restore agent-name

# Restore all parasites
clawpack parasite --restore --all
```

## How It Works

```
Before:  Telegram → Host Agent (Snoopy)
After:   Telegram → Parasite (ClawDoctor) → responses on Snoopy's channels
```

The parasite uses the host's channels but its own workspace and personality. When you restore, the host takes back control.

## Use Cases

- **Try before you buy**: Test a pulled agent on your real channels without permanent setup
- **Temporary specialists**: Need a coding agent for an hour? Parasite it, then restore
- **A/B testing**: Compare agents on the same channel
