# Aymen & Rania Wedding Invitation

Invitation digitale en React prête à exécuter.

## Contenu

- Page mobile responsive
- Photo caricature intégrée
- Countdown jusqu'au 12 July 2026 à 16:00
- Date et localisation Zaghouan
- Bouton Google Maps
- Bouton confirmation WhatsApp
- Petit message drôle en anglais

## Installation

```bash
npm install
npm run dev
```

Ensuite ouvre le lien affiché dans le terminal, généralement :

```bash
http://localhost:5173
```

## Modifier les informations

Ouvre le fichier :

```bash
src/main.jsx
```

Puis modifie la partie `weddingConfig` :

```js
const weddingConfig = {
  couple: 'Aymen & Rania',
  dateLabel: '12 July 2026',
  timeLabel: 'from 4:00 PM',
  locationLabel: 'Zaghouan',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Zaghouan%2C%20Tunisia',
  whatsappNumber: '21600000000',
  targetDate: '2026-07-12T16:00:00+01:00',
};
```

Remplace `21600000000` par le vrai numéro WhatsApp.

## Créer la version finale

```bash
npm run build
```

Le dossier final sera généré dans :

```bash
dist
```

Tu peux l'héberger gratuitement sur Vercel ou Netlify.
