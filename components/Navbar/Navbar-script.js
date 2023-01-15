import { FiTwitter } from 'react-icons/fi';

const links = [
  {
    id: 1,
    icon: '',
    text: "Projects",
    url: "/projects",
  },
  {
    id: 2,
    icon: '',
    text: "Ranking",
    url: "/ranking",
  },
  {
    id: 3,
    icon: '',
    text: "Articles",
    url: "/articles",
  },
  {
    id: 4,
    icon: <FiTwitter size={20} style={{marginRight: '.3rem'}}/>,
    text: 'Twitter',
    url: 'https://twitter.com/awesome_near'
  }
];

export default links;
