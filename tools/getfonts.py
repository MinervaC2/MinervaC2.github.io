# Download the page's fonts once and self-host them (my own script).
# usage: python3 -I getfonts.py <index.html> <out fonts dir>
import re, sys, os, urllib.request, urllib.parse, html

page, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'

def get(url):
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()

src = open(page, encoding='utf-8').read()
text = html.unescape(src)
cjk = sorted({c for c in text if ord(c) > 0x2E7F})   # CJK and full-width punctuation the page shows
print('cjk chars:', len(cjk))

faces = []
def fetch_css(query, keep_subsets, tag):
    css = get('https://fonts.googleapis.com/css2?' + query).decode()
    blocks = re.findall(r'(/\* ([^*]+) \*/\s*)?@font-face\s*\{([^}]*)\}', css)
    n = 0
    for _, subset, body in blocks:
        subset = (subset or '').strip()
        if keep_subsets and subset not in keep_subsets:
            continue
        url = re.search(r'url\((https://[^)]+)\)', body).group(1)
        fam = re.search(r"font-family:\s*'([^']+)'", body).group(1)
        wt = re.search(r'font-weight:\s*([^;]+);', body).group(1).strip()
        rng = re.search(r'unicode-range:\s*([^;]+);', body)
        fname = f"{tag}-{wt.replace(' ', '-')}-{subset or 'text'}-{n}.woff2"
        n += 1
        with open(os.path.join(out, fname), 'wb') as f:
            f.write(get(url))
        faces.append(f"@font-face {{ font-family: '{fam}'; font-style: normal; font-weight: {wt}; font-display: swap; "
                     f"src: url('{fname}') format('woff2');" + (f" unicode-range: {rng.group(1)};" if rng else '') + " }")
    print(tag, n, 'files')

fetch_css('family=Geist:wght@400..600&display=swap', {'latin', 'latin-ext'}, 'geist')
fetch_css('family=JetBrains+Mono:wght@400..500&display=swap', {'latin', 'latin-ext'}, 'jetbrains-mono')
fetch_css('family=Noto+Sans+TC:wght@400;500&display=swap&text=' + urllib.parse.quote(''.join(cjk)), None, 'noto-sans-tc')

with open(os.path.join(out, 'fonts.css'), 'w', encoding='utf-8') as f:
    f.write('/* Self-hosted subsets of Geist, JetBrains Mono (OFL) and Noto Sans TC (OFL, only the characters this page uses).\n'
            '   Rebuild after changing the Chinese copy: python3 -I tools/getfonts.py index.html fonts (from the repo root) */\n')
    f.write('\n'.join(faces) + '\n')
print('faces', len(faces))
