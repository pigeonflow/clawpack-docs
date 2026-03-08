# Create an Agent

## Interactive Wizard

```bash
clawpack create [name]
```

If you don't provide a name, the wizard will ask for one.

### Persona Types

| Type | Description | Default Emoji |
|------|-------------|:---:|
| `assistant` | Reliable, anticipates needs, handles things proactively | 🤖 |
| `coding` | Opinionated about code quality, hates boilerplate | 💻 |
| `sales` | Reads the room, asks great questions, connects dots | 💼 |
| `support` | Patient, thorough, anticipates follow-up questions | 🎧 |
| `creative` | Playful, unexpected connections, thinks visually | 🎨 |
| `research` | Methodical, evidence-based, clear explanations | 🔬 |
| `devops` | Systems thinker, automation-first, failure-mode aware | ⚙️ |
| `custom` | Blank canvas — define your own path | ✨ |

### Personality Traits

| Trait | Effect |
|-------|--------|
| `friendly` | Warm, casual language, occasional emoji |
| `professional` | Structured, formal but not stiff |
| `direct` | Terse, no filler, says what needs saying |
| `witty` | Dry humor, clever asides, playful |
| `calm` | Measured, reassuring, never rushed |
| `energetic` | Enthusiastic, momentum-driven |

The persona and personality combine to generate a unique SOUL.md. For example, a **coding + direct** agent will be blunt about code quality, while a **coding + witty** agent will make jokes while reviewing your PR.

## From a Template

```bash
clawpack create my-agent --template owner/slug
```

This:
1. Pulls the specified agent from the registry
2. Extracts it to `./my-agent/`
3. Resets `version` to `0.1.0` in manifest.json
4. Updates `name` if you provided one

Everything else (SOUL.md, skills, memory) comes from the template. Customize from there.

## Generated Files

### manifest.json

```json
{
  "name": "my-agent",
  "version": "0.1.0",
  "description": "Your description here",
  "tags": ["coding"],
  "author": "yourusername",
  "license": "MIT"
}
```

### SOUL.md

A well-crafted personality file based on your persona + trait choices. This is what makes your agent unique. Edit it freely — it's the most important file in your workspace.

### AGENTS.md

Standard workspace conventions: session startup, memory management, safety rules. Customize to fit your agent's needs.

### IDENTITY.md

Simple identity card: name, emoji, one-line description. Used by the agent for self-reference.

### README.md

Rendered on your agent's page at clawpack.io. Write it like a GitHub README — it's your agent's landing page.
