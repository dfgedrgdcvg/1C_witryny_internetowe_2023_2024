
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    print "Tekst - instrukcja print <br>";
    echo "Tekst - instrukcja echo"
?>

<?php
    print "<b>Grafika:</b>" . "<i>php.gif</i>";
    print "<img src=\"php.gif\">";
?>



<?php   
    define("Imie" , "Jan Kowalski");
    define("Rok" , "1981");
    $Zawod = "informatyk";
    $Wiek = 31;
    print(Imie . "<br>");
    print($Zawod . "<br>");
    print("rocznik - " . Rok . "<br>");
    print($Wiek . " lat <br>");
    ?>
</body>
</html>