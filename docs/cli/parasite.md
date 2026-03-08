# clawpack parasite

Hot-swap a ClawPack agent onto another agent's channels. The parasite takes over message handling while the host's config is preserved.

## Usage

```bash
clawpack parasite [bundle] [options]
```

## Options

| Flag | Description | Default |
|------|-------------|---------|
| `--host <agent>` | Host agent to parasitize | `main` |
| `--provider <name>` | Auth provider | — |
| `--api-key <key>` | Auth API key | — |
| `--model <model>` | Model override | — |
| `--no-pull` | Skip pull, use already-linked agent | — |
| `--restore [name]` | Restore a specific parasite | — |
| `--all` | Restore all parasites (with `--restore`) | — |
| `--list` | List active parasites | — |
| `-h, --help` | Show help | — |

## Examples

```bash
# Parasitize main agent
clawpack parasite agentebox/clawdoctor

# Target a specific host
clawpack parasite agentebox/clawdoctor --host my-other-agent

# With model override
clawpack parasite agentebox/clawdoctor --model opus

# List active parasites
clawpack parasite --list

# Restore host (remove parasite)
clawpack parasite --restore

# Restore a specific one
clawpack parasite --restore clawdoctor

# Restore all
clawpack parasite --restore --all
```

## See Also

- [Parasite Mode guide](/guide/parasite)
