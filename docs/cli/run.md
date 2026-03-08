# clawpack run

Pull and run an agent locally.

## Usage

```bash
clawpack run <owner/slug> [options]
```

## Options

| Flag | Description | Default |
|------|-------------|---------|
| `--runtime <runtime>` | Runtime override | — |
| `--model <model>` | Model override | — |
| `--provider <name>` | Provider override | — |
| `--api-key <key>` | API key override | — |
| `--no-pull` | Skip pull, use cached | — |
| `-h, --help` | Show help | — |

## Examples

```bash
# Run an agent
clawpack run agentebox/shipwright

# With specific model
clawpack run agentebox/clawdoctor --model opus

# Use cached version
clawpack run agentebox/clawdoctor --no-pull

# Custom provider auth
clawpack run agentebox/clawdoctor --provider openrouter --api-key sk-or-...
```

## See Also

- [Run guide](/guide/run)
- [`chat`](/cli/chat) — Interactive mode
