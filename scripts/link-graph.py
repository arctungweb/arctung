"""Internal link audit: which guide pages have no contextual inbound link.

Run from the repo root:  python scripts/link-graph.py
A guide listed with 0 inbound links is effectively orphaned - it is reachable
only from /guides/ (the index) and the sitemap, which carries almost no weight.
"""
import glob
import os
import re

GUIDES = "src/content/guides"


def main() -> None:
    slugs = [os.path.basename(p)[:-3] for p in glob.glob(os.path.join(GUIDES, "*.md"))]
    sources = []
    for pattern in ("src/**/*.astro", "src/**/*.ts", "src/**/*.md"):
        for path in glob.glob(pattern, recursive=True):
            with open(path, encoding="utf-8") as fh:
                sources.append((path.replace(os.sep, "/"), fh.read()))

    inbound = {slug: set() for slug in slugs}
    for path, text in sources:
        for match in re.finditer(r"guides/([a-z0-9-]+)", text):
            slug = match.group(1)
            if slug in inbound and os.path.basename(path) != slug + ".md":
                inbound[slug].add(path.replace("src/", ""))

    print(f"{'slug':48s} {'in':>3}  sources")
    for slug in sorted(slugs, key=lambda s: len(inbound[s])):
        origins = sorted(os.path.basename(p) for p in inbound[slug])
        print(f"{slug:48s} {len(inbound[slug]):3d}  {', '.join(origins[:6])}")

    orphans = [s for s in slugs if not inbound[s]]
    print(f"\n{len(slugs)} guides, {len(orphans)} with zero inbound links")


if __name__ == "__main__":
    main()
