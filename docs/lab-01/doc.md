## Instalacja **Cypress**
1. Przejdź do terminala **Git Bash** w *Visual Studio Code*
    - sprawdź, czy jest zainstalowany Node.js:
```bash
node -v
```

2. Instalacja **Cypress**, uruchom polecenie:
```bash
npm install cypress --save-dev
```

3. Do uruchomienia **Cypress**, uruchom polecenie
```bash
npx cypress open
```

### Pierwsze uruchomienie
1. W oknie powitalnym wybierz "**E2E Testing**"
2. Wybierz przeglądarkę docelową


## Instalacja **TypeScript**
1. Przejdź do terminala **Git Bash** w *Visual Studio Code*
    - sprawdź, czy jest zainstalowany Node.js:
```bash
node -v
```

2. Instalacja **TypeScript**, uruchom polecenie:
```bash
npm install typescript --save-dev
```

3. Inicjalizacja pliku tsconfig.json
```bash
npx tsc --init
```

4. Zmiana rozszerzenia plików pomocniczych na .ts:
```bash
cypress/support/commands.js => commands.ts
e2e.js => e2e.ts
cypress.config.js => cypress.config.ts
```

5. Instalacja typów **Cypress**
```bash
npm install @types/cypress --save-dev
```