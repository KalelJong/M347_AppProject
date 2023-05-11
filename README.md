[12:58] Samma Zakria Ahmed

# Combusters Modul 347

# Inhaltsverzeichnis

- [Combusters Modul 347](#combusters-modul-347)

- [Inhaltsverzeichnis](#inhaltsverzeichnis)

- [Projektidee](#projektidee)

- [Planing](#planing)

- [Anforderungen](#anforderungen)

- [Umsetzung](#umsetzung)

- [Zusammenspiel der Container](#zusammenspiel-der-container)

## Projektidee

Unsere Projektidee ist es, eine **Blog-Web-App** zu erstellen.

## Planing

- Kalel

- Frontend

- Backend

- Zakria

- Database

- Backend

- Documentation

## Anforderungen

In der Blog-Web-App, kann der User selber Blogs erstellen und diese, sowie die der anderen Usern, einsehen.

Ein Blog besteht aus dem Inhalt, der erstellten Zeit und Datum, dem Titel und dem angegebenem Username vom Benutzer. Da wir nicht für die Sicherheit der Passwörter der Konten übernehmen möchten, **wird er keine Konten geben**.

Die Web-App besteht aus einem Frontend, einem Backend und einer Datenbank.

## Umsetzung

Die Blog-Web-App wird mit im folgenden Text definierten Technologien erstellt.

Das **Frontend** wird mit **TypeScript** programmiert. Wir entschieden und für dies, da unser Head-Frontend-Developer im Betrieb dies auch benutzt und sich deswegen bestens damit auskennt.

Für das **Backend** entschieden wir uns für **Node.js**. Wir entschieden uns dafür durch Einfluss unserer Schulkameraden. Diese sind Spezialisten, wenn es um Backends geht und da keiner von uns beiden mit Backends arbeitet, nahmen ihren Vorschlag an.

Und zu guter Letzt für die **Datenbank** entschieden wir uns für **MariaDB**. Wenn es um Datenbanken geht, haben wir beide nur gute Erfahrungen mit MariaDB gemacht und da diese auch im normalen Fall schneller ist als MySQL entschieden wir uns für diese.

## Zusammenspiel der Container

Der User kann die Web-App, **das Frontend**, auf dem Browser nutzen. Auf der Web-App werden mehrere Blogs angezeigt, dies heisst, **das Frontend** sendet eine Nachfrage auf **das Backend**, welches wiederum eine query an **die Datenbank** sendet, damit **das Backend** alle Blogs an **das Frontend** senden kann.
