import { Icon } from './Icon'

export const LocationIcon = (props) => (
  <Icon {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
)

export const ClockIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </Icon>
)

export const PhoneIcon = (props) => (
  <Icon {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Icon>
)

export const PlusIcon = (props) => (
  <Icon {...props}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </Icon>
)

export const PlayIcon = (props) => (
  <Icon fill="currentColor" {...props}>
    <polygon points="6 3 20 12 6 21 6 3" />
  </Icon>
)

export const MenuIcon = (props) => (
  <Icon {...props}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </Icon>
)

export const CloseIcon = (props) => (
  <Icon {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Icon>
)

export const ImageIcon = (props) => (
  <Icon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </Icon>
)

export const TruckIcon = (props) => (
  <Icon {...props}>
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </Icon>
)

export const GridIcon = (props) => (
  <Icon {...props}>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </Icon>
)

export const AwardIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </Icon>
)

export const ClipboardIcon = (props) => (
  <Icon {...props}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <line x1="8" y1="11" x2="16" y2="11" />
    <line x1="8" y1="15" x2="13" y2="15" />
  </Icon>
)

export const UserIcon = (props) => (
  <Icon {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </Icon>
)

export const ToolIcon = (props) => (
  <Icon {...props}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </Icon>
)

export const RubleIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9 17V7h4a3 3 0 0 1 0 6H8" />
    <line x1="8" y1="15" x2="13" y2="15" />
  </Icon>
)

export const ShieldCheckIcon = (props) => (
  <Icon {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </Icon>
)

export const MinusIcon = (props) => (
  <Icon {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
  </Icon>
)

export const CheckIcon = (props) => (
  <Icon {...props}>
    <polyline points="20 6 9 17 4 12" />
  </Icon>
)

export const EyeIcon = (props) => (
  <Icon {...props}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </Icon>
)

export const CartIcon = (props) => (
  <Icon {...props}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </Icon>
)

export const CraneTruckIcon = (props) => (
  <Icon viewBox="0 0 64 48" {...props}>
    <rect x="2" y="30" width="40" height="5" />
    <path d="M42 35V18h11l7 8v9z" />
    <path d="M46 21h6l4 5H46z" />
    <circle cx="10" cy="40" r="3.5" />
    <circle cx="19" cy="40" r="3.5" />
    <circle cx="51" cy="40" r="3.5" />
    <path d="M34 30V13M38 30V13M34 13h4M34 13 15 3M38 13 15 3" />
    <path d="M15 3v9m0 0a2 2 0 1 0 2 2" />
  </Icon>
)

export const BrickWallIcon = (props) => (
  <Icon viewBox="0 0 56 44" {...props}>
    <path d="M2 4h16v8H2zM20 4h16v8H20z" />
    <path d="M2 14h7v8H2zM11 14h16v8H11zM29 14h7v8h-7z" />
    <path d="M2 24h16v8H2zM20 24h16v8H20z" />
    <path d="M2 34h7v8H2zM11 34h16v8H11zM29 34h7v8h-7z" />
    <path d="M42 4h8v8h-8zM42 14h8v8h-8zM42 24h8v8h-8zM42 34h8v8h-8z" />
  </Icon>
)

export const AwardStarIcon = (props) => (
  <Icon viewBox="0 0 48 48" {...props}>
    <circle cx="24" cy="19" r="15" />
    <circle cx="24" cy="19" r="11" />
    <polygon points="24.00 11.50 25.88 16.41 31.13 16.68 27.04 19.99 28.41 25.07 24.00 22.20 19.59 25.07 20.96 19.99 16.87 16.68 22.12 16.41" />
    <path d="M14 30 9 42l6-1.5 3 5 4.5-11M34 30l5 12-6-1.5-3 5-4.5-11" />
  </Icon>
)

export const ChevronLeftIcon = (props) => (
  <Icon {...props}>
    <polyline points="15 18 9 12 15 6" />
  </Icon>
)

export const ChevronRightIcon = (props) => (
  <Icon {...props}>
    <polyline points="9 18 15 12 9 6" />
  </Icon>
)

export const ZoomInIcon = (props) => (
  <Icon {...props}>
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16" y2="16" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </Icon>
)

export const ChecklistIcon = (props) => (
  <Icon viewBox="0 0 64 64" {...props}>
    <rect x="13" y="10" width="38" height="50" rx="2" />
    <rect x="18" y="15" width="28" height="40" />
    <rect x="24" y="6" width="16" height="8" rx="1" />
    <circle cx="32" cy="4" r="1.8" />
    <path d="m21 23 2 2 4-4M30 23h12M21 31l2 2 4-4M30 31h12M21 39l2 2 4-4M30 39h12M21 47l2 2 4-4M30 47h12" />
  </Icon>
)

export const UserSearchIcon = (props) => (
  <Icon viewBox="0 0 64 64" {...props}>
    <circle cx="32" cy="17" r="11" />
    <path d="M10 60v-4a20 20 0 0 1 20-20h4a20 20 0 0 1 20 20v4" />
    <circle cx="33" cy="46" r="5" />
    <path d="m36.5 49.5 5 5" />
  </Icon>
)

export const WorkerIcon = (props) => (
  <Icon viewBox="0 0 64 64" {...props}>
    <path d="M20 21a12 12 0 0 1 24 0" />
    <path d="M16 21h32v4H16zM29 9h6v8h-6z" />
    <path d="M21 25v4a11 11 0 0 0 22 0v-4" />
    <path d="M27 39v4l5 5 5-5v-4" />
    <path d="M12 60v-6a11 11 0 0 1 11-11h4M37 43h4a11 11 0 0 1 11 11v6M24 54v6M40 54v6" />
  </Icon>
)

export const DeliveryCheckIcon = (props) => (
  <Icon viewBox="0 0 64 64" {...props}>
    <rect x="18" y="12" width="26" height="28" rx="1" />
    <path d="M44 22h9l7 9v9H44M18 40h26" />
    <circle cx="26" cy="46" r="4.5" />
    <circle cx="52" cy="46" r="4.5" />
    <polyline points="25 26 30 31 38 22" />
    <path d="M3 18h10M6 26h7M3 34h10" />
  </Icon>
)

export const MoneyIcon = (props) => (
  <Icon viewBox="0 0 64 64" {...props}>
    <rect x="4" y="22" width="46" height="28" rx="1" />
    <path d="M9 22v-5h46v28h-5M14 17v-5h46v28h-5" />
    <circle cx="27" cy="36" r="8" />
    <path d="M25 41V31h3.5a2.5 2.5 0 0 1 0 5H23.5M23.5 38.5H30" />
    <path d="M8 31v-5h5M46 31v-5h-5M8 41v5h5M46 41v5h-5" />
  </Icon>
)

export const ChevronUpIcon = (props) => (
  <Icon {...props}>
    <polyline points="18 15 12 9 6 15" />
  </Icon>
)

export const ArrowLeftIcon = (props) => (
  <Icon {...props}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </Icon>
)

export const TrashIcon = (props) => (
  <Icon {...props}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </Icon>
)

export const SearchIcon = (props) => (
  <Icon {...props}>
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16" y2="16" />
  </Icon>
)

export const CardIcon = (props) => (
  <Icon {...props}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <line x1="6" y1="15" x2="10" y2="15" />
  </Icon>
)

export const CashIcon = (props) => (
  <Icon {...props}>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M6 9v.01M18 15v.01" />
  </Icon>
)

export const DocumentIcon = (props) => (
  <Icon {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="13" y2="17" />
  </Icon>
)

export const BoxIcon = (props) => (
  <Icon {...props}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </Icon>
)

export const InfoIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </Icon>
)

export const CalendarIcon = (props) => (
  <Icon {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </Icon>
)

export const LayersIcon = (props) => (
  <Icon {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </Icon>
)

export const ShareIcon = (props) => (
  <Icon {...props}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </Icon>
)
