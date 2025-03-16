## Informacje

### DOM (Document Object Model)

1. Interfejs programistyczny, które tworzy hierarchiczną reprezentację dokumentu, gdzie każdy element (np. tag HTML) w dokumencie jest reprezentowany jako obiek. Drzewo DOM jest strukturą, w której
    - Każdy element HTML (np. ```<div>```, ```<p>``` itd..) jest węzłem
    - Atrybuty elementów (np. ```class```, ```id```, ```href```) są węzłami
    - Tekst wewnątrz elementów (np. tekst w tagu ```<p>```) jest węzłem tekstowym

DOM reprezentuje dokument jako **drzewo obiektów**

### Wyszukiwanie elementów DOM

1. Po atrybutach
```css
# restrykcyjne
[class="fraza"]

# element, którego atrybut zaczyna się daną frazą
[class^="fraza"]

# element, którego atrybut kończy się daną frazą
[class$="fraza"]

# element, którego atrybut zawiera daną frazę
[class*="fraza"]
```
2. Po klasie `.nav-pills` lub tag + klasa `div.nav-pills`
3. Po Id `#categorymenu` lub tag + id `div#nav-pills`

### Ogólne

1. rozszerzenie `.spec` (plik z testem), definiowane w `cypress.config.ts`:
```js
specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // Ścieżka do plików testowych
```

### Przydatne pliki

1. `exampleMethods.spec.ts` - przykładowe testy, ściągawka
2. `structureExample.spec.ts` - struktura testu