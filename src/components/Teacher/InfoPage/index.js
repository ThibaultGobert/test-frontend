import React from 'react';

class InfoPage extends React.Component {
  render() {
    return (
      <div className="info-page">
        <h1>Hoe rapporteer je een bug?</h1>
        <p>Als het gaat om technische problemen, mail dan naar Ingrid (<a href="mailto:ingrid@codefever.be">ingrid@codefever.be</a>)</p>
        <p>
          Bij inhoudelijke fouten mail je naar Fien (<a href="mailto:fien@codefever.be">fien@codefever.be</a>)
          EN Jonathan (<a href="mailto:jonathan@codefever.be">jonathan@codefever.be</a>). Hier
          wordt gevraagd om maximaal 1 mail te sturen per les. Dus bijvoorbeeld verschillende
          problemen ivm les B1.2 bundelen in 1 mail.
        </p>

        <p>Gelieve bij deze mail ook een aantal regels in acht te houden:</p>
        <ol>
          <li>
            In het onderwerp van de mail duidelijk de clan, level en nummer van de les vermelden.
          </li>
          <li>
            Verschillende fouten in een opsomming vermelden MET telkens de titel van de slide EN slide_id (terug te vinden rechts onderaan op de slide).
            Fouten waarbij deze niet vermeld zijn, zullen niet opgelost worden. <br />
            Indien het gaat om een vraagslide, vermeld dan ook het betreffende antwoord.
          </li>
          <li>
            Mails die binnenkomen op de dag voor de les na 21u, worden niet gegarandeerd opgelost.
          </li>
        </ol>

        <p>
          Inhoudelijke fouten niet meer melden via Facebook. Via mail kan dit eenvoudiger & sneller
          verwerkt worden door Fien & Jonathan.
        </p>

        <h1>Nieuw kind voor een proefles</h1>
        <p>
          Als er in je les leerlingen zijn die komen testen. Geef hen dan GEEN inloggegevens. Vraag
          de ouders om de leerlingen meteen in te schrijven op een computer in het lokaal, dan heeft
          het kind meteen een account.
        </p>
        <p>
          Indien de ouders niet aanwezig zijn. Laat het kind dan meekijken met de buur. Kinderen die
          niet ingeschreven zijn kunnen wel al een Scratch account maken om de oefeningen uit de les
          te maken.
        </p>

        <h1>Hoe bereid je een les voor?</h1>
        <p>
          Download algemene info omtrent het voorbereiden van je les via deze link:{' '}
          <a href="https://extranet.codefever.be/content/?v=share/A3DEF8C8511648B89692E112DEE6E063">
             https://extranet.codefever.be/content/?v=share/A3DEF8C8511648B89692E112DEE6E063
          </a>
        </p>
        <p>Download het ZIP-bestand en bekijk het document dat voor jouw les van toepassing is.</p>
        <table>
          <tr>
            <th>Clans</th>
            <th>Bestand</th>
          </tr>
          <tr>
            <td>B2, B3, B4, C2, C3</td>
            <td>Uitleg_ivm_1.2.pdf</td>
          </tr>
          <tr>
            <td>B1, C1, D1, E1, E2, M1, M2</td>
            <td>Uitleg_ivm_2.0.pdf</td>
          </tr>
        </table>

        <h1>Afwezigheden</h1>
        <p>
          De hoofdleraar dient elke les de aan - & afwezigheden van leerlingen, zichzelf en zijn
          assistenten in te geven rechtstreeks in het lerarenprofiel. (Open klasgroep in home en
          klik op Aanwezigheden & feedback). Dit bijhouden is essentieel en is een verplichte taak
          als hoofdleraar.
        </p>

        <p>
          Als je zelf niet kan aanwezig zijn voor een bepaalde les, laat dit minimum 2 weken op
          voorhand weten via mail aan <a href="mailto:kim@codefever.be">kim@codefever.be</a> en {' '}
          <a href="mailto:kristien@codefever.be">kristien@codefever.be</a> in kopie. Wij gaan dan op
          zoek naar een vervanger.
        </p>

        <p>
          Bij een onverwachte afwezigheid (tot 72 uur vóór de lesdatum) dien je altijd dit
          telefonisch te melden aan Kim (weekdag) of Kristien 0486 12 22 04 (na kantooruren of
          weekend). Indien je ons niet kan bereiken dan graag ook nog een sms.
        </p>
        <p>
          Zoals je zelf wel al kan begrijpen is een afwezigheid niet zo simpel te vervangen en we
          hopen dan ook dat je dit tot een minimum houdt.
        </p>

        <h1>Wat bij problemen</h1>
        <p>Controleer eerst of het probleem al gemeld is in de facebook groep CodeFever team.</p>
        <h2>Niet dringend</h2>
        <p>
          Mail sturen naar <a href="mailto:kim@codefever.be">kim@codefever.be</a> met
          <a href="mailto:kristien@codefever.be"> kristien@codefever.be</a> in CC
        </p>
        <h2>Dringend</h2>
        <ul>
          <li>Deuren op slot</li>
          <li>Geen internet</li>
          <li>Computers starten niet op</li>
          <li>Geen elektriciteit</li>
          <li>...</li>
        </ul>
        <p>Bel naar</p>
        <ul>
          <li>Katelijne: 0499/30.01.20</li>
          <li>Kristien: 0486/12.22.04</li>
        </ul>
      </div>
    );
  }
}

export default InfoPage;
