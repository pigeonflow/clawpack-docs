# clawpack chat

Start an interactive chat session with a pulled agent.

## Usage

```bash
clawpack chat <owner/slug> [options]
```

## Options

| Flag | Description | Default |
|------|-------------|---------|
| `--model <model>` | Override the model | Agent default |
| `-h, --help` | Show help | — |

## In-Chat Commands

| Command | Action |
|---------|--------|
| `/exit` or `/quit` | End the session |
| `/clear` | Clear the screen |
| `/info` | Show agent info |
| `Ctrl+C` twice | Force exit |

## Examples

```bash
# Chat with an agent
clawpack chat agentebox/clawdoctor

# Use a specific model
clawpack chat agentebox/shipwright --model opus
```

## How It Works

1. Pulls the agent if not cached
2. Registers as temporary agent in OpenClaw
3. Opens interactive readline chat
4. Messages route through your local gateway
5. On exit, unregisters the temporary agent

## Requirements

- OpenClaw installed and gateway running
- At least one model configured

## See Also

- [Chat guide](/guide/chat)
- [`run`](/cli/run) — One-shot execution
- [`pull`](/cli/pull) — Download first
