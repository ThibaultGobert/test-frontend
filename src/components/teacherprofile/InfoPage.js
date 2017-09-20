import React from 'react';

class InfoPage extends React.Component {

  render() {
    return (
      <div className="info-page">

        <h1>Hoe	rapporteer	je	een	bug?</h1>
        <p>Indien	je	fouten/bugs ontdekt	in	het	leerplatform	ga	dan	naar	de	Google Docs	spreadsheet	met	fouten:</p>
        <ul>
          <li>Als	je	fout	al	in	de	lijst	staat,	dan	hoef	je	niet	meer	te	mailen.	Dit	probleem	is	dan	al	gekend	en	zal	asap opgelost worden.</li>
          <li>Als	het	er nog	niet	tussen	staat	en	het	gaat	om	een	inhoudelijke	fout	dan stuur je een mail naar	<b>Fien</b> (fien@codefever.be), voor	technische	fouten	mail je	naar	<b>Ingrid</b> (ingrid@codefever.be).</li>
        </ul>
        <p>Link	technische	bugs: <a href="https://docs.google.com/spreadsheets/d/1Pg-LG7RrhWF5NhwAwj8JC9v74DkyNn-8OBgXLULByeE/edit?usp=sharing">https://docs.google.com/spreadsheets/d/1Pg-LG7RrhWF5NhwAwj8JC9v74DkyNn-8OBgXLULByeE/edit?usp=sharing</a></p>
        <p>Link	inhoudelijke	bugs: <a href="https://docs.google.com/spreadsheets/d/1ojAF0IjDxgfryNTjsC_S4BEqDpM3kQI9mPtU58JTI3Q/edit?usp=sharing">
          https://docs.google.com/spreadsheets/d/1ojAF0IjDxgfryNTjsC_S4BEqDpM3kQI9mPtU58JTI3Q/edit?usp=sharing</a></p>

        <h1>Nieuw	kind	voor	een	proefles</h1>
        <p>Als er in je	les	leerlingen	zijn die komen testen.	Geef	hen	dan	GEEN	inloggegevens.	Vraag	de	ouders	om	de	leerlingen	meteen	in	te	schrijven	op	een	computer	in	het	lokaal,	dan	heeft	het	kind	meteen	een	account.</p>
        <p>Indien de	ouders	niet	aanwezig	zijn.	Laat het	kind	dan meekijken met	de buur.	Kinderen die niet ingeschreven zijn kunnen wel al een Scratch account maken om de oefeningen uit de les te maken.</p>

        <h1>Hoe	bereid	je	een	les	voor?</h1>
        <p>Download	algemene info omtrent het voorbereiden van je les via	deze	link: <a href="https://extranet.codefever.be/content/?v=share/A3DEF8C8511648B89692E112DEE6E063">https://extranet.codefever.be/content/?v=share/A3DEF8C8511648B89692E112DEE6E063</a></p>
        <p>Download	het	ZIP-bestand	en	bekijk	het	document dat voor jouw les van toepassing is.</p>
        <table>
          <tr>
            <th>Clans</th>
            <th>Bestand</th>
          </tr>
          <tr>
            <td>ByteBusters level 4</td>
            <td>Uitleg_ivm_1.0.pdf</td>
          </tr>
          <tr>
            <td>ByteBusters en CodeKraks level 2</td>
            <td>Uitleg_ivm_1.1.pdf</td>
          </tr>
          <tr>
            <td>ByteBusters level 1, <br/>ByteBusters level 5, <br/>CodeKraks level 1, <br/>DigiHeroes level 1, <br/>e-Riders level 1,
              <br/>ASS-lessen</td>
            <td>Uitleg_ivm_2.0.pdf</td>
          </tr>
        </table>

        <h1>Afwezigheden</h1>
        <p>Afwezigheden van leerlingen mail	je voorlopig nog	naar	<a href="mailto:lieve@codefever.be">lieve@codefever.be</a>. Na de 2de les zal het mogelijk zijn om dit rechtstreeks in het lerarenprofiel in te geven.</p>
        <p>Als je niet kan aanwezig zijn voor een bepaalde les, laat je dit TIJDIG weten via mail aan kim@codefever.be en kristien@codefever in kopie.</p>

        <h1>Wat bij problemen</h1>
        <h2>Niet dringend</h2>
        <p>Mail sturen	naar <a href="mailto:kim@codefever.be">kim@codefever.be</a> met <a href="mailto:kristien@codefever.be">kristien@codefever</a> in CC</p>
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
