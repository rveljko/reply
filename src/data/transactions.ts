type Base = {
  name: string
  image: string
}

type Sender = Base
type Receiver = Base

type Transaction = {
  senderName: Sender['name']
  senderImage: Sender['image']
  receiverName: Receiver['name']
  receiverImage: Receiver['image']
  amount: number
  purpose: string
  message: string
  date: Date
}

type TableTransactionHeader = {
  id: number
  label: string
}

const senderInformations: Sender = {
  name: 'James Williams',
  image: '/images/james-williams.png',
}

export const tableTransactionHeaders: TableTransactionHeader[] = [
  {
    id: 1,
    label: 'Name',
  },
  {
    id: 2,
    label: 'Purpose',
  },
  {
    id: 3,
    label: 'Date',
  },
  {
    id: 4,
    label: 'Amount',
  },
]

export const transactions: Transaction[] = [
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'William Garcia',
    receiverImage: '/images/william-garcia.png',
    amount: 1700,
    purpose: 'Others',
    message: 'Hi William!\n\nThank you for being an amazing friend.',
    date: new Date('2024-6-3'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Oliver Jones',
    receiverImage: '/images/oliver-jones.png',
    amount: 1200,
    purpose: 'Others',
    message: 'Hi Oliver!\n\nCongrats on winning the bet.',
    date: new Date('2024-6-2'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Spotify',
    receiverImage: '/images/spotify.png',
    amount: 10.99,
    purpose: 'Subscription',
    message: '',
    date: new Date('2024-5-25'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Adobe Photoshop',
    receiverImage: '/images/adobe-photoshop.png',
    amount: 22.99,
    purpose: 'Subscription',
    message: '',
    date: new Date('2024-5-24'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Loom',
    receiverImage: '/images/loom.png',
    amount: 12.99,
    purpose: 'Subscription',
    message: '',
    date: new Date('2024-5-24'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Dribbble',
    receiverImage: '/images/dribbble.png',
    amount: 8,
    purpose: 'Subscription',
    message: '',
    date: new Date('2024-5-24'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Shopify',
    receiverImage: '/images/shopify.png',
    amount: 24,
    purpose: 'Subscription',
    message: '',
    date: new Date('2024-5-24'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Mailchimp',
    receiverImage: '/images/mailchimp.png',
    amount: 10,
    purpose: 'Subscription',
    message: '',
    date: new Date('2024-5-21'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Jessica Garcia',
    receiverImage: '/images/jessica-garcia.png',
    amount: 825,
    purpose: 'Others',
    message: 'Hi Jessica!\n\nIYKYK.',
    date: new Date('2024-5-20'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Lucas Jones',
    receiverImage: '/images/lucas-jones.png',
    amount: 1499,
    purpose: 'Others',
    date: new Date('2024-5-20'),
    message:
      'Hi Lucas!\n\nHere is a little help during this tough time. Stay strong!',
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Mia Thomas',
    receiverImage: '/images/mia-thomas.png',
    amount: 200,
    purpose: 'Gift',
    message:
      'Hi Mia!\n\nJust want to say thank you for being an incredible friend.',
    date: new Date('2024-5-19'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Benjamin Miller',
    receiverImage: '/images/benjamin-miller.png',
    amount: 246,
    purpose: 'Bills',
    message: 'Hi Benjamin.\n\nAs always...',
    date: new Date('2024-5-16'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Henry Johnson',
    receiverImage: '/images/henry-johnson.png',
    amount: 660,
    purpose: 'Others',
    message:
      'Hi Henry! \n\nMaking your house a home. Here is help for repairs.',
    date: new Date('2024-5-5'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Spotify',
    receiverImage: '/images/spotify.png',
    amount: 10.99,
    purpose: 'Subscription',
    message: '',
    date: new Date('2024-4-25'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Noah Williams',
    receiverImage: '/images/noah-williams.png',
    amount: 500,
    purpose: 'Gift',
    message: 'Hi Noah!\n\nThank you for always being there for me',
    date: new Date('2024-4-25'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Adobe Photoshop',
    receiverImage: '/images/adobe-photoshop.png',
    amount: 22.99,
    purpose: 'Subscription',
    message: '',
    date: new Date('2024-4-24'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Loom',
    receiverImage: '/images/loom.png',
    amount: 12.99,
    purpose: 'Subscription',
    message: '',
    date: new Date('2024-6-2'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Shopify',
    receiverImage: '/images/shopify.png',
    amount: 12.99,
    purpose: 'Subscription',
    message: '',
    date: new Date('2024-4-24'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Lucas Jones',
    receiverImage: '/images/lucas-jones.png',
    amount: 1499,
    purpose: 'Others',
    message: 'Hi Lucas!\n\nCongrats on winning the bet again.',
    date: new Date('2024-4-20'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Benjamin Miller',
    receiverImage: '/images/benjamin-miller.png',
    amount: 246,
    purpose: 'Bills',
    message: 'Hi Benjamin.\n\nAs always...',
    date: new Date('2024-4-16'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Henry Johnson',
    receiverImage: '/images/henry-johnson.png',
    amount: 660,
    purpose: 'Others',
    message:
      'Hi Henry!\n\nSmooth move! Here is a little help for your new start.',
    date: new Date('2024-4-5'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Spotify',
    receiverImage: '/images/spotify.png',
    amount: 10.99,
    purpose: 'Subscription',
    message: '',
    date: new Date('2024-3-25'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Adobe Photoshop',
    receiverImage: '/images/adobe-photoshop.png',
    amount: 22.99,
    purpose: 'Subscription',
    message: '',
    date: new Date('2024-3-24'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Loom',
    receiverImage: '/images/loom.png',
    amount: 12.99,
    purpose: 'Subscription',
    message: '',
    date: new Date('2024-3-24'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Spotify',
    receiverImage: '/images/spotify.png',
    amount: 10.99,
    purpose: 'Subscription',
    message: '',
    date: new Date('2024-3-24'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Shopify',
    receiverImage: '/images/shopify.png',
    amount: 24,
    purpose: 'Subscription',
    message: '',
    date: new Date('2024-3-24'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Lucas Jones',
    receiverImage: '/images/lucas-jones.png',
    amount: 1499,
    purpose: 'Others',
    message: 'Hi Lucas!\n\nCongrats on winning the bet.',
    date: new Date('2024-3-20'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Benjamin Miller',
    receiverImage: '/images/benjamin-miller.png',
    amount: 246,
    purpose: 'Bills',
    message: 'Hi Benjamin.\n\nAs always...',
    date: new Date('2024-3-16'),
  },
  {
    senderName: senderInformations.name,
    senderImage: senderInformations.image,
    receiverName: 'Henry Johnson',
    receiverImage: '/images/henry-johnson.png',
    amount: 660,
    purpose: 'Others',
    message:
      'Hi Henry!\n\nSafe travels! Here is a little help for your journey.',
    date: new Date('2024-3-5'),
  },
]
