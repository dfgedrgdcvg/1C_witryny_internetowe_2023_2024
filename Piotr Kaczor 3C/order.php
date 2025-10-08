<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>
        <?php
        $zmienna1 = $_POST['Imie'];
        echo "Podaj imie: $zmienna1 <br>";
        $zmienna2 = $_POST['Nazwisko'];
        echo "Podaj nazwisko: $zmienna2 <br>";
        $zmienna3 = $_POST['numer_telefonu'];
        echo "Podaj numer telefonu: $zmienna3 <br>";
        $zmienna4 = $_POST['adres_zamieszkania'];
        echo "Podaj adres zamieszkania: $zmienna4 <br>";
        $zmienna5 = $_POST['kod_pocztowy'];
        echo "Podaj kod pocztowy: $zmienna5 <br>";
        $zmienna6 = $_POST['data urodzenia'];
        echo "Podaj date urodzenia: $zmienna6 <br>";
        $zmienna7 = $_POST['adres_email'];
        echo "Podaj adres email: $zmienna7 <br>";
        ?>
</body>
</html>