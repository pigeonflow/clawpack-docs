# Link to OpenClaw

After pulling an agent, you can register it as a permanent agent in your OpenClaw setup.

## Link

```bash
clawpack link ./agent-directory
```

This:
1. Reads the manifest
2. Registers the agent in OpenClaw's config
3. Sets up auth (if provided)
4. Runs a health check
5. The agent is now available on all your channels

### Options

```bash
# Custom agent name
clawpack link ./my-agent --name production-bot

# Set up auth during linking
clawpack link ./my-agent --provider anthropic --api-key sk-ant-...

# Set a specific model
clawpack link ./my-agent --model opus

# Skip the health check
clawpack link ./my-agent --skip-health-check
```

## Unlink

Remove an agent from OpenClaw (keeps the workspace files):

```bash
clawpack unlink agent-name
```

## Shortcut: Pull + Link

```bash
clawpack pull owner/agent-name --link --provider anthropic --api-key sk-ant-...
```
