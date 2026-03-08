# clawpack pull

Download an agent bundle from the registry.

## Usage

```bash
clawpack pull <owner/slug[@version]> [options]
```

## Options

| Flag | Description | Default |
|------|-------------|---------|
| `--dir <path>` | Extract to directory | `.` |
| `--link` | Register in OpenClaw after pulling | — |
| `--provider <name>` | Auth provider for `--link` | — |
| `--api-key <key>` | API key for `--link` | — |
| `--model <model>` | Model for `--link` | — |
| `--name <name>` | Agent name override for `--link` | — |
| `-h, --help` | Show help | — |

## Examples

```bash
# Pull latest
clawpack pull agentebox/shipwright

# Pull specific version
clawpack pull agentebox/shipwright@2.2.0

# Pull to custom directory
clawpack pull agentebox/shipwright --dir ./my-agents/

# Pull + register in OpenClaw
clawpack pull agentebox/shipwright --link

# Pull + link with auth
clawpack pull agentebox/shipwright --link --provider anthropic --api-key sk-ant-...
```

## See Also

- [Pull & Install guide](/guide/pull-install)
- [`link`](/cli/link) — Register after pulling
- [`chat`](/cli/chat) — Chat with pulled agent
