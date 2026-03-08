# Pull & Install

## Pulling an Agent

```bash
clawpack pull owner/agent-name
```

This downloads the latest version and extracts it to `./agent-name/`.

### Options

```bash
# Pull a specific version
clawpack pull owner/agent-name@1.2.0

# Extract to a custom directory
clawpack pull owner/agent-name --dir ./my-agents/

# Pull + register in OpenClaw immediately
clawpack pull owner/agent-name --link

# Pull + link with specific auth
clawpack pull owner/agent-name --link --provider anthropic --api-key sk-ant-...

# Override agent name when linking
clawpack pull owner/agent-name --link --name custom-name

# Set model when linking
clawpack pull owner/agent-name --link --model sonnet
```

### What Gets Downloaded

The full agent workspace: manifest.json, SOUL.md, AGENTS.md, IDENTITY.md, README.md, skills/, memory/, and any other files the author included.

### Caching

Pulled bundles are cached at `~/.clawpack/bundles/`. Subsequent `chat` and `run` commands use the cache.

## Updating

Just pull again — it overwrites with the latest version:

```bash
clawpack pull owner/agent-name
```

Or specify a version:

```bash
clawpack pull owner/agent-name@2.0.0
```
