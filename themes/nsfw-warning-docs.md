# NSFW Link Warning System

This site uses a custom warning system for links that may contain NSFW content. Here's how to use it:

## How It Works

The system only shows warnings for links that are specifically tagged with the `data-nsfw-warning` attribute. Regular links work normally without any warnings.

## Usage Examples

### In Markdown Posts
```markdown
<!-- Basic warning (uses default message) -->
<a href="https://example.com" data-nsfw-warning="true">Link with default warning</a>

<!-- Custom warning message -->
<a href="https://example.com" data-nsfw-warning="This link contains adult-oriented content.">Custom warning</a>

<!-- No warning (normal link) -->
[Regular link](https://example.com)
```

### In Hugo Configuration (Social Icons)
```toml
socialIcons = [
    # No warning
    { id = "github", url = "https://github.com/MaddiFurr" },
    
    # With custom warning
    { id = "bluesky", url = "https://bsky.app/profile/estradiol.dog", nsfwWarning = "This profile may contain mature content." },
    
    # With basic warning
    { id = "email", url = "mailto:bark@puppygirl.io", nsfwWarning = "true" }
]
```

### In HTML Templates
```html
<!-- Basic warning -->
<a href="https://example.com" data-nsfw-warning="true">Link</a>

<!-- Custom warning -->
<a href="https://mature-site.com" data-nsfw-warning="This site contains explicit adult content.">Adult Site</a>

<!-- Target control -->
<a href="https://example.com" data-nsfw-warning="true" target="_self">Opens in same tab</a>
<a href="https://example.com" data-nsfw-warning="true" target="_blank">Opens in new tab (default)</a>
```

## Features

- **Selective warnings**: Only flagged links show warnings
- **Custom messages**: Use your own warning text
- **Target support**: Respects link target attributes
- **Dynamic content**: Works with dynamically added content
- **Professional links**: GitHub, LinkedIn, resume links work normally

## Warning Types

1. **No attribute**: Link works normally, no warning
2. **`data-nsfw-warning="true"`**: Shows default warning message
3. **`data-nsfw-warning="Custom message"`**: Shows your custom warning text

This gives you complete control over which links trigger warnings while keeping professional content accessible.
