export default [
  {
    heading: 'Dashboard',
  },
  {
    title: 'Profile',
    to: { name: 'index' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: 'Analytics',
    to: { name: 'analytics' },
    icon: { icon: 'tabler:brand-google-analytics' },
  },
  {
    title: 'Products',
    to: { name: 'products' },
    icon: { icon: 'tabler:brand-producthunt' },
  },
  {
    title: 'Menu',
    to: { name: 'menu' },
    icon: { icon: 'tabler:menu-2' },
    badgeContent: '8',
    children:[
      {
        title:'NFC Reader',
        to: 'nfc-reader',
      },
      {
        title:'Preview Page',
        to: 'preview-page',
      },
      {
        title:'Language',
        to: 'language',
      },
      {
        title:'About Knot',
        to: 'about-knot',
      },
      {
        title:'Contact Us',
        to: 'contact-us',
      },
      {
        title:'Terms of use',
        to: 'terms',
      },
      {
        title:'Privacy & Policy',
        to: 'privacy',
      },
      {
        title:'Account Setting',
        to: 'setting',
      },
    ],
  },




]
