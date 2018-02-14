import React from 'react';
import { Table } from 'semantic-ui-react';

const HoeBereidIkMijnLesVoorPage = () => {
  return (
    <div className="HoeBereidIkMijnLesVoorPage">
      <h1>Hoe bereid ik mijn les voor?</h1>
      <p>
        Herbekijk{' '}
        <a
          href="https://extranet.codefever.be/content/?v=share/2E5525E581B94CBC8AD79191E0BCF00B"
          rel="noopener noreferrer"
          target="_blank"
        >
          hier
        </a>{' '}
        de Methodologie presentatie van Jonathan tijdens het TTT.
      </p>
      <p>
        Download{' '}
        <a
          href="https://extranet.codefever.be/content/?v=share/A3DEF8C8511648B89692E112DEE6E063"
          rel="noopener noreferrer"
          target="_blank"
        >
          hier
        </a>{' '}
        algemene info omtrent het voorbereiden van je les.{' '}
      </p>
      <p>Bekijk het document in het ZIP-bestand dat voor jouw les van toepassing is.</p>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Clans</Table.HeaderCell>
            <Table.HeaderCell>Bestand</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>B2, B3, B4, C2, C3</Table.Cell>
            <Table.Cell>Uitleg_ivm_1.2.pdf</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>B1, C1, D1, E1, E2, M1, M2</Table.Cell>
            <Table.Cell>Uitleg_ivm_2.0.pdf</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <div className="HoeBereidIkMijnLesVoorPage__Legende">
        <p>
          <b>Legende:</b>
        </p>
        <p>B = ByteBusters (instap level 1: 3e/4e leerjaar)</p>
        <p>C = CodeKraks (instap level 1: 5e/6e leerjaar)</p>
        <p>D = DigiHeroes (instap level 1: 1+2+3e middelbaar)</p>
        <p>E = e-Riders = gevorderden = Javascript</p>
        <p>M = MineCrafters = gevorderden = Minecraft Education</p>
      </div>
    </div>
  );
};

export default HoeBereidIkMijnLesVoorPage;
