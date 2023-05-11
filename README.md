# Combusters Modul 347




# Inhaltsverzeichnis

- [Combusters Modul 347](#combusters-modul-347)
- [Inhaltsverzeichnis](#inhaltsverzeichnis)
  - [Projektidee](#projektidee)
  - [Planing](#planing)
  - [Anforderungen](#anforderungen)
  - [Umsetzung](#umsetzung)
  - [Zusammenspiel der Container](#zusammenspiel-der-container)
  - [Tests](#tests)

  - [Projektidee](#projektidee)

  - [Planing](#planing)

  - [Anforderungen](#anforderungen)

  - [Umsetzung](#umsetzung)

  - [Zusammenspiel der Container](#zusammenspiel-der-container)

  - [Tests](#tests)




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

In der Blog-Web-App, kann der User selber Blogs erstellen, diese, sowie die der anderen Usern, einsehen und löschen.

Ein Blog besteht aus dem Inhalt, der erstellten Zeit und Datum, dem Titel und dem angegebenem Username vom Benutzer. Da wir nicht für die Sicherheit der Passwörter der Konten übernehmen möchten, **wird er keine Konten geben**.

Die Web-App besteht aus einem Frontend, einem Backend und einer Datenbank.




## Umsetzung

Die Blog-Web-App wird mit im folgenden Text definierten Technologien erstellt.

Das **Frontend** wird mit **TypeScript** programmiert. Wir entschieden und für dies, da unser Head-Frontend-Developer im Betrieb dies auch benutzt und sich deswegen bestens damit auskennt.

Für das **Backend** entschieden wir uns für **Node.js**. Wir entschieden uns dafür durch Einfluss unserer Schulkameraden. Diese sind Spezialisten, wenn es um Backends geht und da keiner von uns beiden mit Backends arbeitet, nahmen ihren Vorschlag an.

Und zu guter Letzt für die **Datenbank** entschieden wir uns für **MariaDB**. Wenn es um Datenbanken geht, haben wir beide nur gute Erfahrungen mit MariaDB gemacht und da diese auch im normalen Fall schneller ist als MySQL entschieden wir uns für diese.




## Zusammenspiel der Container




Ein Fall, wo die Container zusammen spielen ist, wenn der User kann die Web-App, das Frontend, auf dem Browser nutzen. Auf der Web-App werden mehrere Blogs angezeigt, dies heisst, **das Frontend** sendet eine Nachfrage auf **das Backend**, welches wiederum eine query an **die Datenbank** sendet, damit **das Backend** alle Blogs an **das Frontend** senden kann.

Ein weiterer Fall ist, wenn man ein Blog erstellt. Im **Frontend** werden alle Daten die zum Blog benötigt werden angegeben. Diese Daten werden zum **Backend** gesendet, der dann ein query zur **Datenbank** sendet, um den Blog zu erstellen.




## Tests




 ID | Beschreibung | Erwartetes Resultat | Ergebnis |

- | - | - | -

1   | Auf einen Blogbeitrag klicken   | Eine neue Seite für eine detaillierte Ansicht für den Blog sollte geöffnet werden, wo auch die Option zum Löschen bestehen sollte | bestanden

2   | Einen neuen Blog erstellen mit allen Angaben   | Es sollte erfolgreich ein Blog erstellt werden | bestanden

3   | Einen neuen Blog erstellen mit fehlenden Angaben   | Es sollte kein neuer Blog erstellt werden und der User sollte auf die fehlenden Daten aufmerksam gemacht werden | bestanden