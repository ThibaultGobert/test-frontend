import React from 'react';

const OnbekendKindPage = () => {
  return (
    <div className="OnbekendKindPage">
      <h1>Onbekend kind</h1>
      <h2>Een kind staat niet op mijn lijst</h2>
      <p>
        Als er plots een kindje opduikt die niet op je klaslijst staat, controleer eerst of het kind
        niet in een ander lokaal de lessen moet volgen! Vraag zijn leeftijd, zijn clan, zijn level..
      </p>
      <h2>Nieuw kind voor een proefles</h2>
      <p>
        Als het effectief een nieuw kind is, dan mag hij/zij gerust een vrijblijvende proefles
        meevolgen (indien er nog voldoende computers zijn). Maar laat een kind niet meewerken op een
        scherm van een ander. Het kind moet ingeschreven zijn om direct een eigen gebruikers account
        te hebben.
      </p>
      <ul>
        <li>
          Zijn de ouders nog aanwezig? Vraag ze om het kind meteen in te schrijven op een computer
          in het lokaal.
        </li>
        <li>Zijn de ouders er niet (meer)? Schrijf het kind in ZELF.</li>
        <li>Heb je assistenten in je les? Laat hen het werk doen samen met de ouder of het kind</li>
      </ul>
      <h2>Hoe schrijf je een kind in?</h2>
      <ol>
        <li>
          Ga naar <a href="https://www.codefever.be/meedoen">https://www.codefever.be/meedoen</a>
        </li>
        <li>Selecteer je groep</li>
        <li>
          Gebruik de echte naam van het kind en probeer zoveel mogelijk echte gegevens te krijgen
          (vooral telefoonnummer ouders en emailadres). De velden die het kind niet kent vul je in
          met XXX.
        </li>
        <li>Kies dan voor betalen via overschrijving (de inschrijving wordt later betaald).</li>
        <li>De ouders kunnen dan achteraf beslissen of ze definitief inschrijven of niet.</li>
      </ol>
      <p>
        Je kan zelf een Scratchaccount maken voor dit kind, kies de clan naam als wachtwoord.
        Gelieve dit te koppelen aan scratch@codefever.be.
      </p>
      <p>
        Let op: bij DigiHeroes mag dit gekoppeld worden aan hun eigen mailadres. Stuur ook zeker een
        mailtje na de les naar Kristien (<a href="mailto:kristien@codefever.be">kristien@codefever.be</a>) met de naam en mailadres en
        telefoonnummer van dit kind.
      </p>
    </div>
  );
};

export default OnbekendKindPage;
