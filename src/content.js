import addExpense from './assets/screens/add-expense.webp'
import newTrip from './assets/screens/new-trip.webp'
import packingCustom from './assets/screens/packing-custom.webp'
import packingProgress from './assets/screens/packing-progress.webp'
import tripDashboard from './assets/screens/trip-dashboard.webp'
import tripTypes from './assets/screens/trip-types.webp'
import illustrationPack from './assets/screens/illustration-pack.webp'
import illustrationPlan from './assets/screens/illustration-plan.webp'
import illustrationSplit from './assets/screens/illustration-split.webp'

// Placeholder until app store / APK download links are available.
export const DOWNLOAD_APP_URL = '#'

export const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Trip types', href: '#trip-types' },
  { label: 'FAQ', href: '#faq' },
]

export const HERO_SCREENS = {
  back: { src: tripDashboard, alt: 'MyTripPilot trip screen showing total spent, budget bar, invite code and export options' },
  front: { src: addExpense, alt: 'MyTripPilot Add Expense screen with categories, participants, payer and split type' },
}

export const STATS = [
  { value: '9', label: 'trip types' },
  { value: '6', label: 'expense categories' },
  { value: '11', label: 'currencies' },
  { value: '3', label: 'ways to export' },
]

export const STEPS = [
  {
    id: 'plan',
    accent: 'blue',
    title: 'Plan group trips together',
    description:
      'Create a trip, invite friends with a 6-character code and track every expense in one shared place. No spreadsheets needed.',
    image: illustrationPlan,
    alt: 'Friends planning a mountain trip with the MyTripPilot New Trip screen',
  },
  {
    id: 'split',
    accent: 'green',
    title: 'Split bills fairly',
    description:
      'Choose an equal or custom split for each expense. MyTripPilot works out who owes whom and the fewest payments to settle up.',
    image: illustrationSplit,
    alt: 'Phone showing trip balances next to a restaurant bill being split between friends',
  },
  {
    id: 'pack',
    accent: 'orange',
    title: 'Pack smart. Export easy.',
    description:
      'Get a packing checklist for your trip type, keep an eye on your budget and export to CSV or PDF in one tap.',
    image: illustrationPack,
    alt: 'Packing checklist on a phone beside a suitcase, passport and CSV, PDF and Share buttons',
  },
]

export const SHOWCASES = [
  {
    id: 'trip-management',
    eyebrow: 'Trip management',
    title: 'Set up a trip in under a minute',
    description:
      'Add a name, members, dates, budget and currency, pick a trip type and you are ready to go. Edit details any time.',
    points: [
      'Optional start and end dates, budget and cover photo',
      '₹ INR by default, plus 10 more currencies',
      'Invite your group with a 6-character code',
      'See members, remove or block someone, or leave a trip',
    ],
    screens: [
      { src: newTrip, alt: 'New Trip form with trip name, members, dates, currency and budget fields' },
      { src: tripTypes, alt: 'Trip type picker with Cold, Summer, Beach, Resort, Business, City Break, Road Trip, International and Other' },
    ],
  },
  {
    id: 'expense-tracking',
    eyebrow: 'Expense tracking & bill splitting',
    title: 'Log it once. Everyone sees who owes what.',
    description:
      'Add an expense in seconds, tap who paid and choose how to split it. Balances update automatically for the whole group.',
    points: [
      '6 categories: Food, Transport, Accommodation, Activities, Shopping and Other',
      'Tap a name chip to set who paid, no typing',
      'Equal split, or custom amounts with live sum check',
      'Mark balances as settled once someone pays up',
    ],
    screens: [
      { src: addExpense, alt: 'Add Expense screen with amount, category chips, participants, paid by and equal or custom split' },
    ],
  },
  {
    id: 'budget-reports',
    eyebrow: 'Budget & expense reports',
    title: 'Stay on budget and share clear reports',
    description:
      'Every trip shows total spent against your budget, so overspending never sneaks up on you. Export when the trip is done.',
    points: [
      'Burn rate bar that turns red when you go over budget',
      'Spend by category chart to see where the money went',
      'CSV for Excel or Google Sheets, or a printable PDF report',
      'Share a full summary to WhatsApp, email or any app',
    ],
    screens: [
      { src: tripDashboard, alt: 'Trip screen showing total spent, budget progress, invite code and CSV, PDF Report and Share buttons' },
    ],
  },
  {
    id: 'packing',
    eyebrow: 'Packing checklists',
    title: 'Never forget the charger again',
    description:
      'Each trip type comes with its own packing list. Tick items off as you pack and watch your progress grow.',
    points: [
      'Lists tailored to Cold, Beach, Business, Road Trip and more',
      'Collapsible categories with progress for each one',
      'Add your own private custom items',
      'Your ticks are yours. Friends keep their own progress',
    ],
    screens: [
      { src: packingProgress, alt: 'Cold trip packing list showing 26 of 43 items packed' },
      { src: packingCustom, alt: 'Road trip packing list, all packed, with documents and custom items' },
    ],
  },
]

export const TRIP_TYPES = [
  { emoji: '❄️', name: 'Cold', hint: 'Hill stations, snow, winter' },
  { emoji: '☀️', name: 'Summer', hint: 'Hot cities, sightseeing' },
  { emoji: '🏖️', name: 'Beach', hint: 'Coastal, Goa, Maldives' },
  { emoji: '🏕️', name: 'Resort', hint: 'Weekend getaway, staycation' },
  { emoji: '💼', name: 'Business', hint: 'Work trips, conferences' },
  { emoji: '🏙️', name: 'City Break', hint: 'Urban exploration, shopping' },
  { emoji: '🚗', name: 'Road Trip', hint: 'Long drives, pit stops' },
  { emoji: '🌍', name: 'International', hint: 'Overseas, backpacking' },
  { emoji: '🧾', name: 'Other', hint: 'Group expense tracking, no packing list' },
]

export const EXTRAS = [
  { icon: 'sync', title: 'Real-time cloud sync', text: 'Everyone in the trip sees the same data, on any device.' },
  { icon: 'currency', title: '11 currencies', text: 'INR, USD, EUR, GBP, JPY, AUD, CAD, SGD, AED, THB and CHF.' },
  { icon: 'lock', title: 'Secure account', text: 'Email and password sign-in, with secure session storage on your phone.' },
  { icon: 'people', title: 'You stay in control', text: 'Only the person who added an expense can edit or delete it.' },
  { icon: 'flag', title: 'Report content', text: 'Report a trip or member from inside the app.' },
  { icon: 'trash', title: 'Delete anytime', text: 'Remove your account and data whenever you want.' },
]

export const FAQS = [
  {
    q: 'Is MyTripPilot free?',
    a: 'Yes. MyTripPilot is free to use.',
  },
  {
    q: 'Which devices does it work on?',
    a: 'MyTripPilot works on Android, iOS and the web. Sign in on any device and your trips are there.',
  },
  {
    q: 'How do my friends join a trip?',
    a: 'Share the trip’s 6-character invite code. Your friends enter it in the app to join, then add their own expenses.',
  },
  {
    q: 'Can I split an expense unequally?',
    a: 'Yes. Choose Custom split and enter the exact amount for each person. The app checks that the amounts add up to the total.',
  },
  {
    q: 'How do I share expenses after the trip?',
    a: 'Export a CSV for Excel or Google Sheets, open a printable PDF report, or share a text summary to WhatsApp, email or any app.',
  },
  {
    q: 'Does my packing progress affect my friends’ lists?',
    a: 'No. Packed status is saved per person, and your custom checklist items are private to you.',
  },
]

export const CONTACT_EMAILS = [
  { label: 'Support', email: 'support@mytrippilot.in' },
  { label: 'Feedback', email: 'feedback@mytrippilot.in' },
]

export const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: 'mailto:support@mytrippilot.in' },
  { label: 'Privacy Policy', href: 'https://v07kadam.github.io/mytrippilot-privacy/index.html', external: true },
  { label: 'Terms', href: 'https://v07kadam.github.io/mytrippilot-privacy/terms.html', external: true },
]
