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
                    <a href="about.php"
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

<!-- Hero Section mit YouTube-Video -->
<section class="relative text-black h-screen flex items-center justify-center">
    <div class="text-center">
        <h2 class="text-4xl font-bold mb-6 text-fuchsia-300">So erreichst du mich!</h2>
        <div class="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
            <a href="https://linktr.ee/lucasmstein" class="text-blue-500 underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                Linktree:
            </a>
            Links go epic
        </div>
        <p class="mt-6 text-lg">Ich freue mich über eine Nachricht.</p>
    </div>
</section>
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