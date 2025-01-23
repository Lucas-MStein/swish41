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
<div class="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md pt-20">
  <h1 class="text-2xl font-bold text-center text-fuchsia-300">Impressum</h1>
  <p class="mt-4 text-gray-700">
    Angaben gemäß § 5 TMG
  </p>
  <p class="mt-2 text-gray-700">
    Lucas-Maurice Stein<br>
    Herrengarten 39<br>
    75365 Calw<br>
  </p>
  <p class="mt-4 text-gray-700">
    Telefon: +49 176 47736812<br>
    E-Mail: lucasmauricestein@gmail.com<br>
  </p>
  <h2 class="mt-6 text-xl font-semibold text-blue-500">Haftungsausschluss</h2>
  <p class="mt-2 text-gray-700">
    **Haftung für Inhalte**<br>
    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
  </p>
  <p class="mt-2 text-gray-700">
    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
  </p>
  <h2 class="mt-6 text-xl font-semibold text-blue-500">Haftung für Links</h2>
  <p class="mt-2 text-gray-700">
    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
  </p>
  <p class="mt-2 text-gray-700">
    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
  </p>
  <h2 class="mt-6 text-xl font-semibold text-blue-500">Urheberrecht</h2>
  <p class="mt-2 text-gray-700">
    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
  </p>
  <p class="mt-2 text-gray-700">
    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
  </p>
</div>

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