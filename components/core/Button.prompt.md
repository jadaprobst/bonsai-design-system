Pill-shaped action button — use for any tappable CTA, form submit, or navigation trigger.

```jsx
<Button variant="primary" size="md" onClick={() => {}}>Start check-in</Button>
<Button variant="secondary" size="md">Maybe later</Button>
<Button variant="ghost" size="sm">Skip</Button>
<Button variant="soft" leftIcon={<LeafIcon />}>Grow my bonsai</Button>
<Button variant="danger" size="sm">Delete entry</Button>
<Button loading>Saving…</Button>
<Button fullWidth size="lg">Log today's habits</Button>
```

Notable variants/props:
- variant: primary (green fill) | secondary (green outline) | ghost (text only) | soft (pale green fill) | danger | danger-ghost
- size: xs (28px) | sm (36px) | md (44px, default) | lg (52px)
- loading: replaces children with spinner, disables click
- fullWidth: stretches to container
- leftIcon / rightIcon: any React node (use Lucide icons at 16–18px)
- Press state: scales to 0.96 on mousedown
- Focus state: green glow ring (--shadow-focus-brand)
