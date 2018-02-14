import React from 'react';

const HoeLoggenKinderenInPage = () => {
  return (
    <div className="HoeLoggenKinderenInPage">
      <h1>Hoe loggen kinderen in?</h1>
      <h2>Leerplatform</h2>
      <p>
        Check je klaslijst, je vindt er de leerplatform <b>gebruikersnaam</b> van elk leerling en
        de {' '}
        <b>wachtwoord hint</b> dat ze zelf (of hun ouders) ingesteld hebben via het ouderprofiel bij
        het instellen van hun eigen wachtwoord. Het wachtwoord zelf is geëncrypteerd en je vindt die
        dus niet in je klaslijst.
      </p>
      <p>
        In het geval dat een leerling zijn wachtwoord niet meer weet en het wachtwoord hint er niet
        bij helpt kan je als leraar gebruik maken van de impersonate functie om het kind aan te
        melden.
      </p>
      <p>
        Let op: het is niet de bedoeling dat je dit elke les moet doen. Stimuleer de ouders om het
        wachtwoord thuis in te stellen. Stel dat dit toch niet gebeurt …. stuur dan aub een mailtje
        naar Lieve (<a href="mailto:lieve@codefever.be">lieve@codefever.be</a>).
      </p>
      <h2>Hoe werkt de impersonate functie?</h2>
      <p>
        Deze functie laat je toe om in te loggen als de aangegeven leerling terwijl je gebruik
        maakt van je eigen credentials.
      </p>
      <p>
        Bij de login pagina klik op het slotje rechtsonder. Een nieuw veld verschijnt waar je de {' '}
        <b>gebruikersnaam van het kind</b> kan invullen.
      </p>
      <p>Gebruik je eigen login en password bij de velden Gebruikersnaam en Wachtwoord.</p>
      <p>Als de browser vraagt om de credentials op te slaan na de impersonate, klik op Cancel.</p>
      <h2>Scratch</h2>
      <p>
        Wij maken scratchaccounts aan voor Level 1 voor BybeBusters & CodeKraks. De DigiHeroes maken
        zelf hun accounts aan.
      </p>
      <p>De login en paswoord zijn terug te vinden op de klaslijst.</p>
      <h2>REPL.IT (JavaScript)</h2>
      <p>e-Riders maken zelf een account aan.</p>
      <h2>MINECRAFT</h2>
      <p>De accounts voor Minecraft zullen worden gemaild naar desbetreffende hoofdleraren.</p>
    </div>
  );
};

export default HoeLoggenKinderenInPage;
