# Chat with Agents

## Quick Start

```bash
clawpack chat owner/agent-name
```

If you haven't pulled the agent yet, it pulls automatically. Then opens an interactive chat session.

### Options

```bash
# Override the model
clawpack chat owner/agent-name --model opus
```

## In-Chat Commands

| Command | Action |
|---------|--------|
| `/exit` or `/quit` | End the session |
| `/clear` | Clear the screen |
| `/info` | Show agent info panel |
| `Ctrl+C` twice | Force exit |

## How It Works

1. Pulls the agent bundle (if not cached)
2. Registers it as a temporary agent in OpenClaw
3. Opens a readline-based chat interface
4. Messages go through your local OpenClaw gateway
5. On exit, unregisters the temporary agent

## Requirements

- OpenClaw must be installed and running (`openclaw gateway status`)
- At least one model must be configured (API key or setup-token)
- The agent runs locally on your machine — nothing is sent to ClawPack servers during chat
