MINIMUNDUS – SCOPING-CHECKLISTE
Mit Server-Speicherung über Netlify Blobs.

Wichtig: Netlify Drop (Drag & Drop) funktioniert hier NICHT, weil das Projekt
eine Netlify Function nutzt. Es braucht einen echten Deploy via CLI oder Git.

────────────────────────────────────────
WEG 1 – Netlify CLI (am schnellsten)
────────────────────────────────────────
1. CLI installieren (einmalig):
     npm install -g netlify-cli

2. Im Projektordner anmelden:
     netlify login

3. Deployen:
     netlify deploy --build --prod

   Beim ersten Mal fragt die CLI, ob ein neues Projekt angelegt werden soll
   ("Create & configure a new project"). Bestätigen, Team wählen, Namen vergeben.

4. Fertig. Die ausgegebene URL (z. B. https://dein-name.netlify.app) öffnen.
   Blobs werden automatisch bereitgestellt – kein weiteres Setup nötig.

────────────────────────────────────────
WEG 2 – Git + Netlify UI
────────────────────────────────────────
1. Ordner als Repo zu GitHub pushen.
2. In Netlify: "Add new site" → "Import an existing project" → Repo wählen.
3. Build command leer lassen, Publish directory = "." (Projektwurzel).
4. Deploy. Blobs werden automatisch bereitgestellt.

────────────────────────────────────────
Lokal testen (optional)
────────────────────────────────────────
     npm install
     netlify dev
   Öffnet einen lokalen Server inkl. Blobs-Emulation.

────────────────────────────────────────
Hinweise
────────────────────────────────────────
- Speicherung: Die App speichert SOFORT lokal (localStorage) und synchronisiert
  zusätzlich mit Netlify Blobs. Der Status oben rechts zeigt: Gespeichert /
  Sync… / Offline · lokal. Offline gemachte Änderungen werden beim nächsten
  Online-Zugriff hochgeladen (Last-Write-Wins über Zeitstempel).
- Kein Login: Wer die URL kennt, kann die Daten lesen/ändern. Für eine interne
  Checkliste meist ok. Soll es geschützt werden, lässt sich in state.mjs ein
  einfacher Zugriffs-Code per Header/Environment-Variable ergänzen – sag Bescheid.
- Daten liegen in einem Blob-Store namens "minimundus-scoping", Key "state".
