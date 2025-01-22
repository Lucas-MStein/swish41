<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>swish41</title>
    <link rel="icon" href="images/favicon.png" type="image/png">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Shrikhand&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ["Shrikhand", "sans-serif"],
                    },
                },
            },
        };
    </script>
</head>
<body class="bg-gray-200 text-gray-800">
<!-- Header -->
<header class="fixed top-0 left-0 w-full z-10 bg-yellow-400 text-white shadow-lg">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <!-- Logo -->
            <div class="text-lg font-bold">
                <a href="index.php" class="hover:text-yellow-300 transition">Ubuntu presents: swish41</a>
            </div>

            <!-- Hamburger Menu (Mobile) -->
            <div class="flex lg:hidden">
                <button id="menu-toggle" class="text-white focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            <!-- Desktop Navbar -->
            <ul class="hidden lg:flex space-x-4">
                <li>
                    <a href="musik.php"
                       class="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition">
                        Musik
                    </a>
                </li>
                <li>
                    <a href="mehr-erfahren.php"
                       class="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition">
                        Über mich
                    </a>
                </li>
                <li>
                    <a href="services.php"
                       class="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition">
                        Leistungen
                    </a>
                </li>
                <li>
                    <a href="contact.php"
                       class="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition">
                        Kontakt
                    </a>
                </li>
            </ul>
        </div>

        <!-- Mobile Dropdown Menu -->
        <div id="mobile-menu" class="hidden bg-yellow-400 lg:hidden">
            <a href="musik.php" class="block px-4 py-2 hover:bg-yellow-300">Musik</a>
            <a href="about.php" class="block px-4 py-2 hover:bg-yellow-300">Über mich</a>
            <a href="services.php" class="block px-4 py-2 hover:bg-yellow-300">Leistungen</a>
            <a href="contact.php" class="block px-4 py-2 hover:bg-yellow-300">Kontakt</a>
        </div>
    </nav>
</header>

<!-- Grid mit gleichgroßen Quadraten -->
<main class="mt-20 mr-4 ml-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <!-- Massage 1 -->
        <div class="relative bg-cover bg-center h-96" style="background-image: url('images/Frostbite.jpg');">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 hover:bg-opacity-75">
                <h2 class="text-fuchsia-200 text-xl font-bold mb-2">Frostbite</h2>
                <h3 class="text-indigo-300 text-lg mb-6">2026</h3>
                <p class="text-white text-sm mb-8">Das Debütalbum.</p>
                <table class="table-auto text-indigo-300 border">
                    <thead>
                    <tr>
                        <th class="px-4 py-2">Tracks:</th>
                        <th class="px-4 py-2">Runtime:</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="px-4 py-2">7</td>
                        <td class="px-4 py-2"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Massage 2 -->
        <div class="relative bg-cover bg-top h-96" style="background-image: url('images/Resampled Realities.jpg');">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 hover:bg-opacity-75">
                <h2 class="text-fuchsia-200 text-xl font-bold mb-2">Resampled Realities</h2>
                <h3 class="text-indigo-300 text-lg mb-6">Winter 2025</h3>
                <p class="text-white text-sm mb-8">Smoothe Soul Samples kombiniert auf modernen Drums und meiner besten Rap-Performance.</p>
                <table class="table-auto text-indigo-300 border">
                    <thead>
                    <tr>
                        <th class="px-4 py-2">Tracks:</th>
                        <th class="px-4 py-2">Runtime:</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="px-4 py-2">4</td>
                        <td class="px-4 py-2"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Massage 3 -->
        <div class="relative bg-cover bg-top h-96" style="background-image: url('images/SYNERGY.jpg');">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 hover:bg-opacity-75">
                <h2 class="text-fuchsia-200 text-xl font-bold mb-2">SYNERGY</h2>
                <h3 class="text-indigo-300 text-lg mb-6">Summer 2025</h3>
                <p class="text-white text-sm mb-8">Eine Collaboration mit Joris.mp3 liefert Hitze wie Lieferando.</p>
                <table class="table-auto text-indigo-300 border">
                    <thead>
                    <tr>
                        <th class="px-4 py-2">Tracks:</th>
                        <th class="px-4 py-2">Runtime:</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="px-4 py-2">4</td>
                        <td class="px-4 py-2"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Massage 4 -->
        <div class="relative bg-cover bg-center h-96" style="background-image: url('images/kälter als davor.jpg');">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 hover:bg-opacity-75">
                <h2 class="text-fuchsia-200 text-xl font-bold mb-2">kälter als davor</h2>
                <h3 class="text-indigo-300 text-lg mb-2">February 14, 2025</h3>
                <p class="text-white text-sm mb-6">Two-Pack über die Liebe und wie schnell sie vergehen kann.</p>
                <table class="table-auto text-indigo-300 border">
                    <thead>
                    <tr>
                        <th class="px-4 py-2">Tracks:</th>
                        <th class="px-4 py-2">Runtime:</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="px-4 py-2">2</td>
                        <td class="px-4 py-2"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Massage 5 -->
        <div class="relative bg-cover bg-center h-96" style="background-image: url('images/THREE FOR THREE v2.jpg');">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 hover:bg-opacity-75">
                <h2 class="text-fuchsia-200 text-xl font-bold mb-2">THREE FOR THREE</h2>
                <h3 class="text-indigo-300 text-lg mb-2">Out now</h3>
                <p class="text-white text-sm mb-6">Songs inspiriert durch den Sport.</p>
                <table class="table-auto text-indigo-300 border">
                    <thead>
                    <tr>
                        <th class="px-4 py-2">Tracks</th>
                        <th class="px-4 py-2">Runtime:</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="px-4 py-2">3</td>
                        <td class="px-4 py-2">7 Min</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Massage 6 -->
        <div class="relative bg-cover bg-center h-96" style="background-image: url('images/massage6.jpg');">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 hover:bg-opacity-75">
                <h2 class="text-fuchsia-200 text-xl font-bold mb-2">ROTY</h2>
                <h3 class="text-indigo-300 text-lg mb-2">Out now</h3>
                <p class="text-white text-sm mb-6">Der Rookie des Jahres feiert die zweite Saison.</p>
                <table class="table-auto text-indigo-300 border">
                    <thead>
                    <tr>
                        <th class="px-4 py-2">Tracks:</th>
                        <th class="px-4 py-2">Runtime:</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="px-4 py-2">1</td>
                        <td class="px-4 py-2">2 Min</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Massage 7 -->
        <div class="relative bg-cover bg-center h-96" style="background-image: url('images/Kleinstadt Cover 3.jpg');">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 hover:bg-opacity-75">
                <h2 class="text-fuchsia-200 text-xl font-bold mb-2">Kleinstadt</h2>
                <h3 class="text-indigo-300 text-lg mb-2">Out now</h3>
                <p class="text-white text-sm mb-6">Songs über die Heimatszugehörigkeit.</p>
                <table class="table-auto text-indigo-300 border">
                    <thead>
                    <tr>
                        <th class="px-4 py-2">Tracks:</th>
                        <th class="px-4 py-2">Runtime:</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="px-4 py-2">3</td>
                        <td class="px-4 py-2">7 Min</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Gutscheine -->
        <div class="relative bg-cover bg-center h-96" style="background-image: url('images/DSC05594 (1).JPG');">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 hover:bg-opacity-75">
                <h2 class="text-fuchsia-200 text-xl font-bold mb-2">Kleinstadt (Prelude)</h2>
                <h3 class="text-indigo-300 text-lg mb-2">Out now</h3>
                <p class="text-white text-sm mb-6">Das Vorspiel zur ersten EP.</p>
                <table class="table-auto text-indigo-300 border">
                    <thead>
                    <tr>
                        <th class="px-4 py-2">Tracks:</th>
                        <th class="px-4 py-2">Runtime:</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="px-4 py-2">1</td>
                        <td class="px-4 py-2">2 Min</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Erotikmassagen -->
        <div class="relative bg-cover bg-center h-96" style="background-image: url('images/massage9.webp');">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 hover:bg-opacity-75">
                <h2 class="text-fuchsia-200 text-xl font-bold mb-2">Zwambo</h2>
                <h3 class="text-indigo-300 text-lg mb-2">Out now</h3>
                <p class="text-white text-sm mb-6">Die Debütsingle.</p>
                <table class="table-auto text-indigo-300 border">
                    <thead>
                    <tr>
                        <th class="px-4 py-2">Tracks:</th>
                        <th class="px-4 py-2">Runtime:</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="px-4 py-2">1</td>
                        <td class="px-4 py-2">2 Min</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</main>

<!-- JavaScript -->
<script>
    // Mobile Dropdown Menu
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

</script>

<!-- Footer -->
<footer class="bg-purple-400 text-white py-4">
    <div class="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <!-- Linker Bereich: Text -->
        <div class="flex-1 text-left">
            <p>&copy; 2025 Lucas-Maurice Stein</p>
        </div>

        <!-- Mittlerer Bereich: Standort -->
        <div class="flex-1 text-center">
            <p>Herrengarten 39, 75365 Calw</p>
        </div>

        <!-- Rechter Bereich: Telefonnummer -->
        <div class="flex-1 text-right">
            <p>Telefon: <a href="tel:+4917647736812" class="underline hover:text-gray-200">0 176 477 368 12</a></p>
        </div>
    </div>
</footer>
</body>
</html>