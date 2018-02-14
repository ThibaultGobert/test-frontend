import React from 'react';

const WatBijProblemenPage = () => {
  return (
    <div className="WatBijProblemenPage">
      <h1>Wat bij problemen?</h1>
      <h2>Dringend probleem</h2>
      <p>Je hebt les en ...</p>
      <ul>
        <li>de deuren zijn op slot</li>
        <li>er is geen internet</li>
        <li>de computers starten niet op</li>
        <li>er is geen elektriciteit</li>
        <li>het leerplatform ligt plat</li>
        <li>...</li>
      </ul>
      <p>
        Controleer <b>eerst</b> de facebook groep CodeFever team.
      </p>
      <p>Als het probleem nog niet gemeld is, bel naar:</p>
      <ul>
        <li>Katelijne: 0499/30.01.20</li>
        <li>Kristien: 0486/12.22.04</li>
      </ul>
      <h2>Niet dringend probleem</h2>
      <p>
        Stuur een mail naar Kim (<a href="mailto:kim@codefever.be">kim@codefever.be</a>) met
        Kristien (<a href="mailto:kristien@codefever.be">kristien@codefever.be</a>) in CC.
      </p>
      <h2>Technisch probleem</h2>
      <p>
        Als het gaat om niet dringende technische problemen, mail dan naar Ingrid (<a href="mailto:ingrid@codefever.be">ingrid@codefever.be</a>).
      </p>
    </div>
  );
};

export default WatBijProblemenPage;
