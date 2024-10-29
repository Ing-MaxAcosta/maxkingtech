<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Corp Max King Tech</title>
    
    <!-- Fuentes -->
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Estilos -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    
    <!-- Meta tags -->
    <meta name="description" content="Soluciones tecnológicas innovadoras para el futuro digital">
    <meta name="keywords" content="tecnología, innovación, desarrollo web, software, futuro digital">
</head>
<body class="antialiased">
    <div id="app"></div>
</body>
</html>