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

3. Sposoby uruchomienia **Cypress**
    - W trybie open, gdzi wyświetla się podgląd tego co Cypress robi, czyli kroków, które są przez niego wykonywane (do sprawdzenia testów, wolniejszy)
        ```bash
        npx cypress open
        ```
    - W trybie headless, gdzie uruchamiany jest konkretny test lub paczka testów, ale bez podglądu UI (do uruchomienia paru testów na raz, szybszy)
        ```bash
        npx cypress run [sciezka_pliku]
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

# Inne
1. **cypress.config.ts** - główny plik konfiguracyjny w **Cypress**
    - **e2e** - sekcja dla konfiguracji testów end-to-end
    - **setupNodeEvents(on, config)** - funkcja do obsługi zdarzeń w Cypressie, takich jak
        - *before:run* - przed uruchomieniem testów
        - *after:spec* - po wykonaniu testów w danym pliku
        - *task* - defninowanie niestandardowych zadań
    - **baseUrl** - bazowy URL, który Cypress używa do wykonywania testów, np. http://localhost:3000
    - **specPattern** - wzorzec określający, gdzie znajdują się pliki z testami, np. cypress/e2e/**/*.cy (js, jsx, ts, tsx)
    - **supportFile** - ścieżka do pliku wsparcia, w którym można umieścić globalne funkcje lub hooki dla testów
    - **viewportWidth, viewportHeight** - domyślne wymiary okna przeglądarki używane podczas testów
2. **package.json** - centralny plik konfiguracyjny dla projektu opartego na Node.js
    - informacje o projekcie (nazwa, wersja, zależności, skrypty i metadane)
    - jest niezbędny do działania npm (Node Package Manager)
3. **e2e.ts** (wcześniej index.ts) - pełni funkcję pliku wsparcia dla testów end-to-end (E2E)
    - domyslna lokalizacja to *cypress/support/*
    - automatycznie ładowane przez Cypress przed testem E2E
    - dzięki temu pozwala na zdefniowanie globalnych konfiguracji wspierających testowwanie
4. **commands.ts** - pozwala na definiowanie niestandardowe komendy (funkcje) do używania w testach
    - możliwość rozszerzania wbudowanych komend Cypress (np. logowanie)
    - pozwala na uproszczenie kodu testów
    - zamiast powtarzania tych samych operacji w wielu testach, można je zdefiniować raz w jednym miejscu i wywoływać w dowolnym teście
    - zwiększa czytelność