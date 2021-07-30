import { IconType } from 'react-icons';

export default interface NavItemType {
  name: string;
  icon?: IconType;
  url?: string;
  isActive?: boolean;
  children?: NavItemType[];
}
