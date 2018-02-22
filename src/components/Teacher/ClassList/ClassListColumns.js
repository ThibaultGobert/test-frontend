import noUserIcon from '../../../assets/images/placeholders/no-user.png';

const columns = [
  {
    defaults: '',
    display: 'Naam',
    key: 'avatar',
    type: 'object',
  },
  {
    defaults: '',
    display: 'Geboortedatum',
    key: 'birthdate',
    type: 'number',
  },
  {
    defaults: '',
    display: 'Leerjaar',
    key: 'grade',
    type: 'number',
  },
  {
    defaults: '',
    display: 'Naam ouder',
    key: 'parent_name',
    type: 'string',
  },
  {
    defaults: '',
    display: 'Contact ouder',
    key: 'parent_contact',
    type: 'string',
  },
  {
    defaults: '',
    display: 'Leerplatform username',
    key: 'usernames_platform',
    type: 'string',
  },
  {
    defaults: '',
    display: 'Leerplatform hint',
    key: 'password_hint',
    type: 'string',
  },
  {
    defaults: '',
    display: 'Scratch username',
    key: 'scratchusername',
    type: 'string',
  },
  {
    defaults: '',
    display: 'Scratch paswoord',
    key: 'scratchpassword',
    type: 'string',
  },
];

export default columns;
