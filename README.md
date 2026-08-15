# chessunchained.space

Site-ul si build-ul public pentru **Chess: Unchained** — sah in care piesele isi castiga
puterile in timpul partidei.

- Pagina: <https://chessunchained.space>
- Jocul (Windows): [ultima versiune](https://github.com/papura-octavian/chessunchained.space/releases/latest/download/ChessUnchained-demo-win64.zip)

Din v0.2 se publica **jocul complet**, nu presetul cu eticheta `demo`: are si BATTLE, si
clasamentul, si insigna de rang. Numele arhivei a ramas `...-demo-win64.zip` pentru ca butonul
de pe pagina arata catre el, iar un nume nou ar strica descarcarea pentru oricine are pagina
deschisa.

## Ce e aici

| | |
| --- | --- |
| `index.html`, `style.css`, `script.js` | pagina. HTML+CSS+JS simplu, fara framework si fara pas de build |
| `variants.json`, `pieces/` | catalogul celor 22 de variante, bilingv. **Generat din joc** |
| `shots/` | poze din joc, generate |
| `CNAME` | domeniul |

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
trei versiuni ale jocului ar insemna sute de megaocteti pe care oricine cloneaza ii descarca
degeaba. Release-urile stau in afara istoricului si accepta 2 GB per fisier.


## Domeniul

`chessunchained.space`, cumparat la Namecheap si legat prin patru inregistrari A spre
serverele GitHub Pages (185.199.108-111.153). Fisierul `CNAME` din repo ii spune lui GitHub
pentru ce domeniu sa raspunda — daca dispare, site-ul se intoarce pe adresa github.io.

HTTPS se emite automat de GitHub (Let's Encrypt) dupa ce DNS-ul e corect. Cand certificatul e
gata, se bifeaza **Enforce HTTPS** in Settings → Pages, ca adresa pe http sa fie redirectionata.
