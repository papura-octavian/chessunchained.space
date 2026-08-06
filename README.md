# chessunchained.space

Site-ul si demo-ul public pentru **Chess: Unchained** — sah in care piesele isi castiga
puterile in timpul partidei.

- Pagina: <https://chessunchained.space>
- Demo (Windows): [ultima versiune](https://github.com/papura-octavian/chessunchained.space/releases/latest/download/ChessUnchained-demo-win64.zip)

## Ce e aici

| | |
| --- | --- |
| `index.html`, `style.css`, `script.js` | pagina. HTML+CSS+JS simplu, fara framework si fara pas de build |
| `variants.json`, `pieces/` | catalogul celor 22 de variante, bilingv. **Generat din joc** |
| `shots/` | poze din joc, generate |
| `CNAME` | domeniul. **Scos momentan** — vezi mai jos |

**Codul jocului nu e aici.** Sta intr-un repo privat separat. Aici ajunge doar pagina si, ca
Release, arhiva cu jocul compilat.

## Cum se actualizeaza

Din proiectul jocului:

```
.\publish.ps1 -Tag v0.2 -Repo papura-octavian/chessunchained.space
```

Aia urca Release-ul nou si produce `variants.json`, `pieces/` si `shots/` in `build\publish\`.
Se copiaza cele trei peste cele de aici si se comit.

Butonul de download NU se atinge: foloseste adresa `/releases/latest/download/...`, care
serveste mereu ultima versiune. De asta arhiva pastreaza mereu acelasi nume.

## Arhiva nu se comite niciodata

GitHub blocheaza fisierele peste 100 MB, iar ce comiti ramane in istoric pentru totdeauna:
trei versiuni de demo ar insemna sute de megaocteti pe care oricine cloneaza ii descarca
degeaba. Release-urile stau in afara istoricului si accepta 2 GB per fisier.


## Domeniul propriu

Site-ul e live acum la <https://papura-octavian.github.io/chessunchained.space/>.

Fisierul `CNAME` e scos deliberat (redenumit `CNAME.gata-de-pus`): cat timp `chessunchained.space`
nu are DNS, prezenta lui face GitHub sa redirectioneze spre un domeniu mort, adica site-ul nu
mai e accesibil nimanui.

Ca sa treci pe domeniul propriu, dupa ce il cumperi, in Namecheap → Advanced DNS:

| Tip | Host | Valoare |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | papura-octavian.github.io. |

Apoi:

```
git mv CNAME.gata-de-pus CNAME && git commit -m "domeniul propriu" && git push
```

Dupa ce DNS-ul se propaga (minute-ore), bifezi **Enforce HTTPS** in Settings → Pages.
