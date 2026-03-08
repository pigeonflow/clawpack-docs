# Run Agents Locally

## Quick Start

```bash
clawpack run owner/agent-name
```

Pulls the agent and runs it with your local OpenClaw runtime.

### Options

```bash
# Override the model
clawpack run owner/agent-name --model opus

# Use a specific provider
clawpack run owner/agent-name --provider openrouter --api-key sk-or-...

# Use a different runtime
clawpack run owner/agent-name --runtime openclaw@latest

# Skip pulling (use cached version)
clawpack run owner/agent-name --no-pull
```

## Run vs Chat

| | `run` | `chat` |
|---|---|---|
| **Mode** | One-shot execution | Interactive conversation |
| **Input** | Task from args or stdin | Readline loop |
| **Best for** | Automation, scripts, CI | Exploring agents, testing |
