#####################################
#### APLIKACJA REJESTR PRODUKTÓW ####
#####################################

Stworzyć aplikacje umożliwiająca zarządzającą tabelką produkty.
Aplikacja ma umożliwić wykonywanie podstawowych operacji CRUD na rekordach tabeli.
Aplikacja powinna działać w opraciu wzorcva: Single-page application.

#Podstawowe wymagane funkcjonalnosci aplikacji:
- Tabela z lista produktów
- Formularz dodania/edycji produktu
- Usówanie produktów

#Dodatkowe mile widziane funkcjonalności:
- Paginacja tabeli produktów
- Możliwośc sortowania elementów tabeli po kolumnie
- Możliwośc wyszukiwania elementów w tabeli,
- Formularz dodania/edycji umieszczony produktu w oknie modalnym  

#Krótki opis aplikacji:
W głownym widoku aplikacji powinna znajdować się tabela (GRID) z listą dostępnych produktów.
Nastepnie przy każdym produkcjie musi byc dostepna acja z możliwościa edycji i usunięcia produktu.
Nad tabelka powinien znajdować się button umozliwiajacy dodanie nowego produktu.


#Technologie użyte do realizacji zadania

Warstwa Klienta:
- HTML
- JavaScrip
- Framework AngularJS (obowiązkowy)
- Dowolne innne, dodatkowe nażędzia JS, CSS, moduły AngularJs

Warstwa Serwera:
- PHP 
- Dowolny Framework PHP (nieobowiazkowy, preferowany Yii, Yii2) 

DB
- Należy wykorzystać baze umieszcona w projkecie:
  Katalog server/db.
  Można kożystać z dowolnej bazy danych MySql, PgSql, SQLite lub cała obsługe zrobic na plikacj JSON lub csv   